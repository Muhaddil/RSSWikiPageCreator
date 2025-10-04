<script setup lang="ts">
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { civName as civilized } from '@/variables/civilization';
import WikiTemplate from '@/components/WikiTemplate.vue';
import { watch, computed } from 'vue';
import GalleryOutput from '@/components/inputs/gallery/GalleryOutput.vue';

const pageData = usePageDataStore();
const {
  name,
  discovered,
  discoveredlink,
  image,
  glyphs,
  mode,
  researchteam2,
  orgName,
  docBy,
  regionData,
  release,
  system,
  docDate,
  discDate,
  chemicalSymbolsOutput,
  resourceListOutput,
  biome,
  type,
  planet,
  Planetdescriptors,
  atmosphere,
  faunaNum,
  weather,
  sentinels,
  flora,
  fauna,
  locations,
  sentinelInfo,
  generatedOutput,
  additionalInfo,
  generatedOutputFauna,
  generatedOutputFlora,
  generatedOutputMinerals,
} = storeToRefs(pageData);

const glyphcoords = computed(() => glyphs2Coords(glyphs.value));

function glyphs2Coords(glyphs: string): string {
  if (glyphs.length !== 12) return ''; // Ensure correct glyph length

  const X_Z_POS_SHIFT = 2049;
  const X_Z_NEG_SHIFT = 2047;
  const Y_POS_SHIFT = 129;
  const Y_NEG_SHIFT = 127;

  const x_glyphs = parseInt(glyphs.substring(9, 12), 16);
  const y_glyphs = parseInt(glyphs.substring(4, 6), 16);
  const z_glyphs = parseInt(glyphs.substring(6, 9), 16);
  const system_idx = glyphs.substring(1, 4);

  // Calculate coordinates
  const coords_x = x_glyphs >= X_Z_POS_SHIFT ? x_glyphs - X_Z_POS_SHIFT : x_glyphs + X_Z_NEG_SHIFT;
  const coords_y = y_glyphs >= Y_POS_SHIFT ? y_glyphs - Y_POS_SHIFT : y_glyphs + Y_NEG_SHIFT;
  const coords_z = z_glyphs >= X_Z_POS_SHIFT ? z_glyphs - X_Z_POS_SHIFT : z_glyphs + X_Z_NEG_SHIFT;

  // Convert coordinates to hex
  const coordinates = [
    coords_x.toString(16).toUpperCase().padStart(4, '0'),
    coords_y.toString(16).toUpperCase().padStart(4, '0'),
    coords_z.toString(16).toUpperCase().padStart(4, '0'),
    system_idx.padStart(4, '0'),
  ];

  return coordinates.join(':');
}

watch(discoveredlink, (newDiscoveredLinkValue) => {
  if (newDiscoveredLinkValue) {
    discovered.value = '';
  }
});

const formattedGeneratedOutput = computed(() => {
  const moons = generatedOutput.value.split(',').map((moon) => moon.trim());
  return moons.length > 1 ? moons.join(' and ') : moons[0];
});

const faunaVerb = computed(() => {
  const num = parseInt(faunaNum.value);
  if (isNaN(num)) return 'are';
  return num === 1 ? 'is' : 'are';
});
</script>

