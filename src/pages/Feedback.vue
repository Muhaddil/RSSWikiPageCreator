<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import Card from 'primevue/card';
import Panel from 'primevue/panel';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import { useToast, POSITION } from 'vue-toastification';
import ThemeSwitch from '@/components/ThemeSwitch.vue';
import Rating from 'primevue/rating';
const webhook = atob(import.meta.env.VITE_DISCORD_WEBHOOK_RATINGS ?? '');

const toast = useToast();

const queryParams = new URLSearchParams(window.location.search);
const language = ref<'en' | 'es'>(queryParams.get('lang') === 'en' ? 'en' : 'es');

type LanguageKey = 'en' | 'es';

const isEpicLanguage = ref<boolean>(false);
const isSubmitting = ref<boolean>(false);
const submitted = ref<boolean>(false);

onMounted(() => {
  watch(isEpicLanguage, () => {
    const card = document.querySelector('.galactic-card');
    if (card) {
      card.classList.add('epic-transition');
      setTimeout(() => card.classList.remove('epic-transition'), 1000);
    }
  });

  const lastSubmittedAt = localStorage.getItem('feedback-submitted-at');
  if (lastSubmittedAt) {
    const elapsed = Date.now() - parseInt(lastSubmittedAt, 10);
    if (elapsed < 24 * 60 * 60 * 1000) {
      submitted.value = true;
      setTimeout(
        () => {
          submitted.value = false;
          localStorage.removeItem('feedback-submitted-at');
        },
        24 * 60 * 60 * 1000 - elapsed
      );
    }
  }
});

const feedbackTranslations = {
  en: {
    common: {
      title: 'Feedback Portal',
      subtitle: 'Share your thoughts with the Royal Space Society',
      accessTitle: 'Feedback Information',
      accessText: 'Your feedback is important to us. Please fill out the form below to help us improve.',
      securityLevel: 'Secure Transmission',
      systemUpdate: 'All data is encrypted and will be handled with confidentiality.',
      form: {
        name: 'Name',
        email: 'Email',
        feedbackType: 'Feedback Type',
        rating: 'Rating',
        message: 'Message',
        send: 'Send Feedback',
        success: 'Thank you! Your feedback has been submitted.',
        types: {
          bug: 'Bug Report',
          suggestion: 'Suggestion',
          praise: 'Praise',
          other: 'Other',
        },
      },
    },
    epic: {
      title: 'Stellar Feedback Hub',
      subtitle: 'Transmit your cosmic contemplations to the Royal Space Society',
      accessTitle: 'Cosmic Communication Protocol',
      accessText:
        'Your astral insights are invaluable to our continuum. Utilize the quantum interface below to enhance our existence.',
      securityLevel: 'Quantum Encryption Level 9',
      systemUpdate: 'All transmissions undergo quantum encryption and exist in superposition until observed.',
      form: {
        name: 'Celestial Designation',
        email: 'Quantum Communication Address',
        feedbackType: 'Cosmic Feedback Classification',
        rating: 'Stellar Rating',
        message: 'Interstellar Message',
        send: 'Transmit Feedback',
        success: 'Gratitude! Your cosmic transmission has been received across the continuum.',
        types: {
          bug: 'Anomaly Report',
          suggestion: 'Temporal Improvement',
          praise: 'Stellar Commendation',
          other: 'Other Cosmic Phenomenon',
        },
      },
    },
  },
  es: {
    common: {
      title: 'Portal de Comentarios',
      subtitle: 'Comparte tus pensamientos con la Royal Space Society',
      accessTitle: 'Información de Comentarios',
      accessText:
        'Tu feedback es importante para nosotros. Por favor, completa el formulario a continuación para ayudarnos a mejorar.',
      securityLevel: 'Transmisión Segura',
      systemUpdate: 'Todos los datos están encriptados y serán manejados con confidencialidad.',
      form: {
        name: 'Nombre',
        email: 'Correo Electrónico',
        feedbackType: 'Tipo de Comentario',
        rating: 'Valoración',
        message: 'Mensaje',
        send: 'Enviar Comentario',
        success: '¡Gracias! Tu comentario ha sido enviado.',
        types: {
          bug: 'Reporte de Error',
          suggestion: 'Sugerencia',
          praise: 'Elogio',
          other: 'Otro',
        },
      },
    },
    epic: {
      title: 'Centro de Comentarios Estelares',
      subtitle: 'Transmite tus contemplaciones cósmicas a la Royal Space Society',
      accessTitle: 'Protocolo de Comunicación Cósmica',
      accessText:
        'Tus percepciones astrales son invaluables para nuestro continuo. Utiliza la interfaz cuántica para mejorar nuestra existencia.',
      securityLevel: 'Nivel de Encriptación Cuántica 9',
      systemUpdate:
        'Todas las transmisiones pasan por encriptación cuántica y existen en superposición hasta ser observadas.',
      form: {
        name: 'Designación Celestial',
        email: 'Dirección de Comunicación Cuántica',
        feedbackType: 'Clasificación de Comentarios Cósmicos',
        rating: 'Calificación Estelar',
        message: 'Mensaje Interestelar',
        send: 'Transmitir Comentario',
        success: '¡Gratitud! Tu transmisión cósmica ha sido recibida a través del continuo.',
        types: {
          bug: 'Reporte de Anomalía',
          suggestion: 'Mejora Temporal',
          praise: 'Elogio Estelar',
          other: 'Otro Fenómeno Cósmico',
        },
      },
    },
  },
};

