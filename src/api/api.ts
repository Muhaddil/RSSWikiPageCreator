export const wikiLink = 'https://nomanssky.fandom.com/wiki/';
export const apiPath = 'https://nomanssky.fandom.com/api.php';
export const wikiLinkES = 'https://nomanssky.fandom.com/es/wiki/';
export const apiPathES = 'https://nomanssky.fandom.com/es/api.php';

export type BasicQueryData = {
  format: 'json';
  origin: '*';
  [key: string]: string | number;
};

export type BasicQueryApiData = BasicQueryData & {
  action: 'parse';
  prop?: string;
  page?: string;
  section?: number;
};

export interface CensusQueryData {
  Name: string;
  _pageName: string;
  CensusPlayer: string;
  System: string;
  Platform: string;
  Mode: string;
  CensusArrival: string;
  CensusRenewal: string;
  Builderlink?: string;
  CensusReddit?: string;
  CensusDiscord?: string;
  CensusFriend?: string;
  CensusVerified?: string;
}

export interface CargoResponse<T> {
  cargoquery: Array<{
    title: T;
  }>;
}

export type CensusApiResponse = CargoResponse<CensusQueryData>;

export type CargoQueryResponse<T> = {
  cargoquery: Array<{ title: T }>;
};

const buildQueryUrl = (queryObject: Record<string, string | number>): string => {
  const params = new URLSearchParams();

  Object.entries(queryObject).forEach(([key, value]) => {
    params.append(key, value.toString());
  });

  return `${apiPath}?${params.toString()}`;
};

const basicQueryData: BasicQueryData = {
  format: 'json',
  origin: '*',
};

export const getCensusQueryDataUrl = (civilized: string, offset: number, year?: string): string => {
  const queryObject = {
    ...basicQueryData,
    action: 'cargoquery',
    tables: 'Bases',
    fields: [
      'Name',
      'CensusPlayer',
      'CensusReddit',
      'CensusDiscord',
      'CensusFriend',
      'System',
      'Platform',
      'Mode',
      'CensusArrival',
      'CensusRenewal',
      'Builderlink',
    ].join(','),
    where: `CensusShow IS NOT NULL AND Civilized='${civilized}'${year ? ` AND CensusRenewal HOLDS ${year}` : ''}`,
    order_by: 'CensusRenewal DESC',
    group_by: 'CensusPlayer',
    limit: 500,
    offset,
  };

  return buildQueryUrl(queryObject);
};

export const getBaseDetailsUrl = (baseName: string): string => {
  const queryObject = {
    ...basicQueryData,
    action: 'cargoquery',
    tables: 'Bases',
    fields: ['Type', 'Farm', 'Geobay', 'Landing_pad', 'Arena', 'Terminal', 'Racetrack'].join(','),
    where: `Name="${baseName}"`,
  };

  return buildQueryUrl(queryObject);
};

export const apiCall = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const textData = await response.text();
    const decodedData = decodeHtmlEntities(textData);

    return JSON.parse(decodedData);
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

const decodeHtmlEntities = (text: string): string => {
  return text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, '&');
};

export const checkUserExists = async (username: string): Promise<boolean> => {
  const queryObject = {
    ...basicQueryData,
    action: 'query',
    list: 'users',
    ususers: username,
  };

  const url = buildQueryUrl(queryObject);
  const data = await apiCall<any>(url);

  return data?.query?.users?.[0]?.userid !== undefined;
};

export const getWikiSectionContent = async (page: string, section: number): Promise<string> => {
  const queryObject = {
    ...basicQueryData,
    action: 'parse',
    page,
    prop: 'wikitext',
    section,
  };

  const url = buildQueryUrl(queryObject);
  const data = await apiCall<any>(url);

  return data?.parse?.wikitext?.['*'] || '';
};

export const isCargoResponse = <T>(data: any): data is CargoQueryResponse<T> => {
  return data?.cargoquery !== undefined;
};

