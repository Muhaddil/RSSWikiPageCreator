<script setup lang="ts">
// import { ref } from 'vue';
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import ConfirmDialog from 'primevue/confirmdialog';
import { usePageDataStore } from '@/stores/pageData';
import { useToast, POSITION } from 'vue-toastification';
import { useConfirm } from 'primevue/useconfirm';

const webhook = atob(import.meta.env.VITE_DISCORD_WEBHOOK ?? '');

const pageData = usePageDataStore();
const toast = useToast();
const confirm = useConfirm();

function showError(message: string) {
  toast.error(message, {
    position: POSITION.BOTTOM_RIGHT,
  });
}

const currentUrl = window.location.pathname;

function isBaseRenewalPage() {
  return currentUrl.includes('baserenewal.html');
}

function isCensusPage() {
  return currentUrl.includes('census.html');
}

function isFAQPage() {
  return (
    currentUrl.includes('faq.html') ||
    currentUrl.includes('basesdestacadas.html') ||
    currentUrl.includes('rsslinks.html') ||
    currentUrl.includes('censustable.html') ||
    currentUrl.includes('regions.html') ||
    currentUrl.includes('cronology.html') ||
    currentUrl.includes('rssfriends.html') ||
    currentUrl.includes('guias.html') ||
    currentUrl.includes('feedback.html') ||
    currentUrl.includes('latestupdates.html') ||
    currentUrl.includes('wikiupdates.html')
  );
}

async function copyPage() {
  let requiredFields;

  if (isBaseRenewalPage()) {
    requiredFields = [
      { field: pageData.name, message: '¡Falta el nombre!' },
      { field: pageData.censusrenewal, message: '¿Qué quieres copiar? Rellena los datos' },
    ];
  } else if (isCensusPage()) {
    requiredFields = [
      { field: pageData.playername, message: '¡Falta tu nombre!' },
      { field: pageData.platform, message: '¡Falta tu plataforma!' },
      { field: pageData.mode, message: '¡Falta tu modo de juego!' },
      { field: pageData.discDate, message: '¡Falta tu fecha de unión!' },
    ];
  } else {
    requiredFields = [
      { field: pageData.outputContent, message: 'ERROR 404' },
      { field: pageData.name, message: '¡Falta el nombre!' },
      { field: pageData.glyphs, message: '¡Faltan los Glifos!' },
      { field: pageData.regionData.region, message: '¡Glifos Incorrectos!' },
    ];
  }

  for (const { field, message } of requiredFields) {
    if (!field) {
      showError(message);
      return;
    }
  }

  const processedContent = pageData.outputContent
    // .replace(/<br\s*\/?>/g, '\n')
    .replace(/\n{2,}/g, '\n\n')
    .trim();

  try {
    await navigator.clipboard.writeText(processedContent);
    toast.success('¡Copiado con éxito!', {
      position: POSITION.BOTTOM_RIGHT,
    });
  } catch (error) {
    showError('Error al copiar el contenido.');
  }
}

async function handleSubmit() {
  const processedContent = pageData.outputContent.replace(/<br\s*\/?>/g, '\n').replace(/\n{2,}/g, '\n\n');

  const formattedName = pageData.name.replace(/\s+/g, '_');

  if (!webhook) {
    console.error('❌ Webhook no configurado.');
    toast.error('Webhook no configurado.', {
      position: POSITION.BOTTOM_RIGHT,
    });
    return;
  }

  const payloadSections = [
    `- **Página en la wiki creada:** ${pageData.name}`,
    `- https://nomanssky.fandom.com/wiki/${formattedName}`,
    `\`\`\`html\n${processedContent}\n\`\`\``,
  ];

  try {
    await sendToDiscord(payloadSections);
  } catch (error) {
    console.error('❌ Error al enviar a Discord:', error);
    toast.error('Error al enviar a Discord. Revisa la consola para más detalles.', {
      position: POSITION.BOTTOM_RIGHT,
    });
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
          const messageChunk = `${openingLine}\n${chunk}\n\`\`\``;
          await sendMessageToWebhook(messageChunk.trim(), username, avatar_url);
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
      throw error; // Propaga el error para que `handleSubmit` también lo capture
    }
  }
}

