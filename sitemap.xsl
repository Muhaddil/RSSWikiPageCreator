<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html lang="es">
      <head>
        <title>Mapa del Sitio XML - RSSWikiPageCreator</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&amp;display=swap');

          :root {
            --bg-primary: #080c14;
            --bg-secondary: #0f172a;
            --bg-card: #1e293b;
            --accent: #6366f1;
            --accent-hover: #4f46e5;
            --accent-glow: rgba(99, 102, 241, 0.15);
            --text-primary: #f8fafc;
            --text-secondary: #94a3b8;
            --text-muted: #64748b;
            --border: #334155;
            --success: #10b981;
            --warning: #f59e0b;
            --danger: #ef4444;
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            font-family: 'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background-color: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
            padding: 2.5rem 1.5rem;
            min-height: 100vh;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
          }

          header {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            padding: 2.5rem;
            border-radius: 20px;
            border: 1px solid var(--border);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
            margin-bottom: 2.5rem;
            position: relative;
            overflow: hidden;
          }

          header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, var(--accent-glow) 0%, transparent 60%);
            pointer-events: none;
            z-index: 1;
          }

          .header-content {
            position: relative;
            z-index: 2;
          }

          .header-title-row {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 1rem;
            margin-bottom: 0.75rem;
          }

          .icon-sitemap {
            background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
            width: 42px;
            height: 42px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
          }

          h1 {
            font-size: 2.25rem;
            font-weight: 700;
            background: linear-gradient(to right, #ffffff, #c7d2fe);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          p.subtitle {
            color: var(--text-secondary);
            font-size: 1.05rem;
            max-width: 850px;
            margin-bottom: 1.75rem;
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 1.25rem;
          }

          .stat-card {
            background: rgba(15, 23, 42, 0.6);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 14px;
            padding: 1.25rem;
            display: flex;
            flex-direction: column;
            transition: all 0.3s ease;
          }

          .stat-card:hover {
            transform: translateY(-2px);
            background: rgba(15, 23, 42, 0.8);
            border-color: var(--accent);
            box-shadow: 0 4px 20px rgba(99, 102, 241, 0.1);
          }

          .stat-label {
            font-size: 0.85rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: var(--text-secondary);
            margin-bottom: 0.5rem;
          }

          .stat-value {
            font-size: 1.85rem;
            font-weight: 700;
            color: #ffffff;
          }

          .controls-bar {
            display: flex;
            gap: 1.25rem;
            margin-bottom: 1.75rem;
            align-items: center;
            flex-wrap: wrap;
          }

          .search-wrapper {
            position: relative;
            flex: 1;
            min-width: 300px;
          }

          .search-wrapper input {
            width: 100%;
            background-color: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 0.9rem 1rem 0.9rem 3rem;
            color: var(--text-primary);
            font-size: 0.95rem;
            font-family: inherit;
            transition: all 0.3s ease;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }

          .search-wrapper input:focus {
            outline: none;
            border-color: var(--accent);
            box-shadow: 0 0 0 3px var(--accent-glow);
          }

          .search-icon {
            position: absolute;
            left: 1.1rem;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-muted);
            pointer-events: none;
          }

          .back-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
            color: #ffffff;
            padding: 0.9rem 1.6rem;
            border-radius: 12px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 0.95rem;
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
          }

          .back-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 22px rgba(99, 102, 241, 0.45);
          }

          .table-container {
            background-color: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }

          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
          }

          th {
            background-color: var(--bg-card);
            padding: 1.1rem 1.4rem;
            font-size: 0.85rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-secondary);
            border-bottom: 1px solid var(--border);
            cursor: pointer;
            user-select: none;
            transition: all 0.2s ease;
          }

          th:hover {
            color: var(--text-primary);
            background-color: rgba(255, 255, 255, 0.02);
          }

          th.sort-asc::after {
            content: ' ▴';
            color: var(--accent);
          }

          th.sort-desc::after {
            content: ' ▾';
            color: var(--accent);
          }

          tr {
            border-bottom: 1px solid rgba(255, 255, 255, 0.02);
            transition: background-color 0.2s ease;
          }

          tr:last-child {
            border-bottom: none;
          }

          tr:hover {
            background-color: rgba(255, 255, 255, 0.015);
          }

          td {
            padding: 1.1rem 1.4rem;
            font-size: 0.95rem;
            color: var(--text-primary);
            vertical-align: middle;
          }

          .col-idx {
            font-size: 0.85rem;
            color: var(--text-muted);
            width: 70px;
            font-weight: 500;
          }

          .col-url a {
            color: var(--accent);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s ease;
            word-break: break-all;
          }

          .col-url a:hover {
            color: #818cf8;
            text-decoration: underline;
          }

          .badge {
            display: inline-flex;
            align-items: center;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 0.02em;
          }

          .badge-priority {
            background-color: rgba(99, 102, 241, 0.1);
            color: #a5b4fc;
            border: 1px solid rgba(99, 102, 241, 0.25);
          }

          .badge-priority.high {
            background-color: rgba(245, 158, 11, 0.1);
            color: #fbbf24;
            border: 1px solid rgba(245, 158, 11, 0.25);
          }

          .badge-priority.critical {
            background-color: rgba(239, 68, 68, 0.1);
            color: #fca5a5;
            border: 1px solid rgba(239, 68, 68, 0.25);
          }

          .badge-freq {
            background-color: rgba(148, 163, 184, 0.08);
            color: var(--text-secondary);
            border: 1px solid rgba(148, 163, 184, 0.15);
            text-transform: capitalize;
          }

          .col-date {
            color: var(--text-secondary);
            font-size: 0.9rem;
            white-space: nowrap;
          }

          .empty-state {
            padding: 4rem 2rem;
            text-align: center;
            color: var(--text-secondary);
            display: none;
          }

          .empty-state svg {
            margin-bottom: 1.25rem;
            color: var(--text-muted);
          }

          .empty-state p {
            font-size: 1.05rem;
            font-weight: 500;
          }

          footer {
            text-align: center;
            margin-top: 4rem;
            padding-top: 1.75rem;
            border-top: 1px solid var(--border);
            color: var(--text-muted);
            font-size: 0.85rem;
          }

          .heart {
            color: var(--danger);
            display: inline-block;
            animation: heartPulse 1.2s infinite alternate;
          }

          @keyframes heartPulse {
            0% { transform: scale(1); }
            100% { transform: scale(1.15); }
          }

          @media (max-width: 768px) {
            body {
              padding: 1.5rem 0.75rem;
            }
            header {
              padding: 1.5rem;
              margin-bottom: 1.5rem;
            }
            h1 {
              font-size: 1.75rem;
            }
            .controls-bar {
              flex-direction: column;
              align-items: stretch;
            }
            .back-btn {
              justify-content: center;
            }
            table, thead, tbody, th, td, tr {
              display: block;
            }
            thead tr {
              position: absolute;
              top: -9999px;
              left: -9999px;
            }
            tr {
              margin-bottom: 1.25rem;
              border: 1px solid var(--border);
              border-radius: 14px;
              background-color: rgba(15, 23, 42, 0.4);
              padding: 0.5rem 1rem;
            }
            td {
              border: none;
              position: relative;
              padding: 0.75rem 0 0.75rem 45%;
              text-align: right;
              font-size: 0.9rem;
            }
            td:before {
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 40%;
              padding-right: 10px;
              white-space: nowrap;
              font-weight: 600;
              text-align: left;
              font-size: 0.75rem;
              text-transform: uppercase;
              color: var(--text-secondary);
            }
            td.col-idx { display: none; }
            td.col-url { padding-left: 0; text-align: left; }
            td.col-url:before { display: none; }
            td.col-freq:before { content: "Frecuencia"; }
            td.col-priority:before { content: "Prioridad"; }
            td.col-date:before { content: "Fecha Modif."; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <div class="header-content">
              <div class="header-title-row">
                <div class="icon-sitemap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="7" height="9" rx="1"></rect>
                    <rect x="14" y="3" width="7" height="5" rx="1"></rect>
                    <rect x="14" y="12" width="7" height="9" rx="1"></rect>
                    <rect x="3" y="16" width="7" height="5" rx="1"></rect>
                  </svg>
                </div>
                <h1>Mapa del Sitio XML</h1>
              </div>
              <p class="subtitle">
                Este archivo es un Sitemap XML interactivo que ayuda a motores de búsqueda como Google a descubrir e indexar todas las páginas del creador de páginas wiki de RSS de manera inteligente.
              </p>
              
              <div class="stats-grid">
                <div class="stat-card">
                  <span class="stat-label">Total de Páginas</span>
                  <span class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
                </div>
                <div class="stat-card">
                  <span class="stat-label">Tipo de Sitemap</span>
                  <span class="stat-value" style="font-size: 1.35rem; margin-top: 0.5rem; color: #a5b4fc;">Índice Estándar (0.9)</span>
                </div>
                <div class="stat-card">
                  <span class="stat-label">Frecuencia Predominante</span>
                  <span class="stat-value" style="font-size: 1.35rem; margin-top: 0.5rem; color: #10b981;">Semanal (Weekly)</span>
                </div>
              </div>
            </div>
          </header>

          <div class="controls-bar">
            <div class="search-wrapper">
              <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input type="text" id="searchInput" placeholder="Filtrar URLs por nombre..." />
            </div>
            <a href="https://muhaddil.github.io/RSSWikiPageCreator/" class="back-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Volver al Inicio
            </a>
          </div>

          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th class="col-idx">#</th>
                  <th onclick="sortTable(1, 'string')">Dirección URL</th>
                  <th onclick="sortTable(2, 'string')" style="width: 180px;">Frecuencia</th>
                  <th onclick="sortTable(3, 'number')" style="width: 130px;">Prioridad</th>
                  <th onclick="sortTable(4, 'string')" style="width: 180px;">Última Modif.</th>
                </tr>
              </thead>
              <tbody id="tableBody">
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td class="col-idx"><xsl:value-of select="position()"/></td>
                    <td class="col-url">
                      <a href="{sitemap:loc}" target="_blank">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td class="col-freq">
                      <span class="badge badge-freq">
                        <xsl:value-of select="sitemap:changefreq"/>
                      </span>
                    </td>
                    <td class="col-priority">
                      <xsl:variable name="p" select="sitemap:priority"/>
                      <xsl:choose>
                        <xsl:when test="$p = '1.0'">
                          <span class="badge badge-priority critical"><xsl:value-of select="$p"/></span>
                        </xsl:when>
                        <xsl:when test="$p = '0.9' or $p = '0.8'">
                          <span class="badge badge-priority high"><xsl:value-of select="$p"/></span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="badge badge-priority"><xsl:value-of select="$p"/></span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td class="col-date">
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>

            <div id="emptyState" class="empty-state">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <p>No se encontraron páginas que coincidan con la búsqueda.</p>
            </div>
          </div>

          <footer>
            Creado para <a href="https://github.com/Muhaddil/RSSWikiPageCreator" style="color: var(--text-secondary); text-decoration: none; font-weight: 500;" target="_blank">RSSWikiPageCreator</a>
          </footer>
        </div>

        <script>
          <![CDATA[
          document.getElementById('searchInput').addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase().trim();
            const rows = document.querySelectorAll('#tableBody tr');
            let visibleCount = 0;
            
            rows.forEach(row => {
              const urlText = row.querySelector('.col-url a').textContent.toLowerCase();
              if (urlText.includes(query)) {
                row.style.display = '';
                visibleCount++;
              } else {
                row.style.display = 'none';
              }
            });

            const emptyState = document.getElementById('emptyState');
            if (visibleCount === 0) {
              emptyState.style.display = 'block';
            } else {
              emptyState.style.display = 'none';
            }
          });

          let currentSortCol = -1;
          let currentSortDir = 'asc';

          function sortTable(colIndex, type) {
            const table = document.querySelector('table');
            const tbody = document.getElementById('tableBody');
            const rows = Array.from(tbody.querySelectorAll('tr'));
            const headers = table.querySelectorAll('th');
            
            if (currentSortCol === colIndex) {
              currentSortDir = currentSortDir === 'asc' ? 'desc' : 'asc';
            } else {
              currentSortCol = colIndex;
              currentSortDir = 'asc';
            }
            
            headers.forEach((h, idx) => {
              h.classList.remove('sort-asc', 'sort-desc');
              if (idx === colIndex) {
                h.classList.add(currentSortDir === 'asc' ? 'sort-asc' : 'sort-desc');
              }
            });
            
            rows.sort((a, b) => {
              let valA = a.children[colIndex].textContent.trim();
              let valB = b.children[colIndex].textContent.trim();
              
              if (type === 'number') {
                return currentSortDir === 'asc' 
                  ? parseFloat(valA) - parseFloat(valB) 
                  : parseFloat(valB) - parseFloat(valA);
              }
              
              return currentSortDir === 'asc'
                ? valA.localeCompare(valB, 'es', { sensitivity: 'base' })
                : valB.localeCompare(valA, 'es', { sensitivity: 'base' });
            });
            
            rows.forEach(row => tbody.appendChild(row));
          }
          ]]>
        </script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
