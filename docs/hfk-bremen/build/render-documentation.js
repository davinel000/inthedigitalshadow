const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

function getBundledModule(name) {
  const candidates = [];
  const execDir = path.dirname(process.execPath);
  candidates.push(path.resolve(execDir, '..', 'node_modules', name));
  candidates.push(path.resolve(execDir, '..', '..', 'node_modules', name));
  if (process.env.CODEX_NODE_MODULES) {
    candidates.unshift(path.resolve(process.env.CODEX_NODE_MODULES, name));
  }
  for (const candidate of candidates) {
    try {
      return require(candidate);
    } catch (_error) {
      // Try the next bundled location.
    }
  }
  return require(name);
}

const { marked } = getBundledModule('marked');
const playwright = getBundledModule('playwright');
const { PDFDocument, StandardFonts, rgb } = getBundledModule('pdf-lib');

const ROOT = path.resolve(__dirname, '..');
const TEMPLATE_PATH = path.join(__dirname, 'templates', 'documentation-template.html');
const CSS_PATH = path.join(__dirname, 'templates', 'documentation.css');
const OUTPUT_DIR = path.join(ROOT, 'output');
const SOURCE_PATH = path.join(ROOT, 'extended-documentation.md');
const BROWSER_CANDIDATES = [
  process.env.HFK_DOCUMENTATION_BROWSER,
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
].filter(Boolean);

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function parseScalar(value) {
  const trimmed = value.trim();
  if (!trimmed) return '';
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) return Number(trimmed);
  return trimmed;
}

function parseSimpleYaml(yamlText) {
  const metadata = {};
  for (const rawLine of yamlText.replace(/\r/g, '').split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1);
    metadata[key] = parseScalar(value);
  }
  return metadata;
}

function splitFrontMatter(content) {
  const normalized = content.replace(/^\uFEFF/, '');
  const match = normalized.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { metadata: {}, body: normalized };
  }
  return {
    metadata: parseSimpleYaml(match[1]),
    body: match[2],
  };
}

function isWebUrl(value) {
  return typeof value === 'string' && /^https?:\/\//i.test(value);
}

function pathToFileUrl(filePath) {
  return pathToFileURL(path.resolve(filePath)).href;
}

function resolveAssetPath(baseDir, value) {
  if (!value) return '';
  if (isWebUrl(value)) return value;
  return path.resolve(baseDir, value);
}

function mimeTypeForPath(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg';
  if (ext === '.png') return 'image/png';
  if (ext === '.webp') return 'image/webp';
  if (ext === '.gif') return 'image/gif';
  if (ext === '.svg') return 'image/svg+xml';
  return 'application/octet-stream';
}

function assetUrl(filePath) {
  if (isWebUrl(filePath)) return filePath;
  const absolutePath = path.resolve(filePath);
  const data = fs.readFileSync(absolutePath);
  return `data:${mimeTypeForPath(absolutePath)};base64,${data.toString('base64')}`;
}

function findBrowserExecutable() {
  for (const candidate of BROWSER_CANDIDATES) {
    if (candidate && fs.existsSync(candidate)) {
      return candidate;
    }
  }
  return null;
}

function applyTemplate(template, replacements) {
  let html = template;
  for (const [key, value] of Object.entries(replacements)) {
    html = html.replaceAll(`{{${key}}}`, value);
  }
  return html;
}

