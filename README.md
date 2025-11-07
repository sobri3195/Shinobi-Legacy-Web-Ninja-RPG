# 🥷 Shinobi Legacy

<div align="center">

![Shinobi Legacy](https://img.shields.io/badge/Game-Shinobi%20Legacy-orange?style=for-the-badge)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)
![Netlify](https://img.shields.io/badge/Netlify-Deploy-00C7B7?style=for-the-badge&logo=netlify)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Game RPG berbasis web yang menghidupkan kembali keseruan Ninja Saga Facebook**

[🎮 Play Demo](https://shinobi-legacy.netlify.app) | [📖 Documentation](#) | [🐛 Report Bug](#) | [✨ Request Feature](#)

</div>

---

## 🌸 Tentang Proyek

**Shinobi Legacy** adalah game RPG berbasis web yang meniru keseruan game legendaris **Ninja Saga Facebook**, dibangun menggunakan **React.js** dan dapat di-deploy di **Netlify.app**.

Game ini dirancang agar bisa dimainkan langsung melalui browser — **ringan**, **responsif**, dan tetap membawa nostalgia turn-based ninja battle yang penuh strategi dan gaya anime klasik.

### ✨ Kenapa Shinobi Legacy?

- 🎯 **Nostalgia** - Menghidupkan kembali pengalaman Ninja Saga yang legendaris
- 🌐 **Browser-Based** - Main langsung tanpa instalasi
- 📱 **Responsif** - Optimal di desktop & mobile
- ⚡ **Modern Tech Stack** - Dibangun dengan teknologi web terkini
- 🎨 **Anime-Inspired** - Visual dan gameplay bergaya anime klasik

---

## ⚙️ Teknologi yang Digunakan

| Kategori | Teknologi |
|----------|-----------|
| **Frontend** | React.js (Vite/CRA) |
| **State Management** | Redux Toolkit / Zustand |
| **Routing** | React Router v6 |
| **Animation** | Framer Motion |
| **Storage** | LocalStorage |
| **Deployment** | Netlify.app |
| **Sound Engine** | Howler.js |
| **UI Library** | TailwindCSS / Chakra UI (opsional) |

### 💾 Penyimpanan Data (LocalStorage)

Shinobi Legacy menggunakan **LocalStorage** sebagai solusi penyimpanan utama:
- ✅ **Tanpa backend** - Tidak perlu server database
- ✅ **Offline capable** - Data tersimpan lokal di browser
- ✅ **Export/Import** - Backup dan restore save data
- ✅ **Ringan & cepat** - Akses data instant
- ⚠️ **Per-browser** - Save data tidak sync antar device (fitur cloud save untuk future update)

---

## 🎮 Fitur Utama Game

### 🧙‍♂️ 1. Pembuatan Karakter Ninja

- Pilih **gender**, **rambut**, **pakaian**, dan **nama ninja**
- Tentukan **elemen dasar**:
  - 🔥 **Api** - Serangan agresif dengan damage tinggi
  - 🌊 **Air** - Defensive dengan healing ability
  - ⚡ **Petir** - Speed tinggi dan critical chance
  - 🌪️ **Angin** - Evasion dan combo attack
  - 🌍 **Tanah** - Defense tinggi dan endurance
- Setiap elemen memiliki **buff** dan **jurus unik**

### ⚔️ 2. Pertarungan Turn-Based

- Sistem giliran klasik **1v1** (PvE dan PvP)
- Pilihan aksi: **Jurus**, **Serangan Biasa**, **Pertahanan**, **Item**
- **Efek status** yang mempengaruhi strategi:
  - 🔥 **Burn** - Damage over time
  - ❄️ **Freeze** - Skip turn
  - 💀 **Poison** - Gradual HP drain
  - ⚡ **Stun** - Unable to act
  - 🛡️ **Shield** - Damage reduction
- **Chakra Management** - Resource untuk jurus kuat
- **Combo System** - Chain attacks untuk bonus damage

### 🗺️ 3. Misi & Quest

- **Misi dari NPC**: latihan, pembunuhan target, boss battle
- **Reward System**: XP, Gold, dan item langka
- **Dialog interaktif** sebelum & sesudah misi
- **Difficulty Tiers**: Easy → Normal → Hard → Expert
- **Story-driven quests** dengan cutscene

### 💥 4. Jutsu & Skill Tree

- **Belajar jurus baru** seiring naik level
- **Tipe jurus**:
  - **Ninjutsu** - Serangan elemen magis
  - **Taijutsu** - Serangan fisik & combo
  - **Genjutsu** - Illusion dan crowd control
  - **Kekkei Genkai** - Ultimate skill spesial
- **Sistem cooldown** dan **chakra cost** realistis
- **Skill tree branching** untuk customization

### 🏹 5. Inventory & Equipment

- **Item Categories**:
  - ⚔️ Senjata (Katana, Kunai, Shuriken)
  - 🛡️ Armor (Helm, Body, Boots)
  - 📜 Scroll (Jutsu enhancement)
  - 💊 Potion (HP, Chakra, Status cure)
- **Rarity System**: 
  - ⚪ Common
  - 🟢 Uncommon
  - 🔵 Rare
  - 🟣 Epic
  - 🟠 Legendary
- **Sistem upgrade** & **enchantment** opsional
- **Weight/Capacity system** untuk inventory management

### 🏯 6. Village & Map System

Navigasi melalui **map interaktif** seperti RPG klasik:

- 🥋 **Dojo** - Training & skill learning
- ⚔️ **Arena** - PvP battles
- 📋 **Mission Hall** - Accept quests
- 🏪 **Shop** - Buy items & equipment
- 🏥 **Hospital** - Restore HP/Chakra
- 🏘️ **Village Square** - Social hub
- 🌲 **Training Grounds** - Practice area

### 🥇 7. PvP Arena (Versus Mode)

- Lawan **pemain lain** (AI dummy di tahap awal)
- **Sistem ranking**: 
  - 🥉 E-Rank
  - 🥉 D-Rank
  - 🥈 C-Rank
  - 🥈 B-Rank
  - 🥇 A-Rank
  - 🏆 S-Rank
- **Hadiah harian** dan **reward mingguan**
- **Statistik pertarungan** (Win/Loss, Win Rate, Streak)
- **Leaderboard global**

### 💰 8. Shop & Economy

- **Beli** item, jurus, dan potion dengan **Gold** atau **Gem**
- **Dual currency system**:
  - 💰 **Gold** - Earned through gameplay
  - 💎 **Gem** - Premium currency (optional)
- **Daily deals** & **limited time offers**
- **Trading system** (future update)

### 👤 9. Profil & Progress

- **Statistik lengkap**: Level, HP, Chakra, Attack, Defense
- **Elemen** dan **skill tree** yang sudah di-unlock
- **Riwayat misi** dan **pencapaian** (achievements)
- **Avatar animasi** & **efek chakra visual**
- **Battle history** & **personal records**
- **Title & Badge system**

---

## 🌐 Roadmap Update

| Tahap | Fitur | Deskripsi | Status |
|-------|-------|-----------|--------|
| **v1.0 (MVP)** | Core battle system | Registrasi, pertarungan dasar, misi NPC | 🚧 In Progress |
| **v1.5** | PvP & Ranking | Arena melawan pemain lain | 📅 Planned |
| **v2.0** | Clan & Guild | Sistem klan, perang mingguan, raid boss | 📅 Planned |
| **v2.5** | Companion System | Pet pendamping (burung, rubah, kucing ninja) | 💡 Idea |
| **v3.0** | Turnamen Dunia | Event ranking bulanan & leaderboard global | 💡 Idea |

### Future Features (Wishlist)

- 🏠 **Housing System** - Personal ninja house customization
- 🎣 **Mini Games** - Fishing, cooking, gambling
- 📚 **Crafting System** - Create custom weapons & items
- 🌍 **World Bosses** - Global events & raids
- 🎭 **Costume System** - Cosmetic customization
- 📱 **Mobile App** - PWA or React Native version
- 🎵 **Music Player** - In-game OST collection

---

## 🧠 Gameplay Loop

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Train → Complete Missions → Level Up              │
│     ↑                             ↓                 │
│  Repeat ← Upgrade Gear ← Fight in Arena            │
│                             ↓                       │
│                      Unlock Skills                  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

1. **Create your ninja** - Choose element & customize appearance
2. **Train at Dojo** - Learn basic skills & mechanics
3. **Accept Missions** - Complete quests from Mission Hall
4. **Battle Enemies** - Turn-based combat with strategy
5. **Earn Rewards** - Collect XP, Gold, and items
6. **Level Up** - Unlock new skills and increase stats
7. **Upgrade Equipment** - Buy better gear from shop
8. **Challenge Arena** - Test your skills in PvP
9. **Repeat & Master** - Become the ultimate shinobi!

---

## 🖼️ Gaya Visual

### Design Philosophy

- 🎨 **Tema anime Jepang klasik** (Naruto-inspired)
- 🏞️ **Background scenery**: 
  - Desa ninja tradisional
  - Dojo dengan tatami dan lantern
  - Hutan bambu misterius
  - Arena pertempuran epik
  - Gunung dengan air terjun
- ✍️ **Typography**: Font Jepang dengan romaji/kanji accent
- ✨ **Efek visual**:
  - Partikel chakra berdasarkan elemen
  - Smooth transition antar scene
  - Combat animation (slash, blast, impact)
  - Weather effects (rain, fog, sakura petals)
- 🎵 **Audio**:
  - Musik latar tradisional Jepang modern
  - SFX jurus yang immersive
  - Ambient sound (wind, water, fire)
  - Voice clips untuk critical moments

### Color Palette

```
🔥 Fire (Red):     #FF4500, #DC143C, #8B0000
🌊 Water (Blue):   #1E90FF, #4682B4, #000080
⚡ Thunder (Yellow): #FFD700, #FFA500, #FF8C00
🌪️ Wind (Green):   #32CD32, #228B22, #006400
🌍 Earth (Brown):  #8B4513, #A0522D, #654321
💎 UI Accent:      #2C3E50, #ECF0F1, #E74C3C
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 16+ 
- **npm** or **yarn**
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/shinobi-legacy.git
cd shinobi-legacy

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

### Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Netlify (manual)
# 1. Run: npm run build
# 2. Drag & drop 'dist' folder to Netlify
# 3. Or connect GitHub repo for auto-deploy
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# Game Config
VITE_GAME_VERSION=1.0.0
VITE_GAME_NAME=Shinobi Legacy
VITE_ENABLE_SOUND=true
VITE_DEBUG_MODE=false
```

---

## 📁 Project Structure

```
shinobi-legacy/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   ├── sounds/
│   │   └── music/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── character/
│   │   ├── battle/
│   │   ├── map/
│   │   ├── ui/
│   │   └── shared/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── CharacterCreation.jsx
│   │   ├── Village.jsx
│   │   ├── Battle.jsx
│   │   ├── Arena.jsx
│   │   └── Profile.jsx
│   ├── store/
│   │   ├── slices/
│   │   └── store.js
│   ├── utils/
│   │   ├── gameLogic.js
│   │   ├── battleSystem.js
│   │   └── constants.js
│   ├── data/
│   │   ├── jutsu.json
│   │   ├── items.json
│   │   ├── missions.json
│   │   └── npcs.json
│   ├── hooks/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🎯 Contributing

We welcome contributions! Here's how you can help:

1. 🍴 **Fork** the repository
2. 🌿 **Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 **Push** to the branch (`git push origin feature/AmazingFeature`)
5. 🔃 **Open** a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation if needed
- Add comments for complex logic

---

## 💡 Ide Nama Alternatif

Jika suatu saat ingin rebrand:

| Nama | Makna | Gaya |
|------|-------|------|
| **Shinobi Saga** | Pewaris spiritual Ninja Saga | Klasik & nostalgik |
| **Chakra Chronicles** | Petualangan ninja modern | Fantasi |
| **Rise of the Shinobi** | Kebangkitan ninja muda | Sinematik |
| **Elemental Path** | Fokus ke lima elemen | RPG strategis |
| **Nindo Reborn** | "Jalan ninja" versi baru | Ringan & berjiwa anime |

---

## 🐛 Known Issues

- [ ] Combat animations may lag on older devices
- [ ] Safari audio autoplay restrictions
- [ ] Mobile touch controls need optimization
- [ ] Save game sync issues with multiple tabs

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

<div align="center">

**Lettu Kes dr. Muhammad Sobri Maulana, S.Kom, CEH, OSCP, OSCE**

[![GitHub](https://img.shields.io/badge/GitHub-sobri3195-181717?style=for-the-badge&logo=github)](https://github.com/sobri3195)
[![Email](https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail)](mailto:muhammadsobrimaulana31@gmail.com)

</div>

### 🌐 Social Media & Community

- 🎥 **YouTube**: [Muhammad Sobri Maulana](https://www.youtube.com/@muhammadsobrimaulana6013)
- 📱 **TikTok**: [@dr.sobri](https://www.tiktok.com/@dr.sobri)
- 💬 **Telegram**: [Winlin Exploit](https://t.me/winlin_exploit)
- 💻 **Website**: [muhammadsobrimaulana.netlify.app](https://muhammadsobrimaulana.netlify.app)
- 🌐 **Portfolio**: [muhammad-sobri-maulana.sevalla.page](https://muhammad-sobri-maulana-kvr6a.sevalla.page/)
- 💬 **WhatsApp Group**: [Join Community](https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl)

---

## ☕ Support & Donation

Jika proyek ini bermanfaat, dukung pengembangan lebih lanjut melalui:

- 💰 **Lynk.id**: [muhsobrimaulana](https://lynk.id/muhsobrimaulana)
- ☕ **Trakteer**: [g9mkave5gauns962u07t](https://trakteer.id/g9mkave5gauns962u07t)
- 🛍️ **Gumroad**: [maulanasobri.gumroad.com](https://maulanasobri.gumroad.com/)
- ❤️ **KaryaKarsa**: [muhammadsobrimaulana](https://karyakarsa.com/muhammadsobrimaulana)
- 🎁 **Nyawer**: [MuhammadSobriMaulana](https://nyawer.co/MuhammadSobriMaulana)

Setiap donasi sangat berarti untuk pengembangan proyek open-source! 🙏

---

## 🙏 Acknowledgments

- Inspired by **Ninja Saga** (Facebook game by ngmoco)
- Character design inspired by various anime (Naruto, Bleach, One Piece)
- Community feedback and suggestions
- Open source libraries and tools

---

## 📞 Contact & Support

- 🌐 **Website**: [shinobi-legacy.netlify.app](https://shinobi-legacy.netlify.app)
- 📧 **Email**: [muhammadsobrimaulana31@gmail.com](mailto:muhammadsobrimaulana31@gmail.com)
- 💬 **WhatsApp Group**: [Join Community](https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl)
- 🎥 **YouTube**: [@muhammadsobrimaulana6013](https://www.youtube.com/@muhammadsobrimaulana6013)
- 💬 **Telegram**: [winlin_exploit](https://t.me/winlin_exploit)

---

<div align="center">

**⭐ Star this repo if you like the project!**

Made with ❤️ by [Muhammad Sobri Maulana](https://github.com/sobri3195)

[🔝 Back to Top](#-shinobi-legacy)

</div>
