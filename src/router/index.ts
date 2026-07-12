import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
    meta: { title: 'Home' },
  },
  {
    path: '/base',
    name: 'base',
    component: () => import('@/pages/Base.vue'),
    meta: { title: 'Bases' },
  },
  {
    path: '/basecensusno',
    name: 'basecensusno',
    component: () => import('@/pages/NormalBase.vue'),
    meta: { title: 'Bases Normales' },
  },
  {
    path: '/flora',
    name: 'flora',
    component: () => import('@/pages/Flora.vue'),
    meta: { title: 'Flora' },
  },
  {
    path: '/mineral',
    name: 'mineral',
    component: () => import('@/pages/Mineral.vue'),
    meta: { title: 'Minerales' },
  },
  {
    path: '/fauna',
    name: 'fauna',
    component: () => import('@/pages/Fauna.vue'),
    meta: { title: 'Fauna' },
  },
  {
    path: '/racetrack',
    name: 'racetrack',
    component: () => import('@/pages/Racetrack.vue'),
    meta: { title: 'Circuitos' },
  },
  {
    path: '/system',
    name: 'system',
    component: () => import('@/pages/System.vue'),
    meta: { title: 'Sistemas' },
  },
  {
    path: '/settlement',
    name: 'settlement',
    component: () => import('@/pages/Settlement.vue'),
    meta: { title: 'Asentamientos' },
  },
  {
    path: '/sandworm',
    name: 'sandworm',
    component: () => import('@/pages/Sandworm.vue'),
    meta: { title: 'Gusano de arena' },
  },
  {
    path: '/starship',
    name: 'starship',
    component: () => import('@/pages/Starship.vue'),
    meta: { title: 'Naves' },
  },
  {
    path: '/multitool',
    name: 'multitool',
    component: () => import('@/pages/Multitool.vue'),
    meta: { title: 'Multiherramientas' },
  },
  {
    path: '/planet',
    name: 'planet',
    component: () => import('@/pages/Planet.vue'),
    meta: { title: 'Planetas' },
  },
  {
    path: '/moon',
    name: 'moon',
    component: () => import('@/pages/Moon.vue'),
    meta: { title: 'Lunas' },
  },
  {
    path: '/biofrig',
    name: 'biofrig',
    component: () => import('@/pages/Biofrig.vue'),
    meta: { title: 'Fragata Orgánica' },
  },
  {
    path: '/derelict',
    name: 'derelict',
    component: () => import('@/pages/Derelict.vue'),
    meta: { title: 'Cargueros Abandonados' },
  },
  {
    path: '/corvette',
    name: 'corvette',
    component: () => import('@/pages/Corvette.vue'),
    meta: { title: 'Corbetas' },
  },
  {
    path: '/baserenewal',
    name: 'baserenewal',
    component: () => import('@/pages/BaseRenewal.vue'),
    meta: { title: 'Actualización del Censo RSS' },
  },
  {
    path: '/census',
    name: 'census',
    component: () => import('@/pages/Census.vue'),
    meta: { title: 'Censo' },
  },
  {
    path: '/glyphgenerator',
    name: 'glyphgenerator',
    component: () => import('@/pages/GlyphGenerator.vue'),
    meta: { title: 'Generador de Glifos' },
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/pages/Faq.vue'),
    meta: { title: 'Preguntas Frecuentes' },
  },
  {
    path: '/tutorial',
    name: 'tutorial',
    component: () => import('@/pages/Tutorial.vue'),
    meta: { title: 'Tutorial' },
  },
  {
    path: '/basesdestacadas',
    name: 'basesdestacadas',
    component: () => import('@/pages/BasesDestacadas.vue'),
    meta: { title: 'Bases Destacadas' },
  },
  {
    path: '/rsslinks',
    name: 'rsslinks',
    component: () => import('@/pages/RSSLinks.vue'),
    meta: { title: 'Portal Comunidad' },
  },
  {
    path: '/censustable',
    name: 'censustable',
    component: () => import('@/pages/CensusTable.vue'),
    meta: { title: 'Censo de Bases' },
  },
  {
    path: '/regions',
    name: 'regions',
    component: () => import('@/pages/Regions.vue'),
    meta: { title: 'Regiones' },
  },
  {
    path: '/cronology',
    name: 'cronology',
    component: () => import('@/pages/Cronology.vue'),
    meta: { title: 'Cronología' },
  },
  {
    path: '/fotosdestacadas',
    name: 'fotosdestacadas',
    component: () => import('@/pages/FotosDestacadas.vue'),
    meta: { title: 'Fotos Destacadas' },
  },
  {
    path: '/rssfriends',
    name: 'rssfriends',
    component: () => import('@/pages/RSSFriends.vue'),
    meta: { title: 'Códigos de Amigo' },
  },
  {
    path: '/guias',
    name: 'guias',
    component: () => import('@/pages/Guias.vue'),
    meta: { title: 'Guías de uso' },
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: () => import('@/pages/Feedback.vue'),
    meta: { title: 'Feedback' },
  },
  {
    path: '/latestupdates',
    name: 'latestupdates',
    component: () => import('@/pages/LatestUpdates.vue'),
    meta: { title: 'Últimas Actualizaciones' },
  },
  {
    path: '/wikiupdates',
    name: 'wikiupdates',
    component: () => import('@/pages/WikiUpdates.vue'),
    meta: { title: 'Últimas Actualizaciones' },
  },
  {
    path: '/rsssystems',
    name: 'rsssystems',
    component: () => import('@/pages/RSSSystems.vue'),
    meta: { title: 'Sistemas RSS' },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0 };
  },
});

router.beforeEach((to) => {
  const title = (to.meta.title as string) || 'RSS WIKI PAGE CREATOR';
  document.title = `${title} // RSS WIKI PAGE CREATOR`;
});

export default router;
