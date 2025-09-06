import type { SelectOption } from '@/types/selectInputOptions';

const InEnglish = ['Titan-Class', 'Thunderbird-Class', 'Ambassador-Class'] as const;
const InSpanish = ['Clase Titán', 'Clase Trueno', 'Clase Embajador'] as const;

export const mappedCorvetteType: SelectOption[] = InSpanish.map((mode, index) => ({
  label: mode,
  value: InEnglish[index],
}));
