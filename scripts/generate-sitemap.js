import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const CONFIG = {
  baseUrl: 'https://data.royalspacesociety.com/',
  exclude: ['indextest.html'],
  pages: {
    'index.html': { priority: '1.0', changefreq: 'weekly' },
    'census.html': { priority: '0.9', changefreq: 'weekly' },
    'baserenewal.html': { priority: '0.9', changefreq: 'weekly' },
    'faq.html': { priority: '0.9', changefreq: 'weekly' },
    'glyphgenerator.html': { priority: '0.9', changefreq: 'weekly' },
    'base.html': { priority: '0.8', changefreq: 'weekly' },
    'basecensusno.html': { priority: '0.8', changefreq: 'weekly' },
    'biofrig.html': { priority: '0.8', changefreq: 'weekly' },
    'corvette.html': { priority: '0.8', changefreq: 'weekly' },
    'derelict.html': { priority: '0.8', changefreq: 'weekly' },
    'fauna.html': { priority: '0.8', changefreq: 'weekly' },
    'flora.html': { priority: '0.8', changefreq: 'weekly' },
    'mineral.html': { priority: '0.8', changefreq: 'weekly' },
    'moon.html': { priority: '0.8', changefreq: 'weekly' },
    'multitool.html': { priority: '0.8', changefreq: 'weekly' },
    'planet.html': { priority: '0.8', changefreq: 'weekly' },
    'racetrack.html': { priority: '0.8', changefreq: 'weekly' },
    'sandworm.html': { priority: '0.8', changefreq: 'weekly' },
    'settlement.html': { priority: '0.8', changefreq: 'weekly' },
    'starship.html': { priority: '0.8', changefreq: 'weekly' },
    'system.html': { priority: '0.8', changefreq: 'weekly' },
  },
  defaultPageConfig: {
    priority: '0.7',
    changefreq: 'weekly',
  },
};

const PUBLIC_DIR = path.resolve('public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');

let pageSectionsLatestDate = null;

function getPriorityAndFreq(fileName) {
  if (CONFIG.pages[fileName]) {
    return CONFIG.pages[fileName];
  }
  return CONFIG.defaultPageConfig;
}

function getLatestDateFromGit(filePath) {
  try {
    const relativePath = path.relative(process.cwd(), filePath);
    const stdout = execSync(`git log -1 --format=%cs -- "${relativePath}"`, {
      encoding: 'utf8',
      cwd: process.cwd(),
      stdio: ['pipe', 'pipe', 'ignore'],
    }).trim();

    if (stdout && /^\d{4}-\d{2}-\d{2}$/.test(stdout)) {
      return new Date(stdout);
    }
  } catch (error) {
    // Ignorar
  }

  return null;
}

function getLatestDateFromStats(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime;
  } catch (error) {
    return null;
  }
}

function getAllVueFilesRecursive(dirPath) {
  let vueFiles = [];

  try {
    const files = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const file of files) {
      const fullPath = path.join(dirPath, file.name);

      if (file.isDirectory()) {
        vueFiles = vueFiles.concat(getAllVueFilesRecursive(fullPath));
      } else if (file.name.endsWith('.vue')) {
        vueFiles.push(fullPath);
      }
    }
  } catch (error) {
    console.warn(`[Recursión] Error al leer ${dirPath}: ${error.message}`);
  }

  return vueFiles;
}

function calculatePageSectionsLatestDate() {
  console.log('[Cache] Calculando fecha más reciente de pageSections...');
  let latestDate = new Date(0);

  const pageSectionsDir = path.join(process.cwd(), 'src/pageSections');

  if (fs.existsSync(pageSectionsDir)) {
    const allVueFiles = getAllVueFilesRecursive(pageSectionsDir);
    console.log(`[Cache] Revisando ${allVueFiles.length} archivos...`);

    for (const filePath of allVueFiles) {
      const gitDate = getLatestDateFromGit(filePath);
      const statsDate = getLatestDateFromStats(filePath);

      if (gitDate && gitDate > latestDate) latestDate = gitDate;
      if (statsDate && statsDate > latestDate) latestDate = statsDate;
    }
  }

  const finalDate = latestDate.getTime() === 0 ? new Date() : latestDate;
  console.log(`[Cache] Fecha más reciente: ${finalDate.toISOString().split('T')[0]}\n`);

  return finalDate;
}

