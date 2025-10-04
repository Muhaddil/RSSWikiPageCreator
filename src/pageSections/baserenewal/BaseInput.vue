<script setup lang="ts">
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import TextareaInput from '@/components/inputs/TextareaInput.vue';
import { ref, watch } from 'vue';
import SanitisedTextInput from '@/components/inputs/SanitisedTextInput.vue';
import { useToast, POSITION } from 'vue-toastification';
import Button from 'primevue/button';

const pageData = usePageDataStore();
const { censusrenewal, release, name } = storeToRefs(pageData);

const censusrenewalYear = new Date().getUTCFullYear();
const currentVersion = release.value;

const addAllYears = ref(false);
const baseName = ref('');

function updateCensusRenewal(input: string) {
  const currentYear = censusrenewalYear;
  const regex = /censusrenewal\s*=\s*([^\n]*)/;
  const match = input.match(regex);

  if (match && match[1]) {
    let years = match[1].split(',').map((year) => year.trim());

    if (years.length === 0) {
      return input.replace(regex, `censusrenewal = ${currentYear}`);
    }

    if (addAllYears.value) {
      const lastYear = parseInt(years[years.length - 1], 10);
      for (let year = lastYear + 1; year <= currentYear; year++) {
        if (!years.includes(year.toString())) {
          years.push(year.toString());
        }
      }
    }

    if (!years.includes(currentYear.toString())) {
      years.push(currentYear.toString());
    }

    return input.replace(regex, `censusrenewal = ${years.join(', ')}`);
  } else {
    return input.trimEnd() + `\ncensusrenewal = ${currentYear}`;
  }
}

function updateRelease(input: string) {
  const versionRegex = /{{Version\|([^\n]*)}}/;
  const releaseRegex = /\| release =\s*([^\n]*)/;

  let updatedInput = input.replace(versionRegex, `{{Version|${currentVersion}}}`);
  updatedInput = updatedInput.replace(releaseRegex, `| release = ${currentVersion}`);

  return updatedInput;
}

function updateText(input: string): string {
  let updatedText = updateCensusRenewal(input);
  updatedText = updateRelease(updatedText);
  return updatedText;
}

function extractName(input: string): string {
  const nameRegex = /\| name =\s*([^\n]*)/;
  const match = input.match(nameRegex);

  if (match && match[1]) {
    return match[1].trim();
  }
  return '';
}

function handleCheckboxChange() {
  if (censusrenewal.value) {
    const updatedText = updateText(censusrenewal.value);
    pageData.censusrenewal = updatedText;

    baseName.value = extractName(censusrenewal.value);
    pageData.name = baseName.value;
  }
}

watch(addAllYears, () => {
  handleCheckboxChange();
});

watch(censusrenewal, () => {
  handleCheckboxChange();
});

const toast = useToast();

function showError(message: string) {
  toast.error(message, {
    position: POSITION.BOTTOM_RIGHT,
  });
}

function createPage() {
  const requiredFields = [{ field: pageData.name, message: '¡Pon el nombre de tu base!' }];

  for (const { field, message } of requiredFields) {
    if (!field) {
      showError(message);
      return;
    }
  }

  toast.success('¡Creada!', {
    position: POSITION.BOTTOM_RIGHT,
  });

  window.open(`https://nomanssky.fandom.com/wiki/${pageData.name}?action=edit#editform`, '_blank');
}
</script>

<template>
  <div class="code-container">
    <h2 class="title">Actualización del Censo RSS</h2>
    <p class="description">
      Pega aquí el código que deseas actualizar. Los valores se actualizarán automáticamente con el año actual y la
      versión más reciente.
    </p>

    <div class="checkbox-container">
      <label>
        <input
          type="checkbox"
          v-model="addAllYears"
        />
        Añadir todos los años desde el último registrado.
      </label>
      <div class="note">
        <p><strong>Nota:</strong> Selecciona esto antes de ingresar tu código o puede haber errores.</p>
      </div>
    </div>

    <SanitisedTextInput
      v-model="name"
      help-img="base/baseName"
      help-title="Nombre de la Base:"
      label="Nombre de la Base"
      tooltip="Escribe exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o)."
    >
      Escribe exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o).
    </SanitisedTextInput>

    <Button
      as="a"
      label="Ir a la base"
      severity="warn"
      @click="createPage"
    />

    <br />
    <br />

    <TextareaInput
      v-model="censusrenewal"
      label="Pega tu código aquí"
      placeholder="Ejemplo de código a pegar"
      class="textarea-input"
    />

    <div class="note">
      <p>
        <strong>Nota:</strong> Si no tienes ningún año en el campo de <code>censusrenewal</code>, el sistema fallará.
      </p>
    </div>
  </div>
</template>

<style scoped>
.code-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
}

.title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.checkbox-container {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}

.description {
  text-align: center;
  font-size: 1rem;
  margin-bottom: 20px;
}

.note {
  margin-top: 20px;
  font-size: 0.9rem;
  text-align: center;
}

code {
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
