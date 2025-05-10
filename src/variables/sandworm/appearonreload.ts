import type { SelectOption } from '@/types/selectInputOptions';

const InEnglish = [
  '',
  'This creature will automatically spawn on game reload.',
  'This creature will not automatically spawn on game reload.',
] as const;

const InSpanish = ['No se', 'Sí', 'No'] as const;

export const mappedAppearOnReload: SelectOption[] = InSpanish.map((mode, index) => ({
  label: mode,
  value: InEnglish[index],
}));
