// ============================================
//   QR Code Maker — Cloudflare Worker
//   Owner: (نام خودت را اینجا بگذار)
// ============================================
const OWNER_NAME = "نام صاحب پروژه";   // ← این خط را عوض کن
const PROJECT_NAME = "QR Code Maker";
const YEAR = new Date().getFullYear();

export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${PROJECT_NAME} — ${OWNER_NAME}</title>
<meta name="author" content="${OWNER_NAME}">
<meta name="description" content="ساخت QR Code با ۱۰ قالب رنگی — پروژه ${OWNER_NAME}">
<script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js"></script>
<style>
  * { box-sizing: border-box; }
  body { font-family: Tahoma, sans-serif; background: #0f172a; color: #e2e8f0; padding: 24px; margin: 0; }
  h1 { text-align: center; color: #38bdf8; margin-bottom: 8px; }
  .owner { text-align: center; color: #a78bfa; margin: 0 0 4px; font-weight: bold; }
  .sub { text-align: center; color: #94a3b8; margin-bottom: 24px; }

  .controls { max-width: 520px; margin: 0 auto 24px; display: flex; gap: 10px; }
  input { flex: 1; padding: 12px; border-radius: 8px; border: 1px solid #334155; background: #0f172a; color: #e2e8f0; font-size: 16px; }
  input:focus { outline: none; border-color: #38bdf8; box-shadow: 0 0 0 3px rgba(56,189,248,.25); }

  #refresh {
    padding: 12px 22px; border: none; border-radius: 8px; cursor: pointer;
    font-weight: bold; color: #fff; font-size: 15px;
    background: linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6);
    background-size: 200% 200%;
    box-shadow: 0 4px 14px rgba(59,130,246,.45);
    transition: all .25s ease;
  }
  #refresh:hover { background-position: 100% 0; transform: translateY(-2px); box-shadow: 0 6px 18px rgba(139,92,246,.55); }
  #refresh:active { transform: translateY(0); }

  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; max-width: 1100px; margin: 0 auto; }
  .tile { background: #1e293b; border-radius: 14px; padding: 16px; text-align: center; box-shadow: 0 6px 18px rgba(0,0,0,0.4); transition: transform .15s; }
  .tile:hover { transform: translateY(-4px); }
  .tile h3 { font-size: 14px; color: #cbd5e1; margin: 10px 0 6px; }
  .tile canvas { border-radius: 10px; max-width: 100%; height: auto; background: #fff; }

  .btn {
    display: inline-block; margin-top: 10px; font-size: 12px; font-weight: bold;
    padding: 8px 14px; border-radius: 8px; cursor: pointer; border: none;
    color: #fff; transition: all .2s ease;
    box-shadow: 0 3px 10px rgba(0,0,0,.35);
  }
  .btn:hover { transform: translateY(-2px); filter: brightness(1.15); box-shadow: 0 6px 16px rgba(0,0,0,.45); }
  .btn:active { transform: translateY(0); }

  footer { text-align: center; margin-top: 40px; color: #64748b; font-size: 13px; line-height: 1.9; }
  footer strong { color: #a78bfa; }
  footer a { color: #38bdf8; text-decoration: none; }
</style>
</head>
<body>
  <h1>گالری ۱۰ قالب QR Code</h1>
  <p class="owner">پروژه‌ی ${OWNER_NAME}</p>
  <div class="sub">محتوای دلخواهت را وارد کن؛ همه‌ی قالب‌ها همزمان به‌روز می‌شوند.</div>

  <div class="controls">
    <input id="text" value="https://t.me/" placeholder="متن یا لینک...">
    <button id="refresh">به‌روزرسانی</button>
  </div>

  <div class="grid" id="grid"></div>

  <footer>
    © ${YEAR} — <strong>${OWNER_NAME}</strong><br>
    ساخته‌شده با Cloudflare Workers + qrcode.js
  </footer>

<script>
  const templates = [
    { name: '۱. کلاسیک',   btn: '#334155', width: 256, margin: 2, errorCorrectionLevel: 'M', color: { dark: '#000000', light: '#ffffff' } },
    { name: '۲. آبی',      btn: '#2563eb', width: 256, margin: 2, errorCorrectionLevel: 'M', color: { dark: '#1e40af', light: '#ffffff' } },
    { name: '۳. سبز',      btn: '#16a34a', width: 256, margin: 2, errorCorrectionLevel: 'M', color: { dark: '#166534', light: '#f0fdf4' } },
    { name: '۴. قرمز',     btn: '#dc2626', width: 256, margin: 2, errorCorrectionLevel: 'M', color: { dark: '#b91c1c', light: '#fef2f2' } },
    { name: '۵. بنفش',     btn: '#9333ea', width: 256, margin: 2, errorCorrectionLevel: 'M', color: { dark: '#6b21a8', light: '#faf5ff' } },
    { name: '۶. نارنجی',   btn: '#ea580c', width: 256, margin: 2, errorCorrectionLevel: 'M', color: { dark: '#c2410c', light: '#fff7ed' } },
    { name: '۷. تاریک',    btn: '#475569', width: 256, margin: 2, errorCorrectionLevel: 'M', color: { dark: '#ffffff', light: '#111827' } },
    { name: '۸. فیروزه‌ای', btn: '#0d9488', width: 256, margin: 2, errorCorrectionLevel: 'M', color: { dark: '#0f766e', light: '#f0fdfa' } },
    { name: '۹. صورتی',    btn: '#db2777', width: 256, margin: 2, errorCorrectionLevel: 'M', color: { dark: '#be185d', light: '#fdf2f8' } },
    { name: '۱۰. طلایی',   btn: '#d97706', width: 256, margin: 2, errorCorrectionLevel: 'M', color: { dark: '#b45309', light: '#fffbeb' } }
  ];

  const grid = document.getElementById('grid');

  async function render() {
    const text = document.getElementById('text').value.trim() || 'https://t.me/';
    grid.innerHTML = '';
    for (const t of templates) {
      const tile = document.createElement('div');
      tile.className = 'tile';
      const canvas = document.createElement('canvas');
      const title = document.createElement('h3');
      title.textContent = t.name;
      const dl = document.createElement('button');
      dl.className = 'btn';
      dl.textContent = 'دانلود PNG';
      dl.style.background = t.btn;
      tile.appendChild(canvas);
      tile.appendChild(title);
      tile.appendChild(dl);
      grid.appendChild(tile);
      try {
        await QRCode.toCanvas(canvas, text, t);
      } catch (e) {
        title.textContent = t.name + ' — خطا: ' + e.message;
      }
      dl.addEventListener('click', () => {
        const a = document.createElement('a');
        a.download = t.name.replace(/\\s+/g, '_') + '.png';
        a.href = canvas.toDataURL('image/png');
        a.click();
      });
    }
  }

  document.getElementById('refresh').addEventListener('click', render);
  document.getElementById('text').addEventListener('keydown', e => { if (e.key === 'Enter') render(); });
  render();
</script>
</body>
</html>`;
    return new Response(html, {
      headers: {
        'content-type': 'text/html; charset=UTF-8',
        'cache-control': 'public, max-age=3600',
        'x-project-owner': OWNER_NAME
      },
    });
  },
};