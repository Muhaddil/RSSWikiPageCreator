// import type { SelectOption } from '@/types/selectInputOptions';

// const InEnglish = [
//   // Materiales avanzados
//   'Alchemical',
//   'Material Fusion',
//   'Metal Processing',
//   'Ore Processing',
//   // Fabricación
//   'Construction',
//   'Industrial',
//   'Manufacturing',
//   'Mass Production',
//   // Extracción
//   'Minerals',
//   'Mining',
//   'Ore Extraction',
//   'Prospecting',
//   // Generación de energía
//   'Energy Supply',
//   'Fuel Generation',
//   'High Voltage',
//   'Power Generation',
//   // Científico
//   'Experimental',
//   'Mathematical',
//   'Research',
//   // Tecnología
//   'Engineering',
//   'High Tech',
//   'Nano-construction',
//   'Technology',
//   // Comercio
//   'Commercial',
//   'Mercantile',
//   'Shipping',
//   'Trading',
//   // Abandonado/Inexplorado
//   'Data Unavailable'
// ] as const;

// const InSpanish = [
//   // Materiales avanzados
//   'Alquímica',
//   'Fusión de materiales',
//   'Procesamiento de metales',
//   'Procesamiento de mena',
//   // Fabricación
//   'Construcción',
//   'Industrial',
//   'Fabricación',
//   'Producción en serie',
//   // Extracción
//   'Minerales',
//   'Extracción',
//   'Extracción de mena',
//   'Prospección',
//   // Generación de energía
//   'Suministro de energía',
//   'Generación de combustible',
//   'Alto voltaje',
//   'Generación de energía',
//   // Científico
//   'Experimental',
//   'Matemático',
//   'Investigación',
//   // Tecnología
//   'Ingeniería',
//   'Alta tecnología',
//   'Nanoconstrucción',
//   'Tecnología',
//   // Comercio
//   'Comercial',
//   'Mercantil',
//   'Transporte',
//   'Transporte',
//   // Abandonado/Inexplorado
//   'Datos no disponibles'
// ] as const;

// export const mappedSystemEconomy: SelectOption[] = InSpanish.map((mode, index) => ({
//   label: mode,
//   value: InEnglish[index],
// }));


export const mappedSystemEconomy = [
  {
      groupLabel: 'Materiales avanzados',
      label: 'Materiales avanzados',
      items: [
          { label: 'Alquímica', value: 'Alchemical' },
          { label: 'Fusión de materiales', value: 'Material Fusion' },
          { label: 'Procesamiento de metales', value: 'Metal Processing' },
          { label: 'Procesamiento de mena', value: 'Ore Processing' },
      ],
  },
  {
      groupLabel: 'Fabricación',
      label: 'Fabricación',
      items: [
          { label: 'Construcción', value: 'Construction' },
          { label: 'Industrial', value: 'Industrial' },
          { label: 'Fabricación', value: 'Manufacturing' },
          { label: 'Producción en serie', value: 'Mass Production' },
      ],
  },
  {
      groupLabel: 'Extracción',
      label: 'Extracción',
      items: [
          { label: 'Minerales', value: 'Minerals' },
          { label: 'Extracción', value: 'Mining' },
          { label: 'Extracción de mena', value: 'Ore Extraction' },
          { label: 'Prospección', value: 'Prospecting' },
      ],
  },
  {
      groupLabel: 'Generación de energía',
      label: 'Generación de energía',
      items: [
          { label: 'Suministro de energía', value: 'Energy Supply' },
          { label: 'Generación de combustible', value: 'Fuel Generation' },
          { label: 'Alto voltaje', value: 'High Voltage' },
          { label: 'Generación de energía', value: 'Power Generation' },
      ],
  },
  {
      groupLabel: 'Científico',
      label: 'Científico',
      items: [
          { label: 'Experimental', value: 'Experimental' },
          { label: 'Matemático', value: 'Mathematical' },
          { label: 'Investigación', value: 'Research' },
          { label: 'Científico', value: 'Scientific' },
      ],
  },
  {
      groupLabel: 'Tecnología',
      label: 'Tecnología',
      items: [
          { label: 'Ingeniería', value: 'Engineering' },
          { label: 'Alta tecnología', value: 'High Tech' },
          { label: 'Nanoconstrucción', value: 'Nano-construction' },
          { label: 'Tecnología', value: 'Technology' },
      ],
  },
  {
      groupLabel: 'Comercio',
      label: 'Comercio',
      items: [
          { label: 'Comercial', value: 'Commercial' },
          { label: 'Mercantil', value: 'Mercantile' },
          { label: 'Transporte', value: 'Shipping' },
          { label: 'Transporte', value: 'Trading' },
      ],
  },
  {
      groupLabel: 'Abandonado/Inexplorado',
      label: 'Abandonado/Inexplorado',
      items: [
          { label: 'Datos no disponibles', value: 'Data Unavailable' },
      ],
  },
];
