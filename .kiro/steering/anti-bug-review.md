---
inclusion: always
---

# Anti-Bug: Disiplin verifikasi

Aturan selalu aktif untuk mencegah bug lolos ke hasil akhir.

## Sebelum menyatakan selesai
1. Jalankan build/check proyek (`astro check`, lalu `astro build` bila relevan).
2. Perbaiki semua error kompilasi/type sebelum lapor selesai.
3. Command exit tanpa error BUKAN bukti fitur berfungsi — verifikasi hasil nyata sesuai permintaan.

## Saat menulis/mengubah kode
- Baca dulu kode & konvensi yang ada sebelum menambah. Jangan menebak API/props komponen — buka file sumbernya.
- Tangani kasus tepi: nilai kosong/null/undefined, array kosong, teks sangat panjang, angka nol/negatif, jaringan gagal.
- Untuk operasi async: tangani loading & error, jangan asumsi selalu sukses.
- Hindari off-by-one, perbandingan longgar yang berbahaya, dan mutasi state tak sengaja.
- Jangan tinggalkan `console.log` debug, kode mati, atau import tak terpakai.

## Saat memperbaiki bug
- Cari akar masalah, bukan tambal gejala. Jika satu pendekatan gagal dua kali, mundur dan diagnosa ulang—jangan tambal berulang.
- Setelah fix, cek apakah pola bug yang sama ada di tempat lain.

## Regresi
- Perubahan tidak boleh merusak fitur lain. Setelah edit, pastikan bagian terkait masih jalan.
- Hati-hati mengubah komponen dipakai bersama (Header, Footer, Layout) — dampaknya luas.

## Kebersihan
- Bersihkan file sementara hasil uji coba.
- Jangan commit kecuali diminta pengguna.
