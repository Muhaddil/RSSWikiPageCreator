<script setup lang="ts">
import type { CivImageProps, PageLinkProps } from '@/types/homePageProps';
import { reactive, onMounted, onUnmounted, ref } from 'vue';
import ScrollToTop from '@/components/ScrollToTop.vue';

const links: PageLinkProps[] = [
  {
    text: 'Bases Censo',
    url: './base.html',
    img: './assets/images/buttons/1_001.png',
    imgAlt: 'Bases Censo',
  },
  {
    text: 'Bases Normales',
    url: './basecensusno.html',
    img: './assets/images/buttons/1_002.png',
    imgAlt: 'Bases Normales',
  },
  {
    text: 'Circuitos',
    url: './racetrack.html',
    img: './assets/images/buttons/1_003.png',
    imgAlt: 'Circuitos',
  },
  {
    text: 'Asentamientos',
    url: './settlement.html',
    img: './assets/images/buttons/1_004.png',
    imgAlt: 'Asentamientos',
  },
  {
    text: 'Fauna',
    url: './fauna.html',
    img: './assets/images/buttons/1_012_2.png',
    imgAlt: 'Fauna',
  },
  {
    text: 'Gusano de Arena',
    url: './sandworm.html',
    img: './assets/images/buttons/1_015.png',
    imgAlt: 'Gusano de Arena',
  },
  {
    text: 'Flora',
    url: './flora.html',
    img: './assets/images/buttons/1_006.png',
    imgAlt: 'Flora',
  },
  {
    text: 'Naves',
    url: './starship.html',
    img: './assets/images/buttons/1_013.png',
    imgAlt: 'Naves',
  },
  {
    text: 'Multiherramientas',
    url: './multitool.html',
    img: './assets/images/buttons/1_007.png',
    imgAlt: 'Multiherramientas',
  },
  {
    text: 'Mineral',
    url: './mineral.html',
    img: './assets/images/buttons/1_005.png',
    imgAlt: 'Mineral',
  },
  {
    text: 'Carguero Abandonado',
    url: './derelict.html',
    img: './assets/images/buttons/1_014.png',
    imgAlt: 'Carguero Abandonado',
  },
  {
    text: 'Fragatas Orgánicas',
    url: './biofrig.html',
    img: './assets/images/buttons/1_009.png',
    imgAlt: 'Fragatas Organicas',
  },
  {
    text: 'Sistemas',
    url: './system.html',
    img: './assets/images/buttons/1_008.png',
    imgAlt: 'Sistemas',
  },
  {
    text: 'Planetas',
    url: './planet.html',
    img: './assets/images/buttons/1_010.png',
    imgAlt: 'Planetas',
  },
  {
    text: 'Lunas',
    url: './moon.html',
    img: './assets/images/buttons/1_011.png',
    imgAlt: 'Lunas',
  },
  {
    text: 'Corbetas',
    url: './corvette.html',
    img: './assets/images/buttons/1_016.png',
    imgAlt: 'Corbetas',
  },
];

const tools = [
  {
    name: 'Actualizador Censo RSS',
    url: '/RSSWikiPageCreator/baserenewal.html',
    icon: 'pi pi-cloud-download',
    description: 'Actualiza y renueva las entradas del censo de bases RSS',
    external: false,
  },
  {
    name: 'Entrada Censo RSS',
    url: '/RSSWikiPageCreator/census.html',
    icon: 'pi pi-id-card',
    description: 'Crea nuevas entradas para el censo de miembros',
    external: false,
  },
  {
    name: 'FAQ',
    url: '/RSSWikiPageCreator/faq.html',
    icon: 'pi pi-question-circle',
    description: 'Preguntas frecuentes sobre la RSS y sus herramientas',
    external: false,
  },
  {
    name: 'Generador de Glifos',
    url: '/RSSWikiPageCreator/glyphgenerator.html',
    icon: 'pi pi-map-marker',
    description: "Genera coordenadas de portal para No Man's Sky",
    external: false,
  },
  {
    name: 'Compresor de Imágenes',
    url: 'https://nmscd.com/Image-Compressor/',
    icon: 'pi pi-image',
    description: 'Optimiza imágenes para la wiki',
    external: true,
  },
  {
    name: 'Lector de Glifos',
    url: 'https://nmspar.vercel.app/',
    icon: 'pi pi-eye',
    description: 'Lee y decodifica glifos de portales',
    external: true,
  },
  {
    name: 'Decodificador de Portal',
    url: 'https://nmsportals.github.io/',
    icon: 'pi pi-qrcode',
    description: 'Convierte coordenadas a glifos de portal',
    external: true,
  },
];

