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
  discovered,
  discoveredlink,
  researchteam2,
  system,
  glyphs,
  regionData,
  royalclass,
  docBy,
  docBySentence,
  otherupgrades,
  hyperdrive,
  fuel,
  roomNumber,
  derelictEnemies,
} = storeToRefs(pageData);
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
  <div>| coordinates = <span v-pre>{{Glyphs2Coords|</span>{{ glyphs }}<span v-pre>}}</span></div>
  <div>| portalglyphs = {{ glyphs }}</div>
  <div>| type = Freighter</div>
  <div>| subtype = Derelict</div>
  <div>| class = {{ royalclass }}</div>
  <div>| discovered = {{ discovered }}</div>
  <div>| discoveredlink = {{ discoveredlink }}</div>
  <div>| civilized = {{ civilized }}</div>
  <div>| researchteam = {{ researchteam2 }}</div>
  <div>| release = {{ release }}</div>
  <div v-pre>}}</div>
  <div>'''{{ name }}''' is a visual catalogue.</div>
  <br />
  <div>==Summary==</div>
  <div>
    <div>'''{{ name }}''' is a [[Starship Catalogue - Freighter#Derelict / Undetermined|derelict freighter]].</div>
  </div>
  <br />
  <div>==Stats==</div>
  <div>Every freighter listed here has the following upgrade module stats:</div>
  <div>{| class="article-table"</div>
  <div>|-</div>
  <div>! Procedural Rewards !! Value</div>
  <div>|-</div>
  <div>|&#123;&#123;class|{{ royalclass }}&#125;&#125; Hyperdrive || {{ hyperdrive }} ly</div>
  <div>|-</div>
  <div>|&#123;&#123;class|{{ royalclass }}&#125;&#125; Fuel || +{{ fuel }}%</div>
  <div>|-</div>
  <div>|&#123;&#123;class|{{ royalclass }}&#125;&#125; Other || +{{ otherupgrades }}%</div>
  <div>|}</div>
  <br />

  <div>==Derelict Freighters==</div>
  <div>{| class="wikitable" style="text-align:center; width:100%; max-width: 1000px"</div>
  <div>|-</div>
  <div>! style="width:150px" | Image</div>
  <div>! System</div>
  <div>! Zones</div>
  <div>! Dangers</div>
  <div>! Documented by</div>
  <div>|-</div>
  <div>
    | [[File:{{ image || 'nmsMisc_NotAvailable.png' }}|150px]] || [[{{ system }}]] || {{ roomNumber }} ||
    {{ derelictEnemies }} || &#123;&#123;gl/Small|{{ glyphs }}&#125;&#125; || &#123;&#123;Profile|{{
      discovered
    }}&#125;&#125;
  </div>
  <div>|-</div>
  <div>|}</div>
  <br />
  <div>==Location==</div>
  <div>
    This freighter can be found in all galaxies at the coordinates of the entries above. Enemies and room layout may
    differ.
  </div>
  <br />
  <div>==Additional Information==</div>
  <div v-if="docBy && docBy !== discoveredlink && docBy !== discovered">Documented by {{ docBySentence }}</div>
  <br />
  <div>==Gallery==</div>
  <GalleryOutput />
  <br />
  <div>[[Category:Derelict Freighter]]</div>
  <div>[[Category:Album]]</div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <div>
    &lt;!-- <strong>Entrada al sistema para {{ name }}</strong> --&gt;
  </div>
  <div>
    &lt;!-- | [[File:{{ image || 'nmsMisc_NotAvailable.png' }}|150px]] || [[{{ system }}]] || {{ roomNumber }} ||
    {{ derelictEnemies }} || &#123;&#123;gl/Small|{{ glyphs }}&#125;&#125; || &#123;&#123;Profile|{{
      discovered
    }}&#125;&#125; --&gt;
  </div>
  <div>&lt;!-- |- --&gt;</div>
  <br />
</template>