export const mapCensusData = (data: CensusApiResponse): CensusQueryData[] => {
  return data.cargoquery.map(({ title }) => ({
    Name: title.Name,
    _pageName: title._pageName || title.Name,
    CensusPlayer: title.CensusPlayer || 'Desconocido',
    System: title.System || 'Desconocido',
    Platform: title.Platform || 'Desconocida',
    Mode: title.Mode || 'Desconocido',
    CensusArrival: title.CensusArrival || 'Desconocido',
    CensusRenewal: title.CensusRenewal || 'Desconocido',
    Builderlink: title.Builderlink,
    CensusReddit: title.CensusReddit,
    CensusDiscord: title.CensusDiscord,
    CensusFriend: title.CensusFriend,
    CensusVerified: title.CensusVerified,
  }));
};

export const fetchCensusData = async (civilized: string, offset: number, year?: string): Promise<CensusQueryData[]> => {
  const url = getCensusQueryDataUrl(civilized, offset, year);
  const data = await apiCall<CensusApiResponse>(url);

  if (!data?.cargoquery) {
    throw new Error('Invalid API response structure');
  }

  return mapCensusData(data);
};

export const getBaseImageName = async (pageName: string): Promise<string | null> => {
  const queryObject = {
    ...basicQueryData,
    action: 'parse',
    page: pageName,
    prop: 'wikitext',
  };

  const url = buildQueryUrl(queryObject);
  const data = await apiCall<any>(url);
  const wikitext = data?.parse?.wikitext?.['*'] || '';

  const regex = /\|\s*image\s*=\s*(.+)/i;
  const match = wikitext.match(regex);
  if (match) {
    let imageName = match[1].split('\n')[0].split('|')[0].trim();
    return imageName;
  }
  return null;
};

export type ImageUrls = {
  panel: string;
  modal: string;
};

export const getImageUrls = async (imageName: string): Promise<ImageUrls | null> => {
  if (!imageName.toLowerCase().startsWith('file:')) {
    imageName = 'File:' + imageName;
  }

  const queryObject = {
    ...basicQueryData,
    action: 'query',
    titles: imageName,
    prop: 'imageinfo',
    iiprop: 'url',
  };

  const url = buildQueryUrl(queryObject);
  const data = await apiCall<any>(url);

  const pages = data?.query?.pages;
  if (pages) {
    const pageKey = Object.keys(pages)[0];
    const page = pages[pageKey];
    if (page && page.imageinfo && page.imageinfo[0]) {
      const rawUrl = page.imageinfo[0].url;
      const panelUrl = rawUrl.split('/revision')[0];
      const modalUrl = rawUrl.split('revision')[0];
      return { panel: panelUrl, modal: modalUrl };
    }
  }
  return null;
};

export const fetchBaseImageUrls = async (pageName: string): Promise<ImageUrls | null> => {
  const imageName = await getBaseImageName(pageName);
  if (!imageName) return null;
  return await getImageUrls(imageName);
};

export interface RegionQueryData {
  Coordinates: string;
  Galaxy: string;
  Quadrant: string;
  Civilized: string;
  Region: string;
}

export type RegionsApiResponse = CargoResponse<RegionQueryData>;

export const getRegionsQueryDataUrl = (civilized: string, offset: number = 0): string => {
  const queryObject = {
    ...basicQueryData,
    action: 'cargoquery',
    tables: 'Regions',
    fields: ['Regions.Coordinates', 'Regions.Galaxy', 'Regions.Quadrant', 'Regions.Civilized', '_pageName=Region'].join(
      ','
    ),
    where: `Civilized='${civilized}'`,
    order_by: 'Region ASC',
    offset: offset,
  };

  return buildQueryUrl(queryObject);
};

export const mapRegionsData = (data: RegionsApiResponse): RegionQueryData[] => {
  return data.cargoquery.map(({ title }) => ({
    Coordinates: title.Coordinates || 'Desconocido',
    Galaxy: title.Galaxy || 'Desconocido',
    Quadrant: title.Quadrant || 'Desconocido',
    Civilized: title.Civilized || 'Desconocido',
    Region: title.Region || 'Desconocido',
  }));
};

