import { chromium } from 'playwright';
// Usage: node pdf-source/build-pdf.mjs <html> <pdf> <preview.png> (needs the playwright package)
const [,, src, out, png] = process.argv;
const b = await chromium.launch(); const p = await b.newPage();
await p.goto('file://' + src, { waitUntil: 'networkidle' });
await p.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true });
await p.setViewportSize({ width: 794, height: 1123 }); await p.screenshot({ path: png, fullPage: true });
await b.close();
