import type { SelectOption } from '@/types/selectInputOptions';

const InEnglish = [
  'Tropical Storms',
  'Occasional Boiling Fog',
  'Superheated Mists',
  'Painful Mist',
  'Infrequent Torrents',
  'Oppressive',
  'Soggy Danger',
  'Sticky Heat',
  'Clammy Menace',
  'Hazardous Moisture',
  'Gentle Mist',
  'Humid',
  'Tropical Winds',
  'Warm Fog',
  'Temperate Murk',
  'Mild Damp',
  'Warm Dewdrops',
  'Tepid Damp',
  'Sweaty Drizzle',
  'Muggy Haze',
  'Death Fog',
  'Sultry Disaster',
  'Cataclysmic Monsoons',
  'Mists of Annihilation',
  'All-Consuming Fog',
  'Liquid Hell',
  'Storms of Desolation',
  'Melting Deluges',
  'Boiling Catastrophe',
  'Damp Misery',
  'Heated Gas Pockets',
  'Occasional Firestorms',
  'Incendiary Winds',
  'Unpredictable Conflagrations',
  'Drifting Firestorms',
  'Pillars of Flame',
  'Magma Geysers',
  'Plumes of Fire',
  'Molten Rain',
  'Tectonic Storms',
  'Smothering Ash',
  'Sulphurous Haze',
  'Ash Wisps',
  'Drifting Smog',
  'Cinderfalls',
  'Ash Plumes',
  'Choking Ash',
  'Burning Mists',
  'Sulfur Fumes',
  'Enveloping Ash',
  'Ashen Winds',
  'Frequent Firestorms',
  'Walls of Flame',
  'Clouds of Fire',
  'Ashen Destruction',
  'Magma Rain',
  'Basalt Hail',
  'Explosive Gas Eruptions',
  'Lethal Ash Storms',
  'Sulphurous Inferno',
  'Colossal Firestorms',
  'Obsidian Doom',
  'Infrequent Heat Storms',
  'Rare Firestorms',
  'Superheated Gas Pockets',
  'Wandering Hot Spots',
  'Atmospheric Heat Instabilities',
  'Direct Sunlight',
  'Heated Atmosphere',
  'Occasional Ash Storms',
  'Dangerously Hot',
  'Burning Air',
  'Parched',
  'Overly Warm',
  'Sunny',
  'Dehydrated',
  'Unending Sunlight',
  'Sweltering',
  'Extreme Heat',
  'Burning Gas Clouds',
  'Intense Heat',
  'Superheated Air',
  'Scalding Heat',
  'Inferno Winds',
  'Firestorms',
  'Combustible Dust',
  'Incendiary Dust',
  'Self-Igniting Storms',
  'Howling Blizzards',
  'Intense Cold',
  'Icy Tempests',
  'Supercooled Storms',
  'Raging Snowstorms',
  'Ice Storms',
  'Deep Freeze',
  'Roaring Ice Storms',
  'Frequent Blizzards',
  'Hazardous Whiteouts',
  'Frozen Clouds',
  'Occasional Snowfall',
  'Infrequent Blizzards',
  'Outbreaks of Frozen Rain',
  'Harsh, Icy Winds',
  'Drifting Snowstorms',
  'Migratory Blizzards',
  'Icy Blasts',
  'Wandering Frosts',
  'Powder Snow',
  'Wintry',
  'Snowy',
  'Icy',
  'Crisp',
  'Frost',
  'Freezing',
  'Permafrost',
  'Frequent Toxic Floods',
  'Toxic Superstorms',
  'Acidic Deluges',
  'Corrosive Cyclones',
  'Caustic Floods',
  'Corrosive Storms',
  'Torrential Acid',
  'Noxious Gas Storms',
  'Toxic Monsoons',
  'Bone-Stripping Acid Storms',
  'Corrosive Rainstorms',
  'Pouring Toxic Rain',
  'Occasional Acid Storms',
  'Atmospheric Corruption',
  'Poison Flurries',
  'Toxic Outbreaks',
  'Acidic Dust Pockets',
  'Passing Toxic Fronts',
  'Caustic Winds',
  'Alkaline Cloudbursts',
  'Dangerously Toxic Rain',
  'Corrosive Sleet Storms',
  'Lethal Atmosphere',
  'Infrequent Toxic Drizzle',
  'Acid Rain',
  'Toxic Clouds',
  'Poison Rain',
  'Choking Clouds',
  'Caustic Moisture',
  'Poisonous Gas',
  'Stinging Atmosphere',
  'Toxic Damp',
  'Corrosive Damp',
  'Stinging Puddles',
  'Extreme Radioactivity',
  'Irradiated Thunderstorms',
  'Planet-Wide Radiation Storms',
  'Extreme Atmospheric Decay',
  'Roaring Nuclear Wind',
  'Gamma Cyclones',
  'Contaminated Squalls',
  'Extreme Thermonuclear Fog',
  'Frequent Particle Eruptions',
  'Enormous Nuclear Storms',
  'Particulate Winds',
  'Energetic Storms',
  'Irradiated Downpours',
  'Radioactive Dust Storms',
  'Volatile Windstorms',
  'Occasional Radiation Outbursts',
  'Irradiated Storms',
  'Unstable Fog',
  'Reactive Rain',
  'Radioactive Humidity',
  'Radioactive Damp',
  'Irradiated Winds',
  'Contaminated Puddles',
  'Volatile Winds',
  'Unstable Atmosphere',
  'Gamma Dust',
  'Nuclidic Atmosphere',
  'Boiling Superstorms',
  'Intense Heatbursts',
  'Superheated Rain',
  'Boiling Monsoons',
  'Broiling Humidity',
  'Painfully Hot Rain',
  'Torrential Heat',
  'Blistering Floods',
  'Scalding Rainstorms',
  'Torrid Deluges',
  'Boiling Puddles',
  'Sweltering Damp',
  'Superheated Drizzle',
  'Dangerously Hot Fog',
  'Choking Humidity',
  'Mostly Calm',
  'Occasional Scalding Cloudbursts',
  'Usually Mild',
  'Blistering Damp',
  'Lethal Humidity Outbreaks',
  'Temperate',
  'Light Showers',
  'Mild Rain',
  'Refreshing Breeze',
  'Pleasant',
  'Balmy',
  'Mellow',
  'Beautiful',
  'Blissful',
  'Billowing Dust Storms',
  'Choking Sandstorms',
  'Hazardous Temperature Extremes',
  'Lung-Burning Night Wind',
  'Extreme Wind Blasting',
  'Planetwide Desiccation',
  'Sand Blizzards',
  'Howling Gales',
  'Dead Wastes',
  'Occasional Sandstorms',
  'Infrequent Dust Storms',
  'Intermittent Wind Blasting',
  'Parched Sands',
  'Sporadic Grit Storms',
  'Dust-Choked Winds',
  'Highly Variable Temperatures',
  'Blasted Atmosphere',
  'Freezing Night Winds',
  'Ceaseless Drought',
  'Moistureless',
  'Baked',
  'Sterile',
  'Unclouded Skies',
  'Dry Gusts',
  'Withered',
  'Icy Nights',
  'Perfectly Clear',
  'Absent',
  'No Atmosphere',
  'Utterly Still',
  'Peaceful',
  'Eerily Calm',
  'Airless',
  'Silent',
  'Inert',
  'Clear',
  'Invisible Mist',
  'Internal Rain',
  'Lost Clouds',
  'Crimson Heat',
  'Winds of Glass',
  'Thirsty Clouds',
  'Obsidian Heat',
  'Memories of Frost',
  'Haunted Frost',
  'Indetectable Burning',
  '[REDACTED]',
  'Anomalous',
  'Burning Crimson',
  'Scarlet Rain',
  'Fevered Clouds',
  'Carmine Winds',
  'Red Mist',
  'Flaming Hail',
  'Vermillion Storms',
  'Rain of Atlas',
  'Angered Clouds',
  'Blood Rain',
  'Bilious Storms',
  'Deadly Pressure Variations',
  'Harsh Toxic Wind',
  'Corrupted Blood',
  'Infinite Toxic Mist',
  'Echoes of Acid',
  'Poison Cyclones',
  'Inescapable Toxins',
  'Clouds of Haunted Green',
  'Invisible Jade Winds',
  'Frozen Mists',
  'Electric Rain',
  'Azure Storms',
  'Extreme Low Pressure',
  'All-Consuming Cold',
  'Winds from Beyond',
  'Unfathomable Storms',
  'Unimaginable Blue',
  'Ultramarine Wind',
  'Inverted Superstorms',
  'Coastal Storms'
] as const;

