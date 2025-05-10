import type { SelectOption } from '@/types/selectInputOptions';

const InEnglish = ['Yellow', 'Red', 'Green', 'Blue', 'Purple'] as const;
const InSpanish = ['Amarillo', 'Rojo', 'Verde', 'Azul', 'Morado'] as const;

export const mappedSystemStarcolor: SelectOption[] = InSpanish.map((mode, index) => ({
  label: mode,
  value: InEnglish[index],
}));
