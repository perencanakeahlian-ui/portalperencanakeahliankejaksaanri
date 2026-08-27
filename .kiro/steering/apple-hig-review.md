---
inclusion: fileMatch
fileMatchPattern: '**/*.{astro,css,tsx,jsx}'
---

# Apple HIG — Review UI/UX (diadaptasi untuk web)

Prinsip dari Apple Human Interface Guidelines, diterjemahkan jadi aturan universal untuk web. Aktif saat menyentuh komponen/style.

## Kejelasan (Clarity)
- Teks mudah dibaca di semua ukuran; ikon tepat & jelas.
- Fungsi jelas dari bentuk; kurangi elemen yang tidak perlu.
- Ruang negatif membantu fokus, bukan kekosongan yang canggung.

## Deferensi (Deference)
- Konten adalah bintang utama; UI mendukung, bukan bersaing.
- Hindari dekorasi berlebih yang mengalihkan dari isi.

## Kedalaman (Depth)
- Gunakan layer & elevasi untuk hierarki, bukan sekadar hiasan.
- Transisi menjelaskan perpindahan konteks.

## Penempatan & tata letak
- Grid & spacing konsisten; kelompokkan elemen terkait (proximity).
- Shape language konsisten (radius seragam per kategori komponen).
- Disiplin warna: sedikit warna, dipakai bermakna.

## Motion (khas Apple)
- Animasi terasa "hidup" bila dimulai dari nilai on-screen saat ini, mewarisi kecepatan gerak pengguna, dan bisa diinterupsi/dibalik kapan saja.
- Utamakan spring/easing alami dibanding linear.
- Selalu sediakan alternatif untuk `prefers-reduced-motion`.

## Tap target & ergonomi
- Target sentuh minimal 44x44pt (≈44px). Beri jarak antar target.
- Kontrol penting dalam jangkauan; jangan taruh aksi utama di sudut sulit.

## Dark mode
- Sediakan palet light & dark yang keduanya lolos kontras.
- Jangan sekadar invert; sesuaikan elevasi & saturasi untuk dark.

## Checklist review cepat
- [ ] Kontras lolos AA di light & dark?
- [ ] Tap target ≥44px?
- [ ] Motion punya tujuan & bisa diinterupsi? Ada fallback reduced-motion?
- [ ] Hierarki jelas via ukuran/weight/spasi, bukan warna saja?
- [ ] Shape & spacing konsisten dengan token?

## Sumber referensi (diadaptasi)
- ChloeVPin/apple-design-skill — https://github.com/ChloeVPin/apple-design-skill
- dickwu/apple-design-skill — https://github.com/dickwu/apple-design-skill
- emilkowalski/skills (apple-design) — https://github.com/emilkowalski/skills
- Apple HIG — https://developer.apple.com/design/human-interface-guidelines

Content was rephrased for compliance with licensing restrictions.
