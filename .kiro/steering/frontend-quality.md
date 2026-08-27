---
inclusion: fileMatch
fileMatchPattern: '**/*.{astro,ts,js,tsx,jsx,css}'
---

# Frontend Quality (Astro + Web)

Aturan kualitas frontend, disesuaikan untuk stack proyek: **Astro** (lihat package.json / astro.config.mjs). Aktif saat menyentuh kode frontend.

## Astro-specific
- Utamakan komponen `.astro` statis; kirim JavaScript ke klien seminimal mungkin.
- Pakai client directive secara sadar: `client:load` hanya bila perlu segera; `client:visible`/`client:idle` untuk yang bisa ditunda.
- Simpan style scoped di komponen; token global di `src/styles/global.css`.
- Aset publik di `public/`; impor aset yang dioptimasi lewat Astro bila memungkinkan.
- Content collections untuk data terstruktur bila relevan.

## HTML semantik & AI/human-friendly
- Gunakan elemen semantik: `<header> <nav> <main> <section> <article> <footer> <button> <a>`.
- Satu `<h1>` per halaman; hierarki heading berurutan (jangan loncat h2→h4).
- `<button>` untuk aksi, `<a href>` untuk navigasi — jangan tukar.
- Form: `<label>` terhubung, `name`, `autocomplete`, tipe input tepat (`email`, `tel`, dst).
- Locator stabil untuk elemen penting (mis. `data-testid` / id bermakna) agar mudah diuji.

## Performa
- Gambar: format modern (webp/avif), `width`/`height` eksplisit untuk cegah layout shift, `loading="lazy"` untuk below-the-fold.
- Font: `font-display: swap`, preload font kritikal, batasi jumlah weight.
- Hindari CSS/JS tak terpakai; hati-hati dependensi berat.
- Target: LCP baik, CLS ~0, minim JS di jalur kritis.

## Responsif
- Mobile-first. Uji di breakpoint kecil dulu.
- Layout fleksibel (flex/grid), hindari lebar fixed yang memecah di layar sempit.
- Jangan sembunyikan konten penting hanya karena layar kecil.

## Kualitas kode
- Konsisten dengan konvensi & style yang sudah ada di repo sebelum menambah pola/lib baru.
- Komponen kecil & fokus; hindari duplikasi—ekstrak yang berulang.
- Nama variabel/komponen deskriptif.
- Jangan tinggalkan `console.log`, kode mati, atau TODO tanpa tindak lanjut di kode final.

## Verifikasi wajib
Setelah mengubah frontend, jalankan `astro check` dan/atau build sebelum menyatakan selesai. Perbaiki error sebelum lapor.

## Sumber referensi (diadaptasi)
- alirezarezvani/claude-skills (senior-frontend) — https://github.com/alirezarezvani/claude-skills
- ianho7/ai-friendly-web-design-skill — https://github.com/ianho7/ai-friendly-web-design-skill
- publishing-astro-websites-agentic-skill — https://github.com/spillwavesolutions/publishing-astro-websites-agentic-skill

Content was rephrased for compliance with licensing restrictions.