function metadataRows(metadata) {
  const rows = [
    ['Title', metadata.title],
    ['Category', metadata.category || 'Master Thesis'],
    ['Author', metadata.author],
    ['Program', metadata.program],
    ['Year', metadata.year],
    ['Supervisors', metadata.supervisors],
  ].filter(([, value]) => value !== undefined && value !== '');

  return rows.map(([label, value]) => `          <tr><th>${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join('\n');
}

function markdownToHtml(markdown, sourceDir) {
  const figureMap = defaultFigures();
  const withFigures = markdown
    .replace(/\{\{FIGURE:([a-zA-Z0-9_-]+)\}\}/g, (_match, id) => renderFigure(figureMap.get(id)))
    .replace(/\{\{PAGEBREAK\}\}/g, '<div class="page-break"></div>');
  return inlineLocalImages(marked.parse(withFigures), sourceDir);
}

function inlineLocalImages(html, sourceDir) {
  return html
    .replace(/<p><img src="([^"]+)" alt="([^"]*)"><\/p>/g, (_match, src, alt) => {
      const imageUrl = resolveImageUrl(sourceDir, src);
      const caption = alt ? `<figcaption>${alt}</figcaption>` : '';
      return `<figure class="body-figure"><img src="${imageUrl}" alt="${alt}">${caption}</figure>`;
    })
    .replace(/<img src="([^"]+)" alt="([^"]*)">/g, (_match, src, alt) => {
      return `<img src="${resolveImageUrl(sourceDir, src)}" alt="${alt}">`;
    });
}

function resolveImageUrl(sourceDir, src) {
  if (!src || src.startsWith('data:') || isWebUrl(src)) {
    return src;
  }
  return assetUrl(resolveAssetPath(sourceDir, src));
}

function defaultFigures() {
  const figures = [
    {
      id: 'installation-key',
      path: '../assets/photos/selected/1_ids_jimi_liu.jpg',
      caption: 'Installation view of in the digital shadow during the final presentation. Photo: Jimi Liu.',
      alt: 'Installation view with red light and projection cube',
    },
    {
      id: 'umbra-source',
      path: '../assets/thesis_figures/figure_2_jimiliu.jpg',
      caption: 'umbra: In the Digital Shadow, the audiovisual performance that provides the source project for the debrief. Photo: Jimi Liu.',
      alt: 'Projection cube from umbra performance',
    },
    {
      id: 'collect',
      path: '../assets/thesis_figures/figure_3_collect.jpg',
      caption: 'Collect: accumulated project mass across financial, communicative, digital, material, and shared-documentation layers.',
      alt: 'Collect diagram',
    },
    {
      id: 'allocate',
      path: '../assets/thesis_figures/figure_4_allocate.jpg',
      caption: 'Allocate: schedule, budget rhythm, event markers, and occupied-time traces across the production period.',
      alt: 'Allocate diagram',
    },
    {
      id: 'red-marks',
      path: '../assets/thesis_figures/figure_5_red_marks.jpg',
      caption: 'Red Marks: self-tracking marks used during the densest production period.',
      alt: 'Red marks documentation',
    },
    {
      id: 'delegate',
      path: '../assets/thesis_figures/figure_6_delegate_request_fixed.jpg',
      caption: 'Delegate: comparison of human-directed and AI-directed request types in the reduced public dataset.',
      alt: 'Delegate request diagram',
    },
    {
      id: 'overload',
      path: '../assets/thesis_figures/figure_9_overload_phase_comparison.jpg',
      caption: 'Overload: comparison of reconstructed project phases and aligned physiological traces.',
      alt: 'Overload phase comparison diagram',
    },
    {
      id: 'collection-chamber',
      path: '../assets/photos/selected/2_ids_slava_romanov.JPG',
      caption: 'Collection Chamber with recalled point-cloud traces. Photo: Viacheslav (Slava) Romanov.',
      alt: 'Collection chamber with point cloud traces',
    },
    {
      id: 'allocate-station',
      path: '../assets/photos/selected/3_ids_slava_romanov.JPG',
      caption: 'Red-line interaction at the Allocate Station. Photo: Viacheslav (Slava) Romanov.',
      alt: 'Hand drawing red marks at the Allocate Station',
    },
    {
      id: 'perforated-card',
      path: '../assets/photos/selected/4_ids_slava_romanov.JPG',
      caption: 'Perforated card used as an in-space textual label: ENTER AND BECOME A TRACE. Photo: Viacheslav (Slava) Romanov.',
      alt: 'Perforated card reading Enter and become a trace',
    },
    {
      id: 'flush',
      path: '../assets/photos/selected/5_ids_slava_romanov.JPG',
      caption: 'Flush state: pixelated noise and slot-clearing behavior on the cube. Photo: Viacheslav (Slava) Romanov.',
      alt: 'Pixelated noise on the cube during flush state',
    },
    {
      id: 'presentation',
      path: '../assets/photos/jimi_for_thesis/ids_jimi_liu (6).jpg',
      caption: 'Final colloquium presentation, 2 April 2026. Photo: Jimi Liu.',
      alt: 'Final colloquium presentation with visitors',
    },
  ];
  return new Map(figures.map((figure) => [figure.id, figure]));
}

function renderFigure(figure) {
  if (!figure) return '';
  const resolvedPath = resolveAssetPath(ROOT, figure.path);
  const imageUrl = assetUrl(resolvedPath);
  return [
    '<figure class="body-figure">',
    `  <img src="${imageUrl}" alt="${escapeHtml(figure.alt || figure.caption || '')}">`,
    `  <figcaption>${escapeHtml(figure.caption || '')}</figcaption>`,
    '</figure>',
  ].join('\n');
}

async function stampHeaders(pdfPath, metadata) {
  const bytes = fs.readFileSync(pdfPath);
  const pdfDoc = await PDFDocument.load(bytes);
  const pages = pdfDoc.getPages();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const gray = rgb(0.42, 0.42, 0.42);
  const darkGray = rgb(0.28, 0.28, 0.28);
  const runningTitle = `${metadata.title || 'in the digital shadow: An Embodied Debrief'} - ${metadata.subtitle || 'Final Documentation'}`;
  const author = metadata.author || 'Viacheslav (Slava) Romanov';

  for (let index = 1; index < pages.length; index += 1) {
    const page = pages[index];
    const { width, height } = page.getSize();
    const leftX = 48;
    const rightX = width - 48;
    const topY = height - 29;
    const pageLabel = String(index + 1);
    const pageWidth = font.widthOfTextAtSize(pageLabel, 8);
    const titleWidth = font.widthOfTextAtSize(runningTitle, 8);

    page.drawText(author, {
      x: leftX,
      y: topY,
      size: 8,
      font: fontBold,
      color: darkGray,
    });
    page.drawText(runningTitle, {
      x: rightX - pageWidth - 14 - titleWidth,
      y: topY,
      size: 8,
      font,
      color: gray,
    });
    page.drawText(pageLabel, {
      x: rightX - pageWidth,
      y: topY,
      size: 8,
      font,
      color: gray,
    });
    page.drawLine({
      start: { x: leftX, y: topY - 7 },
      end: { x: rightX, y: topY - 7 },
      thickness: 0.55,
      color: rgb(0.82, 0.82, 0.82),
    });
  }

  fs.writeFileSync(pdfPath, await pdfDoc.save());
}

async function main() {
  const sourcePath = process.argv[2] ? path.resolve(process.cwd(), process.argv[2]) : SOURCE_PATH;
  const sourceDir = path.dirname(sourcePath);
  const source = fs.readFileSync(sourcePath, 'utf8');
  const { metadata, body } = splitFrontMatter(source);
  const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
  const css = fs.readFileSync(CSS_PATH, 'utf8');

  const coverImage = metadata.coverImage || '../assets/photos/selected/1_ids_jimi_liu.jpg';
  const coverPath = resolveAssetPath(sourceDir, coverImage);
  const coverImageUrl = assetUrl(coverPath);

  const html = applyTemplate(template, {
    STYLE: css,
    TITLE: metadata.coverTitle || escapeHtml(metadata.title || 'in the digital shadow: An Embodied Debrief'),
    DOCUMENT_LABEL: escapeHtml(metadata.subtitle || 'Final Documentation'),
    COVER_IMAGE_URL: coverImageUrl,
    COVER_FIT: escapeHtml(metadata.coverFit || 'cover'),
    COVER_POSITION: escapeHtml(metadata.coverPosition || 'center center'),
    COVER_CREDIT: escapeHtml(metadata.coverCredit || 'Photo: Jimi Liu'),
    METADATA_ROWS: metadataRows(metadata),
    BODY_HTML: markdownToHtml(body, sourceDir),
  });

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const htmlOutputPath = path.join(OUTPUT_DIR, 'extended-documentation.html');
  const pdfOutputPath = path.join(OUTPUT_DIR, 'extended-documentation.pdf');
  fs.writeFileSync(htmlOutputPath, html, 'utf8');

  const executablePath = findBrowserExecutable();
  const browser = await playwright.chromium.launch({
    headless: true,
    executablePath: executablePath || undefined,
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'load' });
    await page.pdf({
      path: pdfOutputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0mm',
        right: '0mm',
        bottom: '0mm',
        left: '0mm',
      },
    });
    await page.close();
  } finally {
    await browser.close();
  }

  await stampHeaders(pdfOutputPath, metadata);
  console.log(`HTML: ${htmlOutputPath}`);
  console.log(`PDF:  ${pdfOutputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
