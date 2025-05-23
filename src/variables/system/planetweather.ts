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
  'Gas Storms',
  'Eternal Cyclones',
  'Planet-Wide Maelstrom',
  'Constant Pressure Storms',
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
  'Fair',
  'Fine',
  'Moderate',
  'Peaceful Climate',
  'Tempered',
  'Emollient',
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
  'Coastal Storms',
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
  'Neblina húmeda',
  'Niebla mortal',
  'Desastre sofocante',
  'Monzones catastróficos',
  'Neblina de aniquilación',
  'Niebla absorbente',
  'Infierno líquido',
  'Tormentas desoladoras',
  'Diluvios de fundición',
  'Catástrofe hirviente',
  'Miseria pegajosa',
  'Bolsas de gas calientes',
  'Tormentas de fuego ocasionales',
  'Vientos incendiarios',
  'Conflagraciones impredecibles',
  'Tormentas de fuego a la deriva',
  'Pilares de llamas',
  'Géiseres de magma',
  'Columnas de fuego',
  'Lluvia de lava',
  'Tormentas tectónicas',
  'Ceniza irrespirable',
  'Neblina sulfurosa',
  'Volutas de ceniza',
  'Niebla tóxica a la deriva',
  'Carbonilla',
  'Columnas de ceniza',
  'Ceniza asfixiante',
  'Neblinas abrasadoras',
  'Gases sulfurosos',
  'Ceniza envolvente',
  'Vientos cenizos',
  'Tormentas de fuego frecuentes',
  'Paredes de llamas',
  'Nubes de fuego',
  'Destrucción cenizosa',
  'Lluvia de magma',
  'Granizo basáltico',
  'Erupciones explosivas de gas',
  'Tormentas de ceniza letales',
  'Infierno sulfuroso',
  'Tormentas de fuego colosales',
  'Catástrofe de obsidiana',
  'Tormentas de gas',
  'Ciclones eternos',
  'Vorágine planetaria',
  'Tormentas de presión constante',
  'Tormentas de calor inusuales',
  'Lluvias de fuego raras',
  'Bolsas de gas supercalientes',
  'Zonas calientes ambulantes',
  'Inestabilidades de calor',
  'Exposición directa al sol',
  'Atmósfera ardiente',
  'Lluvias de ceniza ocasionales',
  'Peligrosamente caliente',
  'Aire abrasador',
  'Reseco',
  'Excesivamente cálido',
  'Soleado',
  'Deshidratado',
  'Luz solar infinita',
  'Caldeado',
  'Calor extremo',
  'Nubes de gas ardiente',
  'Calor intenso',
  'Aire sobrecalentado',
  'Calor escaldado',
  'Vientos infernales',
  'Lluvias de fuego',
  'Polvo combustible',
  'Polvo incendiario',
  'Tormentas autoinflamables',
  'Ventiscas huracanadas',
  'Frío intenso',
  'Tempestad gélida',
  'Tormentas sobreenfriadas',
  'Tormentas de nieve violentas',
  'Tormentas de hielo',
  'Congelante',
  'Tormentas de hielo violentas',
  'Ventiscas frecuentes',
  'Heladas peligrosas',
  'Nubes congeladas',
  'Nevadas ocasionales',
  'Ventiscas poco frecuentes',
  'Estallidos de lluvia gélida',
  'Vientos gélidos fuertes',
  'Tormentas de nieve errantes',
  'Ventiscas migratorias',
  'Ráfagas de hielo',
  'Escarchas errantes',
  'Nieve polvo',
  'Invernal',
  'Nevoso',
  'Gélido',
  'Vigorizante',
  'Escarcha',
  'Congelante',
  'Eternamente congelado',
  'Riadas tóxicas frecuentes',
  'Supertormentas tóxicas',
  'Diluvios ácidos',
  'Ciclones corrosivos',
  'Inundaciones cáusticas',
  'Tormentas corrosivas',
  'Ácido torrencial',
  'Tormentas de gas nocivo',
  'Monzones tóxicos',
  'Tormentas ácidas dolorosas',
  'Tempestades corrosivas',
  'Lluvia tóxica torrencial',
  'Tormentas ácidas ocasionales',
  'Corrupción atmosférica',
  'Chaparrones venenosos',
  'Estallidos tóxicos',
  'Bolsas de polvo ácido',
  'Frentes tóxicos superficiales',
  'Vientos cáusticos',
  'Chaparrones alcalinos',
  'Lluvia peligrosamente tóxica',
  'Tormentas corrosivas',
  'Atmósfera letal',
  'Lloviznas tóxicas inusuales',
  'Lluvia ácida',
  'Nubes tóxicas',
  'Lluvia venenosa',
  'Nubes asfixiantes',
  'Humedad cáustica',
  'Gas venenoso',
  'Atmósfera urticante',
  'Vaho tóxico',
  'Vaho corrosivo',
  'Charcos urticantes',
  'Radiactividad extrema',
  'Tormentas irradiadas',
  'Tormentas radiactivas',
  'Atmósfera en desintegración',
  'Viento nuclear violento',
  'Ciclones gamma',
  'Chubascos contaminados',
  'Niebla termonuclear extrema',
  'Partículas en erupción',
  'Tormentas nucleares enormes',
  'Vientos de partículas',
  'Tormentas energéticas',
  'Diluvios irradiados',
  'Tormentas de polvo radiactivo',
  'Vendaval volátil',
  'Descargas radiactivas casuales',
  'Tormentas irradiadas',
  'Niebla inestable',
  'Lluvia reactiva',
  'Humedad radiactiva',
  'Vaho radiactivo',
  'Vientos irradiados',
  'Charcos contaminados',
  'Vientos volátiles',
  'Atmósfera inestable',
  'Polvo gamma',
  'Atmósfera nucléidica',
  'Supertormentas asfixiantes',
  'Estallidos de calor intenso',
  'Lluvia sobrecalentada',
  'Monzones asfixiantes',
  'Humedad achicharrante',
  'Lluvia abrasadora',
  'Calor torrencial',
  'Inundaciones abrasadoras',
  'Temporales abrasadores',
  'Diluvios tórridos',
  'Charcos asfixiantes',
  'Vaho caldeado',
  'Llovizna sobrecalentada',
  'Peligrosa niebla caliente',
  'Humedad asfixiante',
  'En su mayoría calmado',
  'Lluvia abrasadora ocasional',
  'Normalmente apacible',
  'Vaho abrasador',
  'Estallidos de humedad letal',
  'Moderado',
  'Lluvias leves',
  'Llovizna',
  'Brisa refrescante',
  'Agradable',
  'Sereno',
  'Apacible',
  'Precioso',
  'Maravilloso',
  'Tormentas de polvo ondulante',
  'Tormentas de arena opresivas',
  'Hazardous Temperature Extremes',
  'Temp. extremas peligrosas',
  'Ráfagas de viento extremo',
  'Desecación planetaria',
  'Ventiscas de arena',
  'Vendaval huracanado',
  'Páramos muertos',
  'Tormentas de arena casuales',
  'Tormentas de polvo inusuales',
  'Ráfagas de viento casuales',
  'Arenas resecas',
  'Tormentas de arena fortuitas',
  'Vientos de polvo asfixiantes',
  'Temperaturas muy variables',
  'Atmósfera arruinada',
  'Vientos nocturnos gélidos',
  'Sequía incesante',
  'Desaguado',
  'Reseco',
  'Estéril',
  'Cielos despejados',
  'Ráfagas secas',
  'Mustio',
  'Noches heladas',
  'Totalmente despejado',
  'Ausente',
  'Sin atmósfera',
  'Totalmente calmado',
  'Pacífico',
  'Misteriosamente calmado',
  'Sin viento',
  'Silencioso',
  'Inerte',
  'Despejado',
  'Favorable',
  'Suave',
  'Moderado',
  'Buen clima',
  'Templado',
  'Tranquilo',
  'Niebla invisible',
  'Lluvia interna',
  'Nubes perdidas',
  'Calor carmesí',
  'Vientos vidriosos',
  'Nubes sedientas',
  'Calor de obsidiana',
  'Recuerdos de escarcha',
  'Escarcha angustiosa',
  'Fuego indetectable',
  '[EDITADO]',
  'Anómalo',
  'Carmesí abrasador',
  'Lluvia escarlata',
  'Nubes agitadas',
  'Vientos de carmín',
  'Neblina roja',
  'Granizo llameante',
  'Tormentas bermellonas',
  'Lluvia del Atlas',
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
  'Tormentas costeras',
] as const;

export const mappedPlanetWeather: SelectOption[] = InSpanish.map((mode, index) => ({
  label: mode,
  value: InEnglish[index],
}));
