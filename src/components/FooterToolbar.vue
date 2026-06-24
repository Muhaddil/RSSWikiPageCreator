<script setup lang="ts">
import ConfirmDialog from 'primevue/confirmdialog';
import { usePageDataStore } from '@/stores/pageData';
import { useValidationStore } from '@/stores/validation';
import { useToast, POSITION } from 'vue-toastification';
import { useConfirm } from 'primevue/useconfirm';
import { getCurrentRoute } from '@/helpers/router';

const webhook = atob(import.meta.env.VITE_DISCORD_WEBHOOK ?? '');

const pageData = usePageDataStore();
const validation = useValidationStore();
const toast = useToast();
const confirm = useConfirm();

const route = getCurrentRoute();

const isBaseRenewalPage = route === 'baserenewal';
const isCensusPage = route === 'census';
// const isCorvettePage = route === 'corvette';
const isFAQPage = [
  'faq',
  'basesdestacadas',
  'rsslinks',
  'censustable',
  'regions',
  'cronology',
  'rssfriends',
  'guias',
  'feedback',
  'latestupdates',
  'wikiupdates',
  'indextest',
  'rsssystems',
  'glyphgenerator',
].includes(route);

function showError(message: string) {
  toast.error(message, { position: POSITION.BOTTOM_RIGHT });
}

function checkValid(): boolean {
  if (validation.isValid) return true;
  const error = validation.firstError();
  if (error) showError(error);
  return false;
}

async function copyPage() {
  if (!checkValid()) return;

  const processedContent = pageData.outputContent.replace(/\n{2,}/g, '\n\n').trim();

  try {
    await navigator.clipboard.writeText(processedContent);
    toast.success('¡Copiado con éxito!', { position: POSITION.BOTTOM_RIGHT });
  } catch {
    showError('Error al copiar el contenido.');
  }
}

async function handleSubmit() {
  const processedContent = pageData.outputContent.replace(/<br\s*\/?>/g, '\n').replace(/\n{2,}/g, '\n\n');

  const formattedName = pageData.name.replace(/\s+/g, '_');

  if (!webhook) {
    showError('Webhook no configurado.');
    return;
  }

  const payloadSections = isCensusPage
    ? [
        `- **Nueva entrada en el censo creada:** ${pageData.playername}`,
        `- https://nomanssky.fandom.com/wiki/Census_-_Royal_Space_Society#RSS_Members`,
        `\`\`\`html\n${processedContent}\n\`\`\``,
      ]
    : [
        `- **Nueva página creada:** ${pageData.name}`,
        `- https://nomanssky.fandom.com/wiki/${formattedName}`,
        `\`\`\`html\n${processedContent}\n\`\`\``,
      ];

  try {
    await sendToDiscord(payloadSections);
  } catch (error) {
    console.error('❌ Error al enviar a Discord:', error);
    showError('Error al enviar a Discord. Revisa la consola para más detalles.');
  }
}

async function sendToDiscord(sections: string[]): Promise<void> {
  const maxMessageLength = 1800;
  const username = 'Muhaddil Wiki Page Creator';
  const avatar_url = 'https://github.com/Muhaddil/simple-form-sender/blob/main/src/images/muha2.png?raw=true';

  for (const section of sections) {
    try {
      if (section.startsWith('```') && section.endsWith('```')) {
        const firstLineEnd = section.indexOf('\n');
        const openingLine = section.slice(0, firstLineEnd);
        const language = openingLine.replace('```', '').trim();
        const content = section.slice(firstLineEnd + 1, section.lastIndexOf('\n'));
        const reserved = language ? openingLine.length + 4 : 6;

        let index = 0;
        while (index < content.length) {
          const chunk = content.substring(index, index + (maxMessageLength - reserved));
          index += chunk.length;
          await sendMessageToWebhook(`${openingLine}\n${chunk}\n\`\`\``.trim(), username, avatar_url);
        }
      } else {
        let messageBuffer = '';
        let remainingSection = section + '\n';

        while (remainingSection.length > 0) {
          const available = maxMessageLength - messageBuffer.length;

          if (available <= 0) {
            await sendMessageToWebhook(messageBuffer.trim(), username, avatar_url);
            messageBuffer = '';
            continue;
          }

          if (remainingSection.length <= available) {
            messageBuffer += remainingSection;
            remainingSection = '';
          } else {
            messageBuffer += remainingSection.slice(0, available);
            remainingSection = remainingSection.slice(available);
            await sendMessageToWebhook(messageBuffer.trim(), username, avatar_url);
            messageBuffer = '';
          }
        }

        if (messageBuffer.trim().length > 0) {
          await sendMessageToWebhook(messageBuffer.trim(), username, avatar_url);
        }
      }
    } catch (error) {
      console.error('❌ Error al procesar/enviar sección a Discord:', section, error);
      throw error;
    }
  }
}

