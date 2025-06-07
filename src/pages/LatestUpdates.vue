<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Panel from 'primevue/panel';
import InputNumber from 'primevue/inputnumber';
import ThemeSwitch from '@/components/ThemeSwitch.vue';
import { getRegionImageUrls } from '@/api/api';
import Button from 'primevue/button';

interface NewsItem {
  title: string;
  link: string;
  date: string;
  version: string;
}

interface UpdateDetails {
  image?: {
    panel: string;
    modal?: string;
  };
  date?: string;
  platforms?: string;
  summary?: string;
  fixes?: string[];
  link?: string;
}

const newsItems = computed(() => allNewsItems.value.slice(0, maxUpdates.value));
const updateDetails = ref<{ [key: string]: UpdateDetails }>({});
const isLoading = ref(true);
const error = ref<string | null>(null);
const screenWidth = ref(window.innerWidth);
const maxUpdates = ref(10);
const allNewsItems = ref<NewsItem[]>([]);

const gridColumns = computed(() => (screenWidth.value < 768 ? 1 : screenWidth.value < 1200 ? 2 : 3));

const fetchNewsPage = async () => {
  try {
    const params = new URLSearchParams({
      action: 'parse',
      page: 'Noticias',
      prop: 'text',
      format: 'json',
      origin: '*',
    });

    const response = await fetch(`https://nomanssky.fandom.com/es/api.php?${params.toString()}`);
    const data = await response.json();
    const htmlContent = data.parse.text['*'];
    parseNewsItems(htmlContent);
  } catch (err) {
    error.value = 'Error al cargar las noticias';
    console.error(err);
  }
};

const parseNewsItems = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const plainlinksDiv = doc.querySelector('.plainlinks');

  if (!plainlinksDiv) return;

  const items: NewsItem[] = [];
  const lines = plainlinksDiv.innerHTML.split('<br>');

  for (const line of lines) {
    if (!line.trim()) continue;

    const lineDoc = parser.parseFromString(line, 'text/html');
    const link = lineDoc.querySelector('a');

    if (link) {
      const title = link.textContent?.trim() || '';
      const href = link.getAttribute('href') || '';

      const pageName = decodeURIComponent(href.split('/wiki/').pop() || '').replace(/_/g, ' ');

      const versionMatch = pageName.match(/(\d+\.\d+(\.\d+)?)/);

      const dateMatch = lineDoc.body.textContent?.match(/(\d{1,2} de [a-z]+ de \d{4})/i);

      if (versionMatch && dateMatch) {
        items.push({
          title: title,
          link: `https://nomanssky.fandom.com${href}`,
          date: dateMatch[1],
          version: versionMatch[1],
        });
      }
    }
  }

  allNewsItems.value = items;
  fetchUpdateDetails();
};

const fetchUpdateDetails = async () => {
  try {
    for (const item of newsItems.value) {
      const details = await fetchSingleUpdateDetails(item.link);
      if (details) {
        updateDetails.value[item.version] = details;
      }
    }
  } catch (err) {
    console.error('Error fetching update details:', err);
  } finally {
    isLoading.value = false;
  }
};

const fetchSingleUpdateDetails = async (url: string): Promise<UpdateDetails> => {
  try {
    const pageName = url.split('/wiki/')[1];
    const params = new URLSearchParams({
      action: 'parse',
      page: decodeURIComponent(pageName),
      prop: 'wikitext',
      format: 'json',
      origin: '*',
    });

    const response = await fetch(`https://nomanssky.fandom.com/es/api.php?${params.toString()}`);
    const data = await response.json();
    const wikitext = data.parse.wikitext['*'];
    return parseUpdateDetails(wikitext, pageName);
  } catch (err) {
    console.error(`Error fetching details for ${url}:`, err);
    return {};
  }
};

