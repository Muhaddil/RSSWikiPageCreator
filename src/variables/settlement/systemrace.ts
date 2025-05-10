import type { SelectOption } from '@/types/selectInputOptions';

const InEnglish = ['Gek', 'Korvax', "Vy'keen"] as const;
const InSpanish = ['Gek', 'Korvax', "Vy'keen"] as const;

export const mappedSystemRace: SelectOption[] = InSpanish.map((mode, index) => ({
  label: mode,
  value: InEnglish[index],
}));