const resources = [
  {
    title: 'Wiki RSS',
    url: 'https://nomanssky.fandom.com/es/wiki/Royal_Space_Society',
    category: 'Información',
    description: 'Base de conocimiento con documentación y mapas estelares',
    icon: 'pi pi-globe',
  },
  {
    title: 'Cronología RSS',
    url: 'https://muhaddil.github.io/RSSWikiPageCreator/cronology.html',
    category: 'Información',
    description: 'Registro de eventos históricos de la RSS',
    icon: 'pi pi-sort-amount-up',
  },
  {
    title: 'Directorio de Regiones',
    url: 'https://muhaddil.github.io/RSSWikiPageCreator/regions.html',
    category: 'Información',
    description: 'Todas las regiones RSS reconocidas',
    icon: 'pi pi-prime',
  },
  {
    title: 'Bases Destacadas',
    url: 'https://muhaddil.github.io/RSSWikiPageCreator/basesdestacadas.html',
    category: 'Logros',
    description: 'Directorio de bases destacadas de miembros',
    icon: 'pi pi-microchip',
  },
  // {
  //   title: 'Discord',
  //   url: 'https://discord.gg/oskar1up',
  //   category: 'Comunicación',
  //   description: 'Canal principal de la comunidad',
  //   icon: 'pi pi-bolt',
  // },
  // {
  //   title: 'Twitter/X',
  //   url: 'https://x.com/RoyalSpaceHub',
  //   category: 'Comunicación',
  //   description: 'Cuenta oficial de la RSS',
  //   icon: 'pi pi-sort-alt-slash',
  // },
  // {
  //   title: 'Reddit',
  //   url: 'https://www.reddit.com/r/NMS_RSS/',
  //   category: 'Comunicación',
  //   description: 'Foro comunitario para debates',
  //   icon: 'pi pi-comments',
  // },
  {
    title: 'Censo Oficial',
    url: 'https://muhaddil.github.io/RSSWikiPageCreator/censustable.html',
    category: 'Censo',
    description: 'Registro de todas las bases censadas',
    icon: 'pi pi-home',
  },
  {
    title: 'Tarjeta de Miembro',
    url: 'https://muhaddil.github.io/RSSWikiPageCreator/rssfriends.html',
    category: 'Censo',
    description: 'Crea tu tarjeta de miembro RSS',
    icon: 'pi pi-link',
  },
  {
    title: 'Feedback',
    url: 'https://muhaddil.github.io/RSSWikiPageCreator/feedback.html',
    category: 'Comunidad',
    description: 'Deja tus opiniones sobre la RSS',
    icon: 'pi pi-reply',
  },
  {
    title: 'Actualizaciones NMS',
    url: 'https://muhaddil.github.io/RSSWikiPageCreator/latestupdates.html',
    category: 'Sistema',
    description: "Actualizaciones recientes de No Man's Sky",
    icon: 'pi pi-history',
  },
  {
    title: 'Cambios Wiki',
    url: 'https://muhaddil.github.io/RSSWikiPageCreator/wikiupdates.html',
    category: 'Sistema',
    description: 'Historial de cambios de la wiki',
    icon: 'pi pi-history',
  },
];

function getCssVarValue(varName: string) {
  let cssValue = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();

  if (cssValue.startsWith('url(') && cssValue.endsWith(')')) {
    let imageUrl = cssValue.slice(4, -1);

    if (imageUrl.startsWith('"') && imageUrl.endsWith('"')) {
      imageUrl = imageUrl.slice(1, -1);
    }

    return imageUrl;
  }

  return cssValue;
}

const images = reactive<CivImageProps[]>([]);
const hubLogo = reactive({ value: '' });
const isVisible = ref(false);

