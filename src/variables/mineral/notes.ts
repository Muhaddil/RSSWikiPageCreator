import type { SelectOption } from '@/types/selectInputOptions';
import mineralNotesDatalist from '@/datalists/mineralDatalists3';

export const mappedMineralNotes: SelectOption[] = Object.entries(mineralNotesDatalist).map(([english, spanish]) => ({
  label: spanish,
  value: english,
}));