async function sendMessageToWebhook(content: string, username: string, avatar_url: string) {
  await delay(200);

  if (!content.trim()) throw new Error('El contenido del mensaje está vacío.');

  const response = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, avatar_url, content }),
  });

  const responseText = await response.text();
  if (!response.ok) throw new Error(`Error en la respuesta del servidor: ${response.status} - ${responseText}`);
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createPage() {
  if (!checkValid()) return;

  toast.success('¡Creada!', { position: POSITION.BOTTOM_RIGHT });
  handleSubmit();

  if (isCensusPage) {
    window.open(
      'https://nomanssky.fandom.com/wiki/Census_-_Royal_Space_Society?action=edit&section=9#editform',
      '_blank'
    );
  } else {
    window.open(`https://nomanssky.fandom.com/wiki/${pageData.name}?action=edit`, '_blank');
  }
}

function downloadCode() {
  if (!checkValid()) return;

  const blob = new Blob([pageData.outputContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${pageData.name}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  toast.success('¡Descargado con éxito!', { position: POSITION.BOTTOM_RIGHT });
}

function uploadFiles() {
  if (!isBaseRenewalPage && !pageData.image) {
    showError('¿Qué quieres subir sin foto principal?');
    return;
  }

  toast.success('¡Vamos!', { position: POSITION.BOTTOM_RIGHT });
  window.open('https://nomanssky.fandom.com/wiki/Special:Upload?multiple=true', '_blank');
}

function confirmReset() {
  pageData.resetStore();
  toast.success('¡Restablecido con éxito!', { position: POSITION.BOTTOM_RIGHT });
}

function showConfirmDialog() {
  confirm.require({
    message: '¿Estás seguro de que quieres restablecer?',
    header: 'Confirmar Restablecer',
    icon: 'pi pi-exclamation-triangle',
    accept: confirmReset,
    acceptProps: { class: 'p-button-danger' },
    reject: () => {
      toast.info('Restablecimiento cancelado.', { position: POSITION.BOTTOM_RIGHT });
    },
  });
}
</script>

<template>
  <div
    class="footer-toolbar"
    v-if="!isFAQPage"
  >
    <div class="toolbar-actions">
      <button
        class="action-btn"
        @click="copyPage"
      >
        <span class="btn-icon">&#9776;</span>
        <span class="btn-text">COPY</span>
      </button>

      <button
        v-if="!isBaseRenewalPage"
        class="action-btn primary"
        @click="createPage"
      >
        <span class="btn-icon">&#9654;</span>
        <span class="btn-text">CREATE</span>
      </button>

      <button
        v-if="!isBaseRenewalPage"
        class="action-btn"
        @click="downloadCode"
      >
        <span class="btn-icon">&#8681;</span>
        <span class="btn-text">DOWNLOAD</span>
      </button>

      <button
        v-if="!isBaseRenewalPage"
        class="action-btn"
        @click="uploadFiles"
      >
        <span class="btn-icon">&#8682;</span>
        <span class="btn-text">UPLOAD</span>
      </button>

      <button
        class="action-btn danger"
        @click="showConfirmDialog"
      >
        <span class="btn-icon">&#10006;</span>
        <span class="btn-text">RESET</span>
      </button>
    </div>
  </div>

  <ConfirmDialog :draggable="true" />
</template>

<style scoped>
.footer-toolbar {
  width: 100%;
  padding: 0.75rem 1rem;
}

.toolbar-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Orbitron', monospace;
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.25);
  color: #ffffff;
}

.action-btn.primary {
  background: rgba(255, 26, 26, 0.15);
  border-color: rgba(255, 26, 26, 0.5);
  color: #ff1a1a;
}

.action-btn.primary:hover {
  background: rgba(255, 26, 26, 0.25);
  border-color: #ff1a1a;
  box-shadow: 0 0 10px rgba(255, 26, 26, 0.3);
}

.action-btn.danger {
  border-color: rgba(153, 0, 0, 0.5);
  color: rgba(153, 0, 0, 0.8);
}

.action-btn.danger:hover {
  background: rgba(153, 0, 0, 0.15);
  border-color: #990000;
  color: #ff1a1a;
}

.btn-icon {
  font-size: 0.7rem;
  line-height: 1;
}

.btn-text {
  line-height: 1;
}

@media (max-width: 600px) {
  .action-btn {
    padding: 0.4rem 0.6rem;
    font-size: 0.5rem;
  }
}
</style>
