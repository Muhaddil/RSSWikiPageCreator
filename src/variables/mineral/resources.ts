import type { SelectOption } from '@/types/selectInputOptions';
import mineralResourcesDatalist from '@/datalists/mineralDatalists2';

export const mappedMineralResources: SelectOption[] = Object.entries(mineralResourcesDatalist).map(
  ([english, spanish]) => ({
    label: spanish,
    value: english,
  })
);
