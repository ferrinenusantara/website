# 🤖 FERRINE COMPRO - AI GENERATION SYSTEM PROMPT

Dokumen ini adalah instruksi utama untuk AI di Antigravity IDE. Saat men-generate kode (HTML/EJS, CSS, Node.js), AI WAJIB mematuhi aturan, struktur, teknologi, dan identitas visual yang tertulis di bawah ini.

---

## 1. IDENTITAS & KONTEKS PERUSAHAAN

* **Nama Perusahaan:** Ferrine (Aplikasi Nusantara)
* **Fokus Bisnis:** Perusahaan teknologi penyedia solusi aplikasi, serta perkakas (*tools*) & *framework open-source*.
* **Tagline:** "Membangun solusi digital andal, memberdayakan usaha Indonesia."
* **Visi:** Menjadi perusahaan teknologi terkemuka di Indonesia yang menghadirkan solusi inovatif dan berdampak, membantu mitra bisnis berkembang secara dinamis, efektif, dan akurat melalui kemajuan teknologi.

---

## 2. SPESIFIKASI TEKNOLOGI (TECH STACK)

Aplikasi ini dibangun dengan spesifikasi teknologi berikut. AI harus mengacu pada batasan ini dan **tidak boleh** menyarankan atau menambahkan pustaka (library) di luar kebutuhan:

* **Runtime:** Node.js
* **Framework:** Express.js
* **Template Engine:** EJS (Embedded JavaScript)
* **Database:** **Tanpa Database (No Database / Stateless)**. Semua data (seperti daftar produk, core values, dan teks profil) dikelola secara statis melalui array of objects di dalam kode backend (`app.js`) atau langsung pada file *view* EJS. Proyek ini murni berupa *company profile* yang mengejar performa ringan, cepat, dan aman.

---

## 3. ATURAN DESAIN UI & PANDUAN VISUAL (CSS)

Setiap komponen UI atau *style* CSS yang dibuat harus mencerminkan identitas berikut:

* **Tema Warna Utama (Branding):** * Warna Dominan: Gradasi Ungu Modern (*Purple Gradient*) sesuai aset `ferrine-icon.png`.
    * Warna Teks Utama: Hitam bersih (`#111111`) atau Abu-abu Gelap (`#333333`) untuk keterbacaan yang tinggi.
    * Warna Latar Belakang: Putih bersih (`#ffffff`) atau Abu-abu sangat muda (`#f8f9fa`) untuk menjaga kesan bersih dan profesional.
* **Tipografi:** Gunakan *font* berjenis Sans-Serif yang bersih, modern, dan tegas (seperti Inter, Roboto, atau sistem font default sans-serif).
* **Gaya Komponen:** * Sudut elemen (*border-radius*) dibuat agak membulat halus (sekitar `8px` hingga `12px`) untuk memberikan kesan modern dan ramah pengguna (*user-friendly*).
    * Gunakan bayangan halus (*subtle box-shadow*) pada elemen kartu (*card*) untuk memberikan efek kedalaman.

---

## 4. DAFTAR PRODUK RESMI (Halaman Depan)

AI harus menggunakan data produk berikut secara konsisten saat membuat section produk atau fitur:

1.  **fgta5js** * *URL:* https://fgta5js.ferrine.com  
    * *Deskripsi:* Framework open-source berbasis JavaScript untuk pengembangan aplikasi secara cepat dan efisien.
2.  **fgta5framework** * *Deskripsi:* Solusi framework tangguh untuk standarisasi pengembangan sistem informasi.
3.  **Stock Opname Apps** (Android, Standalone)  
    * *Deskripsi:* Aplikasi Android mandiri untuk pencatatan dan manajemen stok fisik secara praktis tanpa ribet.
4.  **Stock Opname Enterprise Server** * *Deskripsi:* Sistem manajemen stok terpusat skala enterprise untuk sinkronisasi data multi-gudang secara real-time.
5.  **Sistem Antrian Tamu** * *Deskripsi:* Solusi manajemen antrean digital untuk meningkatkan efisiensi pelayanan dan kenyamanan pelanggan.

---

## 5. STRUKTUR PROYEK

Struktur folder wajib mengikuti pola arsitektur Express statis berikut:

```text
ferrine-compro/
├── public/                 # File statis
│   ├── css/
│   │   └── style.css       # Custom styling (Tema Ungu Ferrine)
│   └── images/             # Folder aset gambar (logo, icon, hero)
├── views/                  # Template EJS
│   ├── partials/
│   │   ├── header.ejs      # Struktur navigasi & pemanggilan logo
│   │   └── footer.ejs      # Hak cipta & penutup tag HTML
│   └── index.ejs           # Landing page utama
└── app.js                  # Entry point utama aplikasi Express