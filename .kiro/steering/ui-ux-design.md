---
inclusion: fileMatch
fileMatchPattern: '**/*.{astro,css,html,tsx,jsx}'
---

# UI/UX Design Craft

Aturan ini otomatis aktif setiap kali menyentuh file UI (.astro, .css, .html, .tsx, .jsx). Tujuannya: hasil desain punya "taste", konsisten, dan tidak terlihat seperti template default AI.

## 1. Pilih arah desain SEBELUM menulis kode
Jangan langsung ngoding komponen. Tentukan dulu arah visual, lalu implementasikan konsisten:
- **Precision & Density** — untuk dashboard/data (rapat, grid tegas, sedikit dekorasi).
- **Warmth & Approachability** — untuk layanan publik/portal (netral hangat, ramah, jelas).
- **Sophistication & Trust** — untuk institusi/keuangan (kontras terjaga, tipografi tegas).

Proyek ini portal institusi (Kejaksaan RI) → default ke **Warmth & Approachability + Trust**: profesional, jelas, tidak main-main, tetap ramah untuk pengguna awam.

## 2. Hindari "AI-slop" default
Jangan pakai kombinasi klise: font Inter + gradient ungu + kartu rounded berlebihan + emoji ikon + shadow tebal seragam. Buat pilihan yang disengaja.

## 3. Design tokens — satu sumber kebenaran
Semua nilai visual harus dari token, bukan angka acak per komponen. Definisikan di `src/styles/global.css` sebagai CSS custom properties.

- **Spacing**: skala konsisten (4, 8, 12, 16, 24, 32, 48, 64). Jangan pakai nilai ganjil acak (mis. 7px, 13px).
- **Warna**: palet terbatas — 1 warna brand utama, 1-2 aksen, netral abu berjenjang, + warna semantik (success/warning/error/info). Definisikan versi light & dark.
- **Radius**: maksimal 2-3 nilai (mis. 6px kecil, 10px kartu, 999px pill).
- **Shadow**: berlapis dan halus, bukan satu blur besar. Naikkan elevasi seiring kedalaman.
- **Tipografi**: skala tipe jelas (mis. 12/14/16/20/24/32/40) dengan line-height & weight yang disengaja.

## 4. Tipografi membawa kepribadian
- Pasangkan display + body face secara sadar. Jangan pakai satu family untuk semua tanpa alasan.
- Line-height: 1.5-1.6 untuk body, lebih rapat untuk heading besar.
- Batasi lebar baca teks panjang ke ~60-75 karakter (`max-width: 65ch`).
- Gunakan hierarki ukuran + weight, jangan mengandalkan warna saja.

## 5. Layout & spasi
- Konsisten pakai grid/8pt system.
- Beri whitespace cukup; kepadatan disesuaikan konteks (portal publik = lega, dashboard = rapat).
- Optical alignment: sejajarkan secara visual, bukan cuma matematis.

## 6. Motion
- Gunakan transition halus (150-250ms) untuk state hover/focus/active.
- Motion harus punya tujuan (feedback/orientasi), bukan dekorasi.
- Hormati `prefers-reduced-motion` — sediakan fallback tanpa animasi.

## 7. State komponen lengkap
Setiap elemen interaktif WAJIB punya: default, hover, focus-visible, active, disabled, dan loading/empty/error bila relevan. Jangan hanya mendesain state default.

## 8. Aksesibilitas (non-negotiable)
- Kontras teks minimal WCAG AA (4.5:1 teks normal, 3:1 teks besar/UI).
- Focus indicator selalu terlihat (`:focus-visible`), jangan `outline: none` tanpa pengganti.
- Target sentuh minimal 44x44px.
- Jangan sampaikan info lewat warna saja.

## Sumber referensi (di-adaptasi, bukan disalin)
- ui-craft — https://github.com/educlopez/ui-craft
- tasteful-ui-skill — https://github.com/DonkeyKing01/tasteful-ui-skill
- Anthropic frontend-design — https://github.com/anthropics/claude-code
- interface-design — https://github.com/Dammyjay93/interface-design

Content was rephrased for compliance with licensing restrictions.
