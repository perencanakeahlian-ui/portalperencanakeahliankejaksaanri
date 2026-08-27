---
inclusion: fileMatch
fileMatchPattern: '**/*.{astro,html,md,tsx,jsx}'
---

# UX Writing / Content Design

Aturan untuk menulis & mengaudit teks antarmuka (microcopy): label tombol, judul, pesan error, empty state, onboarding, notifikasi. Aktif saat menyentuh file berisi teks UI.

## Bahasa
- Portal ini berbahasa **Indonesia**. Tulis copy dalam Bahasa Indonesia yang baik, jelas, dan formal-ramah (sesuai konteks institusi Kejaksaan RI).
- Konsisten istilah: pilih satu istilah untuk satu konsep (mis. "Masuk" vs "Login" — pilih satu, pakai terus).

## Prinsip inti
- **Jelas > pintar.** Utamakan kejelasan, hindari jargon dan bahasa berbunga.
- **Ringkas.** Buang kata yang tidak menambah makna. Satu ide per kalimat.
- **Berorientasi aksi.** Tombol pakai kata kerja + objek: "Unduh dokumen", bukan "Submit" atau "OK" generik.
- **Berpusat pengguna.** Sudut pandang pengguna, sebutkan manfaat/akibat nyata.

## Pola per komponen
- **Tombol/CTA**: kata kerja spesifik. "Simpan perubahan", "Kirim usulan", "Buka kalender".
- **Judul/heading**: informatif, bukan clickbait. Sebutkan isi halaman/bagian.
- **Pesan error**: (1) apa yang terjadi, (2) kenapa (bila membantu), (3) cara memperbaiki. Tanpa menyalahkan pengguna. Contoh: "Berkas gagal diunggah. Ukuran maksimal 5 MB. Coba kompres lalu unggah lagi."
- **Empty state**: jelaskan kenapa kosong + aksi berikutnya. Bukan sekadar "Tidak ada data".
- **Konfirmasi/destruktif**: jelaskan konsekuensi & apakah bisa dibatalkan sebelum pengguna menekan.
- **Placeholder**: contoh format, bukan pengganti label. Jangan taruh instruksi penting hanya di placeholder.

## Hindari "AI-tell" (ciri teks buatan AI)
- Hindari kata pengisi klise: "seamless", "elevate", "unlock", "empower", "mulus tanpa hambatan", "tingkatkan pengalaman Anda".
- Hindari em dash berlebihan dan seruan berlebihan.
- Jangan menjanjikan berlebihan; sebutkan fakta.

## Aksesibilitas teks
- `alt` gambar deskriptif & bermakna (kosong `alt=""` hanya untuk gambar dekoratif).
- Label form eksplisit, terhubung ke input (`<label for>`).
- Link deskriptif ("Baca panduan perencanaan"), bukan "klik di sini".

## Sumber referensi (diadaptasi)
- content-designer/ux-writing-skill — https://github.com/content-designer/ux-writing-skill
- humbleteam/ux-writing — https://github.com/humbleteam/ux-writing
- xzjh/product-content-strategist — https://github.com/xzjh/product-content-strategist

Content was rephrased for compliance with licensing restrictions.
