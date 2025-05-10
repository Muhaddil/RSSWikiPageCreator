import type { SelectOption } from '@/types/selectInputOptions';

const InEnglish = [
  'Ceaseless Burrower',
  'Colossal Being',
  'Gargantuan',
  'Giant Parasite',
  'Planetary Maggot',
  'The Consumer',
  'Unstoppable Nematode',
  'Worm Lord',
] as const;

const InSpanish = [
  'Excavador incesante',
  'Ser colosal',
  'Pantagruélico',
  'Parásito gigante',
  'Cresa planetaria',
  'El Consumidor',
  'Nematodo imparable',
  'Señor de los gusanos',
] as const;

export const mappedClass: SelectOption[] = InSpanish.map((mode, index) => ({
  label: mode,
  value: InEnglish[index],
}));