const InSpanish = [
  'Tormentas tropicales',
  'Bruma hirviente ocasional',
  'Neblina sobrecalentada',
  'Bruma dolorosa',
  'Torrentes poco frecuentes',
  'Opresivo',
  'Peligro empapado',
  'Calor pegajoso',
  'Amenaza sudada',
  'Peligro humectado',
  'Bruma suave',
  'Húmedo',
  'Vientos tropicales',
  'Niebla cálida',
  'Neblina moderada',
  'Llovizna suave',
  'Gotas de rocío calientes',
  'Vaho tibio',
  'Llovizna sudorosa',
  'Neblina calurosa',
  'Niebla mortal',
  'Desastre sofocante',
  'Monzones cataclísmicos',
  'Niebla de aniquilación',
  'Niebla consumidora',
  'Infierno líquido',
  'Tormentas de desolación',
  'Derrames derretidores',
  'Catástrofe hirviente',
  'Miseria húmeda',
  'Bolsas de gas caliente',
  'Tormentas de fuego ocasionales',
  'Vientos incendiarios',
  'Conflagraciones impredecibles',
  'Tormentas de fuego errantes',
  'Pilares de llamas',
  'Géiseres de magma',
  'Nubes de fuego',
  'Lluvia de magma',
  'Tormentas tectónicas',
  'Ceniza asfixiante',
  'Neblina sulfurosa',
  'Bolsas de ceniza',
  'Smog errante',
  'Lluvia de ceniza',
  'Nubes de ceniza',
  'Ceniza asfixiante',
  'Bruma ardiente',
  'Vapores de azufre',
  'Ceniza envolvente',
  'Vientos cenicientos',
  'Tormentas de fuego frecuentes',
  'Muros de llamas',
  'Nubes de fuego',
  'Destrucción cenicienta',
  'Lluvia de magma',
  'Granizo de basalto',
  'Eruptiones de gas explosivas',
  'Tormentas de ceniza letales',
  'Inferno sulfurosos',
  'Colosales tormentas de fuego',
  'Destrucción obsidiana',
  'Tormentas de calor poco frecuentes',
  'Tormentas de fuego raras',
  'Bolsas de gas sobrecalentadas',
  'Puntos calientes errantes',
  'Inestabilidades térmicas atmosféricas',
  'Luz solar directa',
  'Atmósfera caliente',
  'Tormentas de ceniza ocasionales',
  'Peligrosamente caliente',
  'Aire ardiente',
  'Deshidratado',
  'Excesivamente cálido',
  'Soleado',
  'Deshidratado',
  'Luz solar interminable',
  'Abrumador',
  'Calor extremo',
  'Nubes de gas ardiente',
  'Calor intenso',
  'Aire sobrecalentado',
  'Calor abrasador',
  'Vientos infernales',
  'Tormentas de fuego',
  'Polvo combustible',
  'Polvo incendiario',
  'Tormentas autoinflamables',
  'Ventiscas aullantes',
  'Frío intenso',
  'Tempestades heladas',
  'Tormentas de superenfriamiento',
  'Tormentas de nieve furiosas',
  'Tormentas de hielo',
  'Congelación profunda',
  'Tormentas de hielo rugientes',
  'Tormentas de nieve frecuentes',
  'Blanqueos peligrosos',
  'Nubes congeladas',
  'Nevadas ocasionales',
  'Ventiscas poco frecuentes',
  'Brotes de lluvia helada',
  'Vientos fríos y duros',
  'Tormentas de nieve errantes',
  'Ventiscas migratorias',
  'Ráfagas heladas',
  'Heladas errantes',
  'Nieve en polvo',
  'Invernal',
  'Nevado',
  'Helado',
  'Crispado',
  'Escarcha',
  'Congelado',
  'Permafrost',
  'Inundaciones tóxicas frecuentes',
  'Supertormentas tóxicas',
  'Derrames ácidos',
  'Ciclones corrosivos',
  'Inundaciones cáusticas',
  'Tormentas corrosivas',
  'Lluvia ácida torrencial',
  'Tormentas de gas nocivo',
  'Monzones tóxicos',
  'Tormentas de ácido que despojan huesos',
  'Tormentas de lluvia corrosiva',
  'Lluvias tóxicas torrenciales',
  'Tormentas de ácido ocasionales',
  'Corrupción atmosférica',
  'Lluvias venenosas',
  'Brotes tóxicos',
  'Bolsas de polvo ácidas',
  'Frentes tóxicos pasajeros',
  'Vientos cáusticos',
  'Chaparrones alcalinos',
  'Lluvias peligrosamente tóxicas',
  'Tormentas de aguanieve corrosivas',
  'Atmósfera letal',
  'Lluvias de ácido poco frecuentes',
  'Lluvia ácida',
  'Nubes tóxicas',
  'Lluvia venenosa',
  'Nubes asfixiantes',
  'Humedad cáustica',
  'Gas venenoso',
  'Atmósfera punzante',
  'Humedad tóxica',
  'Humedad cáustica',
  'Charcos punzantes',
  'Radioactividad extrema',
  'Tormentas nucleares irradiadas',
  'Tormentas de radiación planetaria',
  'Decaimiento atmosférico extremo',
  'Viento nuclear rugiente',
  'Ciclones gamma',
  'Chubascos contaminados',
  'Niebla termonuclear extrema',
  'Eruptiones de partículas frecuentes',
  'Tormentas nucleares enormes',
  'Vientos particulados',
  'Tormentas energéticas',
  'Lluvias irradiadas',
  'Tormentas de polvo radiactivo',
  'Tormentas volátiles',
  'Brotes de radiación ocasionales',
  'Tormentas irradiadas',
  'Niebla inestable',
  'Lluvia reactiva',
  'Humedad radiactiva',
  'Humedad radiactiva',
  'Vientos irradiados',
  'Charcos contaminados',
  'Vientos volátiles',
  'Atmósfera inestable',
  'Polvo gamma',
  'Atmósfera nucleídica',
  'Supertormentas hirvientes',
  'Explosiones de calor intenso',
  'Lluvia sobrecalentada',
  'Monzones hirvientes',
  'Humedad abrasadora',
  'Lluvia dolorosa',
  'Calor torrencial',
  'Inundaciones abrasadoras',
  'Tormentas de lluvia escaldante',
  'Derrames torrenciales',
  'Charcos hirvientes',
  'Humedad sofocante',
  'Llovizna sobrecalentada',
  'Niebla peligrosamente caliente',
  'Humedad asfixiante',
  'Totalmente calmado',
  'Lluvias escaldantes ocasionales',
  'Generalmente templado',
  'Humedad hirviente',
  'Brotes de humedad letales',
  'Templado',
  'Ligeras lluvias',
  'Lluvia suave',
  'Brisa refrescante',
  'Agradable',
  'Cálido',
  'Apacible',
  'Hermoso',
  'Feliz',
  'Tormentas de polvo ondeantes',
  'Tormentas de arena asfixiante',
  'Extremos de temperatura peligrosos',
  'Viento nocturno que quema los pulmones',
  'Ráfagas de viento extremas',
  'Desecación planetaria',
  'Ventiscas de arena',
  'Gales aullantes',
  'Desiertos muertos',
  'Tormentas de arena ocasionales',
  'Tormentas de polvo poco frecuentes',
  'Ráfagas intermitentes',
  'Arenas secas',
  'Tormentas de polvo esporádicas',
  'Vientos ahogados por el polvo',
  'Temperaturas muy variables',
  'Atmósfera devastada',
  'Vientos helados nocturnos',
  'Sequía incesante',
  'Sin humedad',
  'Horneado',
  'Estéril',
  'Cielos despejados',
  'Ráfagas secas',
  'Marchitas',
  'Noches heladas',
  'Despejado',
  'Sin atmósfera',
  'Completamente quieto',
  'Pacífico',
  'Extrañamente tranquilo',
  'Sin aire',
  'Silencioso',
  'Inerte',
  'Claro',
  'Bruma invisible',
  'Lluvia interna',
  'Nubes perdidas',
  'Calor carmesí',
  'Vientos de cristal',
  'Nubes sedientas',
  'Calor obsidiana',
  'Recuerdos de escarcha',
  'Escarcha perseguida',
  'Incendio indetectable',
  '[EDITADO]',
  'Anómalo',
  'Rojo ardiente',
  'Lluvia escarlata',
  'Nubes febril',
  'Vientos carmesí',
  'Bruma roja',
  'Granizo llameante',
  'Tormentas bermellón',
  'Lluvias de Atlas',
  'Nubes enfurecidas',
  'Lluvia de sangre',
  'Tormentas biliosas',
  'Variaciones de presión mortales',
  'Viento tóxico fuerte',
  'Sangre corrompida',
  'Neblina tóxica infinita',
  'Ecos de ácido',
  'Ciclones venenosos',
  'Toxinas inevitables',
  'Nubes de verde encantado',
  'Vientos de jade invisibles',
  'Neblinas congeladas',
  'Lluvia eléctrica',
  'Tormentas de azul celeste',
  'Presión extremadamente baja',
  'Frío absorbente',
  'Vientos del más allá',
  'Tormentas insondables',
  'Azul inimaginable',
  'Viento azul ultramarino',
  'Supertormentas invertidas',
  'Tormentas costeras'
] as const;

export const mappedPlanetWeather: SelectOption[] = InSpanish.map((mode, index) => ({
  label: mode,
  value: InEnglish[index],
}));

