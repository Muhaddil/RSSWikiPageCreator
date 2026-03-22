import { defineStore } from 'pinia';
import { computed } from 'vue';
import { usePageDataStore } from '@/stores/pageData';
import { getCurrentRoute } from '@/helpers/router';
export type ValidationFieldKey =
  | 'name'
  | 'glyphs'
  | 'image'
  | 'outputContent'
  | 'system'
  | 'planet'
  | 'moon'
  | 'platform'
  | 'mode'
  | 'type'
  | 'subtype'
  | 'biome'
  | 'regionData.region'
  | 'censusrenewal'
  | 'playername'
  | 'appearance';

type FieldValue = string | null | undefined | { value: string | number | null | undefined };

export interface ValidationField {
  key: ValidationFieldKey;
  label: string;
  errorMessage?: string;
}

export interface PageValidationConfig {
  requiredFields: ValidationField[];
  bannerTitle: string;
  bannerMessage: string;
  skipValidation?: boolean;
}
const PAGE_VALIDATION_CONFIG: Record<string, PageValidationConfig> = {
  flora: {
    requiredFields: [
      { key: 'name', label: 'nombre', errorMessage: '¡Falta el nombre!' },
      { key: 'glyphs', label: 'glifos', errorMessage: '¡Faltan los Glifos!' },
      { key: 'image', label: 'imagen', errorMessage: '¡Falta la Imagen!' },
      { key: 'regionData.region', label: 'región', errorMessage: '¡Glifos Incorrectos!' },
    ],
    bannerTitle: 'Completa los campos requeridos',
    bannerMessage: 'Para visualizar el resultado necesitas completar: {fields}.',
  },

  fauna: {
    requiredFields: [
      { key: 'name', label: 'nombre', errorMessage: '¡Falta el nombre!' },
      { key: 'glyphs', label: 'glifos', errorMessage: '¡Faltan los Glifos!' },
      { key: 'image', label: 'imagen', errorMessage: '¡Falta la Imagen!' },
      { key: 'regionData.region', label: 'región', errorMessage: '¡Glifos Incorrectos!' },
    ],
    bannerTitle: 'Completa los campos requeridos',
    bannerMessage: 'Para visualizar el resultado necesitas completar: {fields}.',
  },

  mineral: {
    requiredFields: [
      { key: 'name', label: 'nombre', errorMessage: '¡Falta el nombre!' },
      { key: 'glyphs', label: 'glifos', errorMessage: '¡Faltan los Glifos!' },
      { key: 'image', label: 'imagen', errorMessage: '¡Falta la Imagen!' },
    ],
    bannerTitle: 'Faltan datos del mineral',
    bannerMessage: 'Introduce los siguientes campos antes de continuar: {fields}.',
  },

  starship: {
    requiredFields: [
      { key: 'name', label: 'nombre', errorMessage: '¡Falta el nombre!' },
      { key: 'glyphs', label: 'glifos', errorMessage: '¡Faltan los Glifos!' },
      { key: 'image', label: 'imagen', errorMessage: '¡Falta la Imagen!' },
    ],
    bannerTitle: 'Datos de la nave incompletos',
    bannerMessage: 'Para generar el resultado completa: {fields}.',
  },

  multitool: {
    requiredFields: [
      { key: 'name', label: 'nombre', errorMessage: '¡Falta el nombre!' },
      { key: 'glyphs', label: 'glifos', errorMessage: '¡Faltan los Glifos!' },
      { key: 'image', label: 'imagen', errorMessage: '¡Falta la Imagen!' },
    ],
    bannerTitle: 'Datos de la multiherramienta incompletos',
    bannerMessage: 'Para generar el resultado completa: {fields}.',
  },

  system: {
    requiredFields: [
      { key: 'name', label: 'nombre', errorMessage: '¡Falta el nombre!' },
      { key: 'glyphs', label: 'glifos', errorMessage: '¡Faltan los Glifos!' },
      { key: 'regionData.region', label: 'región', errorMessage: '¡Glifos Incorrectos!' },
    ],
    bannerTitle: 'Datos del sistema incompletos',
    bannerMessage: 'Necesitas completar los siguientes campos: {fields}.',
  },

  planet: {
    requiredFields: [
      { key: 'name', label: 'nombre', errorMessage: '¡Falta el nombre!' },
      { key: 'glyphs', label: 'glifos', errorMessage: '¡Faltan los Glifos!' },
      { key: 'regionData.region', label: 'región', errorMessage: '¡Glifos Incorrectos!' },
    ],
    bannerTitle: 'Datos del planeta incompletos',
    bannerMessage: 'Necesitas completar los siguientes campos: {fields}.',
  },

  moon: {
    requiredFields: [
      { key: 'name', label: 'nombre', errorMessage: '¡Falta el nombre!' },
      { key: 'glyphs', label: 'glifos', errorMessage: '¡Faltan los Glifos!' },
      { key: 'regionData.region', label: 'región', errorMessage: '¡Glifos Incorrectos!' },
    ],
    bannerTitle: 'Datos de la luna incompletos',
    bannerMessage: 'Necesitas completar los siguientes campos: {fields}.',
  },

  base: {
    requiredFields: [
      { key: 'name', label: 'nombre', errorMessage: '¡Falta el nombre!' },
      { key: 'glyphs', label: 'glifos', errorMessage: '¡Faltan los Glifos!' },
      { key: 'image', label: 'imagen', errorMessage: '¡Falta la Imagen!' },
      { key: 'regionData.region', label: 'región', errorMessage: '¡Glifos Incorrectos!' },
    ],
    bannerTitle: 'Datos de la base incompletos',
    bannerMessage: 'Para visualizar el resultado completa: {fields}.',
  },

  settlement: {
    requiredFields: [
      { key: 'name', label: 'nombre', errorMessage: '¡Falta el nombre!' },
      { key: 'glyphs', label: 'glifos', errorMessage: '¡Faltan los Glifos!' },
      { key: 'image', label: 'imagen', errorMessage: '¡Falta la Imagen!' },
    ],
    bannerTitle: 'Datos del asentamiento incompletos',
    bannerMessage: 'Para visualizar el resultado completa: {fields}.',
  },

  sandworm: {
    requiredFields: [
      { key: 'name', label: 'nombre', errorMessage: '¡Falta el nombre!' },
      { key: 'glyphs', label: 'glifos', errorMessage: '¡Faltan los Glifos!' },
      { key: 'image', label: 'imagen', errorMessage: '¡Falta la Imagen!' },
      { key: 'regionData.region', label: 'región', errorMessage: '¡Glifos Incorrectos!' },
    ],
    bannerTitle: 'Datos del gusano de arena incompletos',
    bannerMessage: 'Para visualizar el resultado completa: {fields}.',
  },

  biofrig: {
    requiredFields: [
      { key: 'name', label: 'nombre', errorMessage: '¡Falta el nombre!' },
      { key: 'glyphs', label: 'glifos', errorMessage: '¡Faltan los Glifos!' },
      { key: 'image', label: 'imagen', errorMessage: '¡Falta la Imagen!' },
    ],
    bannerTitle: 'Datos de la fragata orgánica incompletos',
    bannerMessage: 'Para visualizar el resultado completa: {fields}.',
  },

  derelict: {
    requiredFields: [
      { key: 'name', label: 'nombre', errorMessage: '¡Falta el nombre!' },
      { key: 'glyphs', label: 'glifos', errorMessage: '¡Faltan los Glifos!' },
    ],
    bannerTitle: 'Datos del carguero abandonado incompletos',
    bannerMessage: 'Para visualizar el resultado completa: {fields}.',
  },

  racetrack: {
    requiredFields: [
      { key: 'name', label: 'nombre', errorMessage: '¡Falta el nombre!' },
      { key: 'glyphs', label: 'glifos', errorMessage: '¡Faltan los Glifos!' },
      { key: 'image', label: 'imagen', errorMessage: '¡Falta la Imagen!' },
    ],
    bannerTitle: 'Datos del circuito incompletos',
    bannerMessage: 'Para visualizar el resultado completa: {fields}.',
  },

  corvette: {
    requiredFields: [
      { key: 'name', label: 'nombre', errorMessage: '¡Falta el nombre!' },
      { key: 'image', label: 'imagen', errorMessage: '¡Falta la Imagen!' },
      { key: 'appearance', label: 'descripción', errorMessage: '¡Falta la Descripción General de la Corbeta!' },
    ],
    bannerTitle: 'Datos de la corbeta incompletos',
    bannerMessage: 'Para visualizar el resultado completa: {fields}.',
  },

  census: {
    requiredFields: [
      { key: 'name', label: 'nombre del jugador', errorMessage: '¡Falta tu nombre!' },
      { key: 'platform', label: 'plataforma', errorMessage: '¡Falta tu plataforma!' },
      { key: 'mode', label: 'modo de juego', errorMessage: '¡Falta tu modo de juego!' },
    ],
    bannerTitle: 'Datos del censo incompletos',
    bannerMessage: 'Para continuar completa: {fields}.',
    skipValidation: false,
  },

  baserenewal: {
    requiredFields: [
      { key: 'name', label: 'nombre', errorMessage: '¡Falta el nombre!' },
      {
        key: 'censusrenewal' as ValidationFieldKey,
        label: 'renovación',
        errorMessage: '¿Qué quieres copiar? Rellena los datos',
      },
    ],
    bannerTitle: 'Datos de renovación incompletos',
    bannerMessage: 'Para continuar completa: {fields}.',
    skipValidation: false,
  },
  // baserenewal:     { requiredFields: [], bannerTitle: '', bannerMessage: '', skipValidation: true },
  // census:          { requiredFields: [], bannerTitle: '', bannerMessage: '', skipValidation: true },
  basecensusno: { requiredFields: [], bannerTitle: '', bannerMessage: '', skipValidation: true },
  basesdestacadas: { requiredFields: [], bannerTitle: '', bannerMessage: '', skipValidation: true },
  censustable: { requiredFields: [], bannerTitle: '', bannerMessage: '', skipValidation: true },
  regions: { requiredFields: [], bannerTitle: '', bannerMessage: '', skipValidation: true },
  cronology: { requiredFields: [], bannerTitle: '', bannerMessage: '', skipValidation: true },
  faq: { requiredFields: [], bannerTitle: '', bannerMessage: '', skipValidation: true },
  rsslinks: { requiredFields: [], bannerTitle: '', bannerMessage: '', skipValidation: true },
  rssfriends: { requiredFields: [], bannerTitle: '', bannerMessage: '', skipValidation: true },
  rsssystems: { requiredFields: [], bannerTitle: '', bannerMessage: '', skipValidation: true },
  guias: { requiredFields: [], bannerTitle: '', bannerMessage: '', skipValidation: true },
  feedback: { requiredFields: [], bannerTitle: '', bannerMessage: '', skipValidation: true },
  latestupdates: { requiredFields: [], bannerTitle: '', bannerMessage: '', skipValidation: true },
  wikiupdates: { requiredFields: [], bannerTitle: '', bannerMessage: '', skipValidation: true },
  glyphgenerator: { requiredFields: [], bannerTitle: '', bannerMessage: '', skipValidation: true },
  fotosdestacadas: { requiredFields: [], bannerTitle: '', bannerMessage: '', skipValidation: true },
};
const defaultConfig: PageValidationConfig = {
  requiredFields: [
    { key: 'name', label: 'nombre', errorMessage: '¡Falta el nombre!' },
    { key: 'glyphs', label: 'glifos', errorMessage: '¡Faltan los Glifos!' },
    { key: 'image', label: 'imagen', errorMessage: '¡Falta la Imagen!' },
    { key: 'regionData.region', label: 'región', errorMessage: '¡Glifos Incorrectos!' },
  ],
  bannerTitle: 'Completa los campos requeridos',
  bannerMessage: 'Para visualizar el resultado necesitas completar: {fields}.',
};