const t = computed(() => feedbackTranslations[language.value as LanguageKey][isEpicLanguage.value ? 'epic' : 'common']);

const feedbackTypes = computed(() => [
  { name: t.value.form.types.bug, value: 'bug' },
  { name: t.value.form.types.suggestion, value: 'suggestion' },
  { name: t.value.form.types.praise, value: 'praise' },
  { name: t.value.form.types.other, value: 'other' },
]);

const formData = ref({
  name: '',
  email: '',
  feedbackType: null,
  rating: 0,
  message: '',
});

const screenWidth = ref(window.innerWidth);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

const getLabel = (language: 'en' | 'es'): string => {
  return language === 'es' ? 'Lenguaje Sofisticado' : 'Sophisticated Language';
};

window.addEventListener('resize', updateScreenWidth);

onMounted(() => {
  watch(isEpicLanguage, () => {
    const card = document.querySelector('.galactic-card');
    if (card) {
      card.classList.add('epic-transition');
      setTimeout(() => card.classList.remove('epic-transition'), 1000);
    }
  });
});

const MAX_FIELD_LENGTH = 1024;

const splitMessage = (message: string, maxLength: number): string[] => {
  const parts: string[] = [];
  for (let i = 0; i < message.length; i += maxLength) {
    parts.push(message.substring(i, i + maxLength));
  }
  return parts;
};

