<script setup lang="ts">
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { civName as civilized } from '@/variables/civilization';
// import { computed } from 'vue';
import GalleryOutput from '@/components/inputs/gallery/GalleryOutput.vue';

const pageData = usePageDataStore();
const {
  name,
  release,
  image,
  discovered,
  discoveredlink,
  researchteam2,
  system,
  glyphs,
  regionData,
  royalclass,
  docBy,
  cost,
  combat,
  exploration,
  industrial,
  fuel,
  trade,
  docBySentence,
  appearance,
} = storeToRefs(pageData);

// const locationSentence = computed(() => {
//   const planetSentence = `planet [[${planet.value}]]`;
//   const moonSentence = `moon [[${moon.value}]] of the`;
//   return moon.value ? `${moonSentence} ${planetSentence}` : planetSentence;
// });
</script>

<template>
  <div><span v-pre>{{Version|</span>{{ release }}<span v-pre>}}</span></div>
  <div>
    <span v-pre>{{Royal Space Society}}</span>
  </div>
  <div v-pre>{{Starship infobox</div>
  <div>| name = {{ name }}</div>
  <div>| image = {{ image || 'nmsMisc_NotAvailable.png' }}</div>
  <div>| galaxy = {{ regionData.galaxy }}</div>
  <div>| region = {{ regionData.region }}</div>
  <div>| system = {{ system }}</div>
  <div>| coordinates = <span v-pre>{{Glyphs2Coords|</span>{{ glyphs }}<span v-pre>}}</span></div>
  <div>| portalglyphs = {{ glyphs }}</div>
  <div>| type = Frigate</div>
  <div>| subtype = Organic</div>
  <div>| class = {{ royalclass }}</div>
  <div>| cost = {{ cost }}</div>
  <div>| discovered = {{ discovered }}</div>
  <div>| discoveredlink = {{ discoveredlink }}</div>
  <div>| civilized = {{ civilized }}</div>
  <div>| researchteam = {{ researchteam2 }}</div>
  <div>| release = {{ release }}</div>
  <div v-pre>}}</div>
  <div>'''{{ name }}''' is a frigate.</div>
  <br />
  <div>==Summary==</div>
  <div>
    <div>'''{{ name }}''' is an [[Starship Catalogue - Frigate|organic frigate]]-type [[starship]].</div>
  </div>
  <br />
  <div>==Appearance==</div>
  <div>{{ appearance }}</div>
  <br />
  <div>==Stats==</div>
  <div><span v-pre>{{FrigateStats</span></div>
  <div>| combat = {{ combat }}</div>
  <div>| exploration = {{ exploration }}</div>
  <div>| industrial = {{ industrial }}</div>
  <div>| trade = {{ trade }}</div>
  <div>| fuel = {{ fuel }}</div>
  <div><span v-pre>}}</span></div>
  <br />
  <div>==Location==</div>
  <div>
    The <span v-pre>{{Class</span>|{{ royalclass }}<span v-pre>}}</span> class version of this frigate can be found in
    the [[{{ system }}]] [[star system]] in the [[{{ regionData.region }}]] [[region]] of [[Royal Space Society]], in
    the [[{{ regionData.galaxy }}]] [[galaxy]].
  </div>
  <br />
  <div>==Additional Information==</div>
  <div v-if="docBy && docBy !== discoveredlink && docBy !== discovered">Documented by {{ docBySentence }}</div>
  <br />
  <div>==Gallery==</div>
  <GalleryOutput />
  <br />
  <div>==Reference Links==</div>
  <div>* [[Organic Frigates#Types and Parts|Organic Frigate Parts Catalogue]]</div>
  <br />
</template>
