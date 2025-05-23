import { defineStore } from 'pinia';
import { fetchSectionWikiText } from '@/helpers/api';
import parseMediawikiTemplate from 'parse-mediawiki-template';
import { currentReleaseKey, defaultValuesKey } from '@/variables/localStorageKeys';
import { regions, galaxies } from '@/variables/regions';
import { maxGlyphLength } from '@/variables/glyphData';
import { emitGlobalEvent } from '@/helpers/event';
// import { route } from '@/variables/route';
import type { PresetData } from '@/types/preset';
import { defaultData } from '@/variables/preset';
import { nextTick } from 'vue';
import ReleaseErrorNotif from '@/components/ReleaseErrorNotif.vue';
import { useToast } from 'vue-toastification';
import type { GalleryFileItem } from '@/types/gallery';

const toast = useToast();

const localStorageData = () => JSON.parse(localStorage.getItem('defaultSettings') ?? '{}');

interface PageData {
  outputContent: string;
  release: string;
  name: string;
  image: string;
  discovered: string;
  discoveredlink: string;
  system: string;
  planet: string;
  planetnum: string;
  moonnum: string;
  planetName: string;
  moon: string;
  glyphs: string;
  type: string;
  location: string;
  subtype: string;
  exotic: string;
  inventory: string;
  biome: string;
  age: string;
  roots: string;
  nutrients: string;
  notes: string;
  elements: string[];
  polymorphic: string;
  discDate: string;
  documenterName: string;
  researchteam2: string;
  appearance: string;
  pageName: string;
  orgName: string;
  platform: string;
  mode: string;
  wealth: string;
  formation: string;
  dissonant: string;
  water: string;
  content: string;
  axes: string;
  farm: string;
  geobay: string;
  landingpad: string;
  arena: string;
  terminal: string;
  racetrack: string;
  censusplayer: string;
  censussocial: string;
  censusreddit: string;
  censusdiscord: string;
  censusfriend: string;
  censusarrival: string;
  censusshow: string;
  layout: string;
  features: string[];
  additionalInfo: string;
  behaviour: string;
  activity: string;
  hemisphere: string;
  rarity: string;
  ecosystem: string;
  weight2: string;
  height2: string;
  stellarclass: string;
  color: string;
  distance: string;
  faction: string;
  economy: string;
  economysell: string;
  conflict: string;
  docDate: string;
  economybuy: string;
  multiplestars: string;
  ssImage: string;
  navImage: string;
  features2: string;
  addInfo: string;
  gender: string;
  gender2: string;
  height: string;
  weight: string;
  diet: string;
  genus: string;
  produces: string[];
  exocraftTable: string[];
  docBy: string;
  docBySentence: string;
  resource1: string;
  resource2: string;
  galleryFiles: GalleryFileItem[];
  locationFiles: GalleryFileItem[];
  galleryDescriptions: string[];
  presetData: PresetData;
  generatedOutput: string;
  tradeTerminal: string;
  modulesMT: string[];
  modulesSS: string[];
  modulesEC: string[];
  modulesES: string[];
  modulesSD: string[];
  populationammount: string;
  settlementproduction: string;
  royalclass: string;
  maxdepth: string;
  stomachContent: string;
  sandwormclass: string;
  appearonreload: string;
  pilot: string;
  crystals: string;
  horns: string;
  glowtubes: string;
  slots: string;
  savelocation: string;
  savelocationDF: string;
  cost: string;
  scannerRange: string;
  damagePotential: string;
  maneuverB: string;
  damageB: string;
  shieldB: string;
  warpB: string;
  statsClass: string;
  metalContent: string;
  resourceListOutput: string;
  chemicalSymbolsOutput: string;
  Planetdescriptors: string;
  atmosphere: string;
  sentinels: string;
  weather: string;
  flora: string;
  fauna: string;
  terrain: string;
  faunaNum: string;
  locations: string;
  generatedOutputFauna: string;
  generatedOutputFlora: string;
  generatedOutputMinerals: string;
  combat: string;
  exploration: string;
  industrial: string;
  fuel: string;
  trade: string;
  sentinelInfo: string;
  roomNumber: string;
  otherupgrades: string;
  hyperdrive: string;
  derelictEnemies: string;
  censusrenewal: string;
  basename: string;
  playername: string;
  discordname: string;
  extraInfo: string;
}

