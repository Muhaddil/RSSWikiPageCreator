<script setup lang="ts">
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { civName as civilized } from '@/variables/civilization';
import WikiTemplate from '@/components/WikiTemplate.vue';
import { computed, watchEffect, watch } from 'vue';
import GalleryOutput from '@/components/inputs/gallery/GalleryOutput.vue';

const pageData = usePageDataStore();
const {
  name,
  discovered,
  discoveredlink,
  image,
  glyphs,
  system,
  planet,
  moon,
  mode,
  researchteam2,
  orgName,
  appearance,
  elements,
  discDate,
  polymorphic,
  metalContent,
  formation,
  docBy,
  regionData,
  release,
  notes,
  docBySentence,
} = storeToRefs(pageData);

const content = computed(() => {
  const contentNumber = parseInt(metalContent.value);
  if (isNaN(contentNumber)) return;
  return contentNumber + '%';
});

watchEffect(() => {
  if (elements.value[0] === elements.value[1]) elements.value[1] = '';
});

watch(discoveredlink, (newDiscoveredLinkValue) => {
  if (newDiscoveredLinkValue) {
    discovered.value = '';
  }
});

const filledElements = computed(() => elements.value.filter(Boolean));
</script>

<template>
  <div><span v-pre>{{Version|</span>{{ release }}<span v-pre>}}</span></div>
  <div>
    <span v-pre>{{Royal Space Society}}</span>
  </div>
  <div v-pre>{{Mineral infobox</div>
  <div>| name = {{ name }}</div>
  <div>| image = {{ image || 'nmsMisc_NotAvailable.png' }}</div>
  <div>| galaxy = {{ regionData.galaxy }}</div>
  <div>| region = {{ regionData.region }}</div>
  <div>| system = {{ system }}</div>
  <div>| planet = {{ planet }}</div>
  <div>| moon = {{ moon }}</div>
  <div>| content = {{ content }}</div>
  <div>| formation = {{ formation }}</div>
  <div>| notes = {{ notes }}</div>
  <div>| element_primary = {{ elements[0] }}</div>
  <div>| element_secondary = {{ elements[1] }}</div>
  <div>| polymorphic = {{ polymorphic }}</div>
  <div>| civilized = {{ civilized }}</div>
  <div>| discoveredlink = {{ discoveredlink }}</div>
  <div>| discovered = {{ discovered }}</div>
  <div>| discovered_on = {{ discDate }}</div>
  <div>| mode = {{ mode }}</div>
  <div>| researchteam = {{ researchteam2 }}</div>
  <div>| release = {{ release }}</div>
  <div v-pre>}}</div>
  <div>'''{{ name }}''' is a variety of mineral.</div>
  <br />
  <div>==Summary==</div>
  <div>'''{{ name }}''' is a type of [[mineral]]. {{ appearance }}</div>
  <br />
  <div>==Alias Names==</div>
  <div v-if="orgName">
    <WikiTemplate template-name="aliasc">text=Original|name={{ orgName }}</WikiTemplate>
  </div>
  <div>
    <WikiTemplate template-name="aliasc">text=Current|name={{ name }}</WikiTemplate>
  </div>
  <br />
  <div>==Discovery Menu==</div>
  <div>* Metal Content: {{ content }}</div>
  <div>* Formation Process: {{ formation }}</div>
  <div>* Notes: {{ notes }}</div>
  <br />
  <div>==Location==</div>
  <div>
    It can be found on the <span v-if="moon">[[moon]] [[{{ moon }}]] of the</span> [[planet]] [[{{ planet }}]] in the
    [[{{ system }}]] [[star system]].
  </div>
  <div>
    <WikiTemplate template-name="CoordGlyphConvert">{{ glyphs }}</WikiTemplate>
  </div>
  <br />
  <div>==Resources==</div>
  <div v-if="filledElements.length">
    This mineral provides the
    {{ filledElements.length > 1 ? 'resources' : 'resource' }}
    {{ filledElements.map((el) => `[[${el}]]`).join(' and ') }}
    when mined.
  </div>
  <br />
  <div>==Additional Information==</div>
  <div v-if="docBy && docBy !== discoveredlink && docBy !== discovered">Documented by {{ docBySentence }}</div>
  <br />
  <div>==Gallery==</div>
  <GalleryOutput />
</template>
