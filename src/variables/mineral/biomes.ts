import type { SelectOption } from '@/types/selectInputOptions';

const InEnglish = [
  'Lush',
  'Barren',
  'Dead',
  'Exotic',
  'Mega Exotic',
  'Scorched',
  'Frozen',
  'Toxic',
  'Irradiated',
  'Marsh',
  'Volcanic',
  'Gas Giant',
] as const;
const InSpanish = [
  'Rico',
  'Estéril',
  'Muerto',
  'Exótico',
  'Mega Exótico',
  'Quemado',
  'Congelado',
  'Tóxico',
  'Irradiado',
  'Cenagal',
  'Volcánico',
  'Gigante Gaseoso',
] as const;

export const mappedFloraBiome: SelectOption[] = InSpanish.map((mode, index) => ({
  label: mode,
  value: InEnglish[index],
}));
