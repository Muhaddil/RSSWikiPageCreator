<script setup lang="ts">
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { civName as civilized } from '@/variables/civilization';
import { computed } from 'vue';
import GalleryOutput from '@/components/inputs/gallery/GalleryOutput.vue';
import { shipData } from '@/variables/starship/shipData';

const pageData = usePageDataStore();
const {
  name,
  release,
  image,
  discovered,
  discoveredlink,
  axes,
  researchteam2,
  system,
  planet,
  moon,
  glyphs,
  economy,
  pilot,
  regionData,
  royalclass,
  additionalInfo,
  type,
  subtype,
  exotic,
  inventory,
  maneuverB,
  damageB,
  shieldB,
  warpB,
  statsClass,
  appearance,
  docBy,
  docBySentence,
} = storeToRefs(pageData);

// const locationSentence = computed(() => {
//   const planetSentence = `planet [[${planet.value}]]`;
//   const moonSentence = `moon [[${moon.value}]] of the`;
//   return moon.value ? `${moonSentence} ${planetSentence}` : planetSentence;
// });

const sizeSpecificValues = computed(() => {
  const size = inventory.value as 'Small' | 'Medium' | 'Large';
  const typeData = shipData[type.value] || {};
  return {
    cost: typeData.cost ? typeData.cost[size] : '',
    slots: typeData.slots ? typeData.slots[size] : '',
    techslots: typeData.techslots ? typeData.techslots[size] : '',
  };
});
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
  <div>| planet = {{ planet }}</div>
  <div>| moon = {{ moon }}</div>
  <div>| axes = {{ axes }}</div>
  <div>| economy = {{ economy }}</div>
  <div>| pilot = {{ pilot }}</div>
  <div>| coordinates = <span v-pre>{{Glyphs2Coords|</span>{{ glyphs }}<span v-pre>}}</span></div>
  <div>| portalglyphs = {{ glyphs }}</div>
  <div>| type = {{ type }}</div>
  <div>| subtype = {{ subtype }}</div>
  <div>| exotic = {{ exotic }}</div>
  <div>| class = {{ royalclass }}</div>
  <div>| inventory = {{ inventory }}</div>
  <div>| slots = {{ sizeSpecificValues.slots }}</div>
  <div>| techslots = {{ sizeSpecificValues.techslots }}</div>
  <div>| cost = {{ sizeSpecificValues.cost }}</div>
  <div>| discovered = {{ discovered }}</div>
  <div>| discoveredlink = {{ discoveredlink }}</div>
  <div>| civilized = {{ civilized }}</div>
  <div>| researchteam = {{ researchteam2 }}</div>
  <div>| release = {{ release }}</div>
  <div>| maneuverB = {{ maneuverB }}</div>
  <div>| damageB = {{ damageB }}</div>
  <div>| shieldB = {{ shieldB }}</div>
  <div>| warpB = {{ warpB }}</div>
  <div v-pre>}}</div>
  <div>'''{{ name }}''' is a starship.</div>
  <br />
  <div>==Summary==</div>
  <div>
    <div>'''{{ name }}''' is a [[Planetary Settlement|planetary settlement]]-type [[starship]].</div>
  </div>
  <br />
  <div>==Appearance==</div>
  <div>{{ appearance }}</div>
  <br />
  <div>==Stats==</div>
  <div><span v-pre>{{</span>{{ statsClass }}<span v-pre>}}</span></div>
  <br />
  <div>==Location==</div>
  <div>
    This starship was discovered in the [[{{ system }}]] [[star system]] in the [[{{ regionData.region }}]] [[region]]
    of [[{{ civilized }}]], in the [[{{ regionData.galaxy }}]] [[galaxy]].
  </div>
  <br />
  <div class="keep-linebreaks"><span v-pre>{{CoordGlyphConvert</span>|{{ glyphs }}<span v-pre>}}</span></div>
  <br />
  <div>==Additional Information==</div>
  <div>{{ additionalInfo }}</div>
  <div v-if="docBy && docBy !== discoveredlink && docBy !== discovered">Documented by {{ docBySentence }}</div>
  <br />
  <div>==Gallery==</div>
  <GalleryOutput />
</template>
