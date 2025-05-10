import type { SelectOption } from '@/types/selectInputOptions';
import floraNotesDatalist from '@/datalists/floraDatalists4';

export const mappedFloraNotes: SelectOption[] = Object.entries(floraNotesDatalist).map(([english, spanish]) => ({
  label: spanish,
  value: english,
}));
