import type { SelectOption } from '@/types/selectInputOptions';
import florarootDatalist from '@/datalists/floraDatalists5';

export const mappedFloraRoots: SelectOption[] = Object.entries(florarootDatalist).map(([english, spanish]) => ({
  label: spanish,
  value: english,
}));
