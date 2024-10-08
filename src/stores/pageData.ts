import { defineStore } from 'pinia';
// import { versions } from '../variables/versions';
import { regions, galaxies } from '../variables/regions';
import { sanitiseString } from '@/common';

interface StaticPageData {
  route: string;
  fullArticleElement: HTMLDivElement | null;
  debug: boolean;
}

const route = window.location.pathname.split('/')!.at(-1)!.slice(0, -5); // NoSonar getting the current filename without the "html" ending

const researchteamDefaultExceptions = ['base'];

export const departments = {
  '': '',
};

if (researchteamDefaultExceptions.includes(route)) departments[''] = '';

export const useStaticPageDataStore = defineStore('staticPageData', {
  state: (): StaticPageData => ({
    route,
    fullArticleElement: null,
    debug: false,
  }),
});

const localStorageData = () => JSON.parse(localStorage.getItem('defaultSettings') ?? '{}');

interface PageData {
  release: string;
  name: string;
  hub: string;
  produces: string;
  genus: string;
  image: string;
  discovered: string;
  discoveredlink: string;
  orgName: string;
  height: string;
  weight: string;
  system: string;
  planet: string;
  moon: string;
  glyphs: string;
  gender: string;
  gender2: string;
  type: string;
  biome: string;
  age: string;
  roots: string;
  nutrients: string;
  notes: string;
  elements: string[];
  polymorphic: string;
  discDate: string;
  docBy: string;
  researchteam: string;
  appearance: string;
  pageName: string;
  platform: string;
  wealth: string;
  formation: string;
  content: string;
  behaviour: string;
  activity: string;
  hemisphere: string;
  rarity: string;
  ecosystem: string;
  weight2: string;
  height2: string;
  mode: string;
  diet: string;
}

export const usePageDataStore = defineStore('pageData', {
  state: (): PageData => ({
    release: '',
    name: '',
    hub: 'Royal Space Society',
    produces: "",
    genus: "",
    image: '',
    height: '',
    weight: '',
    weight2: '',
    height2: '',
    discovered: localStorageData()['discoveredInput builderInput'] ?? '',
    discoveredlink: localStorageData()['discoveredlinkInput builderlinkInput'] ?? '',
    orgName: '',
    system: localStorageData().systemInput ?? '',
    planet: localStorageData().planetInput ?? '',
    moon: localStorageData().moonInput ?? '',
    glyphs: localStorageData().portalglyphsInput ?? '',
    type: '',
    biome: 'Lush',
    age: '',
    diet: '',
    roots: '',
    nutrients: '',
    notes: '',
    elements: [],
    polymorphic: '',
    discDate: '',
    docBy: localStorageData().docbyInput ?? '',
    researchteam: '',
    appearance: '',
    pageName: '',
    platform: localStorageData().platformInput ?? '',
    wealth: localStorageData().wealthInput ?? '',
    formation: '',
    content: '',
    behaviour: '',
    gender: '',
    gender2: '',
    activity: '',
    hemisphere: '',
    rarity: '',
    ecosystem: '',
    mode: '',
  }),

  getters: {
    regionGlyphs: (state) => state.glyphs.substring(4), // NoSonar region glyphs start at index 4
    isValidGlyphs(): boolean {
      return Object.keys(regions).includes(this.regionGlyphs); // Tests if an address is valid for Royal Space Society
    },
    region(): string {
      return regions[this.regionGlyphs] ?? '';
    },
    galaxy(): string {
      return galaxies[this.regionGlyphs] ?? '';
    },
    regionNumber(): number {
      const index = Object.keys(regions).indexOf(this.regionGlyphs);
      return index + 1;
    },
    sanitisedStrings: (state) => ({
      name: sanitiseString(state.name),
      discovered: sanitiseString(state.discovered),
      discoveredlink: sanitiseString(state.discoveredlink),
      system: sanitiseString(state.system),
      planet: sanitiseString(state.planet),
      moon: sanitiseString(state.moon),
      orgName: sanitiseString(state.orgName),
      appearance: sanitiseString(state.appearance),
    }),

    hubName: (state) => sanitiseString(state.hub),
    docBySentence: (state) => {
      const isLink = state.docBy.startsWith('{{');
      const hasResearchteam = state.researchteam && state.researchteam.trim() !== '' && state.researchteam.split(' ').length > 1;
      const documenter = isLink ? state.docBy : `''${state.docBy}''`;
      let researchteamLink = '';
      if (hasResearchteam) {
        researchteamLink = state.researchteam.includes('Wiki')
          ? '[[Wiki Scholars|Wiki Scholar]]'
          : `[[${state.researchteam}]] member`;
      }
      return `${hasResearchteam ? researchteamLink + ' ' : ''}${documenter}`;
    },
  },
});
