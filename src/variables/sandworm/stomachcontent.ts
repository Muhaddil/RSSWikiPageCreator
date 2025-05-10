import type { SelectOption } from '@/types/selectInputOptions';

const InEnglish = [
  'Consumed waypoints',
  'Entire Trade Outpost',
  'Freighter components',
  'Horrific Eggs',
  'Layers of teeth',
  'Lost starships',
  'Magma',
  'Many Sentinels',
  'Minerals',
  'Mostly sand',
  'Other gargantuans',
  'Planetary beacon',
  'Rubble',
  'Sentinel Walkers',
  'Several Gek',
  'Unpleasant liquid',
] as const;

const InSpanish = [
  'Puntos de control consumidos',
  'Puesto comercial entero',
  'Componentes de carguero',
  'Huevos horrorosos',
  'Capas de dientes',
  'Naves perdidas',
  'Magma',
  'Muchos Centinelas',
  'Minerales',
  'Principalmente arena',
  'Otros seres pantagruélicos',
  'Baliza planetaria',
  'Escombros',
  'Caminantes Centinelas',
  'Varios Gek',
  'Líquido desagradable',
] as const;

export const mappedStomachContent: SelectOption[] = InSpanish.map((mode, index) => ({
  label: mode,
  value: InEnglish[index],
}));
