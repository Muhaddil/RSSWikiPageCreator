<script setup lang="ts">
import type { CivImageProps, PageLinkProps } from '@/types/homePageProps';
import { reactive, onMounted, onUnmounted, ref } from 'vue';

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
const showScrollTop = ref(false);

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

  const handleScroll = () => {
    showScrollTop.value = window.scrollY > 500;
  };

  window.addEventListener('scroll', handleScroll);

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});

const hoverTimers = new Map<string, NodeJS.Timeout>();

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

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
  <div class="landing-page" :class="{ visible: isVisible }">
    <section class="hero-section" data-section="hero">
      <!-- <div class="hero-background">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
      </div> -->

      <div class="hero-content">
        <div class="logo-container">
          <a v-if="images.length > 0" :href="images[0].link" target="_blank" rel="noopener noreferrer"
            class="hero-logo-link">
            <img :src="images[0].img" :alt="images[0].imgAlt" class="hero-logo" />
          </a>
        </div>

        <h1 class="hero-title">
          <span class="gradient-text">Royal Space Society</span>
        </h1>

        <h2 class="hero-subtitle">Creador de Páginas Wiki</h2>

        <p class="hero-description">
          Genera fácilmente el código wiki para crear páginas de descubrimiento en No Man's Sky Wiki
        </p>

        <div class="hero-cta" @click="scrollToNextSection">
          <i class="pi pi-arrow-down pulse-icon"></i>
        </div>
      </div>
    </section>

    <section class="features-section" data-section="features">
      <h2 class="section-title animate-on-scroll">
        <span class="title-accent">Crea</span> páginas para tus descubrimientos
      </h2>

      <div class="features-grid">
        <a v-for="(link, index) in links" :key="index" :href="link.url" class="feature-card animate-on-scroll"
          :style="{ transitionDelay: `${index * 0.03}s` }" @mouseenter="schedulePrefetch(link.url)"
          @mouseleave="cancelPrefetch(link.url)">
          <div class="card-glow"></div>
          <div class="card-content">
            <div class="card-image-wrapper">
              <img :src="link.img" :alt="link.imgAlt" class="card-image" />
            </div>
            <h3 class="card-title">{{ link.text }}</h3>
          </div>
          <div class="card-shine"></div>
        </a>
      </div>
    </section>

    <section class="tools-section" data-section="tools">
      <h2 class="section-title animate-on-scroll">
        <span class="title-accent tools-accent">Herramientas</span> esenciales
      </h2>

      <div class="tools-grid">
        <a v-for="(tool, index) in tools" :key="index" :href="tool.url" :target="tool.external ? '_blank' : '_self'"
          :rel="tool.external ? 'noopener noreferrer' : ''" class="tool-card animate-on-scroll"
          :style="{ transitionDelay: `${index * 0.04}s` }">
          <div class="tool-icon-wrapper">
            <i :class="tool.icon" class="tool-icon"></i>
            <span v-if="tool.external" class="external-badge">
              <i class="pi pi-external-link"></i>
            </span>
          </div>
          <h3 class="tool-name">{{ tool.name }}</h3>
          <p class="tool-description">{{ tool.description }}</p>
        </a>
      </div>
    </section>

    <section class="resources-section" data-section="resources">
      <h2 class="section-title animate-on-scroll">
        <span class="title-accent resources-accent">Recursos</span> de la comunidad
      </h2>

      <div class="resources-grid">
        <a v-for="(resource, index) in resources" :key="index" :href="resource.url" target="_blank"
          rel="noopener noreferrer" class="resource-card animate-on-scroll"
          :style="{ transitionDelay: `${index * 0.03}s` }">
          <div class="resource-header">
            <i :class="resource.icon" class="resource-icon"></i>
            <span class="resource-category">{{ resource.category }}</span>
          </div>
          <h3 class="resource-title">{{ resource.title }}</h3>
          <p class="resource-description">{{ resource.description }}</p>
        </a>
      </div>
    </section>

    <section class="community-section" data-section="community">
      <h2 class="section-title animate-on-scroll">
        <span class="title-accent community-accent">Únete</span> a la comunidad
      </h2>

      <div class="community-grid">
        <a href="https://discord.gg/oskar1up" target="_blank" rel="noopener noreferrer"
          class="community-card discord-card animate-on-scroll">
          <i class="pi pi-bolt community-icon"></i>
          <h3>Discord</h3>
          <p>Únete a nuestro servidor de Discord para chatear con otros exploradores</p>
          <span class="community-badge">Más activo</span>
        </a>

        <a href="https://x.com/RoyalSpaceHub" target="_blank" rel="noopener noreferrer"
          class="community-card twitter-card animate-on-scroll" style="transition-delay: 0.05s">
          <i class="pi pi-sort-alt-slash community-icon"></i>
          <h3>Twitter/X</h3>
          <p>Síguenos para las últimas noticias y actualizaciones de la RSS</p>
          <span class="community-badge">Noticias</span>
        </a>

        <a href="https://www.reddit.com/r/NMS_RSS/" target="_blank" rel="noopener noreferrer"
          class="community-card reddit-card animate-on-scroll" style="transition-delay: 0.1s">
          <i class="pi pi-comments community-icon"></i>
          <h3>Reddit</h3>
          <p>Participa en discusiones y comparte tus descubrimientos</p>
          <span class="community-badge">Debates</span>
        </a>
      </div>
    </section>

    <section class="about-section">
      <div class="about-card animate-on-scroll">
        <div class="about-icon">
          <i class="pi pi-users"></i>
        </div>
        <h3 class="about-title">Sobre Royal Space Society</h3>
        <p class="about-text">
          Una civilización dedicada a explorar y documentar los descubrimientos en el universo de No Man's Sky
        </p>
        <a href="https://nomanssky.fandom.com/es/wiki/Royal_Space_Society" target="_blank" rel="noopener noreferrer"
          class="about-link">
          Visitar Wiki
          <i class="pi pi-external-link"></i>
        </a>
      </div>
    </section>

    <!-- <div class="annotations-container">
      <transition name="annotation-fade">
        <div v-if="annotations.hero" class="scroll-annotation annotation-right">
          <div class="annotation-icon">
            <i class="pi pi-star-fill"></i>
          </div>
          <div class="annotation-content">
            <h4>Bienvenido</h4>
            <p>El creador de páginas wiki más completo para No Man's Sky</p>
          </div>
        </div>
      </transition>

      <transition name="annotation-fade">
        <div v-if="annotations.features" class="scroll-annotation annotation-left">
          <div class="annotation-icon">
            <i class="pi pi-pencil"></i>
          </div>
          <div class="annotation-content">
            <h4>Herramientas de Creación</h4>
            <p>16 tipos diferentes de páginas para documentar todos tus hallazgos</p>
          </div>
        </div>
      </transition>

      <transition name="annotation-fade">
        <div v-if="annotations.tools" class="scroll-annotation annotation-right">
          <div class="annotation-icon tools-icon">
            <i class="pi pi-wrench"></i>
          </div>
          <div class="annotation-content">
            <h4>Utilidades Esenciales</h4>
            <p>Herramientas para facilitar tu trabajo en la wiki</p>
          </div>
        </div>
      </transition>

      <transition name="annotation-fade">
        <div v-if="annotations.resources" class="scroll-annotation annotation-left">
          <div class="annotation-icon resources-icon">
            <i class="pi pi-book"></i>
          </div>
          <div class="annotation-content">
            <h4>Recursos de la Comunidad</h4>
            <p>Todos los enlaces importantes en un solo lugar</p>
          </div>
        </div>
      </transition>

      <transition name="annotation-fade">
        <div v-if="annotations.community" class="scroll-annotation annotation-right">
          <div class="annotation-icon community-icon">
            <i class="pi pi-users"></i>
          </div>
          <div class="annotation-content">
            <h4>Únete a Nosotros</h4>
            <p>Forma parte de la comunidad más activa de exploradores</p>
          </div>
        </div>
      </transition>
    </div> -->

    <transition name="fade-scale">
      <button v-if="showScrollTop" @click="scrollToTop" class="scroll-to-top" aria-label="Volver arriba">
        <i class="pi pi-arrow-up"></i>
      </button>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.landing-page {
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  position: relative;

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

.hero-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
  opacity: 0.3;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  animation: float 20s infinite ease-in-out;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%);
  top: -10%;
  left: -10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%);
  bottom: -10%;
  right: -10%;
  animation-delay: -7s;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -14s;
}

