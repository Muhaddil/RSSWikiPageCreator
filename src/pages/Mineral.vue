<script setup lang="ts">
import InputColumn from '@/components/structure/InputColumn.vue';
import OutputColumn from '@/components/structure/OutputColumn.vue';
// import ReleaseInput from '@/components/inputs/ReleaseInput.vue';
import SimpleInput from '@/components/inputs/SimpleInput.vue';
import InfoboxImageInput from '@/components/inputs/InfoboxImageInput.vue';
import DiscovererInputs from '@/components/inputs/DiscovererInputs.vue';
import mineralNotesInput from '@/components/inputs/mineralNotesInput.vue';
import mineralFormationInput from '@/components/inputs/mineralFormationInput.vue';
import GlyphInput from '@/components/inputs/GlyphInput.vue';
import ResourceInput from '@/components/inputs/ResourceInput.vue';
import ResearchteamInput from '@/components/inputs/ResearchteamInput.vue';
import InputRow from '@/components/structure/InputRow.vue';
import Subgrid from '@/components/structure/Subgrid.vue';
import Actions from '@/components/actions/Actions.vue';
import MineralInfobox from '@/components/infoboxes/MineralInfobox.vue';
import WikiTemplate from '@/components/structure/WikiTemplate.vue';
import ExplanationError from '@/components/structure/ExplanationError.vue';
import { addStaticPageData, forceDatalistComponent, numberErrorComponent } from '@/common';
import { usePageDataStore, useStaticPageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref, watchEffect } from 'vue';
import { useDataValidationStore } from '@/stores/dataValidation';
import Explanation from '@/components/structure/Explanation.vue';
import { watchDebounced } from '@vueuse/core';
import mineralFormationDatalist from '@/datalists/mineralDatalists';
import mineralNotesDatalist from '@/datalists/mineralDatalists3';
import mineralResourcesDatalist from '@/datalists/mineralDatalists2';

import { useMarker } from '@/composables/useMarker';

const staticPageData = useStaticPageDataStore();
const { fullArticleElement } = storeToRefs(staticPageData);

const dataValidationStore = useDataValidationStore();

const wikiText = ref<HTMLDivElement | null>(null);

onMounted(() => {
  fullArticleElement.value = wikiText.value;
  // TODO: gallery should be integrated natively, not as separate Vue app
  const mineralMap = {
    'Scanner view': 'Vista del escáner',
    'Discovery Menu': 'Menú de descubrimiento',
  };

  addStaticPageData('galleryArray', ['', mineralMap['Scanner view'], mineralMap['Discovery Menu']]);
  addStaticPageData(
    'galleryExplanationExternal',
    `
    Hay un orden preferido de imágenes de la galería:
	<div class='dialog-center'>
		<ol class='dialog-list'>
			<li>Vista de escáner</li>
			<li>Menú de descubrimiento</li>
		</ol>
 	</div>`
  );
  import('../startup/gallery');
});

const pageData = usePageDataStore();
const {
  release,
  name,
  hub,
  orgName,
  image,
  discovered,
  discoveredlink,
  galaxy,
  system,
  planet,
  moon,
  glyphs,
  content,
  formation,
  notes,
  elements,
  polymorphic,
  discDate,
  docBy,
  researchteam,
  region,
  docBySentence,
  sanitisedStrings,
} = storeToRefs(pageData);

const isPolymorphicInvalid = computed(() => numberErrorComponent(polymorphic.value));
const isContentInvalid = computed(() => numberErrorComponent(content.value));

const isFormationInvalid = ref('');
const isNotesInvalid = ref('');

watchDebounced(
  formation,
  () => (isFormationInvalid.value = forceDatalistComponent(formation.value, Object.keys(mineralFormationDatalist))),
  {
    debounce: 500,
  }
);
watchDebounced(
  notes,
  () => (isNotesInvalid.value = forceDatalistComponent(notes.value, Object.keys(mineralNotesDatalist))),
  {
    debounce: 500,
  }
);

watchEffect(() => {
  if (elements.value[0] === elements.value[1]) elements.value[1] = '';
});

