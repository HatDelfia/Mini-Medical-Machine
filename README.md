# Pengecek Gejala — Solusi Cepat Diagnosa Penyakit

Latar Belakang Singkat
------------------------
Dari pengalaman saya yang saat ini mengikuti organisasi PMR(Palang Merah Remaja) dan juga satuan karya pramuka yang berfokus dibidang kesehatan(Saka Bakti Husada) menjadi referensi awal saya untuk membuat website/aplikasi ini, ditambah lagi keluhan banyak orang yang sedang sakit, saat browsing mencari penyakit yang dialaminya sangat rumit bahkan kadang tak akurat. Oleh karena itu, saya yang mempunyai skill programming, membuat website diagnosa penyakit umum ini walaupun sedikit dibantu dengan kecerdasan buatan.

Deskripsi
-----------------
Pengecek Gejala adalah website sederhana berbasis HTML/CSS/JavaScript yang membantu pengguna mendapatkan gambaran awal tentang kemungkinan penyakit berdasarkan gejala yang dipilih. Aplikasi ini dirancang untuk menjadi antarmuka yang ramah-pengguna: terdapat splash screen pembuka, daftar gejala yang dapat dipilih (multi-select), lalu hasil diagnosa utama beserta beberapa kemungkinan lain dan rekomendasi pengobatan dasar. Aplikasi ini dapat memberikan sekitar 23 penyakit dari kombinasi-kombinasi gejala yang dipilih.
Catatan penting: ini bukan pengganti diagnosis profesional. Selalu konsultasikan ke tenaga kesehatan bila perlu.

Fitur utama
-----------
- Splash screen pembuka dengan tombol "Mulai".
- Pilih banyak gejala (klik pada seluruh kotak gejala untuk kemudahan).
- Algoritma pencocokan yang mengembalikan:
  - Diagnosa utama (hasil dengan skor tertinggi)
  - Beberapa kemungkinan diagnosa lain (urut menurut kecocokan)
  - Rekomendasi pengobatan ringkas untuk setiap diagnosa
  - Indikator peringatan (severity) — contoh: emergency / high / medium / low
- UI ringkas, responsif, dan aksesibel (keyboard friendly).
- Mudah dikustomisasi: database penyakit ada di `script.js`.

Struktur proyek
---------------
- index.html — markup utama + splash screen
- style.css — styling dan responsive layout
- script.js — logika diagnosa + database penyakit
- (opsional) assets/ — gambar, ikon, dsb.

Kontak / Penulis
----------------
Nama : Muhammad Hatta Prima Nurrahman
Sekolah : SMKN Pasirian
Kelas/Jurusan : XI RPL(Rekayasa Perangkat Lunak)
Jika ingin berdiskusi mengenai fitur, kirim issue atau PR di repository ini.

Disclaimer medis
----------------
Informasi yang diberikan oleh aplikasi ini hanya untuk tujuan edukasi dan referensi awal. Bukan pengganti diagnosa atau perawatan profesional. Jika Anda merasa kondisi serius atau mengancam nyawa, segera cari bantuan medis.
