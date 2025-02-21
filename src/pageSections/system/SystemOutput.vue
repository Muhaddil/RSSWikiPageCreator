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
  planetnum,
  moonnum,
  mode,
  researchteam2,
  orgName,
  docBy,
  regionData,
  release,
  multiplestars,
  docBySentence,
  color,
  stellarclass,
  distance,
  dissonant,
  water,
  faction,
  economy,
  economybuy,
  economysell,
  wealth,
  conflict,
  navImage,
  ssImage,
  generatedOutput,
  additionalInfo,
  tradeTerminal,
  modulesMT,
  modulesSS,
  modulesEC,
  modulesES,
  modulesSD,
  discDate,
  docDate,
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
    system_idx.padStart(4, '0')
  ];

  return coordinates.join(':');
}

const formattedModulesMT = computed(() => {
  return modulesMT.value.map((module, index) => `| MT${index + 1}=${module}`).join('\n');
});

const formattedmodulesSS = computed(() => {
  return modulesSS.value.map((module, index) => `| SS${index + 1}=${module}`).join('\n');
});

const formattedmodulesEC = computed(() => {
  return modulesEC.value.map((module, index) => `| EC${index + 1}=${module}`).join('\n');
});

const formattedmodulesES = computed(() => {
  return modulesES.value.map((module, index) => `| ES${index + 1}=${module}`).join('\n');
});

const formattedmodulesSD = computed(() => {
  return modulesSD.value.map((module, index) => `| ${index + 1}=${module}`).join('\n');
});

watch(discoveredlink, (newDiscoveredLinkValue) => {
  if (newDiscoveredLinkValue) {
    discovered.value = '';
  }
});
</script>

