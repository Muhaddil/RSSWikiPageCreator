import type { SelectOption } from '@/types/selectInputOptions';
import floraageDatalist from '@/datalists/floraDatalists';

export const mappedFloraAge: SelectOption[] = Object.entries(floraageDatalist).map(([english, spanish]) => ({
  label: spanish,
  value: english,
}));