const defaultState: PageData = {
  outputContent: '',
  slots: '',
  cost: '',
  release: '',
  water: 'No',
  dissonant: 'No',
  planetName: '',
  name: '',
  image: '',
  discovered: '',
  discoveredlink: '',
  system: '',
  planet: '',
  planetnum: '0',
  moonnum: '0',
  moon: '',
  glyphs: '',
  type: '',
  savelocationDF: '',
  subtype: '',
  location: '',
  exotic: '',
  inventory: '',
  biome: '',
  stellarclass: '',
  color: '',
  distance: '',
  faction: '',
  economy: '',
  economysell: '',
  economybuy: '',
  conflict: '',
  docDate: '',
  multiplestars: '',
  ssImage: '',
  navImage: '',
  addInfo: '',
  age: '',
  roots: '',
  nutrients: '',
  notes: '',
  elements: [],
  polymorphic: '',
  discDate: '',
  documenterName: '',
  researchteam2: localStorageData().researchteamInput ?? '',
  appearance: '',
  pageName: '',
  platform: '',
  mode: '',
  wealth: '',
  formation: '',
  content: '',
  axes: '',
  farm: 'No',
  geobay: 'No',
  landingpad: 'No',
  arena: 'No',
  terminal: 'No',
  racetrack: 'No',
  censusplayer: '',
  censussocial: '',
  censusreddit: '',
  censusdiscord: '',
  censusfriend: '',
  censusarrival: '',
  censusshow: '',
  layout: '',
  features: [],
  additionalInfo: '',
  orgName: '',
  behaviour: '',
  gender: '',
  gender2: '',
  activity: '',
  hemisphere: '',
  rarity: '',
  ecosystem: '',
  height: '',
  features2: '',
  weight: '',
  weight2: '',
  height2: '',
  diet: '',
  genus: '',
  produces: [],
  exocraftTable: [],
  docBy: localStorageData().docbyInput ?? '',
  docBySentence: '',
  resource1: '',
  resource2: '',
  galleryFiles: [],
  locationFiles: [],
  galleryDescriptions: [],
  generatedOutput: '',
  tradeTerminal: '',
  modulesMT: [],
  modulesSS: [],
  modulesEC: [],
  modulesES: [],
  modulesSD: [],
  populationammount: '',
  settlementproduction: '',
  royalclass: '',
  crystals: '',
  horns: '',
  glowtubes: '',
  maxdepth: '',
  stomachContent: '',
  sandwormclass: '',
  appearonreload: '',
  pilot: '',
  savelocation: '',
  scannerRange: '',
  damagePotential: '',
  maneuverB: '',
  damageB: '',
  shieldB: '',
  warpB: '',
  statsClass: '',
  metalContent: '',
  resourceListOutput: '',
  chemicalSymbolsOutput: '',
  Planetdescriptors: '',
  atmosphere: '',
  sentinels: '',
  weather: '',
  flora: '',
  fauna: '',
  terrain: '',
  faunaNum: '',
  locations: '',
  generatedOutputFauna: '',
  generatedOutputFlora: '',
  generatedOutputMinerals: '',
  sentinelInfo: '',
  combat: '',
  exploration: '',
  industrial: '',
  fuel: '',
  trade: '',
  roomNumber: '',
  otherupgrades: '',
  hyperdrive: '',
  derelictEnemies: '',
  censusrenewal: '',
  basename: '',
  playername: '',
  discordname: '',
  extraInfo: '',
  presetData: structuredClone(defaultData),
};

export const usePageDataStore = defineStore('pageData', {
  state: (): PageData => structuredClone(defaultState),

  getters: {
    regionData: (state): { region: string; regionNumber: string; galaxy: string } => {
      if (state.glyphs.length !== maxGlyphLength) return { region: '', regionNumber: '', galaxy: '' };

      const regionGlyphs = state.glyphs.slice(4);
      const rssRegionGlyphs = Object.keys(regions);
      const regionIndex = rssRegionGlyphs.indexOf(regionGlyphs);
      const regionNames = Object.values(regions);
      const currentRegion = regionNames[regionIndex];

      const regionKey = regionGlyphs as keyof typeof regions;
      const currentGalaxy = galaxies[regionKey] || '';

      return {
        region: currentRegion,
        regionNumber: `EV${regionIndex + 1}`,
        galaxy: currentGalaxy,
      };
    },
    docBySentence: (state) => {
      const isLink = state.docBy.startsWith('{{');
      const hasResearchteam = state.researchteam2;
      const documenter = isLink ? state.docBy : `''${state.docBy}''`;
      let researchteamLink = '';
      if (hasResearchteam) {
        researchteamLink = `[[${state.researchteam2}]] member`;
      }
      return `${hasResearchteam ? researchteamLink + ' ' : ''}${documenter}`;
    },
  },

  actions: {
    setOutputContent(content: string) {
      this.outputContent = content;
    },
    initStore() {
      this.getRelease();
      this.applyDefaults();
    },
    async getRelease() {
      const storedVersion = localStorage.getItem(currentReleaseKey) ?? '';
      this.release = storedVersion;
      try {
        const section = await fetchSectionWikiText('Template:Base preload', 0);
        const version = parseMediawikiTemplate(section ?? '', 'Version')[0]['1']; // unnamed parameters are 1-indexed
        if (!version || version === storedVersion) return;
        localStorage.setItem(currentReleaseKey, version);
        this.release = version || storedVersion;
      } catch (e) {
        toast.error(ReleaseErrorNotif);
        console.error(e);
      }
    },
    applyDefaults() {
      const localStorageData = localStorage.getItem(defaultValuesKey) ?? '{}';
      const jsonData = JSON.parse(localStorageData);
      this.$patch({ ...jsonData, presetData: jsonData });
    },

    resetStore() {
      this.$patch(structuredClone(defaultState));
      // waiting for the DOM to update before changing the state again
      nextTick(() => {
        emitGlobalEvent('reset');
        this.initStore();
      });
    },
  },
});
