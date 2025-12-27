# 🍳 What's in My Fridge?

**What's in My Fridge?** adalah aplikasi mobile pencari resep makanan yang membantu Anda menemukan resep berdasarkan bahan-bahan yang tersedia di kulkas Anda. Tidak perlu bingung lagi mau masak apa! Cukup masukkan bahan yang Anda miliki, dan aplikasi akan memberikan rekomendasi resep yang sempurna.

<p>
<img src="https://img.shields.io/badge/React_Native-0.81.5-61DAFB?logo=react" alt="React Native">
<img src="https://img.shields.io/badge/Expo-54.0.29-000020?logo=expo" alt="Expo">
<img src="https://img.shields.io/badge/License-Private-red?logo=license-private" alt="License">
</p>

---

## 📋 Daftar Isi

- [Fitur](#-fitur)
- [Screenshot](#-screenshot)
- [Teknologi](#-teknologi)
- [Struktur Proyek](#-struktur-proyek)
- [Instalasi](#-instalasi)
- [Cara Penggunaan](#-cara-penggunaan)
- [API Reference](#-api-reference)
- [Kontributor](#-kontributor)
- [Lisensi](#-lisensi)

---

## ✨ Fitur

### 🔍 Pencarian Berdasarkan Bahan

Temukan resep makanan berdasarkan bahan-bahan yang ada di kulkas Anda. Cukup masukkan satu atau beberapa bahan, dipisahkan dengan koma.

### 📖 Katalog Resep Lengkap

Jelajahi ribuan resep makanan dari berbagai negara dan kategori. Resep diurutkan berdasarkan abjad untuk memudahkan pencarian.

### ❤️ Simpan Favorit

Simpan resep favorit Anda untuk akses cepat di kemudian hari. Data favorit disimpan secara lokal menggunakan SQLite.

### 📱 Navigasi Intuitif

- **Drawer Navigation**: Menu samping untuk navigasi utama
- **Stack Navigation**: Navigasi antar halaman detail
- **Pagination**: Navigasi halaman untuk daftar resep yang panjang

### 🎨 UI/UX Modern

Desain antarmuka yang bersih dan modern dengan tema warna oranye yang hangat, memberikan pengalaman pengguna yang menyenangkan.

---

## 📸 Screenshot

> _Screenshot aplikasi akan ditampilkan di sini_

---

## 🛠 Teknologi

### Frontend

| Teknologi    | Versi   | Deskripsi                         |
| ------------ | ------- | --------------------------------- |
| React Native | 0.81.5  | Framework mobile cross-platform   |
| Expo         | 54.0.25 | Platform development React Native |
| React        | 19.1.0  | Library UI                        |

### Navigasi

| Package                        | Versi  | Deskripsi                 |
| ------------------------------ | ------ | ------------------------- |
| @react-navigation/native       | 7.1.22 | Core navigation           |
| @react-navigation/drawer       | 7.7.5  | Drawer/sidebar navigation |
| @react-navigation/native-stack | 7.8.2  | Stack navigation          |
| @react-navigation/bottom-tabs  | 7.8.8  | Bottom tab navigation     |

### Data & Storage

| Package                     | Versi  | Deskripsi                      |
| --------------------------- | ------ | ------------------------------ |
| axios                       | 1.13.2 | HTTP client untuk API requests |
| react-native-sqlite-storage | 6.0.1  | Database lokal SQLite          |

### UI Components

| Package                        | Versi   | Deskripsi                   |
| ------------------------------ | ------- | --------------------------- |
| lucide-react-native            | 0.555.0 | Icon library modern         |
| react-native-safe-area-context | 5.6.0   | Safe area handling          |
| react-native-screens           | 4.16.0  | Native screens optimization |

### External API

- **TheMealDB API** - Database resep makanan gratis

---

## 📁 Struktur Proyek

```
Meal-app/
├── 📄 App.js                    # Entry point aplikasi
├── 📄 index.js                  # Registry aplikasi
├── 📄 app.json                  # Konfigurasi Expo
├── 📄 package.json              # Dependencies & scripts
├── 📁 assets/                   # Aset statis
│   ├── 🖼️ icon.png              # App icon
│   ├── 🖼️ adaptive-icon.png     # Android adaptive icon
│   ├── 🖼️ splash-icon.png       # Splash screen icon
│   └── 🖼️ favicon.png           # Web favicon
├── 📁 src/                      # Source code
│   ├── 📁 component/            # Komponen reusable
│   │   ├── custom-drawer.js     # Custom drawer menu
│   │   ├── food-card.js         # Kartu makanan
│   │   ├── header.js            # Header aplikasi
│   │   ├── loading.js           # Loading modal
│   │   ├── move-button.js       # Tombol navigasi pagination
│   │   ├── page-button.js       # Tombol halaman pagination
│   │   ├── pagination.js        # Komponen pagination
│   │   └── search-bar.js        # Search bar
│   ├── 📁 navigator/            # Navigasi
│   │   ├── side-bar.js          # Drawer navigator
│   │   └── stack-bar.js         # Stack navigator
│   ├── 📁 request/              # API requests
│   │   ├── request.js           # Base request handler
│   │   └── request-meal.js      # Meal API functions
│   ├── 📁 storage/              # Local storage
│   │   └── sqlite.js            # SQLite operations
│   └── 📁 tab/                  # Halaman/screens
│       ├── home.js              # Halaman utama
│       ├── detail.js            # Detail resep
│       ├── bookmark.js          # Daftar favorit
│       ├── about.js             # Tentang aplikasi
│       ├── filtered-meals.js    # Hasil filter
│       └── search-meals.js      # Hasil pencarian
└── 📁 android/                  # Native Android files
```

---

## 🚀 Instalasi

### Prerequisites

Pastikan Anda telah menginstall:

- [Node.js](https://nodejs.org/) (versi 18 atau lebih baru)
- [npm](https://www.npmjs.com/) atau [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Android Studio](https://developer.android.com/studio) (untuk Android development)

### Langkah Instalasi

1. **Clone repository**

   ```bash
   git clone <repository-url>
   cd Meal-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Jalankan aplikasi**

   ```bash
   # Development mode
   npm start

   # Android
   npm run android

   # iOS
   npm run ios

   # Web
   npm run web
   ```

---

## 📖 Cara Penggunaan

### 1. Halaman Utama (Home)

- Lihat daftar semua resep yang tersedia
- Gunakan pagination A-Z untuk navigasi berdasarkan huruf awal nama resep
- Ketuk kartu makanan untuk melihat detail resep

### 2. Pencarian Berdasarkan Bahan

- Ketuk search bar di bagian atas
- Masukkan bahan-bahan yang Anda miliki (pisahkan dengan koma)
- Contoh: `chicken, garlic, onion`
- Tekan tombol search untuk melihat hasil

### 3. Melihat Detail Resep

- Ketuk kartu makanan dari daftar
- Lihat informasi lengkap termasuk:
  - Gambar makanan
  - Kategori dan asal negara
  - Daftar bahan-bahan dengan ukuran
  - Langkah-langkah pembuatan

### 4. Menyimpan Favorit

- Pada halaman detail, ketuk ikon bookmark
- Resep akan disimpan ke daftar favorit
- Akses favorit melalui menu drawer → Bookmark

### 5. Navigasi Menu

- Geser dari kiri atau ketuk ikon menu untuk membuka drawer
- Pilih menu: Home, Bookmark, atau About

---

## 🔌 API Reference

Aplikasi ini menggunakan [TheMealDB API](https://www.themealdb.com/api.php) untuk mengambil data resep.

### Endpoints yang Digunakan

| Endpoint                     | Method | Deskripsi                            |
| ---------------------------- | ------ | ------------------------------------ |
| `/search.php?f={letter}`     | GET    | Cari resep berdasarkan huruf awal    |
| `/search.php?s={name}`       | GET    | Cari resep berdasarkan nama          |
| `/filter.php?i={ingredient}` | GET    | Filter resep berdasarkan bahan       |
| `/filter.php?c={category}`   | GET    | Filter resep berdasarkan kategori    |
| `/filter.php?a={area}`       | GET    | Filter resep berdasarkan negara asal |

### Contoh Response

```json
{
  "meals": [
    {
      "idMeal": "52772",
      "strMeal": "Teriyaki Chicken Casserole",
      "strCategory": "Chicken",
      "strArea": "Japanese",
      "strInstructions": "...",
      "strMealThumb": "https://...",
      "strIngredient1": "soy sauce",
      "strMeasure1": "3/4 cup"
    }
  ]
}
```

---

## 💾 Database Schema

Aplikasi menggunakan SQLite untuk menyimpan resep favorit secara lokal.

### Tabel: `favmeals`

| Kolom        | Tipe    | Deskripsi              |
| ------------ | ------- | ---------------------- |
| id           | INTEGER | ID unik dari TheMealDB |
| meal         | TEXT    | Nama resep             |
| category     | TEXT    | Kategori makanan       |
| area         | TEXT    | Negara asal            |
| instructions | TEXT    | Langkah pembuatan      |
| thumbnail    | TEXT    | URL gambar             |
| ingredients  | TEXT    | JSON array bahan-bahan |

---

## 🎨 Tema & Warna

Aplikasi menggunakan palette warna yang konsisten:

| Warna             | Hex Code  | Penggunaan                  |
| ----------------- | --------- | --------------------------- |
| Primary           | `#F97316` | Header, tombol utama, aksen |
| Primary Light     | `#FB923C` | Icon, badge                 |
| Background        | `#FFF7ED` | Background utama            |
| Card Background   | `#FFFFFF` | Background kartu            |
| Accent Background | `#FFEDD5` | Background aksen            |
| Text Primary      | `#1F2937` | Teks utama                  |
| Text Secondary    | `#4B5563` | Teks sekunder               |
| Text Muted        | `#6B7280` | Teks tersier                |

---

## 📱 Komponen Utama

### FoodCard

Kartu untuk menampilkan preview makanan dengan gambar, nama, kategori, dan tombol "View Recipe".

### Header

Header aplikasi dengan menu drawer, logo, dan search bar.

### Pagination

Komponen navigasi halaman dengan tombol prev/next dan indikator halaman aktif.

### Loading

Modal loading transparan dengan indikator aktivitas dan pesan loading.

### CustomDrawer

Drawer menu kustom dengan header, daftar menu, dan footer versi aplikasi.

---

## 👨‍💻 Kontributor

- **Bentar Segara** - _Developer_
  - 📧 Email: Segarabuana@gmail.com
  - 🐙 GitHub: [github.com/BentarSegara](https://github.com/BentarSegara)

---

## 📄 Lisensi

Proyek ini bersifat **Private** dan tidak untuk distribusi publik.

---

## 🙏 Acknowledgments

- [TheMealDB](https://www.themealdb.com/) - API database resep gratis
- [React Native](https://reactnative.dev/) - Framework mobile
- [Expo](https://expo.dev/) - Platform development
- [Lucide Icons](https://lucide.dev/) - Library icon modern

---

<div align="center">
  <p>© 2025 What's in My Fridge. All rights reserved.</p>
</div>
