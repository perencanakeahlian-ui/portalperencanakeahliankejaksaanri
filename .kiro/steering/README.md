---
inclusion: manual
---

# Kiro Steering — Skill UI/UX & Web

Kumpulan "skill" untuk Kiro dalam bentuk steering files. Diadaptasi dari skill Claude Code / agent (format SKILL.md) menjadi steering Kiro agar otomatis aktif di proyek ini.

## Cara kerja
Setiap file punya front-matter `inclusion`:
- `always` — selalu ikut ke konteks.
- `fileMatch` + `fileMatchPattern` — aktif otomatis saat menyentuh file yang cocok.
- `manual` — aktif hanya saat dipanggil dengan `#nama-file` di chat.

## Daftar skill

| File | Aktivasi | Fokus |
|---|---|---|
| `ui-ux-design.md` | fileMatch: astro/css/html/tsx/jsx | Arah desain, design tokens, tipografi, motion, aksesibilitas |
| `apple-hig-review.md` | fileMatch: astro/css/tsx/jsx | Review UI/UX gaya Apple HIG untuk web |
| `ux-writing.md` | fileMatch: astro/html/md/tsx/jsx | Microcopy, pesan error, empty state, anti AI-tell (Bahasa Indonesia) |
| `frontend-quality.md` | fileMatch: astro/ts/js/tsx/jsx/css | Best practice Astro, HTML semantik, performa, responsif |
| `anti-bug-review.md` | always | Disiplin verifikasi build/test, kasus tepi, anti regresi |
| `security-hardening.md` | fileMatch: kode+config | OWASP 2025, anti-XSS, rahasia, header keamanan |
| `ux-discovery.md` | manual (`#ux-discovery`) | Wawancara riset UX terstruktur |

## Menambah skill baru
Buat file `.md` baru di folder ini dengan front-matter `inclusion` yang sesuai. Tulis intisari yang actionable, sertakan atribusi sumber.

## Sumber & lisensi
Semua konten steering ditulis ulang (paraphrase) dari sumber publik berikut, bukan salinan verbatim. Rujukan lengkap ada di tiap file:

- ui-craft — https://github.com/educlopez/ui-craft
- tasteful-ui-skill — https://github.com/DonkeyKing01/tasteful-ui-skill
- ux-discovery-interviewer-skill — https://github.com/JacobLinCool/ux-discovery-interviewer-skill
- apple-design-skill (ChloeVPin, dickwu) — https://github.com/ChloeVPin/apple-design-skill
- content-designer/ux-writing-skill — https://github.com/content-designer/ux-writing-skill
- xzjh/product-content-strategist — https://github.com/xzjh/product-content-strategist
- alirezarezvani/claude-skills — https://github.com/alirezarezvani/claude-skills
- ianho7/ai-friendly-web-design-skill — https://github.com/ianho7/ai-friendly-web-design-skill
- publishing-astro-websites-agentic-skill — https://github.com/spillwavesolutions/publishing-astro-websites-agentic-skill
- agamm/claude-code-owasp — https://github.com/agamm/claude-code-owasp
- Anthropic frontend-design — https://github.com/anthropics/claude-code

Content was rephrased for compliance with licensing restrictions. Periksa lisensi masing-masing repo sebelum penggunaan komersial.