const annotations = ref({
  hero: false,
  features: false,
  tools: false,
  resources: false,
  community: false,
});

onMounted(() => {
  hubLogo.value = getCssVarValue('--hublogo');

  images.push({
    link: 'https://nomanssky.fandom.com/es/wiki/Royal_Space_Society',
    imgAlt: 'Royal Space Society logo',
    img: hubLogo.value,
  });

  setInterval(() => {
    const newHubLogoValue = getCssVarValue('--hublogo');
    if (newHubLogoValue !== hubLogo.value) {
      hubLogo.value = newHubLogoValue;
      images[0].img = hubLogo.value;
    }
  }, 10);

  setTimeout(() => {
    isVisible.value = true;
  }, 50);

  const annotationObserverOptions = {
    threshold: 0.6,
    rootMargin: '-15% 0px -15% 0px',
  };

  const annotationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('data-section');
      if (id && id in annotations.value) {
        annotations.value[id as keyof typeof annotations.value] = entry.isIntersecting;
      }
    });
  }, annotationObserverOptions);

  const scrollObserverOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px',
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, scrollObserverOptions);

  setTimeout(() => {
    document.querySelectorAll('[data-section]').forEach((section) => {
      annotationObserver.observe(section);
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      scrollObserver.observe(el);
    });
  }, 100);

});

const hoverTimers = new Map<string, NodeJS.Timeout>();

function scrollToNextSection() {
  const featuresSection = document.querySelector('.features-section');
  if (featuresSection) {
    featuresSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

function schedulePrefetch(url: string) {
  const timer = hoverTimers.get(url);
  if (timer) clearTimeout(timer);

  const newTimer = setTimeout(() => {
    prefetchPage(url);
    hoverTimers.delete(url);
  }, 100);

  hoverTimers.set(url, newTimer);
}

function cancelPrefetch(url: string) {
  const timer = hoverTimers.get(url);
  if (timer) {
    clearTimeout(timer);
    hoverTimers.delete(url);
  }
}

function prefetchPage(url: string, retries = 3) {
  const fullUrl = new URL(url, window.location.href).href;

  fetch(fullUrl, { mode: 'no-cors' })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    })
    .catch((err) => {
      console.error(`[Prefetch] Error al cargar: ${fullUrl}`, err);

      if (retries > 0) {
        setTimeout(() => prefetchPage(url, retries - 1), 1000);
      }
    });
}

onUnmounted(() => {
  hoverTimers.forEach((timer) => clearTimeout(timer));
});
</script>