@keyframes float {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  33% {
    transform: translate(30px, -30px) scale(1.1);
  }

  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 900px;
  padding: 2rem;
}

.logo-container {
  margin-bottom: 2rem;
  animation: fadeInDown 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.hero-logo-link {
  display: inline-block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
}

.hero-logo {
  height: 120px;
  width: auto;
  filter: drop-shadow(0 0 30px rgba(139, 92, 246, 0.5));
  animation: glow-pulse 3s infinite;
}

@keyframes glow-pulse {

  0%,
  100% {
    filter: drop-shadow(0 0 30px rgba(139, 92, 246, 0.5));
  }

  50% {
    filter: drop-shadow(0 0 50px rgba(139, 92, 246, 0.8));
  }
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  margin: 0 0 1rem;
  line-height: 1.1;
  animation: fadeInUp 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) 0.1s both;
}

.gradient-text {
  background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #a855f7 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 8s ease infinite;
}

@keyframes gradient-shift {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

.hero-subtitle {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 600;
  margin: 0 0 1.5rem;
  color: var(--text-color);
  animation: fadeInUp 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) 0.2s both;
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--text-color-secondary);
  margin: 0 0 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: fadeInUp 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) 0.3s both;
}

.hero-cta {
  animation: fadeInUp 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) 0.4s both;
  cursor: pointer;
  display: inline-block;
  padding: 1rem;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(139, 92, 246, 0.1);
    transform: scale(1.1);

    .pulse-icon {
      color: #7c3aed;
    }
  }

  &:active {
    transform: scale(0.95);
  }
}

