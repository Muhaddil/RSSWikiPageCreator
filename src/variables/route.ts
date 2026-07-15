import { computed } from 'vue';
import router from '@/router';

export const route = computed(() => (router.currentRoute.value.name as string) || '');

export const componentName = computed(() => route.value || 'home');

const nameMap: Record<string, string> = {
  base: 'Bases',
  flora: 'Flora',
  mineral: 'Minerales',
  fauna: 'Fauna',
  basecensusno: 'Bases Normales',
  racetrack: 'Circuitos',
  system: 'Sistemas',
  settlement: 'Asentamientos',
  sandworm: 'Gusano de arena',
  starship: 'Naves',
  multitool: 'Multiherramientas',
  planet: 'Planetas',
  moon: 'Lunas',
  biofrig: 'Fragata Orgánica',
  derelict: 'Cargueros Abandonados',
  baserenewal: 'Actualización del Censo RSS',
  faq: 'Preguntas Frecuentes',
  census: 'Censo',
  basesdestacadas: 'Bases Destacadas',
  rsslinks: 'Portal Comunidad',
  censustable: 'Censo de Bases',
  regions: 'Regiones',
  cronology: 'Cronología',
  rssfriends: 'Códigos de Amigo',
  guias: 'Guías de uso',
  feedback: 'Feedback',
  latestupdates: 'Últimas Actualizaciones',
  wikiupdates: 'Últimas Actualizaciones',
  rsssystems: 'Sistemas RSS',
  corvette: 'Corbetas',
  glyphgenerator: 'Generador de Glifos',
  home: 'Panel',
  tutorial: 'Tutorial',
  'not-found': '',
};

export const pageformattedName = computed(() => nameMap[route.value] || route.value || 'Home');
