<script setup lang="ts">
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { civName as civilized } from '@/variables/civilization';
import { computed } from 'vue';
import GalleryOutput from '@/components/inputs/gallery/GalleryOutput.vue';

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
  type,
  platform,
  mode,
  regionData,
  farm,
  geobay,
  landingpad,
  arena,
  terminal,
  racetrack,
  features,
  layout,
  additionalInfo,
  docBy,
  docBySentence,
} = storeToRefs(pageData);

const locationSentence = computed(() => {
  const planetSentence = `planet [[${planet.value}]]`;
  const moonSentence = `moon [[${moon.value}]] of the`;
  return moon.value ? `${moonSentence} ${planetSentence}` : planetSentence;
});

const formattedFeatures = computed(() => {
  if (!features.value || features.value.length === 0) return '';
  return features.value.map(feature => `* [[${feature}]]`).join('\n');
});
</script>

<template>
  <div><span v-pre>{{Version|</span>{{ release }}<span v-pre>}}</span></div>
  <div><span v-pre>{{Royal Space Society}}</span></div>
  <div v-pre>{{Base infobox</div>
  <div>| name = {{ name }}</div>
  <div>| image = {{ image || 'nmsMisc_NotAvailable.png' }}</div>
  <div>| civilized = {{ civilized }}</div>
  <div>| researchteam = {{ researchteam2 }}</div>
  <div>| builderlink = {{ discoveredlink }}</div>
  <div>| builder = {{ discovered }}</div>
  <div>| galaxy = {{ regionData.galaxy }}</div>
  <div>| region = {{ regionData.region }}</div>
  <div>| system = {{ system }}</div>
  <div>| planet = {{ planet }}</div>
  <div>| moon = {{ moon }}</div>
  <div>| axes = {{ axes }}</div>
  <div>| coordinates = <span v-pre>{{Glyphs2Coords|</span>{{ glyphs }}<span v-pre>}}</span></div>
  <div>| portalglyphs = {{ glyphs }}</div>
  <div>| type = {{ type }}</div>
  <div>| mode = {{ mode }}</div>
  <div>| platform = {{ platform }}</div>
  <div>| release = {{ release }}</div>
  <div>| farm = {{ farm }}</div>
  <div>| geobay = {{ geobay }}</div>
  <div>| landingpad = {{ landingpad }}</div>
  <div>| arena = {{ arena }}</div>
  <div>| terminal = {{ terminal }}</div>
  <div>| racetrack = {{ racetrack }}</div>
  <div>| censusplayer = </div>
  <div>| censusreddit = </div>
  <div>| censusdiscord = </div>
  <div>| censusfriend = </div>
  <div>| censusarrival = </div>
  <div>| censusrenewal = </div>
  <div>| censusshow = </div>
  <div v-pre>}}</div>
  <div>'''{{ name }}''' is a player base.</div>
  <br />
  <div>==Summary==</div>
  <div>
    '''{{ name }}''' is a [[Habitable Base|player base]], located on the {{ locationSentence }} in the [[{{ system }}]]
    system.
  </div>
  <br />
  <div>==Layout==</div>
  <div class="keep-linebreaks">{{ layout }}</div>
  <br />
  <div>==Features==</div>
  <div class="keep-linebreaks">{{ formattedFeatures }}</div>
  <br />
  <div>==Additional Information==</div>
  <div>{{ additionalInfo }}</div>
  <div v-if="docBy && docBy !== discoveredlink && docBy !== discovered">Documented by {{ docBySentence }}</div>
  <br />
  <div>==Gallery==</div>
  <GalleryOutput />
</template>
