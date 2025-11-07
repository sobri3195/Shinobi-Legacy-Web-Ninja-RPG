# Setup Instructions

## 🚀 Quick Start

1. **Install Dependencies**
```bash
npm install
```

2. **Start Development Server**
```bash
npm run dev
```

The application will open at http://localhost:3000

## 📦 Dependencies Installed

### Core
- React 18.2.0
- React DOM 18.2.0
- React Router DOM 6.20.0

### State Management
- Redux Toolkit 2.0.1
- React Redux 9.0.4

### UI & Animation
- Framer Motion 10.16.16
- TailwindCSS 3.4.0
- Lucide React 0.300.0 (icons)
- clsx 2.0.0

### Audio
- Howler.js 2.2.4

### Build Tools
- Vite 5.0.8
- @vitejs/plugin-react 4.2.1

## 🎮 Game Features

### Implemented:
✅ Character Creation
✅ Village Map Navigation
✅ Battle System (Turn-based)
✅ Mission System
✅ Shop System
✅ Inventory & Equipment
✅ Profile & Stats
✅ Hospital (HP/CP restoration)
✅ LocalStorage persistence

### Coming Soon:
🔄 Dojo & Training
🔄 Arena PvP
🔄 Skill Tree System
🔄 More missions & enemies
🔄 Sound effects & music

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code

## 📁 Project Structure

```
src/
├── components/
│   ├── battle/      # Battle-related components
│   ├── character/   # Character stats, inventory
│   ├── map/         # Village map
│   ├── ui/          # Reusable UI components
│   └── shared/      # Shared components
├── pages/           # Page components
├── store/           # Redux store & slices
├── utils/           # Game logic & utilities
├── data/            # Game data (JSON)
├── hooks/           # Custom React hooks
└── styles/          # Global styles
```

## 🎨 Color Palette

- Fire (Red): #DC143C
- Water (Blue): #4682B4
- Thunder (Yellow): #FFA500
- Wind (Green): #228B22
- Earth (Brown): #A0522D

## 💾 LocalStorage Keys

- `shinobi_player` - Player data
- `shinobi_settings` - Game settings
- `shinobi_save_version` - Save version

## 🐛 Troubleshooting

### Port already in use
```bash
npx kill-port 3000
```

### Clear and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📝 Notes

- Game saves automatically to localStorage
- No backend required - fully client-side
- Export/import save data available in settings
- Best played on desktop browsers

Enjoy playing Shinobi Legacy! 🥷✨
