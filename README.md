# 🌱 REVALUE — From Surplus to New Value
### Official Web Profile & Interactive Ecopreneur Platform
> **Ecopreneur Competition (ECTION) 2026 • Universitas Negeri Surabaya (UNESA)**  
> **Tim Pengusul:** Kompespiking  
> **Ketua Tim:** Bimo Satrio  
> **Anggota 1:** Putra Pangeran Jeremia  
> **Anggota 2:** Ivan Fadhila  
> **GitHub Repository:** [https://github.com/bimskuy1205/Revalue-KompeSpiking](https://github.com/bimskuy1205/Revalue-KompeSpiking)

---

## 📌 1. Tentang REVALUE
**REVALUE** adalah ekosistem *Micro Circular Hub* berbasis *cloud kitchen* terstandarisasi yang menyelamatkan surplus pangan segar layak olah (*edible surplus food* Grade B) dari mitra hulu (perhotelan, ritel modern, pasar induk, dan katering). Melalui teknologi *Adaptive Upcycling* (dehidrasi suhu rendah dan pembekuan higienis), REVALUE mengubah bahan berumur pendek (2–3 hari) menjadi komoditas bahan baku industri pangan B2B (tepung komposit dan purée beku) berumur simpan 6–12 bulan yang teruji di laboratorium mikrobiologi independen **MBRIO Food Laboratory**, berstandar BPOM, dan tersertifikasi Halal.

Setiap kemasan produk REVALUE terhubung dengan kode unik **Digital Food Passport (QR Code)** yang memuat 5 blok informasi terverifikasi dan algoritma metrik otomatis **Circularity Score (0–100)** serta penghitungan reduksi emisi gas rumah kaca ($2,32424\text{ kg CO}_2\text{-eq/kg}$).

---

## 👥 2. Struktur Organisasi Tim Kompespiking

Sesuai model organisasi berbasis proyek (*Project-Oriented Functional Structure*), berikut adalah pembagian peran dan rincian jobdesk operasional:

### 👑 Ketua Tim — BIMO SATRIO
* **Jabatan Utama:** *Chief Executive Officer (CEO) & Lead System & ESG Dashboard Architect*
* **Tanggung Jawab & Jobdesk Operasional:**
  1. Merancang dan memimpin spesifikasi antarmuka serta arsitektur sistem *Automated ESG & Circular Supply Chain Dashboard* REVALUE.
  2. Memimpin perumusan visi strategis bisnis, arsitektur *Business Model Canvas (BMC)* 9 blok, dan peta jalan ekspansi 3 tahun REVALUE.
  3. Bertanggung jawab penuh atas akuisisi dan negosiasi kontrak kemitraan pasokan surplus hulu dengan pihak hotel bintang 3–5, jaringan supermarket modern, katering industri, dan pengelola pasar induk.
  4. Memimpin penetrasi penjualan langsung (*direct sales*) bahan baku tepung komposit dan purée ke klaster UMKM bakery dan industri kuliner lokal di koridor Surabaya–Sidoarjo–Malang.
  5. Merancang dan mengeksekusi skema langganan berulang (*recurring revenue*) untuk program *Circular Partnership* dan lisensi perangkat lunak *Food Passport QR*.
  6. Mengelola alokasi modal awal CapEx (Rp34,5 Juta) dan arus kas bulanan OpEx (Rp14,25 Juta) untuk memastikan tercapainya titik impas (BEP Rp11,19 Juta/bln) dan payback period 5,1 bulan.
  7. Bertindak sebagai *lead presenter* (pembicara utama) yang mewakili tim pada sesi pitching penjurian ECTION 2026 UNESA dan forum investor.

### 🧪 Anggota 1 — PUTRA PANGERAN JEREMIA
* **Jabatan Utama:** *Chief Operating Officer (COO) & Head of Food Technology & QC*
* **Tanggung Jawab & Jobdesk Operasional:**
  1. Merancang dan mengawasi operasional harian fasilitas *Micro Circular Hub* berbasis *cloud kitchen* (30–45 m²) sesuai pedoman Cara Produksi Pangan Olahan yang Baik (CPPOB/GMP).
  2. Menyusun *Standard Operating Procedure (SOP)* sortasi hulu dengan standar ketat (toleransi 0% terhadap bahan pangan berjamur, busuk, atau terkontaminasi).
  3. Mengembangkan formula *Adaptive Upcycling* untuk lini tepung komposit 100 mesh (dehidrasi 50°C–60°C) dan lini purée beku pasteurisasi (75°C–85°C).
  4. Melaksanakan pengujian fisikokimia harian: uji kadar air menggunakan *infrared moisture analyzer* (wajib $\le 8,0\%$), uji keasaman pH meter ($\le 4,5$), dan evaluasi organoleptik.
  5. Mengoordinasikan protokol pengujian cemaran mikrobiologi (Salmonella, E. coli, Coliform, kapang/khamir) serta uji masa simpan (ASLT) bersama **MBRIO Food Laboratory**.
  6. Memastikan seluruh produk dan fasilitas memenuhi standar izin edar Badan Pengawas Obat dan Makanan (BPOM) serta sertifikasi Halal Indonesia.

### 💻 Anggota 2 — IVAN FADHILA
* **Jabatan Utama:** *Chief Technology Officer (CTO) & Head of Digital Systems & Supply Chain*
* **Tanggung Jawab & Jobdesk Operasional:**
  1. Membangun dan memelihara arsitektur platform digital *Food Passport (QR Code)* berbasis web responsif untuk ketertelusuran rantai pasok dari hulu ke hilir.
  2. Mengembangkan algoritma matematis *Circularity Score* ($\text{CS} = 0.5 R_{\text{mass}} + 0.3 Q_{\text{shelf}} + 0.2 E_{\text{pack}}$) per batch produksi.
  3. Merancang antarmuka *Automated ESG Dashboard* untuk mitra korporasi hulu guna menampilkan metrik reduksi emisi gas rumah kaca ($2,32424\text{ kg CO}_2\text{-eq/kg}$).
  4. Mengatur logistik penjemputan surplus menggunakan boks pendingin berinsulasi (*cold-box* $<15^\circ\text{C}$) serta penjadwalan rute kurir pengiriman pesanan B2B.
  5. Mengelola perawatan mesin pengolahan utama (*dehydrator*, mesin penggiling/miller, *chamber vacuum sealer*, dan *chest freezer*) melalui jadwal *preventive maintenance*.
  6. Menganalisis metrik data neraca massa (*mass balance*) operasional dan menyiapkan kesiapan sistem teknologi untuk replikasi multi-hub di Tahun ke-3.

---

## 🔬 3. Spesifikasi Teknis Bab 6.4: Arsitektur Digital Food Passport (QR) & Metodologi Perhitungan

### A. 5 Blok Informasi Terverifikasi Food Passport (QR):
1. **Identitas Batch:** Nomor Batch (`#RV-2026-014-SBY`), Nama Produk (*Upcycled Carrot & Pumpkin Composite Flour*), Berat Bersih (1.000 g), Tanggal Produksi, dan Tanggal Kedaluwarsa (+9 bulan).
2. **Jejak Hulu (Origin Traceability):** Asal Mitra Penyedia Surplus (Hotel Bintang 4 & Supermarket Ritel Surabaya Timur), Waktu Penjemputan (01 Nov 2026, 19.30 WIB - Cold Box 12°C), dan Massa Bahan Segar Diselamatkan (3,20 kg).
3. **Jejak Proses & Parameter Mutu QC:** Metode Olah (*Low-Temp Dehydration 55°C & 100-Mesh Milling*), Kadar Air Aktual (7,1% ≤ 8,0%), Status Mikrobiologi (*Passed — Verified via MBRIO Food Laboratory*), dan Sertifikat Halal.
4. **Metrik Dampak Lingkungan:** Berat Food Loss yang Dicegah (3,20 kg segar) dan Jumlah Emisi GRK yang Dihindari (7,44 kg CO₂-eq).
5. **Circularity Score:** Indeks penilaian sirkularitas 94/100 (Grade A+ Circular Process).

### B. Rumus Matematis Circularity Score:
$$\text{CS} = (0,50 \times R_{\text{mass}}) + (0,30 \times Q_{\text{shelf}}) + (0,20 \times E_{\text{pack}})$$
* $R_{\text{mass}} = 96$ (Tingkat pemulihan massa edible portion)
* $Q_{\text{shelf}} = 95$ (Perpanjangan umur simpan $\ge 30\times$ lipat dari 3 hari ke 90–180 hari)
* $E_{\text{pack}} = 87,5$ (Efisiensi radius jemput lokal $< 15\text{ km}$ & kemasan vakum)
$$\text{CS} = (0,50 \times 96) + (0,30 \times 95) + (0,20 \times 87,5) = 48,0 + 28,5 + 17,5 = 94,0 \quad (\mathbf{94/100})$$

### C. Rumus Emisi GRK Bappenas:
$$\Delta E_{\text{CO}_2} = M_{\text{rescued}} \times 2,32424\text{ kg CO}_2\text{-eq/kg}$$
* **Basis Output (300 kg/bln):** $300 \times 2,32424 = 697,27\text{ kg CO}_2\text{-eq/bln} \ (8,37\text{ ton CO}_2\text{-eq/thn})$.
* **Basis Input (600 kg/bln):** $600 \times 2,32424 = 1.394,54\text{ kg CO}_2\text{-eq/bln} \ (16,73\text{ ton CO}_2\text{-eq/thn})$.

---

## 🎨 4. Palet Warna & Desain (Sesuai Design Brief Poster)
* **Forest Green (`#153F32`):** Identitas utama, tombol, dan judul (alami, stabil, tepercaya).
* **Deep Forest (`#0B2D24`):** Latar hero & permukaan *Dark Mode*.
* **Lime (`#D6EE79`):** Aksen pertumbuhan, penunjuk alur, *badge*, dan *highlight* angka surplus.
* **Mint (`#77CDB8`):** Transisi dan aksen teknologi/pelacakan digital.
* **Warm Cream (`#F5F3E9`):** Latar belakang *Light Mode*, kesan pangan organik.
* **Orange/Coral (`#EF9A55`):** Aksen penanda surplus pangan.
* **SDG 8 (`#A21942`) & SDG 12 (`#BF8B2E`):** Aksen warna resmi tujuan pembangunan berkelanjutan.

---

## 🚀 5. Panduan Step-by-Step Push ke GitHub & Deploy ke Vercel

### Step 1: Push ke GitHub (bimskuy1205/Revalue-KompeSpiking)
Semua berkas proyek telah siap di folder komputer Anda. Karena GitHub memerlukan otentikasi akun Anda (Personal Access Token / Browser Login), jalankan perintah berikut di PowerShell atau Command Prompt Anda:

```powershell
cd C:\Users\ASUS\.gemini\antigravity\scratch\revalue-web-profile
git push -u origin master
```
*(Atau jika Anda ingin menggunakan branch `main`:)*
```powershell
git branch -M main
git push -u origin main
```
> **Catatan Otentikasi GitHub:**
> Jika muncul jendela login GitHub di layar Anda, klik **"Sign in with your browser"** atau masukkan Personal Access Token (PAT) GitHub Anda. Seketika semua berkas akan terunggah ke repositori `https://github.com/bimskuy1205/Revalue-KompeSpiking`.

---

### Step 2: Deploy ke Vercel (Gratis & Aktif untuk Umum)
1. Buka peramban ke **[vercel.com](https://vercel.com)** dan login menggunakan akun GitHub Anda.
2. Di Dashboard Vercel, klik tombol **"Add New..."** ➔ pilih **"Project"**.
3. Cari repositori **`bimskuy1205/Revalue-KompeSpiking`** lalu klik tombol **"Import"**.
4. Pada form konfigurasi:
   * **Framework Preset:** Pilih `Other` (atau biarkan default).
   * **Root Directory:** `./`
   * **Build and Output Settings:** Biarkan default (tanpa build command, karena ini static HTML modern).
5. Klik tombol biru **"Deploy"**.
6. **Selesai! 🎉**  
   Dalam kurun waktu 15–20 detik, Vercel akan menghasilkan URL publik aktif (misalnya `https://revalue-kompespiking.vercel.app`), lengkap dengan halaman utama `index.html` dan laman verifikasi Food Passport interaktif `passport.html`.

---

## 📂 6. Struktur Berkas Proyek

```
revalue-web-profile/
│
├── index.html                   # Halaman web profile utama REVALUE yang super interaktif & lengkap
├── passport.html                # Laman verifikasi Food Passport QR interaktif (terbuka saat QR di-scan)
├── style.css                    # Sistem styling Design Brief, 3D tilt, dark/light mode, glassmorphism
├── app.js                       # Logika interaktif: QR generator, kalkulator finansial, modal profil tim
├── vercel.json                  # Konfigurasi caching, clean URLs, dan headers keamanan hosting Vercel
├── README.md                    # Dokumentasi komprehensif & panduan operasional
│
└── assets/
    ├── mockup-dashboard-revalue.png       # Mockup resolusi tinggi Dashboard ESG (Arsitek: Bimo Satrio)
    ├── mockup-dashboard-revalue.jpg       # Format JPEG mockup dashboard
    ├── survei-pasar-validasi-lengkap.jpg  # Infografis survei pasar revisi (foto asli B2B & B2C + mockup dashboard)
    ├── survei-pasar-validasi-lengkap.png  # Format PNG survei pasar revisi lengkap
    ├── survei-pasar-validasi.jpg          # Berkas aktif yang ditampilkan di website
    └── food-passport-ui-ref.jpg           # Berkas referensi kartu Food Passport UI
```