.pulse-icon {
  font-size: 2rem;
  color: #8b5cf6;
  animation: bounce 2s infinite;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.features-section {
  max-width: 1400px;
  margin: 0 auto 6rem;
  padding: 2rem 1.5rem 4rem;
  position: relative;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin: 0 0 3rem;
  color: var(--text-color);
}

.title-accent {
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tools-accent {
  background: linear-gradient(135deg, #06b6d4, #0891b2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.resources-accent {
  background: linear-gradient(135deg, #10b981, #059669);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.community-accent {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
}

.feature-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
  overflow: hidden;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(139, 92, 246, 0.5);
    box-shadow:
      0 20px 60px rgba(139, 92, 246, 0.2),
      0 0 0 1px rgba(139, 92, 246, 0.1) inset;

    .card-glow {
      opacity: 1;
    }

    .card-image {
      transform: scale(1.1);
    }

    .card-shine {
      left: 100%;
    }
  }
}

.card-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6, #a855f7);
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
  filter: blur(20px);
}

.card-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.card-image-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
  transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
  color: var(--text-color);
}

.card-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s ease;
  pointer-events: none;
}

.tools-section {
  max-width: 1400px;
  margin: 0 auto 6rem;
  padding: 2rem 1.5rem 4rem;
  position: relative;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
}

.tool-card {
  position: relative;
  background: rgba(6, 182, 212, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 16px;
  padding: 2rem;
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(6, 182, 212, 0.5);
    box-shadow: 0 15px 40px rgba(6, 182, 212, 0.2);
    background: rgba(6, 182, 212, 0.08);

    .tool-icon {
      transform: scale(1.1) rotate(5deg);
    }
  }
}

.tool-icon-wrapper {
  position: relative;
  width: 70px;
  height: 70px;
  margin-bottom: 1.5rem;
}

.tool-icon {
  font-size: 2.5rem;
  color: #06b6d4;
  transition: transform 0.3s ease;
}

.external-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: linear-gradient(135deg, #06b6d4, #0891b2);
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  box-shadow: 0 2px 8px rgba(6, 182, 212, 0.4);
}

.tool-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
  color: var(--text-color);
}

.tool-description {
  font-size: 0.95rem;
  color: var(--text-color-secondary);
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
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
}

.resource-card {
  position: relative;
  background: rgba(16, 185, 129, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(16, 185, 129, 0.5);
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.15);
    background: rgba(16, 185, 129, 0.08);
  }
}

.resource-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.resource-icon {
  font-size: 1.8rem;
  color: #10b981;
}

.resource-category {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #10b981;
  background: rgba(16, 185, 129, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.resource-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: var(--text-color);
}

.resource-description {
  font-size: 0.9rem;
  color: var(--text-color-secondary);
  margin: 0;
  line-height: 1.5;
}

.community-section {
  max-width: 1200px;
  margin: 0 auto 6rem;
  padding: 2rem 1.5rem 4rem;
  position: relative;
}

.community-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
}

.community-card {
  position: relative;
  background: rgba(245, 158, 11, 0.05);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(245, 158, 11, 0.2);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-decoration: none;
  color: var(--text-color);
  text-align: center;
  transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #f59e0b, #d97706);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(245, 158, 11, 0.5);
    box-shadow: 0 20px 50px rgba(245, 158, 11, 0.2);

    &::before {
      opacity: 1;
    }

    .community-icon {
      transform: scale(1.15) rotate(5deg);
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem 0;
    color: var(--text-color);
  }

  p {
    font-size: 1rem;
    color: var(--text-color-secondary);
    margin: 0 0 1.5rem;
    line-height: 1.6;
  }
}