<template>
  <div
    class="home-terminal"
    :class="{ visible: isVisible }"
  >
    <section
      class="hero-section"
      data-section="hero"
    >
      <div class="hero-content">
        <div class="system-header">
          <div class="header-line"></div>
          <span class="system-label">SYSTEM INITIALIZATION</span>
          <div class="header-line"></div>
        </div>

        <div class="logo-container">
          <a
            v-if="images.length > 0"
            :href="images[0].link"
            target="_blank"
            rel="noopener noreferrer"
            class="hero-logo-link"
          >
            <img
              :src="images[0].img"
              :alt="images[0].imgAlt"
              class="hero-logo"
            />
          </a>
        </div>

        <h1 class="hero-title">
          <span class="title-main">ROYAL SPACE SOCIETY</span>
        </h1>

        <div class="hero-divider">
          <div class="divider-line"></div>
          <span class="divider-text">WIKI PAGE CREATOR</span>
          <div class="divider-line"></div>
        </div>

        <p class="hero-description">
          Sistema de documentación de grado militar para los descubrimientos en No Man's Sky
        </p>

        <div class="system-status">
          <span class="status-dot"></span>
          <span class="status-text">SYSTEM ONLINE</span>
          <span class="status-id">NODE: RSS-HUB-01</span>
        </div>

        <div
          class="scroll-indicator"
          @click="scrollToNextSection"
        >
          <span class="scroll-text">SCROLL DOWN</span>
          <span class="scroll-arrow">&#9660;</span>
        </div>
      </div>
    </section>

    <section
      class="features-section"
      data-section="features"
    >
      <div class="section-header">
        <div class="header-line"></div>
        <h2 class="section-title animate-on-scroll">
          <span class="title-prefix">//</span> MÓDULOS DE CREACIÓN DE DOCUMENTOS
        </h2>
        <div class="header-line"></div>
      </div>

      <div class="features-grid">
        <a
          v-for="(link, index) in links"
          :key="index"
          :href="link.url"
          class="feature-card animate-on-scroll"
          :style="{ transitionDelay: `${index * 0.03}s` }"
          @mouseenter="schedulePrefetch(link.url)"
          @mouseleave="cancelPrefetch(link.url)"
        >
          <div class="card-corner top-left"></div>
          <div class="card-corner top-right"></div>
          <div class="card-corner bottom-left"></div>
          <div class="card-corner bottom-right"></div>
          <div class="card-content">
            <div class="card-image-wrapper">
              <img
                :src="link.img"
                :alt="link.imgAlt"
                class="card-image"
              />
            </div>
            <h3 class="card-title">{{ link.text }}</h3>
          </div>
        </a>
      </div>
    </section>

    <section class="credits-section">
      <div class="credits-card animate-on-scroll">
        <span class="credits-label">DISEÑO DE ICONOS POR</span>
        <a
          href="https://bit0esp.duckdns.org/quien-soy.html"
          target="_blank"
          class="credits-link"
        >
          BIT_0
        </a>
      </div>
    </section>

    <section
      class="tools-section"
      data-section="tools"
    >
      <div class="section-header">
        <div class="header-line"></div>
        <h2 class="section-title animate-on-scroll"><span class="title-prefix">//</span> UTILIDADES ESENCIALES</h2>
        <div class="header-line"></div>
      </div>

      <div class="tools-grid">
        <a
          v-for="(tool, index) in tools"
          :key="index"
          :href="tool.url"
          :target="tool.external ? '_blank' : '_self'"
          :rel="tool.external ? 'noopener noreferrer' : ''"
          class="tool-card animate-on-scroll"
          :style="{ transitionDelay: `${index * 0.04}s` }"
        >
          <div class="card-corner top-left"></div>
          <div class="card-corner top-right"></div>
          <div class="card-corner bottom-left"></div>
          <div class="card-corner bottom-right"></div>
          <div class="tool-icon-wrapper">
            <i
              :class="tool.icon"
              class="tool-icon"
            ></i>
            <span
              v-if="tool.external"
              class="external-badge"
            >
              EXT
            </span>
          </div>
          <h3 class="tool-name">{{ tool.name }}</h3>
          <p class="tool-description">{{ tool.description }}</p>
        </a>
      </div>
    </section>

    <section
      class="resources-section"
      data-section="resources"
    >
      <div class="section-header">
        <div class="header-line"></div>
        <h2 class="section-title animate-on-scroll"><span class="title-prefix">//</span> RECURSOS DE LA COMUNIDAD</h2>
        <div class="header-line"></div>
      </div>

      <div class="resources-grid">
        <a
          v-for="(resource, index) in resources"
          :key="index"
          :href="resource.url"
          target="_blank"
          rel="noopener noreferrer"
          class="resource-card animate-on-scroll"
          :style="{ transitionDelay: `${index * 0.03}s` }"
        >
          <div class="card-corner top-left"></div>
          <div class="card-corner top-right"></div>
          <div class="card-corner bottom-left"></div>
          <div class="card-corner bottom-right"></div>
          <div class="resource-header">
            <i
              :class="resource.icon"
              class="resource-icon"
            ></i>
            <span class="resource-category">{{ resource.category }}</span>
          </div>
          <h3 class="resource-title">{{ resource.title }}</h3>
          <p class="resource-description">{{ resource.description }}</p>
        </a>
      </div>
    </section>

    <section
      class="community-section"
      data-section="community"
    >
      <div class="section-header">
        <div class="header-line"></div>
        <h2 class="section-title animate-on-scroll"><span class="title-prefix">//</span> ÚNETE AL HUB</h2>
        <div class="header-line"></div>
      </div>

      <div class="community-grid">
        <a
          href="https://discord.gg/oskar1up"
          target="_blank"
          rel="noopener noreferrer"
          class="community-card discord-card animate-on-scroll"
        >
          <div class="card-corner top-left"></div>
          <div class="card-corner top-right"></div>
          <div class="card-corner bottom-left"></div>
          <div class="card-corner bottom-right"></div>
          <div class="community-icon-wrapper">
            <i class="pi pi-bolt community-icon"></i>
          </div>
          <h3>DISCORD</h3>
          <p>Canal de comunicación en tiempo real</p>
          <span class="community-badge">MÁS ACTIVO</span>
        </a>

        <a
          href="https://x.com/RoyalSpaceHub"
          target="_blank"
          rel="noopener noreferrer"
          class="community-card twitter-card animate-on-scroll"
          style="transition-delay: 0.05s"
        >
          <div class="card-corner top-left"></div>
          <div class="card-corner top-right"></div>
          <div class="card-corner bottom-left"></div>
          <div class="card-corner bottom-right"></div>
          <div class="community-icon-wrapper">
            <i class="pi pi-sort-alt-slash community-icon"></i>
          </div>
          <h3>TWITTER/X</h3>
          <p>Últimas noticias y actualizaciones</p>
          <span class="community-badge">FEED DE NOTICIAS</span>
        </a>

        <a
          href="https://www.reddit.com/r/NMS_RSS/"
          target="_blank"
          rel="noopener noreferrer"
          class="community-card reddit-card animate-on-scroll"
          style="transition-delay: 0.1s"
        >
          <div class="card-corner top-left"></div>
          <div class="card-corner top-right"></div>
          <div class="card-corner bottom-left"></div>
          <div class="card-corner bottom-right"></div>
          <div class="community-icon-wrapper">
            <i class="pi pi-comments community-icon"></i>
          </div>
          <h3>REDDIT</h3>
          <p>Discusiones de la comunidad</p>
          <span class="community-badge">FOROS</span>
        </a>
      </div>
    </section>

    <section class="about-section">
      <div class="about-card animate-on-scroll">
        <div class="card-corner top-left"></div>
        <div class="card-corner top-right"></div>
        <div class="card-corner bottom-left"></div>
        <div class="card-corner bottom-right"></div>
        <div class="about-icon">
          <i class="pi pi-users"></i>
        </div>
        <h3 class="about-title">ACERCA DE LA ROYAL SPACE SOCIETY</h3>
        <p class="about-text">
          Una civilización dedicada a explorar y documentar descubrimientos en el universo de No Man's Sky
        </p>
        <a
          href="https://nomanssky.fandom.com/es/wiki/Royal_Space_Society"
          target="_blank"
          rel="noopener noreferrer"
          class="about-link"
        >
          ACCESS WIKI
          <span class="link-arrow">&#9654;</span>
        </a>
      </div>
    </section>

    <ScrollToTop />
  </div>