const metalContent = computed(() => {
  const contentNumber = parseInt(content.value);
  if (isNaN(contentNumber)) return;
  return contentNumber + '%';
});

const filledElements = computed(() => elements.value.filter((el) => el));

const errorMessage = ref('');
const openErrorModal = ref(false);

function markCopy() {
  const { isValidData, message } = useMarker();
  errorMessage.value = message.value;
  openErrorModal.value = !isValidData.value;
}
</script>

<template>
  <InputColumn>
    <form
      class="table"
      @submit.prevent
    >
      <!-- <ReleaseInput /> -->
      <SimpleInput
        label="Nombre del mineral:"
        identifier="nameInput"
        v-model="name"
        img="mineral/mineralName"
      >
        Introduzca exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o).
        <template #heading>Nombre del mineral</template>
        <template #content>Introduzca exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o).</template>
      </SimpleInput>
      <!-- <SimpleInput
        label="Nombre del Hub:"
        identifier="hubInput"
        v-model="hub"
      />-->
      <SimpleInput
        label="Nombre original antes de registrar (si está disponible):"
        identifier="orgNameInput"
        v-model="orgName"
      />
      <InfoboxImageInput />
      <!--     <SimpleInput
        label="Nombre de la Galaxia:"
        identifier="galaxyInput"
        v-model="galaxy"
      />-->
      <SimpleInput
        label="Nombre del sistema:"
        identifier="systemInput"
        v-model="system"
      />
      <!--    <SimpleInput
        label="Nombre de la region:"
        identifier="regionsInput"
        v-model="regions"
      />-->
      <SimpleInput
        label="Nombre del planeta:"
        identifier="planetInput"
        v-model="planet"
      >
        Nombre del planeta O el planeta rodeado por la luna donde se puede encontrar el mineral.
      </SimpleInput>
      <SimpleInput
        label="Nombre de la luna (si el mineral está en la luna):"
        identifier="moonInput"
        v-model="moon"
      >
        Si el mineral se encuentra en una luna. Déjelo en blanco si el mineral está en un planeta.
      </SimpleInput>
      <GlyphInput />
      <SimpleInput
        v-model="content"
        :error="isContentInvalid"
        label="Contenido de metales:"
        identifier="content"
        img="mineral/content"
        maxlength="2"
      >
        Encontrado en el escaneo de minerales.
        <template #heading>Contenido metálico</template>
        <template #content>Encontrado en el escaneo de minerales.</template>
      </SimpleInput>
      <mineralFormationInput
        v-model="formation"
        :error="isFormationInvalid"
        label="Proceso de formación:"
        identifier="formation"
        img="mineral/formation"
      >
        Encontrado en el escaneo de minerales.
        <template #heading>Proceso de formación</template>
        <template #content>Encontrado en el escaneo de minerales.</template>
      </mineralFormationInput>
      <mineralNotesInput
        v-model="notes"
        :error="isNotesInvalid"
        label="Notas del mineral:"
        identifier="notes"
        img="mineral/notes"
      >
        Encontrado en el escaneo de minerales.
        <template #heading>Notas del mineral</template>
        <template #content> Encontrado en el escaneo de minerales. </template>
      </mineralNotesInput>
      <SimpleInput
        v-model="polymorphic"
        :error="isPolymorphicInvalid"
        identifier="polymorphic"
        label="Polimórfico (número de instancias):"
        maxlength="2"
      >
        Cuántos modelos diferentes de este mineral se descubrieron.
        <template #heading>Polimórfico</template>
        <template #content>
          A veces, varios modelos de minerales tienen el mismo nombre. Esto se llama "polimorfismo". Introduzca el
          número de cuantos modelos minerales diferentes tenían este nombre.
        </template>
      </SimpleInput>
      <ResourceInput
        :index="0"
        :resources="mineralResourcesDatalist"
        item="mineral"
      />
      <ResourceInput
        :index="1"
        :resources="mineralResourcesDatalist"
        item="mineral"
      />
      <InputRow>
        <template #label>
          <label for="discDate">Fecha del descubrimiento:</label>
          <Explanation img="mineral/discDate">
            Encontrado en el escaneo de minerales.
            <template #heading>Fecha del descubrimiento</template>
            <template #content>
              Encontrado en el escaneo de minerales.
              <br />
              La marca de tiempo exacta del descubrimiento se muestra en la parte superior izquierda.
            </template>
          </Explanation>
        </template>

        <template #input>
          <input
            v-model="discDate"
            id="discDate"
            type="date"
          />
        </template>
      </InputRow>
      <Subgrid>
        <InputRow>
          <p>Información sobre el jugador.</p>
        </InputRow>
        <DiscovererInputs />
        <SimpleInput
          label="Documentador si no eres el descubridor:"
          identifier="docBy"
          v-model="docBy"
        />
        <ResearchteamInput />
      </Subgrid>
    </form>

    <div id="galleryInput"></div>
    <div
      id="galleryItems"
      class="gallery-items-wrapper"
    ></div>

    <Actions />
  </InputColumn>

  <ExplanationError
    v-model:open="openErrorModal"
    :error-message="errorMessage"
  />

  <OutputColumn @mousedown="markCopy">
    <div
      ref="wikiText"
      class="wikiText"
      id="fullArticle"
      @mouseup="dataValidationStore.getSelectedText"
      @touchend="dataValidationStore.getSelectedText"
    >
      <div>
        <WikiTemplate template-name="Version">{{ release }}</WikiTemplate>
      </div>
      <MineralInfobox
        :mineral-name="sanitisedStrings.name"
        :image="image"
        :hub="hub"
        :galaxy="galaxy"
        :region="region"
        :systemName="sanitisedStrings.system"
        :planetName="sanitisedStrings.planet"
        :moonName="sanitisedStrings.moon"
        :content="metalContent"
        :formation="formation"
        :notes="notes"
        :elem-primary="elements[0]"
        :elem-secondary="elements[1]"
        :polymorphic="polymorphic"
        :disc-date="discDate.replaceAll('-', '/')"
        :discovered-name="sanitisedStrings.discovered"
        :discoveredlink-name="sanitisedStrings.discoveredlink"
        :researchteam="researchteam"
        :release="release"
      />
      <div>'''{{ sanitisedStrings.name }}''' is a variety of mineral.</div>
      <br />

      <div>==Summary==</div>
      <div>'''{{ sanitisedStrings.name }}''' is a type of [[mineral]]. {{ sanitisedStrings.appearance }}</div>
      <br />
      <template v-if="polymorphic">
        <div>
          <WikiTemplate template-name="Polymorphicmineral">{{ polymorphic }}</WikiTemplate>
        </div>
        <br />
      </template>

      <div>==Discovery Menu==</div>
      <div>* Metal Content: {{ metalContent }}</div>
      <div>* Formation Process: {{ formation }}</div>
      <div>* Notes: {{ notes }}</div>
      <br />

      <div>==Alias Names==</div>
      <div v-if="orgName">
        <WikiTemplate template-name="aliasc">text=Original|name={{ sanitisedStrings.orgName }}</WikiTemplate>
      </div>
      <div>
        <WikiTemplate template-name="aliasc">text=Current|name={{ sanitisedStrings.name }}</WikiTemplate>
      </div>
      <br />

      <div>==Location==</div>
      <div>
        <span v-if="moon">[[moon]] [[{{ sanitisedStrings.moon }}]] of the</span> [[planet]] [[{{
          sanitisedStrings.planet
        }}]] in the [[{{ sanitisedStrings.system }}]] [[star system]].
      </div>
      <div>
        <WikiTemplate template-name="CoordGlyphConvert">{{ glyphs }}</WikiTemplate>
      </div>
      <br />

      <div>==Usage==</div>
      <div>
        This mineral provides the
        {{ filledElements.length > 1 ? 'resources' : 'resource' }}
        {{ filledElements.map((el) => `[[${el}]]`).join(' and ') }}
        when harvested.
      </div>
      <br />

      <div>==Additional Information==</div>
      <div v-if="docBy && docBy !== discoveredlink && docBy !== discovered">Documented by {{ docBySentence }}</div>
      <br />

      <div id="gallery"></div>
    </div>
  </OutputColumn>
</template>
