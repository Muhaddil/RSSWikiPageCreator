import type { SelectOption } from '@/types/selectInputOptions';

const InEnglish = ['', 'Artistic', 'Embassy', 'Farm', 'Headquarters', 'Industrial', 'Memorial', 'Residential'] as const;
const InSpanish = [
  '',
  'Artístico',
  'Embajada',
  'Granja',
  'Cuartel General',
  'Industrial',
  'Memorial',
  'Residencial',
] as const;

export const mappedModeOptions: SelectOption[] = InSpanish.map((mode, index) => ({
  label: mode,
  value: InEnglish[index],
}));