</template>

<style scoped lang="scss">
.home-terminal {
  font-family: 'Rajdhani', sans-serif;
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  position: relative;
  color: #ffffff;

  &.visible {
    opacity: 1;
    transform: none;
  }
}

.hero-section {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 4rem;
  background: transparent;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 900px;
  padding: 2rem;
}

.system-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.header-line {
  flex: 1;
  max-width: 100px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 26, 26, 0.5), transparent);
}

.system-label {
  font-family: 'Orbitron', monospace;
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: rgba(255, 26, 26, 0.7);
}

.logo-container {
  margin-bottom: 2rem;
}

.hero-logo-link {
  display: inline-block;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 20px rgba(255, 26, 26, 0.4));
  }
}

.hero-logo {
  height: 120px;
  width: auto;
  filter: drop-shadow(0 0 20px rgba(255, 26, 26, 0.3));
}

.hero-title {
  margin: 0 0 1.5rem;
}

.title-main {
  font-family: 'Orbitron', monospace;
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ff0000;
  // color: #ffffff;
  text-shadow: 0 0 30px rgba(255, 26, 26, 0.3);
}

.hero-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.divider-line {
  flex: 1;
  max-width: 80px;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
}

.divider-text {
  font-family: 'Orbitron', monospace;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: rgba(255, 255, 255, 0.6);
}

