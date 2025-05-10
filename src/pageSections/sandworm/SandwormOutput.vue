<script setup lang="ts">
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { civName as civilized } from '@/variables/civilization';
import { computed } from 'vue';
import GalleryOutput from '@/components/inputs/gallery/GalleryOutput.vue';

const pageData = usePageDataStore();
const {
  release,
  image,
  discovered,
  discoveredlink,
  mode,
  system,
  planet,
  moon,
  glyphs,
  appearonreload,
  regionData,
  researchteam2,
  stomachContent,
  maxdepth,
  appearance,
  docBy,
  docBySentence,
} = storeToRefs(pageData);

const locationSentence = computed(() => {
  const planetSentence = `planet [[${planet.value}]]`;
  const moonSentence = `moon [[${moon.value}]] of the`;
  return moon.value ? `${moonSentence} ${planetSentence}` : planetSentence;
});
</script>

<template>
  <div><span v-pre>{{Version|</span>{{ release }}<span v-pre>}}</span></div>
  <div>
    <span v-pre>{{Royal Space Society}}</span>
  </div>
  <div v-pre>{{Settlement infobox</div>
  <div>| name = Immortal Worm {{ planet }}</div>
  <div>| image = {{ image || 'nmsMisc_NotAvailable.png' }}</div>
  <div>| galaxy = {{ regionData.galaxy }}</div>
  <div>| region = {{ regionData.region }}</div>
  <div>| system = {{ system }}</div>
  <div>| planet = {{ planet }}</div>
  <div>| moon = {{ moon }}</div>
  <div>| coordinates = <span v-pre>{{Glyphs2Coords|</span>{{ glyphs }}<span v-pre>}}</span></div>
  <div>| genus = Shaihuluda</div>
  <div>| wormclass = Ceaseless Burrower</div>
  <div>| wormmaxdepth = {{ maxdepth }}</div>
  <div>| wormstomach = {{ stomachContent }}</div>
  <div>| civilized = {{ civilized }}</div>
  <div>| discovered = {{ discovered }}</div>
  <div>| discoveredlink = {{ discoveredlink }}</div>
  <div>| researchteam = {{ researchteam2 }}</div>
  <div>| mode = {{ mode }}</div>
  <div>| release = {{ release }}</div>
  <div v-pre>}}</div>
  <div>'''Immortal Worm {{ planet }}''' is a creature.</div>
  <br />
  <div>==Summary==</div>
  <div>
    <div>'''Immortal Worm {{ planet }}''' is a [[creature]], a member of the [[Shaihuluda]] [[genus]].</div>
  </div>
  <br />
  <div>==Appearance==</div>
  <div class="keep-linebreaks">{{ appearance }}</div>
  <br />
  <div>==Location==</div>
  <div class="keep-linebreaks">
    It can be found on the {{ locationSentence }} in the [[{{ system }}]] [[star system]].
  </div>
  <br />
  <div class="keep-linebreaks"><span v-pre>{{CoordGlyphConvert</span>|{{ glyphs }}<span v-pre>}}</span></div>
  <br />
  <div>==Additional Information==</div>
  <div class="keep-linebreaks">{{ appearonreload }}</div>
  <div v-if="docBy && docBy !== discoveredlink && docBy !== discovered">Documented by {{ docBySentence }}</div>
  <br />
  <div>==Gallery==</div>
  <GalleryOutput />
</template>
