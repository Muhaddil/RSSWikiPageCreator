<script setup lang="ts">
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { civName as civilized } from '@/variables/civilization';
// import { computed } from 'vue';
// import WikiTemplate from '@/components/WikiTemplate.vue';
import GalleryOutput from '@/components/inputs/gallery/GalleryOutput.vue';

const pageData = usePageDataStore();
const {
  name,
  release,
  image,
  discovered,
  discoveredlink,
  researchteam2,
  platform,
  mode,
  type,
  features2,
  appearance,
  additionalInfo,
} = storeToRefs(pageData);
</script>

<template>
  <div><span v-pre>{{Version|</span>{{ release }}<span v-pre>}}</span></div>
  <div>
    <span v-pre>{{Royal Space Society}}</span>
  </div>
  <div v-pre>{{Corvette infobox</div>
  <div>| name = {{ name }}</div>
  <div>| image = {{ image || 'nmsMisc_NotAvailable.png' }}</div>
  <div>| civilized = {{ civilized }}</div>
  <div>| builderlink = {{ discoveredlink }}</div>
  <div>| builder = {{ discovered }}</div>
  <div>| type = {{ type }}</div>
  <div>| mode = {{ mode }}</div>
  <div>| platform = {{ platform }}</div>
  <div>| release = {{ release }}</div>
  <div>| researchteam = {{ researchteam2 }}</div>
  <div v-pre>}}</div>
  <div>'''{{ name }}''' is a corvette.</div>
  <br />
  <div>==Summary==</div>
  <div>'''{{ name }}''' is a [[Corvette]] of type {{ type }}.</div>
  <br />
  <br />
  <div>==Corvette Overview==</div>
  <div>{{ appearance }}</div>
  <br />
  <div>==Features==</div>
  <div>{{ features2 }}</div>
  <br />
  <div>==Additional Information==</div>
  <div>{{ additionalInfo }}</div>
  <br />
  <div>==Gallery==</div>
  <GalleryOutput />
</template>