.hero-description {
  font-family: 'Share Tech Mono', monospace;
  font-size: clamp(0.85rem, 1.5vw, 1rem);
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.system-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.status-dot {
  width: 6px;
  height: 6px;
  background: #66ff66;
  border-radius: 50%;
  animation: pulse-green 2s infinite;
  box-shadow: 0 0 10px rgba(102, 255, 102, 0.5);
}

.status-text {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.7rem;
  color: #66ff66;
  letter-spacing: 0.15em;
}

.status-id {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.1em;
}

.scroll-indicator {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    .scroll-text {
      color: #ff1a1a;
    }
    .scroll-arrow {
      color: #ff1a1a;
    }
  }
}

.scroll-text {
  font-family: 'Orbitron', monospace;
  font-size: 0.55rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
}

.scroll-arrow {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.4);
  animation: bounce-arrow 2s infinite;
  transition: all 0.3s ease;
}

@keyframes bounce-arrow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
}

@keyframes pulse-green {
  0%,
  100% {
    box-shadow: 0 0 5px rgba(102, 255, 102, 0.3);
  }
  50% {
    box-shadow: 0 0 15px rgba(102, 255, 102, 0.6);
  }
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.section-title {
  font-family: 'Orbitron', monospace;
  font-size: clamp(0.8rem, 2vw, 1.1rem);
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  white-space: nowrap;
}

.title-prefix {
  color: #ff1a1a;
  margin-right: 0.5rem;
}

.features-section {
  max-width: 1400px;
  margin: 0 auto 6rem;
  padding: 2rem 1.5rem 4rem;
  position: relative;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
}

.feature-card {
  position: relative;
  background: rgba(10, 10, 10, 0.65);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 1.5rem;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
  overflow: hidden;

  &:hover {
    border-color: rgba(255, 26, 26, 0.5);
    background: rgba(255, 26, 26, 0.05);
    box-shadow: 0 0 20px rgba(255, 26, 26, 0.1);

    .card-image {
      transform: scale(1.05);
    }

    .card-corner {
      opacity: 1;
    }
  }
}

.card-corner {
  position: absolute;
  width: 12px;
  height: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;

  &.top-left {
    top: -1px;
    left: -1px;
    border-top: 2px solid #ff1a1a;
    border-left: 2px solid #ff1a1a;
  }

  &.top-right {
    top: -1px;
    right: -1px;
    border-top: 2px solid #ff1a1a;
    border-right: 2px solid #ff1a1a;
  }

  &.bottom-left {
    bottom: -1px;
    left: -1px;
    border-bottom: 2px solid #ff1a1a;
    border-left: 2px solid #ff1a1a;
  }

  &.bottom-right {
    bottom: -1px;
    right: -1px;
    border-bottom: 2px solid #ff1a1a;
    border-right: 2px solid #ff1a1a;
  }
}

.card-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.card-image-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(5, 5, 5, 0.5);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
  transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
  filter: brightness(0.9);

  &:hover {
    filter: brightness(1);
  }
}

.card-title {
  font-family: 'Orbitron', monospace;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
}

.credits-section {
  max-width: 600px;
  margin: -8rem auto 4rem;
  padding: 2rem 1.5rem;
  text-align: center;
}

