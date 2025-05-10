import type { SelectOption } from '@/types/selectInputOptions';
import floranutSourceDatalist from '@/datalists/floraDatalists3';

export const mappedFloraNutSource: SelectOption[] = Object.entries(floranutSourceDatalist).map(
  ([english, spanish]) => ({
    label: spanish,
    value: english,
  })
);
