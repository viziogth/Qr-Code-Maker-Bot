<!-- ═══════════════════════════════════════════════════════════ -->
<!--   QR Code Maker — GitHub README (5 Languages)              -->
<!--   Owner: YOUR_NAME                                          -->
<!-- ═══════════════════════════════════════════════════════════ -->

<div align="center">

# 📱 QR Code Maker

**ساخت QR Code با ۱۰ قالب رنگی — فقط با یک فایل Cloudflare Worker**

[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Free](https://img.shields.io/badge/Free-100k%20req%2Fday-brightgreen)](https://workers.cloudflare.com/)

**Project Owner: [YOUR_NAME](https://github.com/YOUR_USERNAME)**

🌐 [فارسی](#-فارسی) · [English](#-english) · [العربية](#-العربية) · [Türkçe](#-türkçe) · [Русский](#-русский)

</div>

---

## 🖼 Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/YOUR_USERNAME/qr-maker/main/preview.png" alt="QR Code Maker Preview" width="720">
</p>

<p align="center">
  <em>۱۰ قالب رنگی — رندر لحظه‌ای — دانلود PNG</em>
</p>

---

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=38BDF8&center=true&vCenter=true&width=600&lines=Serverless+QR+Maker;Single+File+%2B+10+Templates;Built+with+Cloudflare+Workers" alt="Typing SVG">
</div>

---

<!-- ═══════════════════════════════════════════════════════════ -->
<!--                          🇮🇷 فارسی                            -->
<!-- ═══════════════════════════════════════════════════════════ -->

## 🇮🇷 فارسی

### ✨ ویژگی‌ها

- 🎨 **۱۰ قالب رنگی آماده** (کلاسیک، آبی، سبز، قرمز، بنفش، نارنجی، تاریک، فیروزه‌ای، صورتی، طلایی)
- ⚡ **رندر لحظه‌ای** همه‌ی قالب‌ها با تغییر متن
- 💾 **دانلود PNG** برای هر قالب به‌صورت جداگانه
- 🌈 **دکمه‌های رنگی** هم‌رنگ قالب مربوطه
- 📱 **رابط کاربری ریسپانسیو** و RTL
- 🚀 **بدون سرور، دیتابیس یا بک‌اند**
- 🆓 **رایگان** تا ۱۰۰٫۰۰۰ درخواست در روز (پلن Free کلادفلر)
- 📦 **تک‌فایلی** — فقط `worker.js`

### 🚀 نصب سریع

#### روش ۱: از داشبورد Cloudflare

1. وارد [dash.cloudflare.com](https://dash.cloudflare.com) شو
2. برو به **Workers & Pages**
3. روی **Create Application** → **Create Worker** کلیک کن
4. یک نام دلخواه بده و **Deploy** کن
5. روی **Edit Code** بزن و محتوای `worker.js` را جای‌گذاری کن
6. **Save and Deploy** را بزن

✅ تمام! آدرس Worker را باز کن، مثلاً:
`https://qr-maker.YOUR-SUBDOMAIN.workers.dev`

#### روش ۲: با Wrangler CLI

```bash
# نصب wrangler
npm install -g wrangler

# ورود به حساب کلادفلر
wrangler login

# کلون پروژه
git clone https://github.com/YOUR_USERNAME/qr-maker.git
cd qr-maker

# دیپلوی
wrangler deploy
