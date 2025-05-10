import type { SelectOption } from '@/types/selectInputOptions';
import mineralFormationDatalist from '@/datalists/mineralDatalists';

export const mappedMineralFormation: SelectOption[] = Object.entries(mineralFormationDatalist).map(
  ([english, spanish]) => ({
    label: spanish,
    value: english,
  })
);
