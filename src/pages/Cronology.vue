<script setup lang="ts">
import { ref, computed } from 'vue';
import Timeline from 'primevue/timeline';
import Card from 'primevue/card';
// import Tag from 'primevue/tag';
import Panel from 'primevue/panel';

interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  category: string;
}

const events = ref<TimelineEvent[]>([
  {
    title: 'Futuro',
    date: '01 / 01 / 2025',
    description:
      'Se plantea el proyecto de las famosas 120 bases en el censo. ¡Proyecto para obtener el estatus de Nexo en la wiki!',
    category: 'Royal Space Society',
  },
  {
    title: 'Censo',
    date: '31 / 12 / 2024',
    description: 'Se consigue el máximo número de bases censadas, 58 bases.',
    category: 'Royal Space Society',
  },
  {
    title: 'Méritos',
    date: '08 / 02 / 2022',
    description:
      'La Royal Space Society obtiene su segunda estrella y obtiene el titulo de HUB-R al tener registradas 20 bases.',
    category: 'Royal Space Society',
  },
  {
    title: 'Méritos',
    date: '08 / 09 / 2021',
    description:
      'La Royal Space Society obtiene el titulo de HUB al alcanzar mas de 20 miembros y tener registrados mas de 20 sistemas en la wiki.',
    category: 'Royal Space Society',
  },
  {
    title: 'Capital',
    date: '01 / 06 / 2021',
    description: 'Construción de Mamadisimo City, capital de la RSS.',
    category: 'Royal Space Society',
  },
  {
    title: 'Fundación',
    date: '08 / 02 / 2020',
    description: 'Fundación de la Royal Space Society.',
    category: 'Royal Space Society',
  },
  {
    title: 'Descubrimiento',
    date: '25 / 01 / 2020',
    description: 'Descubrimiento de Urticalia por Kaos193, sistema elegido para ser la sede de la RSS.',
    category: 'Royal Space Society',
  },

  // Web Updates

  {
    title: '1.0.663',
    date: '09 / 09 / 2025',
    description: 'Se ha solucionado un problema y se ha actualizado una dependencia de la web.',
    category: 'Web',
  },
  {
    title: '1.0.662',
    date: '07 / 09 / 2025',
    description: 'Se ha solucionado un problema con los paneles de los cuadrantes de las regiones.',
    category: 'Web',
  },
  {
    title: '1.0.661',
    date: '07 / 09 / 2025',
    description: 'Se ha solucionado un problema con el nuevo apartado de corbetas.',
    category: 'Web',
  },
  {
    title: '1.0.66',
    date: '07 / 09 / 2025',
    description: 'Se ha añadido un nuevo apartado para poder subir las corbetas a la wiki.',
    category: 'Web',
  },
  {
    title: '1.0.65',
    date: '02 / 09 / 2025',
    description:
      'Se le ha realizado un lavado de cara al componente principal para que los anuncios, versión y actualización tengan una estética mejor, además de mejorar el funcionamiento del mismo.',
    category: 'Web',
  },
  {
    title: '1.0.6492',
    date: '01 / 09 / 2025',
    description: 'Se ha mejorado el sistema de obtención de anuncios.',
    category: 'Web',
  },
  {
    title: '1.0.6491',
    date: '01 / 09 / 2025',
    description: 'Se ha arreglado un error con el apartado de cronologías.',
    category: 'Web',
  },
  {
    title: '1.0.649',
    date: '01 / 09 / 2025',
    description: 'Se ha añadido un sistema de avisos para la web.',
    category: 'Web',
  },
  {
    title: '1.0.648',
    date: '01 / 09 / 2025',
    description: `• Se ha mejorado el sistema que muestra las correcciones en el apartado de últimas actualizaciones.
    • Se han actualizado varias dependencias de la web.`,
    category: 'Web',
  },
  {
    title: '1.0.647',
    date: '29 / 08 / 2025',
    description: 'Se ha añadido un nuevo tipo de filtro al apartado de sistemas de la RSS.',
    category: 'Web',
  },
  {
    title: '1.0.6464',
    date: '29 / 08 / 2025',
    description: 'Se han actualizado varias dependencias a sus últimas versiones.',
    category: 'Web',
  },
  {
    title: '1.0.6463',
    date: '26 / 08 / 2025',
    description: 'Se han actualizado varias dependencias a sus últimas versiones.',
    category: 'Web',
  },
  {
    title: '1.0.6462',
    date: '10 / 08 / 2025',
    description: 'Se han actualizado varias dependencias a sus últimas versiones.',
    category: 'Web',
  },
  {
    title: '1.0.6461',
    date: '10 / 08 / 2025',
    description: 'Se ha actualizado una dependencia a su última versión (node).',
    category: 'Web',
  },
  {
    title: '1.0.646',
    date: '08 / 08 / 2025',
    description: `Se actualizó la dependencia Vite a su versión 7.1.1.
    El resto de mejoras son para el apartado del censo de la RSS:
    • Se añadió paginación con opción de configurar el número de filas por página.
    • Se incorporó un botón para volver al inicio que aparece al hacer scroll.
    • Se mejoró el diseño y la disposición de la sección de filtros.`,
    category: 'Web',
  },
  {
    title: '1.0.645',
    date: '07 / 08 / 2025',
    description: 'Se ha actualizado una dependencia a su última versión (vite).',
    category: 'Web',
  },
  {
    title: '1.0.644',
    date: '05 / 08 / 2025',
    description: 'Se ha actualizado una dependencia a su última versión (node).',
    category: 'Web',
  },
  {
    title: '1.0.643',
    date: '03 / 08 / 2025',
    description: 'Se ha añadido un sistema de paginación para el apartado de todos los sistemas de la RSS.',
    category: 'Web',
  },
  {
    title: '1.0.642',
    date: '31 / 07 / 2025',
    description: 'Se ha añadido un sistema para filtrar por regiones en el apartado de sistemas.',
    category: 'Web',
  },
  {
    title: '1.0.641',
    date: '31 / 07 / 2025',
    description: 'Se han arreglado diversos problemas con la web de los sistemas.',
    category: 'Web',
  },
  {
    title: '1.0.64',
    date: '31 / 07 / 2025',
    description:
      'Se han actualizado las dependencias y se ha añadido una página para visualizar todos los sistemas de la RSS.',
    category: 'Web',
  },
  {
    title: '1.0.639-a3',
    date: '21 / 07 / 2025',
    description: 'Se han añadido nuevos botones para subir directamente arriba de la web.',
    category: 'Web',
  },
  {
    title: '1.0.639-a2',
    date: '14 / 07 / 2025',
    description: 'Se han actualizado varias dependencias de la web.',
    category: 'Web',
  },
  {
    title: '1.0.639-a1',
    date: '10 / 07 / 2025',
    description: 'Se han actualizado varias dependencias de la web para mejorar su estabilidad y velocidad.',
    category: 'Web',
  },
  {
    title: '1.0.639',
    date: '05 / 07 / 2025',
    description: 'Se ha una de las depencias más importantes de la web (vite).',
    category: 'Web',
  },
  {
    title: '1.0.638',
    date: '03 / 07 / 2025',
    description:
      'Se ha mejorado el mensaje de actualización de la web, detallando de que versión se pasa y a cual se va a ir.',
    category: 'Web',
  },
  {
    title: '1.0.637',
    date: '03 / 07 / 2025',
    description:
      'Se ha modificado la fecha de la última actualización en el apartado de actualizaciones del NMS, ahora mostrará la fecha de la última actualización.',
    category: 'Web',
  },
  {
    title: '1.0.636',
    date: '03 / 07 / 2025',
    description: 'Se han actualizado varias dependencias de la web para mejorar su estabilidad y velocidad.',
    category: 'Web',
  },
  {
    title: '1.0.635',
    date: '01 / 07 / 2025',
    description: 'Se han actualizado dos dependencias de la web (node y vue-tsc).',
    category: 'Web',
  },
  {
    title: '1.0.634',
    date: '28 / 06 / 2025',
    description: 'Se han actualizado dos dependencias de la web para mejorar su rendimiento y seguridad.',
    category: 'Web',
  },
  {
    title: '1.0.633',
    date: '26 / 06 / 2025',
    description: 'Se ha añadido una nueva región y se han actualizado las dependencias de la web.',
    category: 'Web',
  },
  {
    title: '1.0.632',
    date: '16 / 06 / 2025',
    description: 'Se ha actualizado una dependencia vital de la web.',
    category: 'Web',
  },
  {
    title: '1.0.631',
    date: '15 / 06 / 2025',
    description:
      'Se han actualizado las dependencias necesarias de la web y se ha mejorado el sistema encargado de los labels del apartado de RSSLinks.',
    category: 'Web',
  },
  {
    title: '1.0.63',
    date: '15 / 06 / 2025',
    description: 'Se ha realizado un lavado de cara al apartado de recursos estrategicos de la RSS.',
    category: 'Web',
  },
  {
    title: '1.0.6242',
    date: '15 / 06 / 2025',
    description: 'Se han actualizado las dependencias necesarias de la web.',
    category: 'Web',
  },
  {
    title: '1.0.6241',
    date: '08 / 06 / 2025',
    description:
      'Se ha añadido un nuevo parametro faltante para el sistema de minificado de la web al momento de subirse a GHub Pages.',
    category: 'Web',
  },
  {
    title: '1.0.624',
    date: '08 / 06 / 2025',
    description: 'Se ha sustituido el sistema de minificado de la web a la hora de subirse a GHub Pages.',
    category: 'Web',
  },
  {
    title: '1.0.623',
    date: '08 / 06 / 2025',
    description:
      'Se ha implementado un modal la primera vez que se suba una foto a la web, para que el usuario sepa que la imagen no se subirá a la wiki.',
    category: 'Web',
  },
  {
    title: '1.0.622',
    date: '07 / 06 / 2025',
    description:
      'Se ha implementado un nuevo sistema que permite visualizar la actividad más reciente en la wiki, tanto en su versión inglesa como en la española.',
    category: 'Web',
  },
  {
    title: '1.0.621',
    date: '07 / 06 / 2025',
    description: 'Se ha mejorado el mensaje de error al mandar los logs a discord.',
    category: 'Web',
  },
  {
    title: '1.0.62',
    date: '07 / 06 / 2025',
    description: 'Se ha mejorado el mensaje de aviso sobre las nuevas actualizaciones de la web.',
    category: 'Web',
  },
  {
    title: '1.0.61',
    date: '07 / 06 / 2025',
    description: 'Se ha corregido el nombre en español de las regiones Nebulosa de Gumita y Nebulosa de Emcalh.',
    category: 'Web',
  },
  {
    title: '1.0.6',
    date: '07 / 06 / 2025',
    description: 'Se ha añadido una nueva página para ver las últimas actualizaciones del NMS.',
    category: 'Web',
  },
  {
    title: '1.0.57',
    date: '06 / 06 / 2025',
    description:
      'Se ha añadido una nueva página de feedback para que los Viajeros de la RSS puedan dejar sus comentarios y feedback.',
    category: 'Web',
  },
  {
    title: '1.0.564',
    date: '05 / 06 / 2025',
    description: 'Se ha añadido la nueva región al apartado del generador de glifos.',
    category: 'Web',
  },
  {
    title: '1.0.563',
    date: '05 / 06 / 2025',
    description: 'Se ha arreglado un pequeño error con un "label" en la interfaz de usuario.',
    category: 'Web',
  },
  {
    title: '1.0.562',
    date: '05 / 06 / 2025',
    description: 'Se han actualizado las dependencias de la web.',
    category: 'Web',
  },
  {
    title: '1.0.561',
    date: '04 / 06 / 2025',
    description: 'Se han actualizado las dependencias y mejorado la descripción de la página del censo.',
    category: 'Web',
  },
  {
    title: '1.0.56',
    date: '31 / 05 / 2025',
    description: 'Se añadió una nueva región compatible con el creador de páginas de la RSS.',
    category: 'Web',
  },
  {
    title: '1.0.5582',
    date: '19 / 05 / 2025',
    description: 'Se arregló un error con el actualizador automático.',
    category: 'Web',
  },
  {
    title: '1.0.5581',
    date: '19 / 05 / 2025',
    description: 'Se actualizaron las dependencias.',
    category: 'Web',
  },
  {
    title: '1.0.558',
    date: '18 / 05 / 2025',
    description: 'Se añadió un nuevo sistema que permite conocer cuando la web se actualizó en tiempo real.',
    category: 'Web',
  },
  {
    title: '1.0.556',
    date: '11 / 05 / 2025',
    description:
      'Se añadió un nuevo apartado a la página de las regiones para mostrar las regiones que requieren de exploración.',
    category: 'Web',
  },
  {
    title: '1.0.555',
    date: '03 / 05 / 2025',
    description: 'Se añadieron muchas mas preguntas y respuestas al apartado de FAQs.',
    category: 'Web',
  },
  {
    title: '1.0.554',
    date: '02 / 04 / 2025',
    description: 'Se actualizaron las dependencias y se mejoró el apartado tarjetas de amigo de la RSS.',
    category: 'Web',
  },
  {
    title: '1.0.553',
    date: '27 / 03 / 2025',
    description: 'Se actualizaron las dependencias y se mejoró el apartado de preguntas frecuentes.',
    category: 'Web',
  },
  { title: '1.0.552', date: '22 / 03 / 2025', description: 'Se actualizaron las dependencias.', category: 'Web' },
  { title: '1.0.551', date: '08 / 01 / 2025', description: 'Se añadió una nueva guía.', category: 'Web' },
  { title: '1.0.55', date: '04 / 01 / 2025', description: 'Se añadió una página experimental.', category: 'Web' },
  {
    title: '1.0.544',
    date: '03 / 01 / 2025',
    description:
      'Se mejoró el sistema de descarga de tarjetas de amigo, y se añadió la posibilidad de tener los planetas como antes, con información extra.',
    category: 'Web',
  },
  {
    title: '1.0.543',
    date: '02 / 28 / 2025',
    description:
      'Se refactorizó la obtención de estadísticas de la región para utilizar consultas basadas en categorías.',
    category: 'Web',
  },
  {
    title: '1.0.542',
    date: '02 / 28 / 2025',
    description: 'Se mejoró la función de descarga en la página de códigos de amigos.',
    category: 'Web',
  },
  {
    title: '1.0.541',
    date: '02 / 28 / 2025',
    description:
      'Se modificó la representación de funciones formateadas en baseOutput.vue para una salida HTML mejorada.',
    category: 'Web',
  },
  {
    title: '1.0.54',
    date: '02 / 27 / 2025',
    description:
      'Se añadió un nuevo tipo de economía, además se añadió una nueva página para crear fichas con el código de amigo de cada uno.',
    category: 'Web',
  },
  {
    title: '1.0.53',
    date: '02 / 25 / 2025',
    description:
      'Se corrigieron las categorías de riqueza y se mejoró el sistema de ocultación de los apartados de la estación espacial en los sistemas que no tienen.',
    category: 'Web',
  },
  {
    title: '1.0.529',
    date: '02 / 23 / 2025',
    description: 'Se mejoró ciertos la lógica de documentación de descubrimiento.',
    category: 'Web',
  },
  {
    title: '1.0.528',
    date: '02 / 23 / 2025',
    description: 'Se añadieron ciertos descriptores planetarios faltantes.',
    category: 'Web',
  },
  {
    title: '1.0.527',
    date: '02 / 22 / 2025',
    description:
      'Se mejoró es sistema del apartado de la cronología ademas se implementó un sistema nuevo de prefetch en la página principal.',
    category: 'Web',
  },
  {
    title: '1.0.526',
    date: '02 / 22 / 2025',
    description: 'Se añadieron dos nuevas bases al apartado de bases destacadas.',
    category: 'Web',
  },
  {
    title: '1.0.525',
    date: '02 / 21 / 2025',
    description: 'Se reordenaron los eventos históricos en Cronology.vue.',
    category: 'Web',
  },
  {
    title: '1.0.524',
    date: '02 / 21 / 2025',
    description:
      'Se implementó un cuadro de diálogo de confirmación para eliminar objetos comercializables y limpiar el código comentado en PlanetInputs.vue. Se arreglaron los descriptores del tiempo de los planetas y se añadieron los faltantes.',
    category: 'Web',
  },
  {
    title: '1.0.523',
    date: '02 / 21 / 2025',
    description:
      'Se ajustó el límite de advertencia del tamaño de fragmento sumado a un splitter para evitar futuros errores y se modificaron las clases de íconos en los datos del portal de comunidad.',
    category: 'Web',
  },
  {
    title: '1.0.522',
    date: '02 / 21 / 2025',
    description: 'Se añadieron algunos descriptores del clima faltantes.',
    category: 'Web',
  },
  {
    title: '1.0.521',
    date: '02 / 21 / 2025',
    description:
      'Se ajustó el máximo de etiquetas seleccionadas a 2, se modificó el mensaje de mantenimiento en indextest.html y se añadió una nueva base al apartado de bases destacadas.',
    category: 'Web',
  },
  {
    title: '1.0.52',
    date: '02 / 21 / 2025',
    description: 'Se añadió la página de cronología de la Royal Space Society y de esta misma web.',
    category: 'Web',
  },
  {
    title: '1.0.51',
    date: '02 / 13 / 2025',
    description: 'Se añadió la página de regiones de la Royal Space Society.',
    category: 'Web',
  },
  {
    title: '1.0.501',
    date: '02 / 13 / 2025',
    description: 'Se mejoró el sistema de generación de glifos de la RSS con animaciones y mejoras de su código.',
    category: 'Web',
  },
  {
    title: '1.0.50',
    date: '02 / 13 / 2025',
    description: 'Se añadió un sistema de imágenes dinámico para las bases censadas.',
    category: 'Web',
  },
  {
    title: '1.0.483',
    date: '02 / 09 / 2025',
    description: 'Se arregló un problema con la traducción de un apartado del registro de asentamientos.',
    category: 'Web',
  },
  {
    title: '1.0.482',
    date: '02 / 09 / 2025',
    description: 'Se añadieron animaciones a la página de FAQs sumado a un nuevo sistema de logs.',
    category: 'Web',
  },
  {
    title: '1.0.48',
    date: '02 / 08 / 2025',
    description: 'Se añadió la nueva página del portal de comunidad de la RSS.',
    category: 'Web',
  },
  {
    title: '1.0.4751',
    date: '02 / 08 / 2025',
    description: 'Se añadió la región Qudsor Void de la galaxia Eissentam.',
    category: 'Web',
  },
  {
    title: '1.0.475',
    date: '02 / 08 / 2025',
    description: 'Se añadieron los nuevos sistemas gaseosos sumado a una nueva página, la de bases destacadas.',
    category: 'Web',
  },
  {
    title: '1.0.474',
    date: '02 / 07 / 2025',
    description: 'Se eliminó el apartado de imagen del paisaje del apartado de sistemas.',
    category: 'Web',
  },
  {
    title: '1.0.473',
    date: '02 / 05 / 2025',
    description: 'Se añadió la nueva página del censo, con información actualizada dinamicamente de la wiki.',
    category: 'Web',
  },
  {
    title: '1.0.472',
    date: '01 / 31 / 2025',
    description: 'Se arregló un problema con las fotos en las explicaciones de la web.',
    category: 'Web',
  },
  {
    title: '1.0.47',
    date: '01 / 02 / 2025',
    description: 'Se mejora la lógica del número de planetas en el apartado de sistemas.',
    category: 'Web',
  },
  {
    title: '1.0.46',
    date: '01 / 01 / 2025',
    description: 'Se añade la nueva plantilla de la Royal Space Society a cada apartado de la web.',
    category: 'Web',
  },
  {
    title: '1.0.45',
    date: '12 / 31 / 2024',
    description:
      'Se termina de portar todas las páginas de la web a PrimeVue, con la última siendo la de las preguntas frecuentes.',
    category: 'Web',
  },
  {
    title: '1.0.0',
    date: '12 / 24 / 2024',
    description: 'Versión 1.00 del creador de páginas wiki para la RSS.',
    category: 'Web',
  },
  {
    title: 'Alpha',
    date: '12 / 08 / 2023',
    description: 'Primera versión del creador de páginas wiki para la RSS.',
    category: 'Web',
  },
]);

