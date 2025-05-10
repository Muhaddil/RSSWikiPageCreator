<script setup lang="ts">
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { civName as civilized } from '@/variables/civilization';
import GalleryOutput from '@/components/inputs/gallery/GalleryOutput.vue';

const pageData = usePageDataStore();
const {
  name,
  release,
  image,
  appearance,
  savelocation,
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
  horns,
  crystals,
  glowtubes,
  slots,
  royalclass,
  location,
  cost,
  damagePotential,
  additionalInfo,
  scannerRange,
} = storeToRefs(pageData);
</script>

<template>
  <div><span v-pre>{{Version|</span>{{ release }}<span v-pre>}}</span></div>
  <div>
    <span v-pre>{{Royal Space Society}}</span>
  </div>
  <div v-pre>{{Multitool infobox</div>
  <div>| name = {{ name }}</div>
  <div>| image = {{ image || 'nmsMisc_NotAvailable.png' }}</div>
  <div>| civilized = {{ civilized }}</div>
  <div>| galaxy = {{ regionData.galaxy }}</div>
  <div>| region = {{ regionData.region }}</div>
  <div>| system = {{ system }}</div>
  <div>| planet = {{ planet }}</div>
  <div>| moon = {{ moon }}</div>
  <div>| location = {{ location }}</div>
  <div>| axes = {{ axes }}</div>
  <div>| coordinates = <span v-pre>{{Glyphs2Coords|</span>{{ glyphs }}<span v-pre>}}</span></div>
  <div>| portalglyphs = {{ glyphs }}</div>
  <div>| type = {{ type }}</div>
  <div>| crystals = {{ crystals }}</div>
  <div>| horns = {{ horns }}</div>
  <div>| glowtubes = {{ glowtubes }}</div>
  <div>| class = {{ royalclass }}</div>
  <div>| slots = {{ slots }}</div>
  <div>| cost = {{ cost }}</div>
  <div>| mode = {{ mode }}</div>
  <div>| platform = {{ platform }}</div>
  <div>| researchteam = {{ researchteam2 }}</div>
  <div>| release = {{ release }}</div>
  <div v-pre>}}</div>
  <div>'''{{ name }}''' is a multi-tool.</div>
  <br />
  <div>==Summary==</div>
  <div>'''{{ name }}''' is [[Multi-Tool Catalogue - {{ type }}|{{ type }} multi-tool]].</div>
  <br />
  <div>==Appearance==</div>
  <div>{{ appearance }}</div>
  <br />
  <div>==Location==</div>
  <div>
    This multi-tool is located in the [[{{ system }}]] [[star system]] in the [[{{ regionData.region }}]] [[region]] of
    [[Royal Space Society]], in the [[{{ regionData.galaxy }}]] [[galaxy]].
  </div>
  <br />
  <div class="keep-linebreaks"><span v-pre>{{CoordGlyphConvert</span>|{{ glyphs }}<span v-pre>}}</span></div>
  <br />
  <div>==Stats==</div>
  <div>
    The <span v-pre>{{Class|</span>{{ royalclass }}<span v-pre>}}</span> class version of this weapon has the following
    base stats:
  </div>
  <div>* '''Damage Potential''': {{ damagePotential }}</div>
  <div>* '''Scanner Range''': {{ scannerRange }}</div>
  <br />
  <div>==Acquirement==</div>
  <div>{{ savelocation }}</div>
  <div><span v-pre>&lt;gallery&gt;</span></div>
  <div><span v-pre>&lt;/gallery&gt;</span></div>
  <br />
  <div>==Additional Information==</div>
  <div>{{ additionalInfo }}</div>
  <br />
  <div>==Gallery==</div>
  <GalleryOutput />
  <br />
  <div>==Reference Links==</div>
  <div><span v-pre>{{</span>MTRefLinks<span v-pre>}}</span></div>
  <br />
</template>
