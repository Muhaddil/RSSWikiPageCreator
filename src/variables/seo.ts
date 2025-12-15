export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
}

export const defaultSEO: SEOData = {
  title: 'RSS Wiki Page Creator',
  description: "Herramienta para crear páginas wiki para la comunidad RSS de No Man's Sky.",
  keywords: ["No Man's Sky", 'RSS', 'Wiki', 'Page Creator', 'NMS', 'Galicia', 'Comunidad'],
};

export const seoConfig: Record<string, SEOData> = {
  home: {
    title: 'Inicio - RSS Wiki Page Creator',
    description:
      "Bienvenido al creador de páginas wiki de la Royal Space Society (RSS) en No Man's Sky. Crea y gestiona contenido para nuestra comunidad.",
    keywords: ['Inicio', 'RSS', 'Wiki', 'Herramientas', 'NMS'],
  },
  flora: {
    title: 'Flora - RSS Wiki Page Creator',
    description:
      'Genera páginas wiki para la flora descubierta en la región de la Royal Space Society (RSS). Documenta plantas y recursos orgánicos.',
    keywords: ['Flora', 'Plantas', 'Botánica', 'NMS', 'Wiki'],
  },
  mineral: {
    title: 'Minerales - RSS Wiki Page Creator',
    description:
      'Crea entradas wiki para los minerales y formaciones geológicas de los sistemas de la Royal Space Society (RSS).',
    keywords: ['Minerales', 'Geología', 'Recursos', 'NMS', 'Wiki'],
  },
  fauna: {
    title: 'Fauna - RSS Wiki Page Creator',
    description:
      'Documenta la vida animal de la región de la Royal Space Society (RSS). Crea fichas detalladas para las criaturas descubiertas.',
    keywords: ['Fauna', 'Animales', 'Criaturas', 'Zoología', 'NMS', 'Wiki'],
  },
  base: {
    title: 'Bases - RSS Wiki Page Creator',
    description:
      'Registra y comparte las bases construidas por los jugadores en la región de la Royal Space Society (RSS).',
    keywords: ['Bases', 'Construcción', 'Jugadores', 'NMS', 'Wiki'],
  },
  basecensusno: {
    title: 'Bases Normales - RSS Wiki Page Creator',
    description: 'Formulario para el censo de bases normales en la región de la Royal Space Society (RSS).',
    keywords: ['Censo', 'Bases', 'Registro', 'NMS', 'Wiki'],
  },
  racetrack: {
    title: 'Circuitos - RSS Wiki Page Creator',
    description: 'Documenta los circuitos de carreras y exocraft en la región de la Royal Space Society (RSS).',
    keywords: ['Circuitos', 'Carreras', 'Exocraft', 'NMS', 'Wiki'],
  },
  system: {
    title: 'Sistemas - RSS Wiki Page Creator',
    description: 'Crea páginas para los sistemas estelares explorados en la región de la Royal Space Society (RSS).',
    keywords: ['Sistemas', 'Estrellas', 'Exploración', 'NMS', 'Wiki'],
  },
  settlement: {
    title: 'Asentamientos - RSS Wiki Page Creator',
    description: 'Registra los asentamientos planetarios y su desarrollo en la región de la Royal Space Society (RSS).',
    keywords: ['Asentamientos', 'Colonia', 'NMS', 'Wiki'],
  },
  sandworm: {
    title: 'Gusano de Arena - RSS Wiki Page Creator',
    description:
      'Documenta los avistamientos de gusanos de arena gigantes en los planetas de la Royal Space Society (RSS).',
    keywords: ['Gusano de Arena', 'Titan', 'NMS', 'Wiki'],
  },
  starship: {
    title: 'Naves - RSS Wiki Page Creator',
    description: 'Cataloga las naves espaciales encontradas en los sistemas de la Royal Space Society (RSS).',
    keywords: ['Naves', 'Starship', 'Cazas', 'Exploradores', 'NMS', 'Wiki'],
  },
  multitool: {
    title: 'Multiherramientas - RSS Wiki Page Creator',
    description:
      'Registra las multiherramientas disponibles en las estaciones y puestos de la Royal Space Society (RSS).',
    keywords: ['Multiherramienta', 'Armas', 'Tecnología', 'NMS', 'Wiki'],
  },
  planet: {
    title: 'Planetas - RSS Wiki Page Creator',
    description: 'Crea fichas detalladas para los planetas descubiertos en la región de la Royal Space Society (RSS).',
    keywords: ['Planetas', 'Exploración', 'Biomas', 'NMS', 'Wiki'],
  },
  biofrig: {
    title: 'Fragatas Orgánicas - RSS Wiki Page Creator',
    description: 'Documenta las fragatas orgánicas vivas reclutadas en la flota.',
    keywords: ['Fragata Orgánica', 'Flota', 'NMS', 'Wiki'],
  },
  derelict: {
    title: 'Cargueros Abandonados - RSS Wiki Page Creator',
    description: 'Guía y registro de cargueros abandonados explorados en la región de la Royal Space Society (RSS).',
    keywords: ['Carguero Abandonado', 'Derelict Freighter', 'Dungeon', 'NMS', 'Wiki'],
  },
  moon: {
    title: 'Lunas - RSS Wiki Page Creator',
    description: 'Crea entradas para las lunas que orbitan los planetas de la Royal Space Society (RSS).',
    keywords: ['Lunas', 'Satélites', 'Exploración', 'NMS', 'Wiki'],
  },
  baserenewal: {
    title: 'Actualización Censo - RSS Wiki Page Creator',
    description:
      'Herramienta para actualizar la información de bases existentes en el censo de la Royal Space Society (RSS).',
    keywords: ['Actualización', 'Censo', 'Mantenimiento', 'NMS', 'Wiki'],
  },
  faq: {
    title: 'Preguntas Frecuentes - RSS Wiki Page Creator',
    description:
      'Respuestas a las preguntas más comunes sobre el uso del Wiki Page Creator y la comunidad de la Royal Space Society (RSS).',
    keywords: ['FAQ', 'Ayuda', 'Soporte', 'Preguntas', 'NMS'],
  },
  census: {
    title: 'Censo - RSS Wiki Page Creator',
    description: 'Vista general y herramientas del censo de la Royal Space Society (RSS).',
    keywords: ['Censo', 'Estadísticas', 'Comunidad', 'NMS'],
  },
  basesdestacadas: {
    title: 'Bases Destacadas - RSS Wiki Page Creator',
    description:
      'Galería de las bases más impresionantes construidas por la comunidad de la Royal Space Society (RSS).',
    keywords: ['Destacadas', 'Showcase', 'Construcción', 'NMS'],
  },
  rsslinks: {
    title: 'Portal Comunidad - RSS Wiki Page Creator',
    description: 'Enlaces útiles y recursos para los miembros de la comunidad RSS.',
    keywords: ['Enlaces', 'Recursos', 'Comunidad', 'Discord', 'NMS'],
  },
  censustable: {
    title: 'Tabla del Censo - RSS Wiki Page Creator',
    description: 'Tabla detallada con todos los registros del censo de la RSS.',
    keywords: ['Tabla', 'Datos', 'Censo', 'NMS'],
  },
  regions: {
    title: 'Regiones - RSS Wiki Page Creator',
    description: 'Información sobre las diferentes regiones que componen el territorio de la RSS.',
    keywords: ['Regiones', 'Mapa', 'Galaxia', 'NMS'],
  },
  cronology: {
    title: 'Cronología - RSS Wiki Page Creator',
    description: 'Línea de tiempo de los eventos importantes y actualizaciones en la historia de la RSS.',
    keywords: ['Cronología', 'Historia', 'Eventos', 'NMS'],
  },
  fotosdestacadas: {
    title: 'Fotos Destacadas - RSS Wiki Page Creator',
    description: 'Galería de las mejores capturas de pantalla tomadas por la comunidad.',
    keywords: ['Fotos', 'Capturas', 'Arte', 'NMS'],
  },
  rssfriends: {
    title: 'Códigos de Amigo - RSS Wiki Page Creator',
    description: "Directorio de códigos de amigo de No Man's Sky para conectar con otros jugadores.",
    keywords: ['Amigos', 'Códigos', 'Multijugador', 'NMS'],
  },
  guias: {
    title: 'Guías de Uso - RSS Wiki Page Creator',
    description: 'Tutoriales y guías para aprender a utilizar todas las funciones del Page Creator.',
    keywords: ['Guías', 'Tutoriales', 'Ayuda', 'NMS'],
  },
  feedback: {
    title: 'Feedback - RSS Wiki Page Creator',
    description: 'Envía tus comentarios, sugerencias y reportes de errores para mejorar la herramienta.',
    keywords: ['Feedback', 'Contacto', 'Sugerencias', 'NMS'],
  },
  latestupdates: {
    title: 'Últimas Actualizaciones - RSS Wiki Page Creator',
    description: 'Novedades y cambios recientes en el RSS Wiki Page Creator.',
    keywords: ['Actualizaciones', 'Changelog', 'Noticias', 'NMS'],
  },
  wikiupdates: {
    title: 'Actualizaciones Wiki - RSS Wiki Page Creator',
    description: 'Registro de cambios y mejoras en la Wiki de la RSS.',
    keywords: ['Wiki', 'Cambios', 'Historial', 'NMS'],
  },
  rsssystems: {
    title: 'Sistemas RSS - RSS Wiki Page Creator',
    description: 'Listado completo de los sistemas bajo la jurisdicción de la RSS.',
    keywords: ['Sistemas', 'Lista', 'Territorio', 'NMS'],
  },
  corvette: {
    title: 'Corbetas - RSS Wiki Page Creator',
    description: 'Documenta las corbetas y naves ligeras de la flota.',
    keywords: ['Corbetas', 'Naves', 'Flota', 'NMS'],
  },
};
