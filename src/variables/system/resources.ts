import type { SelectOption } from '@/types/selectInputOptions';

export const ResourcesOptions: readonly (readonly [string, string])[] = [
  ['', ''],
  ['Copper', 'Cobre'],
  ['Cadmium', 'Cadmio'],
  ['Emeril', 'Emerilio'],
  ['Indium', 'Indio'],
  ['Activated Copper', 'Cobre Activado'],
  ['Activated Cadmium', 'Cadmio Activado'],
  ['Activated Emeril', 'Emerilio Activado'],
  ['Activated Indium', 'Indio Activado'],
  ['Ammonia', 'Amonio'],
  ['Dioxite', 'Dioxita'],
  ['Paraffinium', 'Parafinio'],
  ['Phosphorus', 'Fósforo'],
  ['Pyrite', 'Pirita'],
  ['Uranium', 'Uranio'],
  ['Silver', 'Plata'],
  ['Gold', 'Oro'],
  ['Magnetised Ferrite', 'Ferrita imantada'],
  ['Sodium', 'Sodio'],
  ['Cobalt', 'Cobalto'],
  ['Salt', 'Sal'],
  ['Star Bulb', 'Bulbo Estelar'],
  ['Cactus Flesh', 'Carne de Cactus'],
  ['Gamma Root', 'Raíz de gamma'],
  ['Fungal Mould', 'Moho fúngico'],
  ['Frost Crystal', 'Cristal de escarcha'],
  ['Solanium', 'Solanio'],
  ['Mordite', 'Mordita'],
  ['Faecium', 'Hecesio'],
  ['Ancient Bones', 'Huesos antiguos'],
  ['Salvageable Scrap', 'Chatarra recuperable'],
  ['Rusted Metal', 'Metal oxidado'],
  ['Basalt', 'Basalto'],
  ['Quartzite', 'Cuarcita'],
  ['Activated Quartzite', 'Cuarcita Activada'],
  ['Crystallised Helium', 'Helio cristalizado'],
  ['Lithium', 'Litio'],
  ['Sulphurine', 'Sulfurina'],
] as const;

export const mappedResourcesOptions: SelectOption[] = ResourcesOptions.map(
  ([value, label]) => ({
    label,
    value,
  })
);
