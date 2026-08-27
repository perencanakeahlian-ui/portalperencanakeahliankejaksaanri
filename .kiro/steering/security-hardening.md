---
inclusion: fileMatch
fileMatchPattern: '**/*.{astro,ts,js,tsx,jsx,mjs,json,env,yml,yaml}'
---

# Security Hardening (Anti-Hack) — OWASP 2025

Aturan keamanan aktif saat menyentuh kode/konfigurasi. Berbasis OWASP Top 10:2025.

## Rahasia & kredensial
- JANGAN pernah hardcode API key, token, password di kode sumber.
- Rahasia lewat environment variable (`.env.local` sudah di-gitignore — pastikan tetap).
- Jangan echo/log nilai rahasia. Rujuk dengan nama key, bukan nilainya.
- Untuk Astro: variabel yang aman untuk klien harus berprefiks `PUBLIC_`; sisanya server-only. Jangan bocorkan var non-PUBLIC ke bundle klien.

## Input & output (XSS/Injection)
- Perlakukan semua input pengguna/eksternal sebagai tidak tepercaya.
- Di Astro, `{expr}` sudah auto-escape — HINDARI `set:html` dengan data tak tepercaya. Bila terpaksa, sanitasi dulu.
- Validasi & batasi input (panjang, tipe, format) di sisi yang berwenang.
- Query database: gunakan parameterized query / prepared statement, jangan string concatenation.

## Konfigurasi & header (untuk situs)
- Terapkan security header bila platform mendukung (vercel.json / config): `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Strict-Transport-Security`.
- CSP hindari `unsafe-inline`/`unsafe-eval` bila memungkinkan.
- Selalu HTTPS. Jangan minta/kirim data ke endpoint HTTP.

## Dependensi (supply chain)
- Pin versi dependensi; hindari range terbuka untuk paket sensitif.
- Waspada typosquatting: periksa nama paket tak lazim sebelum menambah.
- Gunakan paket populer & terawat. Audit berkala (`npm audit`).

## Tautan eksternal
- Link `target="_blank"` wajib `rel="noopener noreferrer"`.
- Validasi/whitelist URL redirect; hindari open redirect.

## Data & privasi
- Jangan kumpulkan PII lebih dari perlu. Jangan tampilkan data sensitif di client tanpa alasan.
- Untuk portal publik institusi: hati-hati membocorkan endpoint internal, path admin, atau info versi yang tidak perlu.

## Saat review
- Tandai potensi kebocoran rahasia, XSS via `set:html`, dependensi mencurigakan, dan endpoint tanpa proteksi.
- Untuk perubahan sensitif (auth, config produksi, header): jelaskan apa yang diverifikasi & apa yang belum.

## Sumber referensi (diadaptasi)
- agamm/claude-code-owasp — https://github.com/agamm/claude-code-owasp
- TikiTribe/claude-secure-coding-rules — https://github.com/TikiTribe/claude-secure-coding-rules
- OWASP Top 10 — https://owasp.org/www-project-top-ten/

Content was rephrased for compliance with licensing restrictions.
