<!-- ═══════════════════════════════════════════════════════════ -->
<!--   QR Code Maker — Cloudflare Worker + Telegram Bot         -->
<!--   Owner: YOUR_NAME                                          -->
<!-- ═══════════════════════════════════════════════════════════ -->

<div align="center">

# 📱 QR Code Maker + 🤖 Telegram Bot

**ساخت QR Code با ۱۰ قالب رنگی — یک فایل، دو رابط: وب و تلگرام**

[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![Telegram Bot](https://img.shields.io/badge/Telegram-Bot-229ED9?logo=telegram&logoColor=white)](https://core.telegram.org/bots)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Free](https://img.shields.io/badge/Free-100k%20req%2Fday-brightgreen)](https://workers.cloudflare.com/)

**Project Owner: [YOUR_NAME](https://github.com/YOUR_USERNAME)**

🌐 [فارسی](#-فارسی) · [English](#-english) · [العربية](#-العربية) · [Türkçe](#-türkçe) · [Русский](#-русский)

</div>

---

> ⚠️ **هشدار امنیتی / Security Warning**
>
> اگر توکن ربات را در کد بگذاری و روی GitHub **عمومی** push کنی، هر کسی می‌تواند ربات تو را کنترل کند.
> **راه‌حل امن:** از **Cloudflare Secrets** استفاده کن (در بخش «توکن امن» توضیح داده شده).
>
> If you commit your bot token to a **public** repo, anyone can control your bot.
> **Safer:** use **Cloudflare Secrets** (see "Secure Token" section below).

---

## 🖼 Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/YOUR_USERNAME/qr-maker/main/preview.png" alt="QR Code Maker Preview" width="720">
</p>

<p align="center">
  <em>۱۰ قالب رنگی — رابط وب + ربات تلگرام</em>
</p>

---

<!-- ═══════════════════════════════════════════════════════════ -->
<!--                          🇮🇷 فارسی                            -->
<!-- ═══════════════════════════════════════════════════════════ -->

## 🇮🇷 فارسی

### ✨ ویژگی‌ها

- 🎨 **۱۰ قالب رنگی** (کلاسیک، آبی، سبز، قرمز، بنفش، نارنجی، تاریک، فیروزه‌ای، صورتی، طلایی)
- 🌐 **رابط وب** — رندر لحظه‌ای + دانلود PNG برای هر قالب
- 🤖 **ربات تلگرام** — هر متن یا لینک بفرست، QR بگیر
- 🎯 **انتخاب قالب از داخل تلگرام** با دکمه‌های شیشه‌ای
- 🚀 **بدون سرور، دیتابیس یا بک‌اند** — فقط یک Cloudflare Worker
- 🆓 **رایگان** تا ۱۰۰٫۰۰۰ درخواست در روز (پلن Free کلادفلر)
- 📦 **تک‌فایلی** — فقط `worker.js`

### 🚀 راه‌اندازی

#### گام ۱ — ساخت ربات تلگرام

1. در تلگرام برو به [@BotFather](https://t.me/BotFather)
2. دستور `/newbot` را بفرست
3. اسم و یوزرنیم ربات را انتخاب کن
4. **توکن** را کپی کن (شبیه `123456:ABC-DEF...`)

#### گام ۲ — ساخت Worker

1. وارد [dash.cloudflare.com](https://dash.cloudflare.com) شو
2. برو به **Workers & Pages** → **Create Application** → **Create Worker**
3. یک نام بده (مثلاً `qr-maker`) و **Deploy** کن
4. روی **Edit Code** بزن و محتوای `worker.js` را جای‌گذاری کن
5. در بالای کد این دو خط را عوض کن:
   ```javascript
   const BOT_TOKEN = "توکن ربات خودت";
   const OWNER_NAME = "اسم خودت";
