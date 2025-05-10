const regions: { [key: string]: string } = {
  F7EC0D24: 'Bajíos de Uekenbe',
  '032FE9B0': 'Bajíos de Uklots',
  FEA34C10: 'Frontera de Eighba',
  F7EC0D25: 'Xecroften',
  F8EBDD24: 'Areyas',
  '0EEC7D10': 'Mar de Ticrops',
  FBF21696: 'Vacío de Uhcheimri',
  F7EC1D24: 'Sector Becheeth',
  F9F846D8: 'Nebulosa de Emcalh',
  F6EC0D23: 'Cúmulo de Juhalbe',
  '0AAEBB96': 'Límite de Larinar',
  '0266CF95': 'Skitco',
  F7EBFD24: 'Bajíos de Udrupi',
  F7EBFD25: 'Bajíos de Jiessl',
  FF9B4CB0: 'Vacío de Qudsor',
};

const galaxies: { [key: string]: string } = {
  F7EC0D24: 'Euclides',
  '032FE9B0': 'Euclides',
  FEA34C10: 'Euclides',
  F7EC0D25: 'Euclides',
  F8EBDD24: 'Euclides',
  '0EEC7D10': 'Euclides',
  FBF21696: 'Eissentam',
  F7EC1D24: 'Euclides',
  F9F846D8: 'Euclides',
  F6EC0D23: 'Euclides',
  '0AAEBB96': 'Euclides',
  '0266CF95': 'Dimensión de Hilbert',
  F7EBFD24: 'Euclides',
  F7EBFD25: 'Euclides',
  FF9B4CB0: 'Eissentam',
};

export function fillRegionSelect(): void {
  const regionSelect = document.getElementById('regionSelect') as HTMLSelectElement;
  for (let region in regions) {
    let option = document.createElement('option');
    option.value = region;
    option.text = regions[region];
    regionSelect.appendChild(option);
  }
}

window.onload = fillRegionSelect;

export function randomGlyph(): string {
  const glyphs = '0123456789ABCDEF';
  return glyphs[Math.floor(Math.random() * glyphs.length)];
}

export function generateGlyphs(selectedRegion: string): string {
  let glyphs = '0';

  for (let i = 0; i < 3; i++) {
    glyphs += randomGlyph();
  }

  glyphs += selectedRegion;

  while (glyphs.length < 12) {
    glyphs += randomGlyph();
  }

  return glyphs;
}

export function displayRandomGlyphs(): void {
  const glyphOutput = document.getElementById('glyphOutput') as HTMLElement;
  const regionOutput = document.getElementById('regionOutput') as HTMLElement;
  const galaxyOutput = document.getElementById('galaxyOutput') as HTMLElement;
  const regionSelect = document.getElementById('regionSelect') as HTMLSelectElement;
  const selectedRegion = regionSelect.value;

  if (!selectedRegion) {
    glyphOutput.textContent = '⚠️ Error: Selecciona una región antes de generar glifos.';
    regionOutput.textContent = '';
    galaxyOutput.textContent = '';
    return;
  }

  const glyphs = generateGlyphs(selectedRegion);
  const region = regions[selectedRegion] || 'Desconocida';
  const galaxy = galaxies[selectedRegion] || 'Desconocida';

  glyphOutput.innerHTML = '';

  const glyphContainer = document.createElement('span');
  glyphContainer.classList.add('glyph-container');

  let index = 0;
  const glyphsArray = glyphs.split('');

  function animateNextGlyph() {
    if (index < glyphsArray.length) {
      const glyphElement = document.createElement('span');
      glyphElement.classList.add('glyph');
      glyphElement.textContent = glyphsArray[index];

      glyphContainer.appendChild(glyphElement);

      glyphElement.classList.add('spin');

      index++;
      setTimeout(animateNextGlyph, 100);
    }
  }

  animateNextGlyph();

  glyphOutput.appendChild(glyphContainer);

  regionOutput.textContent = 'Región: ' + region;
  galaxyOutput.textContent = 'Galaxia: ' + galaxy;
}

(window as any).displayRandomGlyphs = displayRandomGlyphs;