function getFieldValue(pageData: ReturnType<typeof usePageDataStore>, key: ValidationFieldKey): FieldValue {
  if (key === 'regionData.region') return pageData.regionData?.region || undefined;
  const value = pageData[key as keyof typeof pageData];
  return typeof value === 'string' && value.length > 0 ? value : undefined;
}

function hasValueProperty(v: unknown): v is { value: unknown } {
  return typeof v === 'object' && v !== null && 'value' in v;
}

export const useValidationStore = defineStore('validation', () => {
  const pageData = usePageDataStore();
  const config = computed<PageValidationConfig>(() => PAGE_VALIDATION_CONFIG[getCurrentRoute()] ?? defaultConfig);
  const missingFields = computed<ValidationField[]>(() => {
    if (config.value.skipValidation) return [];
    return config.value.requiredFields.filter((field) => {
      const value = getFieldValue(pageData, field.key);

      if (value === undefined || value === null) return true;

      if (typeof value === 'string') {
        return value.trim().length === 0;
      }

      if (typeof value === 'object') {
        if (hasValueProperty(value)) {
          return !value.value || value.value.toString().trim().length === 0;
        }
        return false;
      }

      return false;
    });
  });
  const isValid = computed<boolean>(() => {
    if (config.value.skipValidation) return true;
    return missingFields.value.length === 0;
  });
  const shouldShowValidation = computed<boolean>(() => !isValid.value && !config.value.skipValidation);
  const bannerTitle = computed<string>(() => config.value.bannerTitle);
  const bannerMessage = computed<string>(() => {
    const missing = missingFields.value.map((f) => f.label).join(', ');
    return config.value.bannerMessage.replace('{fields}', missing);
  });

  function firstError(): string | undefined {
    return missingFields.value[0]?.errorMessage ?? missingFields.value[0]?.label;
  }

  function assertValid(): boolean {
    const error = firstError();
    if (error) return false;
    return true;
  }

  return {
    config,
    missingFields,
    isValid,
    shouldShowValidation,
    bannerTitle,
    bannerMessage,
    firstError,
    assertValid,
  };
});
