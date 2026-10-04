// ═══════════════════════════════════════════════════════════
//   QR Code Maker — Cloudflare Worker + Telegram Bot
//   Owner: YOUR_NAME
// ═══════════════════════════════════════════════════════════

// ⚠️ توکن ربات تلگرام — از @BotFather بگیر
const BOT_TOKEN = "PASTE_YOUR_BOT_TOKEN_HERE";

// ✏️ اسم صاحب پروژه
const OWNER_NAME = "envillad";

// 📅 سال جاری
const YEAR = new Date().getFullYear();

// 🌐 آدرس API تلگرام
const TG_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

// ═══════════════════════════════════════════════════════════
//   TEMPLATES — ۱۰ قالب رنگی
// ═══════════════════════════════════════════════════════════
const TEMPLATES = [
  { id: 0,  name: 'کلاسیک',   dark: '000000', light: 'ffffff', btn: '#334155' },
  { id: 1,  name: 'آبی',      dark: '1e40af', light: 'ffffff', btn: '#2563eb' },
  { id: 2,  name: 'سبز',      dark: '166534', light: 'f0fdf4', btn: '#16a34a' },
  { id: 3,  name: 'قرمز',     dark: 'b91c1c', light: 'fef2f2', btn: '#dc2626' },
  { id: 4,  name: 'بنفش',     dark: '6b21a8', light: 'faf5ff', btn: '#9333ea' },
  { id: 5,  name: 'نارنجی',   dark: 'c2410c', light: 'fff7ed', btn: '#ea580c' },
  { id: 6,  name: 'تاریک',    dark: 'ffffff', light: '111827', btn: '#475569' },
  { id: 7,  name: 'فیروزه‌ای', dark: '0f766e', light: 'f0fdfa', btn: '#0d9488' },
  { id: 8,  name: 'صورتی',    dark: 'be185d', light: 'fdf2f8', btn: '#db2777' },
  { id: 9,  name: 'طلایی',    dark: 'b45309', light: 'fffbeb', btn: '#d97706' }
];

// ═══════════════════════════════════════════════════════════
//   MAIN HANDLER
// ═══════════════════════════════════════════════════════════
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const method = request.method;

    // ── Webhook تلگرام ──────────────────────────────────
    if (method === 'POST') {
      try {
        const update = await request.json();
        if (update.message || update.callback_query) {
          await handleTelegramUpdate(update);
          return new Response('ok');
        }
      } catch (_) {}
    }

    // ── تنظیم Webhook ───────────────────────────────────
    if (url.pathname === '/setup') {
      const workerUrl = `${url.protocol}//${url.host}`;
      const r = await fetch(`${TG_API}/setWebhook?url=${workerUrl}/webhook`);
      const data = await r.json();
      return json({ ok: data.ok, description: data.description, webhook: `${workerUrl}/webhook` });
    }

    // ── بررسی وضعیت Webhook ─────────────────────────────
    if (url.pathname === '/status') {
      const r = await fetch(`${TG_API}/getWebhookInfo`);
      const data = await r.json();
      return json(data);
    }

    // ── حذف Webhook ─────────────────────────────────────
    if (url.pathname === '/unset') {
      const r = await fetch(`${TG_API}/deleteWebhook`);
      return json(await r.json());
    }

    // ── API QR (برای استفاده‌ی خارجی) ───────────────────
    if (url.pathname === '/api/qr') {
      const data = url.searchParams.get('data') || 'https://t.me/';
      const t = parseInt(url.searchParams.get('template') || '0');
      const tpl = TEMPLATES[t] || TEMPLATES[0];
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=512x512&color=${tpl.dark}&bgcolor=${tpl.light}&data=${encodeURIComponent(data)}`;
      return Response.redirect(qrUrl, 302);
    }

    // ── صفحه‌ی وب اصلی ───────────────────────────────────
    if (method === 'GET' && (url.pathname === '/' || url.pathname === '')) {
      return new Response(renderHTML(), {
        headers: {
          'content-type': 'text/html; charset=UTF-8',
          'cache-control': 'public, max-age=3600',
          'x-project-owner': OWNER_NAME
        }
      });
    }

    return new Response('Not Found', { status: 404 });
  }
};

// ═══════════════════════════════════════════════════════════
//   TELEGRAM BOT LOGIC
// ═══════════════════════════════════════════════════════════
async function handleTelegramUpdate(update) {
  // Callback query (دکمه‌های شیشه‌ای)
  if (update.callback_query) {
    const cq = update.callback_query;
    const chatId = cq.message.chat.id;
    const data = cq.data || '';

    if (data.startsWith('tpl:')) {
      const tplId = parseInt(data.split(':')[1]);
      const tpl = TEMPLATES[tplId];
      // ذخیره‌ی قالب انتخابی در متن پیام قبلی
      await answerCallback(cq.id, `قالب «${tpl.name}» انتخاب شد ✅`);
      await sendMessage(chatId, `🎨 قالب فعلی: <b>${tpl.name}</b>\n\nحالا متن یا لینک بفرست تا QR بسازم.`);
    }
    return;
  }

  const msg = update.message;
  const chatId = msg.chat.id;
  const text = (msg.text || '').trim();
  const firstName = msg.from?.first_name || 'دوست';

  // /start
  if (text === '/start') {
    await sendMessage(chatId,
      `👋 سلام <b>${escapeHtml(firstName)}</b>!\n\n` +
      `من ربات <b>QR Code Maker</b> هستم.\n` +
      `پروژه‌ی <b>${escapeHtml(OWNER_NAME)}</b>\n\n` +
      `📌 <b>دستورات:</b>\n` +
      `/qr متن یا لینک — ساخت QR\n` +
      `/template — انتخاب قالب رنگی\n` +
      `/help — راهنما\n` +
      `/about — درباره\n\n` +
      `یا فقط یک متن/لینک بفرست تا QR بسازم.`
    );
    return;
  }

  // /help
  if (text === '/help') {
    await sendMessage(chatId,
      `📖 <b>راهنما</b>\n\n` +
      `۱. هر متن یا لینک بفرست → QR ساخته می‌شود\n` +
      `۲. با /template قالب رنگی را انتخاب کن\n` +
      `۳. ۱۰ قالب رنگی موجود است\n\n` +
      `مثال:\n<code>https://t.me/</code>\n` +
      `یا\n<code>/qr سلام دنیا</code>`
    );
    return;
  }

  // /about
  if (text === '/about') {
    await sendMessage(chatId,
      `ℹ️ <b>درباره</b>\n\n` +
      `🤖 ربات QR Code Maker\n` +
      `👤 صاحب پروژه: <b>${escapeHtml(OWNER_NAME)}</b>\n` +
      `🛠️ ساخته‌شده با Cloudflare Workers\n` +
      `📅 ${YEAR}`
    );
    return;
  }

  // /template
  if (text === '/template') {
    const buttons = TEMPLATES.map(t => ([{
      text: t.name,
      callback_data: `tpl:${t.id}`
    }]));
    await sendMessageWithKeyboard(chatId, '🎨 یک قالب انتخاب کن:', buttons);
    return;
  }

  // /qr or plain text
  let content = text;
  if (text.startsWith('/qr')) {
    content = text.slice(3).trim();
  }
  if (!content) {
    await sendMessage(chatId, '⚠️ لطفاً یک متن یا لینک بفرست.\nمثال: <code>https://t.me/</code>');
    return;
  }

  // ساخت QR و ارسال
  try {
    const tpl = TEMPLATES[0]; // قالب پیش‌فرض
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=512x512&color=${tpl.dark}&bgcolor=${tpl.light}&data=${encodeURIComponent(content)}`;
    await sendPhoto(chatId, qrUrl, `✅ QR ساخته شد\n\n📝 محتوا: <code>${escapeHtml(content.slice(0, 100))}</code>`);
  } catch (e) {
    await sendMessage(chatId, `❌ خطا: ${escapeHtml(e.message)}`);
  }
}

// ═══════════════════════════════════════════════════════════
//   TELEGRAM HELPERS
// ═══════════════════════════════════════════════════════════
async function sendMessage(chatId, text) {
  return fetch(`${TG_API}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML', disable_web_page_preview: true })
  });
}

