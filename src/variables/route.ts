import { getRouteComponent, getCurrentRoute } from '@/helpers/router';

// build a custom "fake router" instead of using client-side routing to avoid 404 pages on direct navigation
export const router: Record<string, string> = {
  flora: 'Flora',
  mineral: 'Mineral',
  home: 'Home',
  base: 'Base',
  basecensusno: 'NormalBase',
  fauna: 'Fauna',
  racetrack: 'Racetrack',
  system: 'System',
  settlement: 'Settlement',
  sandworm: 'Sandworm',
  starship: 'Starship',
  multitool: 'Multitool',
  planet: 'Planet',
  biofrig: 'Biofrig',
  derelict: 'Derelict',
  moon: 'Moon',
  baserenewal: 'BaseRenewal',
  faq: 'Faq',
  census: 'Census',
  basesdestacadas: 'BasesDestacadas',
  rsslinks: 'RSSLinks',
  censustable: 'CensusTable',
  regions: 'Regions',
  cronology: 'Cronology',
  fotosdestacadas: 'FotosDestacadas',
  rssfriends: 'RSSFriends',
};

export const route = getCurrentRoute();
export const componentName = getRouteComponent();

let exportName;

switch (route) {
  case 'base':
    exportName = 'Bases';
    break;
  case 'flora':
    exportName = 'Flora';
    break;
  case 'mineral':
    exportName = 'Minerales';
    break;
  case 'fauna':
    exportName = 'Fauna';
    break;
  case 'basecensusno':
    exportName = 'Bases Normales';
    break;
  case 'racetrack':
    exportName = 'Circuitos';
    break;
  case 'system':
    exportName = 'Sistemas';
    break;
  case 'settlement':
    exportName = 'Asentamientos';
    break;
  case 'sandworm':
    exportName = 'Gusano de arena';
    break;
  case 'starship':
    exportName = 'Naves';
    break;
  case 'multitool':
    exportName = 'Multiherramientas';
    break;
  case 'planet':
    exportName = 'Planetas';
    break;
  case 'moon':
    exportName = 'Lunas';
    break;
  case 'biofrig':
    exportName = 'Fragata Orgánica';
    break;
  case 'derelict':
    exportName = 'Cargueros Abandonados';
    break;
  case 'baserenewal':
    exportName = 'Actualización del Censo RSS';
    break;
  case 'faq':
    exportName = 'Preguntas Frecuentes';
    break;
  case 'census':
    exportName = 'Censo';
    break;
  case 'basesdestacadas':
    exportName = 'Bases Destacadas';
    break;
  case 'rsslinks':
    exportName = 'Portal Comunidad';
    break;
  case 'censustable':
    exportName = 'Censo de Bases';
    break;
  case 'regions':
    exportName = 'Regiones';
    break;
  case 'cronology':
    exportName = 'Cronología';
    break;
  case 'rssfriends':
    exportName = 'Códigos de Amigo';
    break;
  case '':
    exportName = 'Home';
    break;
  default:
    exportName = 'Desconocido';
    break;
}

export const pageformattedName = exportName;
