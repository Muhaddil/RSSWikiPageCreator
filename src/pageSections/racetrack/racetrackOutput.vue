<script setup lang="ts">
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { civName as civilized } from '@/variables/civilization';
import { computed } from 'vue';
import WikiTemplate from '@/components/WikiTemplate.vue';
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
  platform,
  mode,
  regionData,
  features2,
  appearance,
  additionalInfo,
  exocraftTable,
  docBy,
  docBySentence,
} = storeToRefs(pageData);

const formattedExocraftTable = computed(() => {
  if (!exocraftTable.value || exocraftTable.value.length === 0) return '';
  return exocraftTable.value.map((exocraftTable) => `[[${exocraftTable}]]`).join(', ');
});
</script>

<template>
  <div><span v-pre>{{Version|</span>{{ release }}<span v-pre>}}</span></div>
  <div>
    <span v-pre>{{Royal Space Society}}</span>
  </div>
  <div v-pre>{{Racetrack infobox</div>
  <div>| name = {{ name }}</div>
  <div>| image = {{ image || 'nmsMisc_NotAvailable.png' }}</div>
  <div>| builderlink = {{ discoveredlink }}</div>
  <div>| builder = {{ discovered }}</div>
  <div>| galaxy = {{ regionData.galaxy }}</div>
  <div>| region = {{ regionData.region }}</div>
  <div>| system = {{ system }}</div>
  <div>| planet = {{ planet }}</div>
  <div>| moon = {{ moon }}</div>
  <div>| axes = {{ axes }}</div>
  <div>
    | coordinates = <WikiTemplate template-name="Glyphs2Coords">{{ glyphs }}</WikiTemplate>
  </div>
  <div>| suited = {{ formattedExocraftTable }}</div>
  <div>| civilized = {{ civilized }}</div>
  <div>| researchteam = {{ researchteam2 }}</div>
  <div>| mode = {{ mode }}</div>
  <div>| platform = {{ platform }}</div>
  <div>| release = {{ release }}</div>

  <div v-pre>}}</div>
  <div>'''{{ name }}''' is a racetrack.</div>
  <br />
  <div>==Summary==</div>
  <div>
    '''{{ name }}''' is a [[racetrack]], located on the
    <span v-if="moon">[[moon]] [[{{ moon }}]] of the</span> [[planet]] [[{{ planet }}]] in the [[{{ system }}]] system.
  </div>
  It is suited for {{ formattedExocraftTable }}.
  <br />
  <br />
  <div>==Track Overview==</div>
  <div class="keep-linebreaks">{{ appearance }}</div>
  <br />
  <div>==Features==</div>
  <div class="keep-linebreaks">{{ features2 }}</div>
  <br />
  <div>==Additional Information==</div>
  <div>{{ additionalInfo }}</div>
  <div v-if="docBy && docBy !== discoveredlink && docBy !== discovered">Documented by {{ docBySentence }}</div>
  <br />
  <div>==Gallery==</div>
  <GalleryOutput />
</template>