const groupedEvents = computed(() => {
  const categories = events.value.reduce(
    (groups, event) => {
      if (!groups[event.category]) {
        groups[event.category] = {};
      }
      if (!groups[event.category][event.date]) {
        groups[event.category][event.date] = [];
      }
      groups[event.category][event.date].push(event);
      return groups;
    },
    {} as Record<string, Record<string, TimelineEvent[]>>
  );

  return categories;
});

// function formatDescription(event: TimelineEvent) {
//   const lines = event.description.trim().split('\n').map(line => line.trim());

//   if (lines.length > 1) {
//     return `<strong>${event.title}</strong> - <ul>${lines
//       .map(line => `<li>${line}</li>`)
//       .join('')}</ul>`;
//   }

//   return `<strong>${event.title}</strong> - ${lines[0]}`;
// }
</script>

<template>
  <Card class="galactic-card timeline-card">
    <template #content>
      <div class="timeline-page-container">
        <div class="header-section">
          <div class="header-content">
            <a
              href="https://example.com"
              target="_blank"
              class="logo-link"
            >
              <img
                src="/assets/images/shared/logo-white.png"
                class="logo-image"
                alt="Logo"
              />
            </a>
            <div class="text-content">
              <h1 class="galactic-title">
                <span class="title-text">Cronología de Eventos</span>
              </h1>
              <p class="text-stellar-gray subtitle">Explora los eventos importantes de la Royal Space Society</p>
            </div>
          </div>
        </div>

        <br />

        <div
          v-for="(categoryEvents, categoryName) in groupedEvents"
          :key="categoryName"
          class="galaxy-panel"
        >
          <Panel
            class="quadrant-panel"
            toggleable
            collapsed
          >
            <template #header>
              <h3 class="quadrant-title">
                <i class="pi pi-th-large"></i>
                {{ categoryName }}
              </h3>
            </template>

            <Timeline
              :value="Object.entries(categoryEvents)"
              align="alternate"
              class="custom-timeline"
            >
              <template #content="{ item }">
                <Card class="event-card separated-card">
                  <template #title>{{ item[0] }}</template>
                  <template #content>
                    <ul class="event-list">
                      <li
                        v-for="event in item[1]"
                        :key="event.title"
                        class="event-item"
                        v-html="`<strong>${event.title}</strong> - ${event.description.replace(/\n/g, '<br>')}`"
                      ></li>
                    </ul>
                  </template>
                </Card>
              </template>
            </Timeline>
          </Panel>
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
  --background-terciary: #cbd5e1;
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
  --background-terciary: #334155;
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

.quadrant-panel {
  background: var(--background-secondary) !important;
  border: 1px solid var(--border-color) !important;
  border-radius: 10px !important;
  transition: transform 0.2s ease;
  margin-bottom: 1%;
}

.quadrant-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
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
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.event-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 20px var(--hover-effect);
}

.event-description {
  color: var(--text-primary);
  line-height: 1.6;
  margin-bottom: 1rem;
  white-space: pre-line;
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

.separated-card {
  padding: 1rem;
}

.event-list {
  list-style: disc;
  padding-left: 1.5rem;
  text-align: left;
  width: 100%;
}

.event-item {
  margin-bottom: 0.5rem;
}
</style>