const submitFeedback = async () => {
  if (
    !formData.value.name.trim() ||
    // !formData.value.email.trim() ||
    !formData.value.feedbackType ||
    !formData.value.message.trim() ||
    formData.value.rating === 0
  ) {
    toast.error('Por favor completa todos los campos.', {
      position: POSITION.BOTTOM_RIGHT,
    });
    return;
  }

  isSubmitting.value = true;
  console.log('Enviando feedback a:', webhook);

  try {
    if (!webhook || !webhook.startsWith('https://')) {
      throw new Error('Webhook inválido o no definido.');
    }


    const messageParts = splitMessage(formData.value.message, MAX_FIELD_LENGTH);

    const fields = [
      { name: '👤 Nombre', value: formData.value.name, inline: true },
      // { name: "📧 Email", value: formData.value.email, inline: true },
      { name: '📂 Tipo', value: formData.value.feedbackType, inline: true },
      { name: '⭐ Valoración', value: `${formData.value.rating}/5`, inline: true },
    ];

    messageParts.forEach((part: string, index: number) => {
      fields.push({
        name: index === 0 ? '📝 Mensaje' : `📝 Mensaje (parte ${index + 1})`,
        value: part,
        inline: false,
      });
    });

    const payload = {
      username: 'Muhaddil Wiki Page Creator',
      avatar_url: 'https://github.com/Muhaddil/simple-form-sender/blob/main/src/images/muha2.png?raw=true',
      embeds: [
        {
          title: '🛰️ Nuevo Feedback recibido',
          color: 5814783,
          fields,
          timestamp: new Date().toISOString(),
        },
      ],
    };

    await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    submitted.value = true;
    localStorage.setItem('feedback-submitted-at', Date.now().toString());

    toast.success(t.value.form.success, {
      position: POSITION.BOTTOM_RIGHT,
    });

    formData.value = {
      name: '',
      email: '',
      feedbackType: null,
      rating: 0,
      message: '',
    };
  } catch (error) {
    console.error('Error al enviar feedback:', error);
    toast.error('Error al enviar el feedback. ¿Está configurado el webhook?', {
      position: POSITION.BOTTOM_RIGHT,
    });
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <Toast />
  <Card class="p-0 galactic-card">
    <template #content>
      <div class="space-page-container">
        <div class="flex items-start justify-between mb-6 header-container">
          <div class="flex flex-col">
            <a
              href="https://nomanssky.fandom.com/es/wiki/Royal_Space_Society"
              target="_blank"
            >
              <div class="rss-logo">
                <img
                  src="/assets/images/shared/logo-white.png"
                  class="logo-image"
                  alt="RSS Logo"
                />
              </div>
            </a>
            <div class="header-container">
              <div class="title-theme-container">
                <transition
                  name="title-fade"
                  mode="out-in"
                >
                  <h1
                    key="title"
                    class="galactic-title"
                  >
                    <span class="title-text">{{ t.title }}</span>
                  </h1>
                </transition>
              </div>
            </div>
            <p class="text-stellar-gray mt-2"><ThemeSwitch style="margin-right: 2rem" />{{ t.subtitle }}</p>
            <br />
            <div class="flex items-center gap-2 language-toggle">
              <Checkbox
                v-model="isEpicLanguage"
                :binary="true"
                class="epic-checkbox"
                style="margin-right: 8px"
              />
              <transition
                name="label-fade"
                mode="out-in"
              >
                <label
                  :key="getLabel(language)"
                  class="text-sm epic-label"
                  style="margin-right: 8px"
                >
                  {{ getLabel(language) }}
                </label>
              </transition>
            </div>
          </div>
        </div>

        <Card class="feedback-form-card">
          <template #content>
            <div
              v-if="!submitted"
              class="feedback-form"
            >
              <div class="form-grid">
                <div class="form-group">
                  <label>{{ t.form.name }}</label>
                  <InputText
                    v-model="formData.name"
                    class="form-input"
                    :placeholder="t.form.name"
                  />
                </div>

                <!-- <div class="form-group">
                  <label>{{ t.form.email }}</label>
                  <InputText v-model="formData.email" type="email" class="form-input" :placeholder="t.form.email" />
                </div> -->

                <div class="form-group">
                  <label>{{ t.form.feedbackType }}</label>
                  <Dropdown
                    v-model="formData.feedbackType"
                    :options="feedbackTypes"
                    optionLabel="name"
                    optionValue="value"
                    class="form-input"
                    :placeholder="t.form.feedbackType"
                  />
                </div>
              </div>

              <div class="form-group message-group">
                <label>{{ t.form.message }}</label>
                <Textarea
                  v-model="formData.message"
                  rows="5"
                  class="form-textarea"
                  :placeholder="t.form.message"
                />
              </div>

              <div class="rating-container form-group">
                <label>{{ t.form.rating }}</label>
                <div class="rating-wrapper">
                  <Rating
                    v-model="formData.rating"
                    :stars="5"
                    :cancel="false"
                    class="form-rating"
                  />
                </div>
              </div>

              <div class="form-actions">
                <Button
                  :label="t.form.send"
                  icon="pi pi-send"
                  class="submit-button"
                  :loading="isSubmitting"
                  @click="submitFeedback"
                />
              </div>
            </div>

            <div
              v-if="submitted"
              class="success-message"
            >
              <i class="pi pi-check-circle success-icon"></i>
              <h3>{{ t.form.success }}</h3>
              <p>{{ t.subtitle }}</p>
            </div>
          </template>
        </Card>

        <Panel class="galactic-panel mt-6">
          <template #header>
            <h2 class="panel-title">
              {{ t.accessTitle }}
            </h2>
          </template>
          <p class="panel-content">
            {{ t.accessText }}<br /><br />
            <span class="security-level">{{ t.securityLevel }}</span
            ><br />
            {{ t.systemUpdate }}
          </p>
        </Panel>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.galactic-card {
  --primary-gradient: linear-gradient(45deg, #4f46e5 0%, #1e40af 100%);
  --secondary-gradient: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%);
  --text-primary: #1e293b;
  --text-secondary: #475569;
  --background-primary: #d3d3d3;
  --background-secondary: #f1f1f1;
  --border-color: rgba(99, 102, 241, 0.15);
  --hover-effect: rgba(99, 102, 241, 0.1);
  --tag-background: rgba(79, 70, 229, 0.1);
  --tag-border: #4f46e5;
  --tag-text: #4f46e5;
  --success-color: #10b981;
}

.theme-dark .galactic-card {
  --primary-gradient: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%);
  --secondary-gradient: linear-gradient(45deg, #4f46e5 0%, #1e40af 100%);
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --background-primary: #0a0e1a;
  --background-secondary: #1a1f2d;
  --border-color: rgba(103, 232, 249, 0.15);
  --hover-effect: rgba(103, 232, 249, 0.2);
  --tag-background: rgba(103, 232, 249, 0.1);
  --tag-border: #67e8f9;
  --tag-text: #67e8f9;
  --success-color: #10b981;
}

.galactic-card {
  background: var(--background-primary);
  border: 1px solid var(--border-color);
}

.galactic-title {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px var(--hover-effect);
  font-size: 2rem;
  line-height: 1.2;
}

.text-stellar-gray {
  color: var(--text-secondary);
}

.galactic-panel {
  background: var(--background-secondary) !important;
  border: 1px solid var(--border-color) !important;
}

.panel-title {
  background: var(--secondary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.security-level {
  color: var(--tag-text);
  font-weight: 600;
}

.rss-logo {
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-end;
  right: 5%;
  top: 2%;
  height: auto;
  width: auto;
}

.logo-image {
  height: 10rem;
  transition: transform 0.3s ease;
  filter: brightness(var(--logo-brightness, 1));
}

.theme-dark .logo-image {
  --logo-brightness: 0.9;
}

.logo-image:hover {
  transform: rotate(-5deg) scale(1.05);
}

@media (max-width: 768px) {
  .rss-logo {
    position: absolute;
    right: 0.1rem;
    top: 0.5rem;
    margin-top: 1rem;
    width: 0px;
    height: 0px;
  }

  .logo-image {
    height: auto;
    transition: transform 0.3s ease;
    filter: brightness(var(--logo-brightness, 1));
  }

  .galactic-title {
    font-size: 1.5rem;
    text-align: center;
  }

  .header-container {
    text-align: center;
  }
}

.title-fade-enter-active,
.title-fade-leave-active,
.label-fade-enter-active,
.label-fade-leave-active {
  transition: all 0.5s ease;
}

.title-fade-enter-from,
.title-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.label-fade-enter-from,
.label-fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.epic-checkbox.p-checkbox.p-highlight .p-checkbox-box {
  animation: checkbox-glow 0.6s ease;
}

@keyframes checkbox-glow {
  0% {
    box-shadow: 0 0 0 0 rgba(103, 232, 249, 0.5);
  }

  50% {
    box-shadow: 0 0 10px 3px rgba(103, 232, 249, 0.5);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(103, 232, 249, 0);
  }
}

.galactic-card.epic-transition {
  animation: epic-transition 1.2s ease;
}

@keyframes epic-transition {
  0% {
    transform: scale(1);
    background: var(--background-primary);
  }

  25% {
    transform: scale(1.005);
    background: linear-gradient(45deg, var(--background-primary) 0%, rgba(103, 232, 249, 0.1) 100%);
  }

  50% {
    transform: scale(1);
    box-shadow: 0 0 30px rgba(103, 232, 249, 0.2);
  }

  100% {
    background: var(--background-primary);
  }
}

.epic-label {
  display: inline-block;
  position: relative;
  padding: 2px 5px;
  transition: all 0.3s ease;
}

.epic-label::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--tag-border);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.epic-checkbox:checked + .epic-label::after {
  transform: scaleX(1);
}

.feedback-form-card {
  background: var(--background-secondary) !important;
  border: 1px solid var(--border-color) !important;
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
}

.feedback-form-card:hover {
  box-shadow: 0 0 20px var(--hover-effect);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
}

.form-input,
.form-textarea {
  width: 100%;
  background: var(--background-primary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 0.75rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  border-color: var(--tag-border);
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  outline: none;
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}

.rating-container {
  display: block;
  width: 100%;
}

.rating-wrapper {
  background: var(--background-primary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 0.75rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.form-rating .pi-star,
.form-rating .pi-star-fill {
  font-size: 1.5rem;
  color: var(--border-color);
}

.form-rating .pi-star-fill {
  color: var(--tag-border) !important;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
}

.submit-button {
  background: var(--primary-gradient);
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(79, 70, 229, 0.3);
}

.submit-button:active {
  transform: translateY(0);
}

.submit-button::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(30deg);
  transition: all 0.6s ease;
}

.submit-button:hover::after {
  transform: rotate(30deg) translate(100%, 0);
}

.success-message {
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(16, 185, 129, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(16, 185, 129, 0.2);
  animation: fadeIn 0.6s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.success-icon {
  font-size: 4rem;
  color: var(--success-color);
  margin-bottom: 1.5rem;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

.success-message h3 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: var(--success-color);
}

.success-message p {
  color: var(--text-secondary);
  max-width: 500px;
  margin: 0 auto;
}
</style>