async function sendMessageWithKeyboard(chatId, text, keyboard) {
  return fetch(`${TG_API}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId, text, parse_mode: 'HTML',
      reply_markup: { inline_keyboard: keyboard }
    })
  });
}

async function sendPhoto(chatId, photoUrl, caption) {
  return fetch(`${TG_API}/sendPhoto`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, photo: photoUrl, caption, parse_mode: 'HTML' })
  });
}

async function answerCallback(callbackId, text) {
  return fetch(`${TG_API}/answerCallbackQuery`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ callback_query_id: callbackId, text, show_alert: false })
  });
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function json(obj) {
  return new Response(JSON.stringify(obj, null, 2), {
    headers: { 'content-type': 'application/json; charset=UTF-8' }
  });
}

// ═══════════════════════════════════════════════════════════
//   WEB UI
// ═══════════════════════════════════════════════════════════
function renderHTML() {
  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>QR Code Maker — ${OWNER_NAME}</title>
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
  #refresh { padding: 12px 22px; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; color: #fff;
    background: linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6); background-size: 200% 200%;
    box-shadow: 0 4px 14px rgba(59,130,246,.45); transition: all .25s ease; }
  #refresh:hover { background-position: 100% 0; transform: translateY(-2px); }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; max-width: 1100px; margin: 0 auto; }
  .tile { background: #1e293b; border-radius: 14px; padding: 16px; text-align: center; box-shadow: 0 6px 18px rgba(0,0,0,0.4); transition: transform .15s; }
  .tile:hover { transform: translateY(-4px); }
  .tile h3 { font-size: 14px; color: #cbd5e1; margin: 10px 0 6px; }
  .tile canvas { border-radius: 10px; max-width: 100%; height: auto; background: #fff; }
  .btn { display: inline-block; margin-top: 10px; font-size: 12px; font-weight: bold; padding: 8px 14px; border-radius: 8px;
    cursor: pointer; border: none; color: #fff; transition: all .2s ease; box-shadow: 0 3px 10px rgba(0,0,0,.35); }
  .btn:hover { transform: translateY(-2px); filter: brightness(1.15); }
  .tg { text-align: center; margin: 24px 0; }
  .tg a { display: inline-block; padding: 12px 24px; background: #229ED9; color: #fff; text-decoration: none;
    border-radius: 10px; font-weight: bold; box-shadow: 0 4px 14px rgba(34,158,217,.45); transition: all .2s; }
  .tg a:hover { transform: translateY(-2px); filter: brightness(1.1); }
  footer { text-align: center; margin-top: 40px; color: #64748b; font-size: 13px; }
  footer strong { color: #a78bfa; }
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
  <div class="tg">
    <a href="https://t.me/YOUR_BOT_USERNAME" target="_blank">🤖 امتحان ربات تلگرام</a>
  </div>
  <footer>© ${YEAR} — <strong>${OWNER_NAME}</strong> · Built with Cloudflare Workers</footer>

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
      try { await QRCode.toCanvas(canvas, text, t); }
      catch (e) { title.textContent = t.name + ' — خطا'; }
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
}