const cleanWikitext = (text: string): string => {
  text = text.replace(/'''/g, '');
  text = text.replace(/''/g, '');

  text = text.replace(/\[\[([^\|\]]+)\|([^\]]+)\]\]/g, '$2');
  text = text.replace(/\[\[([^\]]+)\]\]/g, '$1');

  text = text.replace(/<br\s*\/?>/gi, '\n');

  return text;
};

const parseUpdateDetails = async (wikitext: string, _pagename: string): Promise<UpdateDetails> => {
  const details: UpdateDetails = {
    fixes: [],
  };
  const imageMatch = wikitext.match(/\|\s*image\s*=\s*(.+?)\n/);
  if (imageMatch) {
    const rawImageName = imageMatch[1].split('\n')[0].split('|')[0].trim();
    const imageUrl = await getRegionImageUrls(rawImageName);
    if (imageUrl) {
      details.image = imageUrl;
    }
  }

  const dateMatch = wikitext.match(/\|\s*date\s*=\s*(.+?)\n/);
  if (dateMatch) details.date = dateMatch[1].trim();

  const platformMatch = wikitext.match(/\|\s*platform\s*=\s*(.+?)\n/);
  if (platformMatch) details.platforms = platformMatch[1].trim();

  const linkMatch = wikitext.match(/\|\s*link\s*=\s*\[(https?:\/\/[^\s\]]+)(?:\s[^\]]*)?\]/);
  if (linkMatch) details.link = linkMatch[1].trim();

  const resumenSection = wikitext.match(/==\s*Resumen\s*==\s*\n([\s\S]*?)(?=\n==|$)/);
  if (resumenSection) {
    details.summary = cleanWikitext(resumenSection[1].trim());
  }

  const fixesSection = wikitext.match(/==\s*corre(?:cción|cciones)\s+de\s+errores?\s*==\s*\n([\s\S]*?)(?=\n==|$)/i);
  if (fixesSection) {
    const fixesText = fixesSection[1];
    const fixMatches = fixesText.matchAll(/\*\s*(.+?)(?=\n\*|\n$)/g);
    for (const match of fixMatches) {
      const fixClean = match[1].replace(/\s+/g, ' ').trim();
      details.fixes?.push(fixClean);
    }
  }

  return details;
};

onMounted(() => {
  window.addEventListener('resize', () => (screenWidth.value = window.innerWidth));
  fetchNewsPage();
});

const reloadNews = () => {
  isLoading.value = true;
  error.value = null;
  allNewsItems.value = [];
  updateDetails.value = {};
  fetchNewsPage();
};

const formatDate = (dateString: string) => {
  const months: { [key: string]: string } = {
    enero: '01',
    febrero: '02',
    marzo: '03',
    abril: '04',
    mayo: '05',
    junio: '06',
    julio: '07',
    agosto: '08',
    septiembre: '09',
    octubre: '10',
    noviembre: '11',
    diciembre: '12',
  };

  const parts = dateString.split(' de ');
  if (parts.length === 3) {
    const day = parts[0].padStart(2, '0');
    const month = months[parts[1].toLowerCase()];
    const year = parts[2];
    return `${day}/${month}/${year}`;
  }
  return dateString;
};
</script>

<template>
  <Card class="p-0 galactic-card">
    <template #content>
      <div class="space-page-container">
        <div class="flex items-start justify-between mb-6 header-container">
          <div class="flex flex-col">
            <a
              href="https://nomanssky.fandom.com/es/wiki/No_Man%27s_Sky_Wiki"
              target="_blank"
            >
              <div class="wiki-logo">
                <img
                  src="/assets/images/shared/logo-white.png"
                  class="logo-image"
                  alt="Wiki Logo"
                />
              </div>
            </a>
            <div class="header-container">
              <div class="title-theme-container">
                <h1 class="galactic-title">
                  <span class="title-text">Actualizaciones de No Man's Sky</span>
                </h1>
              </div>
            </div>
            <p class="text-stellar-gray mt-2">Últimas actualizaciones del juego desde la wiki oficial</p>
            <p class="text-stellar-gray mt-2"><ThemeSwitch style="margin-right: 2rem" /></p>
          </div>
        </div>

        <div class="mb-4 flex items-center gap-2">
          <label
            for="maxUpdates"
            class="text-stellar-gray font-semibold"
            >Mostrar hasta:</label
          >
          <InputNumber
            id="maxUpdates"
            v-model="maxUpdates"
            :min="1"
            :max="15"
            :showButtons="true"
            inputClass="p-inputtext-sm"
            class="mx-2"
          />
          <span class="text-stellar-gray">actualizaciones</span>
          <br />
          <br />
          <Button
            label="Buscar Actualizaciones"
            icon="pi pi-refresh"
            class="p-button-outlined p-button-sm"
            @click="reloadNews"
          />
        </div>

        <Panel class="galactic-panel">
          <template #header>
            <h2 class="panel-title">Historial de Actualizaciones</h2>
          </template>
          <div class="panel-content">
            <p>
              Total de actualizaciones recientes: <strong>{{ newsItems.length }}</strong>
            </p>
            <p class="update-info">Última actualización: {{ new Date().toLocaleDateString('es-ES') }}</p>
          </div>
        </Panel>

        <br />

        <div
          v-if="isLoading"
          class="loading-message"
        >
          <i class="pi pi-spinner pi-spin"></i> Cargando actualizaciones...
        </div>
        <div
          v-else-if="error"
          class="error-message p-error"
        >
          <i class="pi pi-exclamation-triangle"></i> {{ error }}
        </div>

        <div
          v-else
          class="grid gap-4"
          :style="`grid-template-columns: repeat(${gridColumns}, 1fr)`"
        >
          <Card
            v-for="(item, index) in newsItems"
            :key="index"
            class="update-card"
          >
            <template #content>
              <div class="p-4">
                <div class="flex flex-column gap-3">
                  <div class="flex align-items-center gap-2">
                    <h3 class="update-title">{{ item.title }}</h3>
                    <Tag
                      :value="item.version"
                      severity="info"
                      class="version-tag"
                    />
                  </div>

                  <div class="flex justify-between items-center mb-3">
                    <span class="update-date">{{ item.date }}</span>
                    <span class="update-date-formatted">{{ formatDate(item.date) }}</span>
                  </div>

                  <div
                    v-if="updateDetails[item.version]?.image"
                    class="image-container"
                  >
                    <img
                      :src="updateDetails[item.version]?.image?.panel"
                      :alt="item.title"
                      class="update-image"
                    />
                  </div>

                  <div class="update-details">
                    <div class="detail-item">
                      <span class="detail-label">Plataformas:</span>
                      <span class="detail-value">{{ updateDetails[item.version]?.platforms || 'Todas' }}</span>
                    </div>

                    <div
                      v-if="updateDetails[item.version]?.summary"
                      class="summary-box"
                    >
                      <span class="detail-label">Resumen:</span>
                      <p>{{ updateDetails[item.version]?.summary }}</p>
                    </div>

                    <div
                      v-if="updateDetails[item.version]?.fixes && updateDetails[item.version]?.fixes!.length > 0"
                      class="fixes-box"
                    >
                      <span class="detail-label">Principales correcciones:</span>
                      <ul>
                        <li
                          v-for="(fix, fixIndex) in updateDetails[item.version]?.fixes?.slice(0, 3)"
                          :key="fixIndex"
                        >
                          {{ fix }}
                        </li>
                      </ul>
                    </div>

                    <div class="mt-3 flex justify-between">
                      <a
                        :href="item.link"
                        target="_blank"
                        class="wiki-link"
                      >
                        <i class="pi pi-book"></i> Ver en wiki
                      </a>
                      <a
                        v-if="updateDetails[item.version]?.link"
                        :href="updateDetails[item.version]?.link"
                        target="_blank"
                        class="official-link"
                      >
                        <i class="pi pi-globe"></i> Nota oficial
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </Card>
        </div>
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
  --space-dark: #c3d4ff;
  --space-light: #e2e3e4;
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
  --space-dark: #0f172a;
  --space-light: #1e293b;
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

.update-card {
  background: var(--background-secondary);
  border: 1px solid var(--border-color);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  height: 100%;
}

.update-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 20px var(--hover-effect);
}

.version-tag {
  background: var(--tag-background) !important;
  border: 1px solid var(--tag-border) !important;
  color: var(--tag-text) !important;
  font-size: 0.9rem;
  margin-left: 0.5rem;
}

.text-stellar-gray {
  color: var(--text-secondary);
}

.update-title {
  color: var(--text-primary);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.update-date {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.update-date-formatted {
  background: var(--space-dark);
  color: var(--tag-text);
  padding: 0.2rem 0.5rem;
  margin-left: 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
}

.update-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.detail-item {
  display: flex;
  margin-bottom: 0.8rem;
}

.detail-label {
  color: var(--text-secondary);
  font-weight: 500;
  min-width: 120px;
}

.detail-value {
  color: var(--text-primary);
  flex-grow: 1;
}

.summary-box,
.fixes-box {
  background: var(--space-light);
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  border-left: 3px solid var(--tag-border);
}

.fixes-box ul {
  padding-left: 1.5rem;
  margin-top: 0.5rem;
}

.fixes-box li {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.wiki-link,
.official-link {
  color: var(--tag-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.loading-message,
.error-message {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.wiki-logo {
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: flex-end;
  right: 5%;
  top: 2rem;
  height: auto;
  width: auto;
}

.logo-image {
  height: 14rem;
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
  .wiki-logo {
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

  .detail-item {
    flex-direction: column;
    gap: 0.3rem;
  }

  .detail-label {
    min-width: auto;
  }
}
</style>
