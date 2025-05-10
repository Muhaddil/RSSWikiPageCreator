import type { SelectOption } from '@/types/selectInputOptions';

const InEnglish = [
  'Gek',
  'Korvax',
  "Vy'keen",
  'Gek Abandoned',
  'Korvax Abandoned',
  "Vy'keen Abandoned",
  'Uncharted',
] as const;
const InSpanish = [
  'Gek',
  'Korvax',
  "Vy'keen",
  'Gek Abandonado',
  'Korvax Abandonado',
  "Vy'keen Abandonado",
  'Inexplorado',
] as const;

export const mappedSystemRace: SelectOption[] = InSpanish.map((mode, index) => ({
  label: mode,
  value: InEnglish[index],
}));
