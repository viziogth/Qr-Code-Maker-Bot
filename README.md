<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>README — QR Code Maker (5 Languages)</title>
<style>
  * { box-sizing: border-box; }
  body {
    font-family: Tahoma, "Segoe UI", sans-serif;
    background: #0b1120; color: #e2e8f0;
    margin: 0; padding: 32px 16px; line-height: 1.9;
  }
  .wrap { max-width: 950px; margin: 0 auto; }
  h1 { color: #38bdf8; border-bottom: 2px solid #1e293b; padding-bottom: 12px; margin-bottom: 4px; }
  .owner { color: #a78bfa; font-weight: bold; margin: 0 0 20px; }
  h2 { color: #22d3ee; margin-top: 32px; border-right: 4px solid #22d3ee; padding-right: 10px; }
  h3 { color: #a78bfa; margin-top: 22px; }
  p, li { color: #cbd5e1; }
  a { color: #60a5fa; text-decoration: none; }
  a:hover { text-decoration: underline; }
  code {
    background: #1e293b; color: #fbbf24;
    padding: 2px 8px; border-radius: 6px;
    font-family: "Consolas", monospace; font-size: 14px;
    direction: ltr; display: inline-block;
  }
  pre {
    background: #0f172a; border: 1px solid #1e293b;
    border-radius: 10px; padding: 16px; overflow-x: auto;
    direction: ltr; text-align: left;
  }
  pre code { background: transparent; color: #e2e8f0; padding: 0; display: block; }

  .badge { display: inline-block; padding: 4px 12px; border-radius: 999px; font-size: 12px; font-weight: bold; margin-left: 6px; }
  .b-green  { background: #065f46; color: #6ee7b7; }
  .b-blue   { background: #1e3a8a; color: #93c5fd; }
  .b-purple { background: #4c1d95; color: #c4b5fd; }
  .b-orange { background: #7c2d12; color: #fdba74; }

  table { width: 100%; border-collapse: collapse; margin: 16px 0; background: #111c33; border-radius: 10px; overflow: hidden; }
  th, td { padding: 10px 14px; text-align: right; border-bottom: 1px solid #1e293b; }
  th { background: #1e293b; color: #38bdf8; }
  tr:last-child td { border-bottom: none; }
  .swatch { display: inline-block; width: 16px; height: 16px; border-radius: 4px; vertical-align: middle; margin-left: 6px; border: 1px solid #334155; }

  .step { background: #111c33; border-right: 4px solid #22d3ee; padding: 14px 18px; border-radius: 8px; margin: 10px 0; }
  .step strong { color: #22d3ee; }
  .note { background: #422006; border-right: 4px solid #f59e0b; padding: 12px 18px; border-radius: 8px; color: #fde68a; margin: 16px 0; }
  .success { background: #052e16; border-right: 4px solid #22c55e; padding: 12px 18px; border-radius: 8px; color: #86efac; margin: 16px 0; }

  .tabs { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin: 24px 0; }
  .tab {
    padding: 10px 20px; border-radius: 10px; cursor: pointer;
    border: 1px solid #334155; background: #111c33;
    color: #cbd5e1; font-weight: bold; font-size: 14px;
    transition: all .2s ease;
  }
  .tab:hover { border-color: #38bdf8; color: #38bdf8; }
  .tab.active {
    background: linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6);
    color: #fff; border-color: transparent;
    box-shadow: 0 4px 14px rgba(59,130,246,.45);
  }

  .lang { display: none; animation: fade .3s ease; }
  .lang.active { display: block; }
  @keyframes fade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }

  .lang[dir="ltr"] h2 { border-right: none; border-left: 4px solid #22d3ee; padding-right: 0; padding-left: 10px; }
  .lang[dir="ltr"] th, .lang[dir="ltr"] td { text-align: left; }
  .lang[dir="ltr"] .swatch { margin-left: 0; margin-right: 6px; }
  .lang[dir="ltr"] .step { border-right: none; border-left: 4px solid #22d3ee; }
  .lang[dir="ltr"] .note { border-right: none; border-left: 4px solid #f59e0b; }
  .lang[dir="ltr"] .success { border-right: none; border-left: 4px solid #22c55e; }

  footer { text-align: center; color: #64748b; margin-top: 60px; padding-top: 20px; border-top: 1px solid #1e293b; font-size: 13px; }
  footer strong { color: #a78bfa; }
</style>
</head>
<body>
<div class="wrap">

  <h1>📱 QR Code Maker</h1>
  <p class="owner">Project Owner: <strong data-owner>...</strong></p>
  <p>
    <span class="badge b-orange">Serverless</span>
    <span class="badge b-blue">Single File</span>
    <span class="badge b-purple">10 Colored Templates</span>
    <span class="badge b-green">Free</span>
  </p>

  <div class="tabs">
    <button class="tab active" data-lang="fa">🇮🇷 فارسی</button>
    <button class="tab" data-lang="en">🇬🇧 English</button>
    <button class="tab" data-lang="ar">🇸🇦 العربية</button>
    <button class="tab" data-lang="tr">🇹🇷 Türkçe</button>
    <button class="tab" data-lang="ru">🇷🇺 Русский</button>
  </div>

  <!-- ================= فارسی ================= -->
  <section class="lang active" id="lang-fa" dir="rtl">
    <h2>✨ ویژگی‌ها</h2>
    <ul>
      <li>🎨 ۱۰ قالب رنگی آماده (کلاسیک، آبی، سبز، قرمز، بنفش، نارنجی، تاریک، فیروزه‌ای، صورتی، طلایی)</li>
      <li>⚡ رندر لحظه‌ای همه‌ی قالب‌ها با تغییر متن</li>
      <li>💾 دانلود PNG برای هر قالب به‌صورت جداگانه</li>
      <li>🌈 دکمه‌های رنگی هم‌رنگ قالب مربوطه</li>
      <li>📱 رابط کاربری ریسپانسیو و RTL</li>
      <li>🚀 بدون سرور، دیتابیس یا بک‌اند</li>
      <li>🆓 رایگان تا ۱۰۰٫۰۰۰ درخواست در روز</li>
    </ul>

    <h2>🚀 نصب</h2>
    <div class="step"><strong>۱:</strong> وارد <a href="https://dash.cloudflare.com" target="_blank">dash.cloudflare.com</a> شو.</div>
    <div class="step"><strong>۲:</strong> برو به <code>Workers & Pages</code>.</div>
    <div class="step"><strong>۳:</strong> روی <code>Create Application</code> → <code>Create Worker</code> کلیک کن.</div>
    <div class="step"><strong>۴:</strong> یک نام دلخواه بده و Deploy کن.</div>
    <div class="step"><strong>۵:</strong> روی <code>Edit Code</code> بزن و محتوای <code>worker.js</code> را جای‌گذاری کن.</div>
    <div class="step"><strong>۶:</strong> <code>Save and Deploy</code> را بزن.</div>
    <div class="success">✅ تمام! آدرس Worker را باز کن.</div>

    <h2>🎨 قالب‌ها</h2>
    <table>
      <thead><tr><th>#</th><th>نام</th><th>ماژول</th><th>پس‌زمینه</th><th>دکمه</th></tr></thead>
      <tbody>
        <tr><td>۱</td><td>کلاسیک</td><td><code>#000</code></td><td><code>#fff</code></td><td><code>#334155</code><span class="swatch" style="background:#334155"></span></td></tr>
        <tr><td>۲</td><td>آبی</td><td><code>#1e40af</code></td><td><code>#fff</code></td><td><code>#2563eb</code><span class="swatch" style="background:#2563eb"></span></td></tr>
        <tr><td>۳</td><td>سبز</td><td><code>#166534</code></td><td><code>#f0fdf4</code></td><td><code>#16a34a</code><span class="swatch" style="background:#16a34a"></span></td></tr>
        <tr><td>۴</td><td>قرمز</td><td><code>#b91c1c</code></td><td><code>#fef2f2</code></td><td><code>#dc2626</code><span class="swatch" style="background:#dc2626"></span></td></tr>
        <tr><td>۵</td><td>بنفش</td><td><code>#6b21a8</code></td><td><code>#faf5ff</code></td><td><code>#9333ea</code><span class="swatch" style="background:#9333ea"></span></td></tr>
        <tr><td>۶</td><td>نارنجی</td><td><code>#c2410c</code></td><td><code>#fff7ed</code></td><td><code>#ea580c</code><span class="swatch" style="background:#ea580c"></span></td></tr>
        <tr><td>۷</td><td>تاریک</td><td><code>#fff</code></td><td><code>#111827</code></td><td><code>#475569</code><span class="swatch" style="background:#475569"></span></td></tr>
        <tr><td>۸</td><td>فیروزه‌ای</td><td><code>#0f766e</code></td><td><code>#f0fdfa</code></td><td><code>#0d9488</code><span class="swatch" style="background:#0d9488"></span></td></tr>
        <tr><td>۹</td><td>صورتی</td><td><code>#be185d</code></td><td><code>#fdf2f8</code></td><td><code>#db2777</code><span class="swatch" style="background:#db2777"></span></td></tr>
        <tr><td>۱۰</td><td>طلایی</td><td><code>#b45309</code></td><td><code>#fffbeb</code></td><td><code>#d97706</code><span class="swatch" style="background:#d97706"></span></td></tr>
      </tbody>
    </table>

    <h2>🛠 شخصی‌سازی</h2>
    <h3>افزودن قالب</h3>
    <pre><code>{
  name: '۱۱. قالب من',
  btn: '#7c3aed',
  width: 256, margin: 2,
  errorCorrectionLevel: 'M',
  color: { dark: '#7c3aed', light: '#f5f3ff' }
}</code></pre>
    <h3>تغییر اندازه</h3>
    <p><code>width: 512</code> برای کیفیت بالاتر.</p>
    <h3>سطح تصحیح خطا</h3>
    <p><code>L</code>, <code>M</code>, <code>Q</code>, <code>H</code> — بالاتر = مقاوم‌تر.</p>

    <h2>🔍 عیب‌یابی</h2>
    <ul>
      <li>QR نمایش نمی‌شود → اتصال اینترنت را چک کن (کتابخانه از CDN).</li>
      <li>دانلود کار نمی‌کند → مرورگر جدید امتحان کن.</li>
      <li>Rate Limit → پلن رایگان روزانه ۱۰۰ هزار درخواست.</li>
    </ul>

    <h2>📜 لایسنس</h2>
    <p>آزاد برای استفاده، تغییر و توزیع. کتابخانه‌ی qrcode.js تحت MIT.</p>
  </section>

  <!-- ================= English ================= -->
  <section class="lang" id="lang-en" dir="ltr">
    <h2>✨ Features</h2>
    <ul>
      <li>🎨 10 ready color templates (Classic, Blue, Green, Red, Purple, Orange, Dark, Teal, Pink, Gold)</li>
      <li>⚡ Instant re-render of all templates as you type</li>
      <li>💾 Individual PNG download per template</li>
      <li>🌈 Colored buttons matching each template</li>
      <li>📱 Responsive UI</li>
      <li>🚀 No server, database, or backend required</li>
      <li>🆓 Free up to 100,000 requests/day on Cloudflare Free plan</li>
    </ul>

    <h2>🚀 Installation</h2>
    <div class="step"><strong>Step 1:</strong> Log in to <a href="https://dash.cloudflare.com" target="_blank">dash.cloudflare.com</a>.</div>
    <div class="step"><strong>Step 2:</strong> Open <code>Workers &amp; Pages</code>.</div>
    <div class="step"><strong>Step 3:</strong> Click <code>Create Application</code> → <code>Create Worker</code>.</div>
    <div class="step"><strong>Step 4:</strong> Give it a name and Deploy.</div>
    <div class="step"><strong>Step 5:</strong> Click <code>Edit Code</code> and paste the contents of <code>worker.js</code>.</div>
    <div class="step"><strong>Step 6:</strong> Click <code>Save and Deploy</code>.</div>
    <div class="success">✅ Done! Open your Worker URL.</div>

    <h2>🎨 Templates</h2>
    <table>
      <thead><tr><th>#</th><th>Name</th><th>Module</th><th>Background</th><th>Button</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Classic</td><td><code>#000</code></td><td><code>#fff</code></td><td><code>#334155</code><span class="swatch" style="background:#334155"></span></td></tr>
        <tr><td>2</td><td>Blue</td><td><code>#1e40af</code></td><td><code>#fff</code></td><td><code>#2563eb</code><span class="swatch" style="background:#2563eb"></span></td></tr>
        <tr><td>3</td><td>Green</td><td><code>#166534</code></td><td><code>#f0fdf4</code></td><td><code>#16a34a</code><span class="swatch" style="background:#16a34a"></span></td></tr>
        <tr><td>4</td><td>Red</td><td><code>#b91c1c</code></td><td><code>#fef2f2</code></td><td><code>#dc2626</code><span class="swatch" style="background:#dc2626"></span></td></tr>
        <tr><td>5</td><td>Purple</td><td><code>#6b21a8</code></td><td><code>#faf5ff</code></td><td><code>#9333ea</code><span class="swatch" style="background:#9333ea"></span></td></tr>
        <tr><td>6</td><td>Orange</td><td><code>#c2410c</code></td><td><code>#fff7ed</code></td><td><code>#ea580c</code><span class="swatch" style="background:#ea580c"></span></td></tr>
        <tr><td>7</td><td>Dark</td><td><code>#fff</code></td><td><code>#111827</code></td><td><code>#475569</code><span class="swatch" style="background:#475569"></span></td></tr>
        <tr><td>8</td><td>Teal</td><td><code>#0f766e</code></td><td><code>#f0fdfa</code></td><td><code>#0d9488</code><span class="swatch" style="background:#0d9488"></span></td></tr>
        <tr><td>9</td><td>Pink</td><td><code>#be185d</code></td><td><code>#fdf2f8</code></td><td><code>#db2777</code><span class="swatch" style="background:#db2777"></span></td></tr>
        <tr><td>10</td><td>Gold</td><td><code>#b45309</code></td><td><code>#fffbeb</code></td><td><code>#d97706</code><span class="swatch" style="background:#d97706"></span></td></tr>
      </tbody>
    </table>

    <h2>🛠 Customization</h2>
    <h3>Add a template</h3>
    <pre><code>{
  name: '11. My Template',
  btn: '#7c3aed',
  width: 256, margin: 2,
  errorCorrectionLevel: 'M',
  color: { dark: '#7c3aed', light: '#f5f3ff' }
}</code></pre>
    <h3>Change size</h3>
    <p><code>width: 512</code> for higher resolution.</p>
    <h3>Error correction level</h3>
    <p><code>L</code>, <code>M</code>, <code>Q</code>, <code>H</code> — higher = more resilient.</p>

    <h2>🔍 Troubleshooting</h2>
    <ul>
      <li>QR not showing → check internet (library loads via CDN).</li>
      <li>Download not working → try a modern browser.</li>
      <li>Rate limit → Free plan gives 100k requests/day.</li>
    </ul>

    <h2>📜 License</h2>
    <p>Free to use, modify, and distribute. qrcode.js is MIT licensed.</p>
  </section>

  <!-- ================= العربية ================= -->
  <section class="lang" id="lang-ar" dir="rtl">
    <h2>✨ المميزات</h2>
    <ul>
      <li>🎨 ١٠ قوالب ملونة جاهزة (كلاسيكي، أزرق، أخضر، أحمر، بنفسجي، برتقالي، داكن، فيروزي، وردي، ذهبي)</li>
      <li>⚡ تحديث فوري لجميع القوالب عند تغيير النص</li>
      <li>💾 تحميل PNG لكل قالب على حدة</li>
      <li>🌈 أزرار ملونة بنفس لون القالب</li>
      <li>📱 واجهة متجاوبة تدعم RTL</li>
      <li>🚀 بدون سيرفر أو قاعدة بيانات</li>
      <li>🆓 مجاني حتى ١٠٠٫٠٠٠ طلب يوميًا</li>
    </ul>

    <h2>🚀 التثبيت</h2>
    <div class="step"><strong>١:</strong> سجّل الدخول إلى <a href="https://dash.cloudflare.com" target="_blank">dash.cloudflare.com</a>.</div>
    <div class="step"><strong>٢:</strong> انتقل إلى <code>Workers &amp; Pages</code>.</div>
    <div class="step"><strong>٣:</strong> اضغط <code>Create Application</code> ← <code>Create Worker</code>.</div>
    <div class="step"><strong>٤:</strong> اختر اسمًا وانشر (Deploy).</div>
    <div class="step"><strong>٥:</strong> اضغط <code>Edit Code</code> والصق محتوى <code>worker.js</code>.</div>
    <div class="step"><strong>٦:</strong> اضغط <code>Save and Deploy</code>.</div>
    <div class="success">✅ تم! افتح رابط الـ Worker.</div>

    <h2>🎨 القوالب</h2>
    <table>
      <thead><tr><th>#</th><th>الاسم</th><th>الوحدة</th><th>الخلفية</th><th>الزر</th></tr></thead>
      <tbody>
        <tr><td>١</td><td>كلاسيكي</td><td><code>#000</code></td><td><code>#fff</code></td><td><code>#334155</code><span class="swatch" style="background:#334155"></span></td></tr>
        <tr><td>٢</td><td>أزرق</td><td><code>#1e40af</code></td><td><code>#fff</code></td><td><code>#2563eb</code><span class="swatch" style="background:#2563eb"></span></td></tr>
        <tr><td>٣</td><td>أخضر</td><td><code>#166534</code></td><td><code>#f0fdf4</code></td><td><code>#16a34a</code><span class="swatch" style="background:#16a34a"></span></td></tr>
        <tr><td>٤</td><td>أحمر</td><td><code>#b91c1c</code></td><td><code>#fef2f2</code></td><td><code>#dc2626</code><span class="swatch" style="background:#dc2626"></span></td></tr>
        <tr><td>٥</td><td>بنفسجي</td><td><code>#6b21a8</code></td><td><code>#faf5ff</code></td><td><code>#9333ea</code><span class="swatch" style="background:#9333ea"></span></td></tr>
        <tr><td>٦</td><td>برتقالي</td><td><code>#c2410c</code></td><td><code>#fff7ed</code></td><td><code>#ea580c</code><span class="swatch" style="background:#ea580c"></span></td></tr>
        <tr><td>٧</td><td>داكن</td><td><code>#fff</code></td><td><code>#111827</code></td><td><code>#475569</code><span class="swatch" style="background:#475569"></span></td></tr>
        <tr><td>٨</td><td>فيروزي</td><td><code>#0f766e</code></td><td><code>#f0fdfa</code></td><td><code>#0d9488</code><span class="swatch" style="background:#0d9488"></span></td></tr>
        <tr><td>٩</td><td>وردي</td><td><code>#be185d</code></td><td><code>#fdf2f8</code></td><td><code>#db2777</code><span class="swatch" style="background:#db2777"></span></td></tr>
        <tr><td>١٠</td><td>ذهبي</td><td><code>#b45309</code></td><td><code>#fffbeb</code></td><td><code>#d97706</code><span class="swatch" style="background:#d97706"></span></td></tr>
      </tbody>
    </table>

    <h2>🛠 التخصيص</h2>
    <h3>إضافة قالب</h3>
    <pre><code>{
  name: '١١. قالبي',
  btn: '#7c3aed',
  width: 256, margin: 2,
  errorCorrectionLevel: 'M',
  color: { dark: '#7c3aed', light: '#f5f3ff' }
}</code></pre>
    <h3>تغيير الحجم</h3>
    <p><code>width: 512</code> لجودة أعلى.</p>
    <h3>مستوى تصحيح الخطأ</h3>
    <p><code>L</code>, <code>M</code>, <code>Q</code>, <code>H</code> — الأعلى أكثر مقاومة.</p>

    <h2>🔍 حل المشاكل</h2>
    <ul>
      <li>الـ QR لا يظهر → تحقق من الإنترنت (المكتبة من CDN).</li>
      <li>التحميل لا يعمل → استخدم متصفحًا حديثًا.</li>
      <li>حد الاستخدام → الخطة المجانية ١٠٠ ألف طلب يوميًا.</li>
    </ul>

    <h2>📜 الترخيص</h2>
    <p>حر للاستخدام والتعديل والتوزيع. مكتبة qrcode.js تحت رخصة MIT.</p>
  </section>

  <!-- ================= Türkçe ================= -->
  <section class="lang" id="lang-tr" dir="ltr">
    <h2>✨ Özellikler</h2>
    <ul>
      <li>🎨 10 hazır renkli şablon (Klasik, Mavi, Yeşil, Kırmızı, Mor, Turuncu, Koyu, Turkuaz, Pembe, Altın)</li>
      <li>⚡ Metin değiştiğinde tüm şablonlar anında yenilenir</li>
      <li>💾 Her şablon için ayrı PNG indirme</li>
      <li>🌈 Şablona uygun renkli butonlar</li>
      <li>📱 Duyarlı arayüz</li>
      <li>🚀 Sunucu, veritabanı veya backend gerekmez</li>
      <li>🆓 Cloudflare ücretsiz planında günde 100.000 istek</li>
    </ul>

    <h2>🚀 Kurulum</h2>
    <div class="step"><strong>1:</strong> <a href="https://dash.cloudflare.com" target="_blank">dash.cloudflare.com</a> adresine giriş yap.</div>
    <div class="step"><strong>2:</strong> <code>Workers &amp; Pages</code> bölümüne git.</div>
    <div class="step"><strong>3:</strong> <code>Create Application</code> → <code>Create Worker</code>'a tıkla.</div>
    <div class="step"><strong>4:</strong> Bir isim ver ve Deploy et.</div>
    <div class="step"><strong>5:</strong> <code>Edit Code</code>'a tıkla ve <code>worker.js</code> içeriğini yapıştır.</div>
    <div class="step"><strong>6:</strong> <code>Save and Deploy</code> butonuna bas.</div>
    <div class="success">✅ Tamam! Worker URL'sini aç.</div>

    <h2>🎨 Şablonlar</h2>
    <table>
      <thead><tr><th>#</th><th>Ad</th><th>Modül</th><th>Arka Plan</th><th>Buton</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Klasik</td><td><code>#000</code></td><td><code>#fff</code></td><td><code>#334155</code><span class="swatch" style="background:#334155"></span></td></tr>
        <tr><td>2</td><td>Mavi</td><td><code>#1e40af</code></td><td><code>#fff</code></td><td><code>#2563eb</code><span class="swatch" style="background:#2563eb"></span></td></tr>
        <tr><td>3</td><td>Yeşil</td><td><code>#166534</code></td><td><code>#f0fdf4</code></td><td><code>#16a34a</code><span class="swatch" style="background:#16a34a"></span></td></tr>
        <tr><td>4</td><td>Kırmızı</td><td><code>#b91c1c</code></td><td><code>#fef2f2</code></td><td><code>#dc2626</code><span class="swatch" style="background:#dc2626"></span></td></tr>
        <tr><td>5</td><td>Mor</td><td><code>#6b21a8</code></td><td><code>#faf5ff</code></td><td><code>#9333ea</code><span class="swatch" style="background:#9333ea"></span></td></tr>
        <tr><td>6</td><td>Turuncu</td><td><code>#c2410c</code></td><td><code>#fff7ed</code></td><td><code>#ea580c</code><span class="swatch" style="background:#ea580c"></span></td></tr>
        <tr><td>7</td><td>Koyu</td><td><code>#fff</code></td><td><code>#111827</code></td><td><code>#475569</code><span class="swatch" style="background:#475569"></span></td></tr>
        <tr><td>8</td><td>Turkuaz</td><td><code>#0f766e</code></td><td><code>#f0fdfa</code></td><td><code>#0d9488</code><span class="swatch" style="background:#0d9488"></span></td></tr>
        <tr><td>9</td><td>Pembe</td><td><code>#be185d</code></td><td><code>#fdf2f8</code></td><td><code>#db2777</code><span class="swatch" style="background:#db2777"></span></td></tr>
        <tr><td>10</td><td>Altın</td><td><code>#b45309</code></td><td><code>#fffbeb</code></td><td><code>#d97706</code><span class="swatch" style="background:#d97706"></span></td></tr>
      </tbody>
    </table>

    <h2>🛠 Özelleştirme</h2>
    <h3>Şablon ekle</h3>
    <pre><code>{
  name: '11. Şablonum',
  btn: '#7c3aed',
  width: 256, margin: 2,
  errorCorrectionLevel: 'M',
  color: { dark: '#7c3aed', light: '#f5f3ff' }
}</code></pre>
    <h3>Boyut değiştir</h3>
    <p>Daha yüksek çözünürlük için <code>width: 512</code>.</p>
    <h3>Hata düzeltme seviyesi</h3>
    <p><code>L</code>, <code>M</code>, <code>Q</code>, <code>H</code> — yüksek = daha dayanıklı.</p>

    <h2>🔍 Sorun Giderme</h2>
    <ul>
      <li>QR görünmüyor → internet bağlantısını kontrol et (kütüphane CDN'den).</li>
      <li>İndirme çalışmıyor → modern bir tarayıcı dene.</li>
      <li>İstek limiti → Ücretsiz plan günde 100 bin istek.</li>
    </ul>

    <h2>📜 Lisans</h2>
    <p>Kullanım, değiştirme ve dağıtım serbest. qrcode.js MIT lisanslıdır.</p>
  </section>

  <!-- ================= Русский ================= -->
  <section class="lang" id="lang-ru" dir="ltr">
    <h2>✨ Возможности</h2>
    <ul>
      <li>🎨 10 готовых цветных шаблонов (Классический, Синий, Зелёный, Красный, Фиолетовый, Оранжевый, Тёмный, Бирюзовый, Розовый, Золотой)</li>
      <li>⚡ Мгновенное обновление всех шаблонов при изменении текста</li>
      <li>💾 Скачивание PNG для каждого шаблона отдельно</li>
      <li>🌈 Кнопки в цвет каждого шаблона</li>
      <li>📱 Адаптивный интерфейс</li>
      <li>🚀 Без сервера, базы данных и бэкенда</li>
      <li>🆓 Бесплатно до 100 000 запросов в день на плане Cloudflare Free</li>
    </ul>

    <h2>🚀 Установка</h2>
    <div class="step"><strong>Шаг 1:</strong> Войдите на <a href="https://dash.cloudflare.com" target="_blank">dash.cloudflare.com</a>.</div>
    <div class="step"><strong>Шаг 2:</strong> Откройте <code>Workers &amp; Pages</code>.</div>
    <div class="step"><strong>Шаг 3:</strong> Нажмите <code>Create Application</code> → <code>Create Worker</code>.</div>
    <div class="step"><strong>Шаг 4:</strong> Дайте имя и разверните (Deploy).</div>
    <div class="step"><strong>Шаг 5:</strong> Нажмите <code>Edit Code</code> и вставьте содержимое <code>worker.js</code>.</div>
    <div class="step"><strong>Шаг 6:</strong> Нажмите <code>Save and Deploy</code>.</div>
    <div class="success">✅ Готово! Откройте URL вашего Worker.</div>

    <h2>🎨 Шаблоны</h2>
    <table>
      <thead><tr><th>#</th><th>Имя</th><th>Модуль</th><th>Фон</th><th>Кнопка</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Классический</td><td><code>#000</code></td><td><code>#fff</code></td><td><code>#334155</code><span class="swatch" style="background:#334155"></span></td></tr>
        <tr><td>2</td><td>Синий</td><td><code>#1e40af</code></td><td><code>#fff</code></td><td><code>#2563eb</code><span class="swatch" style="background:#2563eb"></span></td></tr>
        <tr><td>3</td><td>Зелёный</td><td><code>#166534</code></td><td><code>#f0fdf4</code></td><td><code>#16a34a</code><span class="swatch" style="background:#16a34a"></span></td></tr>
        <tr><td>4</td><td>Красный</td><td><code>#b91c1c</code></td><td><code>#fef2f2</code></td><td><code>#dc2626</code><span class="swatch" style="background:#dc2626"></span></td></tr>
        <tr><td>5</td><td>Фиолетовый</td><td><code>#6b21a8</code></td><td><code>#faf5ff</code></td><td><code>#9333ea</code><span class="swatch" style="background:#9333ea"></span></td></tr>
        <tr><td>6</td><td>Оранжевый</td><td><code>#c2410c</code></td><td><code>#fff7ed</code></td><td><code>#ea580c</code><span class="swatch" style="background:#ea580c"></span></td></tr>
        <tr><td>7</td><td>Тёмный</td><td><code>#fff</code></td><td><code>#111827</code></td><td><code>#475569</code><span class="swatch" style="background:#475569"></span></td></tr>
        <tr><td>8</td><td>Бирюзовый</td><td><code>#0f766e</code></td><td><code>#f0fdfa</code></td><td><code>#0d9488</code><span class="swatch" style="background:#0d9488"></span></td></tr>
        <tr><td>9</td><td>Розовый</td><td><code>#be185d</code></td><td><code>#fdf2f8</code></td><td><code>#db2777</code><span class="swatch" style="background:#db2777"></span></td></tr>
        <tr><td>10</td><td>Золотой</td><td><code>#b45309</code></td><td><code>#fffbeb</code></td><td><code>#d97706</code><span class="swatch" style="background:#d97706"></span></td></tr>
      </tbody>
    </table>

    <h2>🛠 Настройка</h2>
    <h3>Добавить шаблон</h3>
    <pre><code>{
  name: '11. Мой шаблон',
  btn: '#7c3aed',
  width: 256, margin: 2,
  errorCorrectionLevel: 'M',
  color: { dark: '#7c3aed', light: '#f5f3ff' }
}</code></pre>
    <h3>Изменить размер</h3>
    <p><code>width: 512</code> для более высокого разрешения.</p>
    <h3>Уровень коррекции ошибок</h3>
    <p><code>L</code>, <code>M</code>, <code>Q</code>, <code>H</code> — выше = устойчивее.</p>

    <h2>🔍 Решение проблем</h2>
    <ul>
      <li>QR не отображается → проверьте интернет (библиотека с CDN).</li>
      <li>Скачивание не работает → попробуйте современный браузер.</li>
      <li>Лимит запросов → бесплатный план даёт 100 000 запросов в день.</li>
    </ul>

    <h2>📜 Лицензия</h2>
    <p>Свободно для использования, изменения и распространения. qrcode.js — MIT.</p>
  </section>

  <footer>
    © <span data-year></span> — <strong data-owner>...</strong> · Built with Cloudflare Workers + qrcode.js
  </footer>

</div>

<script>
  // ═══════════════════════════════════════════════════
  //   ⬇️ فقط این خط را عوض کن — اسم صاحب پروژه
  // ═══════════════════════════════════════════════════
  const OWNER_NAME = "نام صاحب پروژه";   // ← این خط را عوض کن

  // سال جاری
  document.querySelector('[data-year]').textContent = new Date().getFullYear();

  // پر کردن اسم در همه‌جا
  document.querySelectorAll('[data-owner]').forEach(el => {
    el.textContent = OWNER_NAME;
  });
  document.title = "README — QR Code Maker (" + OWNER_NAME + ")";

  // تب‌های زبان
  const tabs = document.querySelectorAll('.tab');
  const langs = document.querySelectorAll('.lang');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.lang;
      tabs.forEach(t => t.classList.toggle('active', t === tab));
      langs.forEach(l => l.classList.toggle('active', l.id === 'lang-' + target));
      document.documentElement.dir = (target === 'fa' || target === 'ar') ? 'rtl' : 'ltr';
      document.documentElement.lang = target;
    });
  });
</script>
</body>
</html>
