import type { SelectOption } from '@/types/selectInputOptions';

const InEnglish = ['', '2', '3'] as const;
const InSpanish = ['1', '2', '3'] as const;

export const mappedSystemStarnum: SelectOption[] = InSpanish.map((mode, index) => ({
  label: mode,
  value: InEnglish[index],
}));
