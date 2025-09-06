import { mapOptions } from '@/helpers/selectMapping';
import type { SelectOption } from '@/types/selectInputOptions';

export const platforms = {
  PC: 'PC',
  Mac: 'Mac',
  PlayStation: 'PS',
  Xbox: 'XB',
  Switch: 'NS',
  'Switch 2': 'NS2',
} as const;

export const mappedPlatformOptions: SelectOption[] = mapOptions(platforms);
