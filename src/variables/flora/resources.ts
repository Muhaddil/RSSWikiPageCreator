import type { SelectOption } from '@/types/selectInputOptions';
import floraResourcesDatalist from '@/datalists/floraDatalists2';

export const mappedFloraResources: SelectOption[] = Object.entries(floraResourcesDatalist).map(
  ([english, spanish]) => ({
    label: spanish,
    value: english,
  })
);