.credits-card {
  background: rgba(10, 10, 10, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.credits-label {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

.credits-link {
  font-family: 'Orbitron', monospace;
  font-size: 0.7rem;
  font-weight: 700;
  color: #ff1a1a;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;

  &:hover {
    color: #ff3333;
    text-shadow: 0 0 10px rgba(255, 26, 26, 0.5);
  }
}

.tools-section {
  max-width: 1400px;
  margin: 0 auto 6rem;
  padding: 2rem 1.5rem 4rem;
  position: relative;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
}

.tool-card {
  position: relative;
  background: rgba(10, 10, 10, 0.65);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 1.5rem;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    border-color: rgba(255, 26, 26, 0.5);
    background: rgba(255, 26, 26, 0.05);
    box-shadow: 0 0 20px rgba(255, 26, 26, 0.1);

    .tool-icon {
      color: #ff1a1a;
    }

    .card-corner {
      opacity: 1;
    }
  }
}

.tool-icon-wrapper {
  position: relative;
  margin-bottom: 1rem;
}

.tool-icon {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
}

.external-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: rgba(255, 26, 26, 0.2);
  border: 1px solid rgba(255, 26, 26, 0.5);
  color: #ff1a1a;
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.5rem;
  padding: 0.15rem 0.3rem;
  letter-spacing: 0.1em;
}

.tool-name {
  font-family: 'Orbitron', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.tool-description {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  line-height: 1.5;
}

.resources-section {
  max-width: 1400px;
  margin: 0 auto 6rem;
  padding: 2rem 1.5rem 4rem;
  position: relative;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
}

.resource-card {
  position: relative;
  background: rgba(10, 10, 10, 0.65);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 1.25rem;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    border-color: rgba(255, 26, 26, 0.5);
    background: rgba(255, 26, 26, 0.05);
    box-shadow: 0 0 20px rgba(255, 26, 26, 0.1);

    .card-corner {
      opacity: 1;
    }
  }
}

.resource-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.resource-icon {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
}

.resource-category {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.55rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ff1a1a;
  background: rgba(255, 26, 26, 0.1);
  padding: 0.2rem 0.5rem;
  border: 1px solid rgba(255, 26, 26, 0.3);
}

.resource-title {
  font-family: 'Orbitron', monospace;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.4rem;
  color: rgba(255, 255, 255, 0.9);
}

.resource-description {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  line-height: 1.4;
}

.community-section {
  max-width: 1200px;
  margin: 0 auto 6rem;
  padding: 2rem 1.5rem 4rem;
  position: relative;
}

.community-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
}

.community-card {
  position: relative;
  background: rgba(10, 10, 10, 0.65);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 2rem 1.5rem;
  text-decoration: none;
  color: #ffffff;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    border-color: rgba(255, 26, 26, 0.5);
    background: rgba(255, 26, 26, 0.05);
    box-shadow: 0 0 20px rgba(255, 26, 26, 0.1);

    .community-icon {
      color: #ff1a1a;
    }

    .card-corner {
      opacity: 1;
    }
  }

  h3 {
    font-family: 'Orbitron', monospace;
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin: 1rem 0 0.5rem;
    color: rgba(255, 255, 255, 0.9);
  }

  p {
    font-family: 'Rajdhani', sans-serif;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.5);
    margin: 0 0 1rem;
    line-height: 1.5;
  }
}

.community-icon-wrapper {
  margin-bottom: 0.5rem;
}

.community-icon {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.community-badge {
  display: inline-block;
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.55rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #66ff66;
  background: rgba(102, 255, 102, 0.1);
  padding: 0.3rem 0.75rem;
  border: 1px solid rgba(102, 255, 102, 0.3);
}

.about-section {
  max-width: 800px;
  margin: 0 auto 4rem;
  padding: 2rem 1.5rem;
}

.about-card {
  background: rgba(10, 10, 10, 0.65);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 2.5rem 2rem;
  text-align: center;
  position: relative;
}

.about-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.25rem;
  background: rgba(255, 26, 26, 0.1);
  border: 1px solid rgba(255, 26, 26, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: #ff1a1a;
}

.about-title {
  font-family: 'Orbitron', monospace;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.about-text {
  font-family: 'Rajdhani', sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 1.5rem;
  line-height: 1.6;
}

.about-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #ff1a1a;
  color: #ffffff;
  text-decoration: none;
  font-family: 'Orbitron', monospace;
  font-weight: 700;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transition: all 0.3s ease;

  &:hover {
    background: #ff3333;
    box-shadow: 0 0 15px rgba(255, 26, 26, 0.4);
  }
}

.link-arrow {
  font-size: 0.6rem;
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.5s cubic-bezier(0.22, 0.61, 0.36, 1),
    transform 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  will-change: opacity, transform;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 70vh;
  }

  .hero-logo {
    height: 80px;
  }

  .features-grid,
  .tools-grid,
  .resources-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .community-grid {
    grid-template-columns: 1fr;
  }

  .about-card {
    padding: 2rem 1.5rem;
  }

  .section-header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .header-line {
    display: none;
  }
}

@media (max-width: 480px) {
  .features-grid,
  .tools-grid,
  .resources-grid {
    grid-template-columns: 1fr;
  }

  .hero-content {
    padding: 1rem;
  }

  .system-status {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
