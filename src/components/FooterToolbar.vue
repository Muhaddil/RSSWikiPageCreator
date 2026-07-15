<script setup lang="ts">
import ConfirmDialog from 'primevue/confirmdialog';
import { usePageDataStore } from '@/stores/pageData';
import { useValidationStore } from '@/stores/validation';
import { useToast, POSITION } from 'vue-toastification';
import { computed } from 'vue';
import { useConfirm } from 'primevue/useconfirm';
import { useRoute } from 'vue-router';

const webhook = atob(import.meta.env.VITE_DISCORD_WEBHOOK ?? '');

const pageData = usePageDataStore();
const validation = useValidationStore();
const toast = useToast();
const confirm = useConfirm();

const route = useRoute();
const currentRouteName = computed(() => (route.name as string) || '');

const isBaseRenewalPage = computed(() => currentRouteName.value === 'baserenewal');
const isCensusPage = computed(() => currentRouteName.value === 'census');
const isFAQPage = computed(() =>
  [
    'faq',
    'tutorial',
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
  ].includes(currentRouteName.value)
);

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

  const payloadSections = isCensusPage.value
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
      console.error('Error processing/sending section to Discord:', section, error);
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

  toast.success('¡Creado!', { position: POSITION.BOTTOM_RIGHT });
  handleSubmit();

  if (isCensusPage.value) {
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
  if (!isBaseRenewalPage.value && !pageData.image) {
    showError('¿Qué vas a subir sin una foto principal?');
    return;
  }

  toast.success('¡Vamos!', { position: POSITION.BOTTOM_RIGHT });
  window.open('https://nomanssky.fandom.com/wiki/Special:Upload?multiple=true', '_blank');
}

function confirmReset() {
  pageData.resetStore();
  toast.success('¡Reiniciado con éxito!', { position: POSITION.BOTTOM_RIGHT });
}

function showConfirmDialog() {
  confirm.require({
    message: '¿Estás seguro de que quieres reiniciar?',
    header: 'Confirmar Reinicio',
    icon: 'pi pi-exclamation-triangle',
    accept: confirmReset,
    acceptProps: { class: 'p-button-danger' },
    reject: () => {
      toast.info('Reinicio cancelado.', { position: POSITION.BOTTOM_RIGHT });
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
        class="action-btn secondary"
        @click="copyPage"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect
            x="9"
            y="9"
            width="13"
            height="13"
            rx="2"
            ry="2"
          />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        <span class="btn-text">Copiar</span>
      </button>

      <button
        v-if="!isBaseRenewalPage"
        class="action-btn primary"
        @click="createPage"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        <span class="btn-text">Generar</span>
      </button>

      <button
        v-if="!isBaseRenewalPage"
        class="action-btn secondary"
        @click="downloadCode"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line
            x1="12"
            y1="15"
            x2="12"
            y2="3"
          />
        </svg>
        <span class="btn-text">Descargar</span>
      </button>

      <button
        v-if="!isBaseRenewalPage"
        class="action-btn secondary"
        @click="uploadFiles"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line
            x1="12"
            y1="3"
            x2="12"
            y2="15"
          />
        </svg>
        <span class="btn-text">Subir</span>
      </button>

      <button
        class="action-btn danger"
        @click="showConfirmDialog"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line
            x1="18"
            y1="6"
            x2="6"
            y2="18"
          />
          <line
            x1="6"
            y1="6"
            x2="18"
            y2="18"
          />
        </svg>
        <span class="btn-text">Reiniciar</span>
      </button>
    </div>
  </div>

  <ConfirmDialog :draggable="true" />
</template>

<style scoped>
.footer-toolbar {
  width: 100%;
  padding: 0.6rem 1.5rem;
}

.toolbar-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.4rem;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.8rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  border-radius: var(--border-radius);
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.9);
}

.action-btn.primary {
  background: rgba(198, 40, 40, 0.15);
  border-color: rgba(198, 40, 40, 0.4);
  color: #c62828;
}

.action-btn.primary:hover {
  background: rgba(198, 40, 40, 0.25);
  border-color: #c62828;
}

.action-btn.danger {
  border-color: rgba(142, 0, 0, 0.3);
  color: rgba(142, 0, 0, 0.7);
}

.action-btn.danger:hover {
  background: rgba(142, 0, 0, 0.1);
  border-color: #8e0000;
  color: #c62828;
}

.btn-text {
  line-height: 1;
}

@media (max-width: 600px) {
  .action-btn {
    padding: 0.35rem 0.5rem;
    font-size: 0.5rem;
  }
}
</style>
