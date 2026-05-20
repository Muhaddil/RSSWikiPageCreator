import fs from 'node:fs';
import path from 'node:path';

const CONFIG = {
  baseUrl: 'https://muhaddil.github.io/RSSWikiPageCreator/',

  exclude: ['indextest.html'],

  pages: {
    // Home Page
    'index.html': { priority: '1.0', changefreq: 'weekly' },

    // Core Tools
    'census.html': { priority: '0.9', changefreq: 'weekly' },
    'baserenewal.html': { priority: '0.9', changefreq: 'weekly' },
    'faq.html': { priority: '0.9', changefreq: 'weekly' },
    'glyphgenerator.html': { priority: '0.9', changefreq: 'weekly' },

    // Discovery Creators
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

function getPriorityAndFreq(fileName) {
  if (CONFIG.pages[fileName]) {
    return CONFIG.pages[fileName];
  }
  return CONFIG.defaultPageConfig;
}

function generateSitemap() {
  try {
    const rootDir = path.resolve('.');
    const files = fs.readdirSync(rootDir);

    const htmlFiles = files.filter((file) => {
      return file.endsWith('.html') && !CONFIG.exclude.includes(file);
    });

    htmlFiles.sort();

    const indexIndex = htmlFiles.indexOf('index.html');
    if (indexIndex > -1) {
      htmlFiles.splice(indexIndex, 1);
      htmlFiles.unshift('index.html');
    }

    const today = new Date().toISOString().split('T')[0];

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    for (const file of htmlFiles) {
      const urlPath = file === 'index.html' ? '' : file;
      const { priority, changefreq } = getPriorityAndFreq(file);

      xml += '  <url>\n';
      xml += `    <loc>${CONFIG.baseUrl}${urlPath}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;
      xml += '  </url>\n';
    }

    xml += '</urlset>\n';

    if (!fs.existsSync(PUBLIC_DIR)) {
      fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    }

    fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
    console.log(
      `[Sitemap] Sitemap auto-generated successfully at public/sitemap.xml with ${htmlFiles.length} pages!`
    );
  } catch (error) {
    console.error('[Sitemap] Failed to generate sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
