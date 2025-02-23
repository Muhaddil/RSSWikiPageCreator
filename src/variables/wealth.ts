import type { SelectOption } from '@/types/selectInputOptions';

const InEnglishWealthCategories = ['High', 'Medium', 'Low', 'Outlaw', 'None'] as const;
const InSpanishWealthCategories = ['Alta', 'Media', 'Baja', 'Fuera de la ley', 'Ninguna'] as const;

const wealthInEnglish = {
  High: ['★★★ (Advanced)', '★★★ (Affluent)', '★★★ (Booming)', '★★★ (Flourishing)', '★★★ (High Supply)', '★★★ (Opulent)', '★★★ (Prosperous)', '★★★ (Wealthy)'],
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
  Low: ['★ (Declining)', '★ (Destitute)', '★ (Failing)', '★ (Fledgling)', '★ (Low Supply)', '★ (Struggling)', '★ (Unsuccessful)', '★ (Unpromising)'],
  Outlaw: ['Black Market'],
  None: ['Data Unavailable'],
} as const;

const wealthInSpanish = {
  Alta: ['Avanzado', 'Acaudalado', 'Próspero', 'Floreciente', 'Alta Suministro', 'Opulento', 'Rico', 'Adinerado'],
  Media: [
    'Adecuado',
    'Equilibrado',
    'Cómodo',
    'Desarrollándose',
    'Suministro Medio',
    'Prometedor',
    'Satisfactorio',
    'Sostenible',
  ],
  Baja: ['Declinante', 'Indigente', 'En quiebra', 'Principiante', 'Pocos suministros', 'Luchador', 'Desafortunado', 'Desalentador'],
  'Fuera de la ley': ['Mercado Negro'],
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