.community-icon {
  font-size: 3rem;
  color: #f59e0b;
  transition: transform 0.3s ease;
}

.community-badge {
  display: inline-block;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}

.scroll-annotation {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(139, 92, 246, 0.3);
  border-radius: 16px;
  padding: 1.5rem;
  max-width: 280px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  z-index: 100;

  .theme-dark & {
    background: rgba(26, 31, 45, 0.95);
    border-color: rgba(139, 92, 246, 0.4);
  }
}

.annotation-right {
  right: 2rem;
}

.annotation-left {
  left: 2rem;
}

.annotation-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);

  i {
    font-size: 1.5rem;
    color: white;
  }

  &.tools-icon {
    background: linear-gradient(135deg, #06b6d4, #0891b2);
    box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3);
  }

  &.resources-icon {
    background: linear-gradient(135deg, #10b981, #059669);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  }

  &.community-icon {
    background: linear-gradient(135deg, #f59e0b, #d97706);
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
  }
}

.annotation-content {
  h4 {
    font-size: 1.125rem;
    font-weight: 700;
    margin: 0 0 0.5rem;
    color: var(--text-color);
  }

  p {
    font-size: 0.9rem;
    color: var(--text-color-secondary);
    margin: 0;
    line-height: 1.5;
  }
}

.annotation-fade-enter-active,
.annotation-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.annotation-fade-enter-from {
  opacity: 0;
  transform: translateY(-50%) translateX(20px);
}

.annotation-fade-leave-to {
  opacity: 0;
  transform: translateY(-50%) translateX(-20px);
}

.about-section {
  max-width: 800px;
  margin: 0 auto 6rem;
  padding: 2rem 1.5rem;
}

.about-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #8b5cf6, #3b82f6, #a855f7);
    background-size: 200% 100%;
    animation: gradient-slide 3s linear infinite;
  }
}

@keyframes gradient-slide {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 200% 50%;
  }
}

.about-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
}

.about-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1rem;
  color: var(--text-color);
}

.about-text {
  font-size: 1.125rem;
  color: var(--text-color-secondary);
  margin: 0 0 2rem;
  line-height: 1.7;
}

.about-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(139, 92, 246, 0.4);
    background: linear-gradient(135deg, #7c3aed, #2563eb);
  }

  &:active {
    transform: translateY(0);
  }
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px) scale(0.96);
  transition:
    opacity 0.6s cubic-bezier(0.22, 0.61, 0.36, 1),
    transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
  will-change: opacity, transform;

  &.is-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.4);
  transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-4px) scale(1.1);
    box-shadow: 0 8px 30px rgba(139, 92, 246, 0.6);
    background: linear-gradient(135deg, #7c3aed, #2563eb);
  }

  &:active {
    transform: translateY(-2px) scale(1.05);
  }

  i {
    animation: bounce-arrow 2s infinite;
  }
}

@keyframes bounce-arrow {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-4px);
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

@media (max-width: 1920px) {
  .scroll-annotation {
    max-width: 220px;
    padding: 1.25rem;

    &.annotation-right {
      right: 1rem;
    }

    &.annotation-left {
      left: 1rem;
    }
  }

  .annotation-icon {
    width: 42px;
    height: 42px;
    margin-bottom: 0.75rem;

    i {
      font-size: 1.25rem;
    }
  }

  .annotation-content {
    h4 {
      font-size: 1rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
}

@media (max-width: 1600px) {
  .scroll-annotation {
    max-width: 200px;
    padding: 1rem;

    &.annotation-right {
      right: 0.5rem;
    }

    &.annotation-left {
      left: 0.5rem;
    }
  }

  .annotation-icon {
    width: 38px;
    height: 38px;
    margin-bottom: 0.5rem;

    i {
      font-size: 1.125rem;
    }
  }

  .annotation-content {
    h4 {
      font-size: 0.95rem;
    }

    p {
      font-size: 0.8rem;
      line-height: 1.4;
    }
  }
}

@media (max-width: 1400px) {
  .scroll-annotation {
    display: none;
  }
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
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.5rem;
  }

  .community-grid {
    grid-template-columns: 1fr;
  }

  .about-card {
    padding: 2rem 1.5rem;
  }

  .scroll-to-top {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 48px;
    height: 48px;
    font-size: 1.25rem;
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

  .scroll-to-top {
    bottom: 1rem;
    right: 1rem;
    width: 44px;
    height: 44px;
    font-size: 1.125rem;
  }
}
</style>