function getFileLastModifiedDate(htmlFileName) {
  console.log(`[Procesando] ${htmlFileName}`);
  let latestDate = new Date(0);

  const vueSourceFile = {
    'index.html': 'src/pages/Home.vue',
    'census.html': 'src/pages/Census.vue',
    'baserenewal.html': 'src/pages/BaseRenewal.vue',
    'faq.html': 'src/pages/FAQ.vue',
    'glyphgenerator.html': 'src/pages/GlyphGenerator.vue',
    'base.html': 'src/pages/Base.vue',
    'basecensusno.html': 'src/pages/BaseCensusNo.vue',
    'biofrig.html': 'src/pages/Biofrig.vue',
    'corvette.html': 'src/pages/Corvette.vue',
    'derelict.html': 'src/pages/Derelict.vue',
    'fauna.html': 'src/pages/Fauna.vue',
    'flora.html': 'src/pages/Flora.vue',
    'mineral.html': 'src/pages/Mineral.vue',
    'moon.html': 'src/pages/Moon.vue',
    'multitool.html': 'src/pages/Multitool.vue',
    'planet.html': 'src/pages/Planet.vue',
    'racetrack.html': 'src/pages/Racetrack.vue',
    'sandworm.html': 'src/pages/Sandworm.vue',
    'settlement.html': 'src/pages/Settlement.vue',
    'starship.html': 'src/pages/Starship.vue',
    'system.html': 'src/pages/System.vue',
  };

  // 1. Vue principal
  const vueSource = vueSourceFile[htmlFileName];
  if (vueSource) {
    const vuePath = path.join(process.cwd(), vueSource);

    const gitDate = getLatestDateFromGit(vuePath);
    const statsDate = getLatestDateFromStats(vuePath);

    if (gitDate && gitDate > latestDate) latestDate = gitDate;
    if (statsDate && statsDate > latestDate) latestDate = statsDate;
  }

  // 2. CACHÉ pageSections
  if (pageSectionsLatestDate && pageSectionsLatestDate > latestDate) {
    latestDate = pageSectionsLatestDate;
  }

  // 3. Fallback
  if (latestDate.getTime() === 0) {
    try {
      const htmlPath = path.join(process.cwd(), htmlFileName);
      const statsDate = getLatestDateFromStats(htmlPath);
      if (statsDate) latestDate = statsDate;
    } catch (error) {
      // Ignorar
    }
  }

  // 4. 
  if (latestDate.getTime() === 0) {
    latestDate = new Date();
  }

  const finalDate = latestDate.toISOString().split('T')[0];
  console.log(`[Resultado] ${htmlFileName} → ${finalDate}\n`);

  return finalDate;
}

function generateSitemap() {
  console.log('======================================');
  console.log('[Inicio] Generando sitemap...');
  console.log('======================================\n');

  try {
    pageSectionsLatestDate = calculatePageSectionsLatestDate();

    console.log('[Leyendo] Archivos del root...');
    const rootDir = process.cwd();
    const files = fs.readdirSync(rootDir);
    console.log(`[Encontrados] ${files.length} archivos\n`);

    const htmlFiles = files.filter((file) => {
      return file.endsWith('.html') && !CONFIG.exclude.includes(file);
    });

    console.log(`[Filtrados] ${htmlFiles.length} archivos HTML\n`);

    htmlFiles.sort();

    const indexIndex = htmlFiles.indexOf('index.html');
    if (indexIndex > -1) {
      htmlFiles.splice(indexIndex, 1);
      htmlFiles.unshift('index.html');
    }

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<?xml-stylesheet type="text/xsl" href="sitemap.xsl"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    for (const file of htmlFiles) {
      const urlPath = file === 'index.html' ? '' : file;
      const { priority, changefreq } = getPriorityAndFreq(file);
      const lastmod = getFileLastModifiedDate(file);

      xml += '  <url>\n';
      xml += `    <loc>${CONFIG.baseUrl}${urlPath}</loc>\n`;
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;
      xml += '  </url>\n';
    }

    xml += '</urlset>\n';

    console.log('[Escribiendo] Archivo sitemap.xml...');
    if (!fs.existsSync(PUBLIC_DIR)) {
      fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    }

    fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');

    console.log('\n======================================');
    console.log(`✓ Sitemap generado exitosamente!`);
    console.log(`✓ Ubicación: ${SITEMAP_PATH}`);
    console.log(`✓ Total de páginas: ${htmlFiles.length}`);
    console.log('======================================');
  } catch (error) {
    console.error('\n❌ Error al generar sitemap:');
    console.error(error);
    process.exit(1);
  }
}

console.log('Iniciando proceso...\n');
generateSitemap();