export const fetchRegionsData = async (civilized: string, offset: number = 0): Promise<RegionQueryData[]> => {
  const url = getRegionsQueryDataUrl(civilized, offset);
  const data = await apiCall<RegionsApiResponse>(url);

  if (!data?.cargoquery) {
    throw new Error('Invalid API response structure');
  }

  return mapRegionsData(data);
};

export const getRegionImageName = async (pageName: string): Promise<string | null> => {
  const queryObject = {
    ...basicQueryData,
    action: 'parse',
    page: pageName,
    prop: 'wikitext',
  };

  const url = buildQueryUrl(queryObject);
  const data = await apiCall<any>(url);
  const wikitext = data?.parse?.wikitext?.['*'] || '';

  const regex = /\|\s*image\s*=\s*(.+)/i;
  const match = wikitext.match(regex);
  if (match) {
    let imageName = match[1].split('\n')[0].split('|')[0].trim();
    return imageName;
  }
  return null;
};

export const getRegionImageUrls = async (imageName: string): Promise<ImageUrls | null> => {
  if (!imageName.toLowerCase().startsWith('file:')) {
    imageName = 'File:' + imageName;
  }

  const queryObject = {
    ...basicQueryData,
    action: 'query',
    titles: imageName,
    prop: 'imageinfo',
    iiprop: 'url',
  };

  const url = buildQueryUrl(queryObject);
  const data = await apiCall<any>(url);

  const pages = data?.query?.pages;
  if (pages) {
    const pageKey = Object.keys(pages)[0];
    const page = pages[pageKey];
    if (page && page.imageinfo && page.imageinfo[0]) {
      const rawUrl = page.imageinfo[0].url;
      const panelUrl = rawUrl.split('/revision')[0];
      const modalUrl = rawUrl.split('revision')[0];
      return { panel: panelUrl, modal: modalUrl };
    }
  }
  return null;
};

export const fetchRegionImageUrls = async (pageName: string): Promise<ImageUrls | null> => {
  const imageName = await getRegionImageName(pageName);
  if (!imageName) return null;
  return await getRegionImageUrls(imageName);
};

export interface RegionStats {
  [key: string]: {
    CrossPlatform: number;
  };
}

const fetchCategoryStats = async (
  pageName: string,
  tableClass: string,
  tableFields: string
): Promise<number | null> => {
  try {
    const queryObject = {
      ...basicQueryData,
      action: 'cargoquery',
      tables: tableClass,
      fields: [tableFields].join(','),
      where: `Civilized='Royal Space Society' AND Region='${pageName}'`,
      limit: 500,
    };

    const url = buildQueryUrl(queryObject);
    const data = await apiCall<any>(url);

    if (data?.cargoquery && Array.isArray(data.cargoquery)) {
      return data.cargoquery.length;
    }

    return null;
  } catch (error) {
    console.error(`Error fetching category stats for ${pageName}:`, error);
    return null;
  }
};

export const getRegionStats = async (pageName: string): Promise<RegionStats | null> => {
  const stats: RegionStats = {
    'Star systems': { CrossPlatform: 0 },
    Bases: { CrossPlatform: 0 },
    Planets: { CrossPlatform: 0 },
    Fauna: { CrossPlatform: 0 },
    Starships: { CrossPlatform: 0 },
    'Multi-Tools': { CrossPlatform: 0 },
  };

  const categories = {
    'Star systems': { tableClass: 'Systems', tableFields: 'Region' },
    Bases: { tableClass: 'Bases', tableFields: 'Name' },
    Planets: { tableClass: 'Planets', tableFields: 'Civilized' },
    Fauna: { tableClass: 'Creatures', tableFields: 'Name' },
    Starships: { tableClass: 'Starships', tableFields: 'Coordinates' },
    'Multi-Tools': { tableClass: 'Multitools', tableFields: 'Civilized' },
  };

  for (const [categoryName, { tableClass, tableFields }] of Object.entries(categories)) {
    const categoryStats = await fetchCategoryStats(pageName, tableClass, tableFields);
    if (categoryStats !== null) {
      stats[categoryName] = { CrossPlatform: categoryStats };
    }
  }

  return Object.keys(stats).length > 0 ? stats : null;
};
