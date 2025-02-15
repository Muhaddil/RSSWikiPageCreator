<script setup lang="ts">
import { ref } from 'vue';
import Timeline from 'primevue/timeline';
import Card from 'primevue/card';
import Tag from 'primevue/tag';

interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  category: string;
}

const events = ref<TimelineEvent[]>([
  { title: 'Evento 1', date: '2023-01-01', description: 'Descripción del evento 1', category: 'Categoría 1' },
  { title: 'Evento 2', date: '2023-02-01', description: 'Descripción del evento 2', category: 'Categoría 2' },
  { title: 'Evento 3', date: '2023-03-01', description: 'Descripción del evento 3', category: 'Categoría 3' },
]);
</script>

<template>
  <Card class="galactic-card timeline-card">
    <template #content>
      <div class="timeline-page-container">
        <div class="header-section">
          <div class="header-content">
            <a href="https://example.com" target="_blank" class="logo-link">
              <img
                src="/assets/images/basesdestacadas/RSS-Logo.webp"
                class="logo-image"
                alt="Logo"
              />
            </a>
            <div class="text-content">
              <h1 class="galactic-title">
                <span class="title-text">Cronología de Eventos</span>
              </h1>
              <p class="text-stellar-gray subtitle">
                Explora los eventos importantes de nuestra aplicación
              </p>
            </div>
          </div>
        </div>

        <Timeline :value="events" align="alternate" class="custom-timeline">
          <template #opposite="slotProps">
            <small class="opposite-content">{{ slotProps.item.category }}</small>
          </template>

          <!-- <template #marker="slotProps"> -->
          <template>
            <div class="custom-marker">
              <!-- {{ new Date(slotProps.item.date).toLocaleString('default', { month: 'short' }) }} -->
            </div>
          </template>

          <template #content="slotProps">
            <Card class="event-card">
              <template #title>{{ slotProps.item.title }}</template>
              <template #subtitle>
                {{ new Date(slotProps.item.date).toLocaleDateString() }}
              </template>
              <template #content>
                <p class="event-description">{{ slotProps.item.description }}</p>
                <Tag
                  :value="slotProps.item.category"
                  severity="info"
                  class="category-tag"
                />
              </template>
            </Card>
          </template>
        </Timeline>
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
  background: var(--background-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
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
  background: var(--background-primary);
  border: 1px solid var(--border-color);
}

.timeline-page-container {
  padding: 2rem;
}

.header-section {
  padding: 1.5rem;
  background: var(--background-secondary);
  border-bottom: 1px solid var(--border-color);
}

.header-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
}

.logo-link {
  transition: transform 0.3s ease;
}

.logo-image {
  height: 80px;
  width: auto;
  filter: brightness(var(--logo-brightness, 1));
}

.logo-link:hover {
  transform: rotate(-5deg) scale(1.05);
}

.text-content {
  flex: 1;
}

.galactic-title {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  line-height: 1.2;
  margin: 0;
}

.subtitle {
  margin: 0.5rem 0 0;
}

.text-stellar-gray {
  color: var(--text-secondary);
}

.custom-timeline {
  padding: 2rem;
}

:deep(.p-timeline-event-opposite) {
  flex: 1;
  padding-right: 1rem;
}

.custom-marker {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: var(--primary-gradient);
  color: white;
  font-weight: bold;
}

.event-card {
  background: var(--background-secondary);
  border: 1px solid var(--border-color);
  margin: 1rem 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.event-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 20px var(--hover-effect);
}

.event-description {
  color: var(--text-primary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.category-tag {
  background: var(--tag-background) !important;
  border: 1px solid var(--tag-border) !important;
  color: var(--tag-text) !important;
  font-size: 0.8rem;
  margin-left: 0.2rem;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .logo-link {
    align-self: center;
  }

  .galactic-title {
    font-size: 1.75rem;
    text-align: center;
  }

  .custom-timeline {
    padding: 1rem;
  }

  .custom-marker {
    width: 1.75rem;
    height: 1.75rem;
    font-size: 0.9rem;
  }
}
</style>