async function sendMessageToWebhook(content: string, username: string, avatar_url: string) {
  await delay(200);

  if (!content.trim()) {
    const err = new Error('El contenido del mensaje está vacío.');
    console.error('❌', err.message);
    throw err;
  }

  const payload = {
    username: username,
    avatar_url: avatar_url,
    content: content,
  };

  const response = await fetch(webhook, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text();
  if (!response.ok) {
    const err = new Error(`Error en la respuesta del servidor: ${response.status} - ${responseText}`);
    console.error('❌', err.message);
    throw err;
  }
}

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createPage() {
  if (isCensusPage()) {
    const requiredFields = [
      { field: pageData.playername, message: '¡Falta tu nombre!' },
      { field: pageData.platform, message: '¡Falta tu plataforma!' },
      { field: pageData.mode, message: '¡Falta tu modo de juego!' },
      { field: pageData.discDate, message: '¡Falta tu fecha de unión!' },
    ];

    for (const { field, message } of requiredFields) {
      if (!field) {
        showError(message);
        return;
      } else {
        window.open(
          `https://nomanssky.fandom.com/wiki/Census_-_Royal_Space_Society?action=edit&section=9#editform`,
          '_blank'
        );
        return;
      }
    }
  }

  if (!isBaseRenewalPage()) {
    const requiredFields = [
      { field: pageData.name, message: '¡Falta el nombre!' },
      { field: pageData.glyphs, message: '¡Faltan los Glifos!' },
      { field: pageData.regionData.region, message: '¡Glifos Incorrectos!' },
    ];

    for (const { field, message } of requiredFields) {
      if (!field) {
        showError(message);
        return;
      }
    }
  }

  toast.success('¡Creada!', {
    position: POSITION.BOTTOM_RIGHT,
  });

  handleSubmit();

  window.open(`https://nomanssky.fandom.com/wiki/${pageData.name}?action=edit`, '_blank');
}

function downloadCode() {
  let requiredFields;
  if (isBaseRenewalPage()) {
    requiredFields = [
      { field: pageData.name, message: '¡Falta el nombre!' },
      { field: pageData.censusrenewal, message: '¿Qué quieres copiar? Rellena los datos' },
    ];
  } else if (isCensusPage()) {
    requiredFields = [
      { field: pageData.playername, message: '¡Falta tu nombre!' },
      { field: pageData.platform, message: '¡Falta tu plataforma!' },
      { field: pageData.mode, message: '¡Falta tu modo de juego!' },
      { field: pageData.discDate, message: '¡Falta tu fecha de unión!' },
    ];
  } else {
    requiredFields = [
      { field: pageData.outputContent, message: 'ERROR 404' },
      { field: pageData.name, message: '¡Falta el nombre!' },
      { field: pageData.glyphs, message: '¡Faltan los Glifos!' },
      { field: pageData.regionData.region, message: '¡Glifos Incorrectos!' },
    ];
  }

  for (const { field, message } of requiredFields) {
    if (!field) {
      showError(message);
      return;
    }
  }

  const blob = new Blob([pageData.outputContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${pageData.name}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  toast.success('¡Descargado con éxito!', {
    position: POSITION.BOTTOM_RIGHT,
  });
}

function uploadFiles() {
  if (!isBaseRenewalPage()) {
    const requiredFields = [
      { field: pageData.image, message: '¿Que quieres subir sin foto principal?' },
      // { field: pageData.galleryFiles, message: '¿Que quieres subir sin fotos en la galería?' },
    ];

    for (const { field, message } of requiredFields) {
      if (!field) {
        showError(message);
        return;
      }
    }
  }

  toast.success('¡Vamos!', {
    position: POSITION.BOTTOM_RIGHT,
  });

  window.open(`https://nomanssky.fandom.com/wiki/Special:Upload?multiple=true`, '_blank');
}

function confirmReset() {
  pageData.resetStore();
  toast.success('¡Restablecido con éxito!', {
    position: POSITION.BOTTOM_RIGHT,
  });
}

function showConfirmDialog() {
  confirm.require({
    message: '¿Estás seguro de que quieres restablecer?',
    header: 'Confirmar Restablecer',
    icon: 'pi pi-exclamation-triangle',
    accept: confirmReset,
    acceptProps: {
      class: 'p-button-danger',
    },
    reject: () => {
      toast.info('Restablecimiento cancelado.', {
        position: POSITION.BOTTOM_RIGHT,
      });
    },
  });
}
</script>

<template>
  <Toolbar
    class="is-borderless is-radiusless"
    v-if="!isFAQPage()"
  >
    <template #center>
      <div class="is-gap-1 is-flex is-justify-content-center footer-toolbar">
        <Button
          label="Copiar"
          @click="copyPage"
        />

        <Button
          v-if="!isBaseRenewalPage()"
          as="a"
          label="Crear"
          severity="warn"
          @click="createPage"
        />

        <Button
          v-if="!isBaseRenewalPage()"
          label="Descargar Código"
          @click="downloadCode"
        />
        <Button
          v-if="!isBaseRenewalPage()"
          label="Subir Archivos"
          @click="uploadFiles"
        />

        <Button
          label="Restablecer"
          severity="danger"
          @click="showConfirmDialog"
        />
      </div>
    </template>
  </Toolbar>

  <ConfirmDialog :draggable="true" />
</template>

<style scoped>
.footer-toolbar {
  padding-inline-end: var(--p-scrollbar-width);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

/* .footer-toolbar > .p-button {
  flex: 1 1 20%;
  max-width: 30%;
  max-height: 10%;
} */
</style>
