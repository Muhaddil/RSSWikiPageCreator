import type { SelectOption } from '@/types/selectInputOptions';

const modesInEnglish = ['Normal', 'Creative', 'Relaxed', 'Survival', 'Permadeath', 'Custom'] as const;
const modesInSpanish = [
  'Normal',
  'Creativo',
  'Relajado',
  'Supervivencia',
  'Muerte permanente',
  'Personalizado',
] as const;

export const mappedModeOptions: SelectOption[] = modesInSpanish.map((mode, index) => ({
  label: mode,
  value: modesInEnglish[index],
}));