<template>
  <div><span v-pre>{{Version|</span>{{ release }}<span v-pre>}}</span></div>
  <div>
    <span v-pre>{{Royal Space Society}}</span>
  </div>
  <div v-pre>{{Moon infobox</div>
  <div>| name = {{ name }}</div>
  <div>| image = {{ image || 'nmsMisc_NotAvailable.png' }}</div>
  <div>| region = {{ regionData.region }}</div>
  <div>| galaxy = {{ regionData.galaxy }}</div>
  <div>| system = {{ system }}</div>
  <div>| planet = {{ planet }}</div>
  <div>| coordinates = {{ glyphcoords }}</div>
  <div>| type = {{ type }}</div>
  <div>| description = {{ Planetdescriptors }}</div>
  <div>| atmosphere = {{ atmosphere }}</div>
  <div>| terrain = Pangean</div>
  <div>| weather = {{ weather }}</div>
  <div>| resources = {{ chemicalSymbolsOutput }}</div>
  <div>| sentinel = {{ sentinels }}</div>
  <div>| flora = {{ flora }}</div>
  <div>| fauna = {{ fauna }} ({{ faunaNum }})</div>
  <div>| mode = {{ mode }}</div>
  <div>| civilized = {{ civilized }}</div>
  <div>| researchteam = {{ researchteam2 }}</div>
  <div>| discoveredlink = {{ discoveredlink }}</div>
  <div>| discovered = {{ discovered }}</div>
  <div>| release = {{ release }}</div>
  <div v-pre>}}</div>
  <div>'''{{ name }}''' is a moon.</div>
  <br />
  <div>==Summary==</div>
  <div>'''{{ name }}''' is a [[moon]] in the [[{{ system }}]] star system.</div>
  <br />
  <div>It orbits the [[planet]] [[{{ planet }}]].</div>
  <br />
  <div>==Alias Names==</div>
  <div v-if="orgName">
    <WikiTemplate template-name="aliasc">text=Original|name={{ orgName }}</WikiTemplate>
  </div>
  <div>
    <WikiTemplate template-name="aliasc">text=Current|name={{ name }}</WikiTemplate>
  </div>
  <br />
  <div>==Discovery==</div>
  <div v-if="discDate && !docDate && discoveredlink">
    Discovered and uploaded by <WikiTemplate template-name="profile">{{ discoveredlink }}</WikiTemplate> on
    {{ discDate }}
  </div>

  <div v-else-if="discDate && !docDate && discovered">
    Discovered and uploaded by ''{{ discovered }}'' on {{ discDate }}
  </div>

  <div v-else-if="discDate && docDate && discovered && docBy && discDate === docDate">
    Discovered and uploaded by ''{{ discovered }}'' and explored and documented by ''{{ docBy }}'' on {{ discDate }}
  </div>

  <div v-else-if="discDate && docDate && discoveredlink && docBy && discDate !== docDate">
    * Discovered and uploaded by <WikiTemplate template-name="profile">{{ discoveredlink }}</WikiTemplate> on
    {{ discDate }}<br />
    * Explored and documented by ''{{ docBy }}'' on {{ docDate }}
  </div>

  <div v-else-if="discDate && docDate && discovered && docBy && discDate !== docDate">
    * Discovered and uploaded by ''{{ discovered }}'' on {{ discDate }}<br />
    * Explored and documented by ''{{ docBy }}'' on {{ docDate }}
  </div>

  <div v-else-if="!discDate && docDate && discoveredlink && docBy">
    Explored and documented by ''{{ docBy }}'' on {{ docDate }}
  </div>

  <div v-else-if="!discDate && docDate && discovered && docBy">
    Explored and documented by ''{{ docBy }}'' on {{ docDate }}
  </div>

  <div v-else-if="discDate && docDate && discoveredlink && !docBy && discDate === docDate">
    Discovered and uploaded by <WikiTemplate template-name="profile">{{ discoveredlink }}</WikiTemplate> on
    {{ discDate }}
  </div>

  <div v-else-if="discDate && docDate && discoveredlink && !docBy && discDate !== docDate">
    Discovered by <WikiTemplate template-name="profile">{{ discoveredlink }}</WikiTemplate> on {{ discDate }} and
    uploaded on {{ docDate }}
  </div>

  <div v-else-if="discDate && docDate && discovered && !docBy && discDate === docDate">
    Discovered and uploaded by ''{{ discovered }}'' on {{ discDate }}
  </div>

  <div v-else-if="discDate && docDate && discovered && !docBy && discDate !== docDate">
    Discovered by ''{{ discovered }}'' on {{ discDate }} and uploaded on {{ docDate }}
  </div>
  <br />
  <div>==Planet Type==</div>
  <div><span v-pre>{{</span>Biome|{{ biome }}<span v-pre>}}</span> - {{ Planetdescriptors }}</div>
  <br />
  <div>==Moons==</div>
  <div v-if="formattedGeneratedOutput">This planet's [[moon]] is {{ formattedGeneratedOutput }}.</div>
  <div v-if="!formattedGeneratedOutput">This planet has no moons.</div>
  <br />
  <div>==Location==</div>
  <div>
    It can be found in the [[{{ system }}]] [[star system]] in the [[{{ regionData.region }}]] [[region]] of [[Royal
    Space Society]], in the [[{{ regionData.galaxy }}]] [[galaxy]].
  </div>
  <br />
  <div><span v-pre>{{CoordGlyphConvert|</span>{{ glyphcoords }}<span v-pre>}}</span></div>
  <br />
  <div>===Documented Bases===</div>
  <div>
    <span v-pre>{{CARGOBasesPlanet|{{PAGENAME}}}}</span>
  </div>
  <br />
  <div>===Documented Multi-Tool Sites===</div>
  <div>
    <span v-pre>{{CARGOMTPlanetShort|planet={{PAGENAME}}}}</span>
  </div>
  <br />
  <div>===Notable Locations / Waypoints===</div>
  <div>{{ locations }}</div>
  <br />

  <div>==Life==</div>
  <div>===Fauna===</div>
  <div>* There {{ faunaVerb }} {{ faunaNum }} fauna on this planet</div>
  <div><span v-pre>{| class="article-table" style="text-align:center; width:100%; max-width: 1250px"</span></div>
  <div>|-</div>
  <div>! style="width:150px" | Image</div>
  <div>! Name</div>
  <div>! Ecosystem</div>
  <div>! Genus</div>
  <div>! Height</div>
  <div>! Weight</div>
  <div>! Discovered by</div>
  <div v-if="generatedOutputFauna">
    <div>
      <pre class="pre-wrap">{{ generatedOutputFauna }}</pre>
    </div>
  </div>
  <div>|}</div>
  <br />

  <div>===Flora===</div>
  <div><span v-pre>{| class="article-table" style="text-align:center; width:100%; max-width: 1250px"</span></div>
  <div>|-</div>
  <div>! style="width:150px" | Image</div>
  <div>! Name</div>
  <div>! Age</div>
  <div>! Root Structure</div>
  <div>! Nutrient Source</div>
  <div>! Notes</div>
  <div>! Elements</div>
  <div>! Discovered by</div>
  <div v-if="generatedOutputFlora">
    <div>
      <pre class="pre-wrap">{{ generatedOutputFlora }}</pre>
    </div>
  </div>
  <div>|}</div>
  <br />

  <div>===Minerals===</div>
  <div><span v-pre>{| class="article-table" style="text-align:center; width:100%; max-width: 1250px"</span></div>
  <div>|-</div>
  <div>! style="width:150px" | Image</div>
  <div>! Name</div>
  <div>! Metal Content</div>
  <div>! Formation Process</div>
  <div>! Notes</div>
  <div>! Elements</div>
  <div>! Discovered by</div>
  <div v-if="generatedOutputMinerals">
    <div>
      <pre class="pre-wrap">{{ generatedOutputMinerals }}</pre>
    </div>
  </div>
  <div>|}</div>
  <br />

  <div>==Sentinels==</div>
  <div>{{ sentinelInfo }}</div>
  <br />
  <div>==Resources==</div>
  <div v-if="resourceListOutput">
    <div>
      <pre>{{ resourceListOutput }}</pre>
    </div>
  </div>
  <br />
  <div>==Additional Information==</div>
  <div>{{ additionalInfo }}</div>
  <br />
  <div>==Gallery==</div>
  <GalleryOutput />
</template>

<style>
.pre-wrap {
  white-space: pre-wrap;
  overflow-wrap: break-word;
}
</style>
