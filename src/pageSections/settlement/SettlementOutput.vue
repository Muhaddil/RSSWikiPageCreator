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
  faction,
  system,
  planet,
  moon,
  glyphs,
  platform,
  mode,
  regionData,
  settlementproduction,
  populationammount,
  royalclass,
  additionalInfo,
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
  <div>| name = {{ name }}</div>
  <div>| image = {{ image || 'nmsMisc_NotAvailable.png' }}</div>
  <div>| galaxy = {{ regionData.galaxy }}</div>
  <div>| region = {{ regionData.region }}</div>
  <div>| system = {{ system }}</div>
  <div>| planet = {{ planet }}</div>
  <div>| moon = {{ moon }}</div>
  <div>| axes = {{ axes }}</div>
  <div>| coordinates = <span v-pre>{{Glyphs2Coords|</span>{{ glyphs }}<span v-pre>}}</span></div>
  <div>| faction = {{ faction }}</div>
  <div>| class = {{ royalclass }}</div>
  <div>| population = {{ populationammount }}</div>
  <div>| industry = {{ settlementproduction }}</div>
  <div>| civilized = {{ civilized }}</div>
  <div>| overseer = {{ discovered }}</div>
  <div>| overseerlink = {{ discoveredlink }}</div>
  <div>| platform = {{ platform }}</div>
  <div>| mode = {{ mode }}</div>
  <div>| release = {{ release }}</div>
  <div v-pre>}}</div>
  <div>'''{{ name }}''' is a planetary settlement.</div>
  <br />
  <div>==Summary==</div>
  <div>
    <div>
      '''{{ name }}''' is a [[Planetary Settlement|planetary settlement]], located on the {{ locationSentence }} in the
      [[{{ system }}]] system.
    </div>
  </div>
  <br />
  <div>==Location==</div>
  <div class="keep-linebreaks">It is located at {{ axes }}</div>
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