<template>
  <div><span v-pre>{{Version|</span>{{ release }}<span v-pre>}}</span></div>
  <div><span v-pre>{{Royal Space Society}}</span></div>
  <div v-pre>{{System infobox</div>
  <div>| name = {{ name }}</div>
  <div>| image = {{ image || 'nmsMisc_NotAvailable.png' }}</div>
  <div>| region = {{ regionData.region }}</div>
  <div>| galaxy = {{ regionData.galaxy }}</div>
  <div>| multiplestars = {{ multiplestars }}</div>
  <div>| coordinates = {{ glyphcoords }}</div>
  <div>| color = {{ color }}</div>
  <div>| class = {{ stellarclass }}</div>
  <div>| distance = {{ distance }}</div>
  <div>| planet = {{ planetnum }}</div>
  <div>| moon = {{ moonnum }}</div>
  <div>| water = {{ water }}</div>
  <div>| dissonant = {{ dissonant }}</div>
  <div>| faction = {{ faction }}</div>
  <div>| economy = {{ economy }}</div>
  <div>| economysell = {{ economysell }}</div>
  <div>| economybuy = {{ economybuy }}</div>
  <div>| wealth = {{ wealth }}</div>
  <div>| conflict = {{ conflict }}</div>
  <div>| mode = {{ mode }}</div>
  <div>| civilized = {{ civilized }}</div>
  <div>| researchteam = {{ researchteam2 }}</div>
  <div>| discoveredlink = {{ discoveredlink }}</div>
  <div>| discovered = {{ discovered }}</div>
  <div>| release = {{ release }}</div>
  <div v-pre>}}</div>
  <div>'''{{ name }}''' is a star system.</div>
  <br />
  <div>==Summary==</div>
  <div>'''{{ name }}''' is a [[star system]] in the [[{{ regionData.region }}]] [[region]].</div>
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
  <div v-if="discDate && !docBy && discoveredlink">Discovered and uploaded by <WikiTemplate template-name="profile">{{
    discoveredlink }}</WikiTemplate> on {{ discDate }}</div>
  <div v-if="discDate && !docBy && discovered">Discovered and uploaded by ''{{ discovered }}'' on {{ discDate }}</div>
  <div v-if="discDate && docDate && discoveredlink && docBy && docBy !== discoveredlink">* Discovered and uploaded by
    <WikiTemplate template-name="profile">{{ discoveredlink }}</WikiTemplate> on {{ discDate }}<br>
    * Explored and documented by ''{{ docBy }}'' on {{ docDate }}
  </div>
  <div v-if="discDate && docDate && discovered && docBy && docBy !== discovered">* Discovered and uploaded by ''{{
    discovered }}'' on {{ discDate }}<br>
    * Explored and documented by ''{{ docBy }}'' on {{ docDate }}</div>
  <br />
  <div>==Planets & Moons==</div>
  <div><span v-pre>{{</span>PM|{{ planetnum }}|{{ moonnum }}<span v-pre>}}</span></div>
  <div>{| class="article-table" style="text-align:center; width:100%; max-width:1250px"}</div>
  <div>|-</div>
  <div>! style="width:150px" | Image</div>
  <!-- <div>! style="width:150px" | Landscape</div> -->
  <div>! Name</div>
  <div>! Type</div>
  <div>! style="min-width:10em" | Resources</div>
  <div>! Weather</div>
  <div>! Sentinels</div>
  <div>! Flora</div>
  <div>! Fauna</div>
  <div v-if="generatedOutput">
    <div>
      <pre style="white-space: pre-wrap; word-wrap: break-word;">{{ generatedOutput }}</pre>
    </div>
  </div>
  <div>|<span v-pre>}</span></div>
  <br />
  <!-- <div id="Freighters" style="display: none">
    <div>==Freighters==</div>
    <div>===Capital Freighter===</div>
    <div>{| class="article-table" style="text-align:center; width:100%; max-width: 800px"}</div>
    <div>|-</div>
    <div>! style="width:150px" | Image</div>
    <div>! Name</div>
    <div>! Type</div>
    <div>! Discoverer</div>
    <div>|-</div>
    <div>| [[File:NmsMisc_NotAvailable.png|150px]] || {{ freighterName }} || [[Starship Catalogue - Freighter|subtype]] || {{ DiscovererInfo }}</div>
    <div>|}</div>
    <br />
    <div>===System Freighters===</div>
    <div>{| class="article-table" style="text-align:center; width:100%; max-width: 800px"}</div>
    <div>! style="width:150px" | Image</div>
    <div>! Name</div>
    <div>! Type</div>
    <div>! Discoverer</div>
    <div>|-</div>
    <div>| [[File:NmsMisc_NotAvailable.png|150px]] || {{ freighterName }} || {{ subtype }} || {{ DiscovererInfo }}</div>
    <div>|}</div>
    <br />
  </div>
  <div id="Derelict" style="display: none">
    <div>===Derelict Freighter===</div>
    <div>{| class="article-table" style="text-align:center; width:100%; max-width: 800px"}</div>
    <div>|-</div>
    <div>! style="width:150px" | Image</div>
    <div>! Name</div>
    <div>! Class</div>
    <div>! Hyperdrive</div>
    <div>! Fuel</div>
    <div>! Zones</div>
    <div>! Dangers</div>
    <div>! Discoverer</div>
    <div>|-</div>
    <div>|[[File: NmsMisc_NotAvailable.png|150px]] || {{ freighterName }} || <span v-pre>{{</span>class|X<span v-pre>}}</span> || ? ly || ?% || ?(rooms) || select:Rogue AI, [[Minifiend]], [[Green Jellyfish]] || {{ DiscovererInfo }}</div>
    <div>|}</div>
    <br />
  </div>
  <div id="Organic" style="display: none">
    <div>==Organic Frigate==</div>
    <div>{| class="article-table" style="text-align:center; width:100%; max-width: 800px"}</div>
    <div>|-</div>
    <div>! style="width:150px" | Image</div>
    <div>! Name</div>
    <div>! Class</div>
    <div>! Stats</div>
    <div>! Fuel</div>
    <div>! Discoverer</div>
    <div>|-</div>
    <div>| [[File:NmsMisc_NotAvailable.png|150px]] || {{ frigateName }} || <span v-pre>{{</span>class|X<span v-pre>}}</span> || style="min-width:7rem" | Combat: ?<br>Exploration: ?<br>Industrial: ?<br>Trade: ? || ?t / 250 LY || {{ DiscovererInfo }}</div>
    <div>|}</div>
    <br />
  </div> -->
  <div>==Documented Starships==</div>
  <div><span v-pre>{{</span>CARGOShipSys|{{ glyphcoords }}|{{ regionData.galaxy }}<span v-pre>}}</span></div>
  <br />
  <div style="display: none" id="Starships">
    All Starships discovered in the system can be found in the [[{{ name }} - Starship Album]].
    <br /><br />
  </div>
  <div>==Documented Multi-Tools==</div>
  <div><span v-pre>{{</span>CARGOMTCoord|{{ glyphcoords }}|{{ regionData.galaxy }}<span v-pre>}}</span></div>
  <br />
  <div style="display: none" id="MTs">
    All Multi-Tools discovered in the system can be found in the [[{{ name }} - Multi-Tool Album]].
    <br /><br />
  </div>
  <div>==Location Information==</div>
  <div><span v-pre>{{CoordGlyphConvert|</span>{{ glyphcoords }}<span v-pre>}}</span></div>
  <br />
  <div>===Navigation Image===</div>
  <div>[[File:{{ navImage }}|400px]]</div>
  <br />
  ===System Location===
  <div v-if="regionData && regionData.region && regionData.galaxy">
    <div>
      Located in the [[{{ regionData.region }}]] [[region]] of [[Royal Space Society]] in the [[{{ regionData.galaxy
      }}]] galaxy.
    </div>
  </div>
  <br />
  <div v-if="wealth !== 'Data Unavailable'">
    <div>==Space Station==</div>
    <div data-station="img">[[File:{{ ssImage }}|thumb|System space station]]</div>
    <div data-station="note"></div>
    <div data-station="terminal">
      <div>
        The [[Space Station]] [[Galactic Trade Terminal|terminal]] offers the following [[Trade Commodities]] for sale:
      </div>
      <div>{| class="article-table"}</div>
      <div>|-</div>
      <div>! style="min-width:250px" | Item Name</div>
      <div>! style="min-width:125px" | Price per Item</div>
      <div v-if="tradeTerminal">
        <div>
          <pre>{{ tradeTerminal }}</pre>
        </div>
      </div>
      <div>|}</div>
    </div>
    <div data-station="merchant">
      <div>
        The Space Station merchants offer the following <span v-pre>{{</span>class|S<span v-pre>}}</span> class items
        for
        sale:
      </div>
      <span v-pre>{{</span>SSMerchants
      <span v-if="formattedModulesMT">
        <pre>{{ formattedModulesMT }}</pre>
      </span>
      <span v-if="modulesSS && modulesSS.length > 0">
        <pre>{{ formattedmodulesSS }}</pre>
      </span>
      <span v-if="modulesEC && modulesEC.length > 0">
        <pre>{{ formattedmodulesEC }}</pre>
      </span>
      <span v-if="modulesES && modulesES.length > 0">
        <pre>{{ formattedmodulesES }}</pre>
      </span>
      }}
    </div>
    <div id="scrapDealer" data-station="scrapDealer">
      <br />
      <div>===Scrap Dealer===</div>
      <div><span v-pre>{{</span>ScrapDealer</div>
      <div v-if="modulesSD && modulesSD.length > 0">
        <div>
          <pre>{{ formattedmodulesSD }}</pre>
        </div>
      </div>
      <div><span v-pre>}}</span></div>
    </div>
    <br />
  </div>

  <div v-else>
    <div>==Space Station==</div>
    <div>{{ name }} has no space station.</div>
    <br />
  </div>

  <div>==Additional Information==</div>
  <div>{{ additionalInfo }}</div>
  <div v-if="docBy && docBy !== discoveredlink && docBy !== discovered">Documented by {{ docBySentence }}</div>
  <br />
  <div>==Gallery==</div>
  <GalleryOutput />
</template>
