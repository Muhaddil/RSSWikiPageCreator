import type { SelectOption } from '@/types/selectInputOptions';

const InEnglishWealthCategories = ['High', 'Medium', 'Low', 'Outlaw', 'None'] as const;
const InSpanishWealthCategories = ['Alta', 'Media', 'Baja', 'Fuera de la ley', 'Ninguna'] as const;

const wealthInEnglish = {
  High: [
    '★★★ (Advanced)',
    '★★★ (Affluent)',
    '★★★ (Booming)',
    '★★★ (Flourishing)',
    '★★★ (High Supply)',
    '★★★ (Opulent)',
    '★★★ (Prosperous)',
    '★★★ (Wealthy)',
  ],
  Medium: [
    '★★ (Adequate)',
    '★★ (Balanced)',
    '★★ (Comfortable)',
    '★★ (Developing)',
    '★★ (Medium Supply)',
    '★★ (Promising)',
    '★★ (Satisfactory)',
    '★★ (Sustainable)',
  ],
  Low: [
    '★ (Declining)',
    '★ (Destitute)',
    '★ (Failing)',
    '★ (Fledgling)',
    '★ (Low Supply)',
    '★ (Struggling)',
    '★ (Unsuccessful)',
    '★ (Unpromising)',
  ],
  Outlaw: ['Black Market'],
  None: ['Data Unavailable'],
} as const;

const wealthInSpanish = {
  Alta: ['Avanzado', 'Pudiente', 'En auge', 'Floreciente', 'Muchos suministros', 'Opulento', 'Próspero', 'Rico'],
  Media: [
    'Adecuado',
    'Equilibrado',
    'Holgado',
    'En desarrollo',
    'Suministro medio',
    'Prometedor',
    'Satisfactorio',
    'Sostenible',
  ],
  Baja: [
    'En declive',
    'Carente',
    'En quiebra',
    'Incipiente',
    'Pocos suministros',
    'En apuros',
    'Infructuoso',
    'Poco prometedor',
  ],
  'Fuera de la ley': ['Mercado negro'],
  Ninguna: ['Datos no disponibles'],
} as const;

export const mappedWealthOptions: SelectOption[] = InSpanishWealthCategories.flatMap((category, index) => {
  const englishCategory = InEnglishWealthCategories[index];
  const spanishOptions = wealthInSpanish[category];
  const englishOptions = wealthInEnglish[englishCategory];

  return spanishOptions.map((option, optIndex) => ({
    label: option,
    value: englishOptions[optIndex], // El valor sigue siendo el término en inglés
  }));
});
