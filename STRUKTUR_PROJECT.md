# 📂 Struktur Project Shinobi Legacy

## Overview

Project ini adalah game RPG berbasis web yang dibangun dengan React.js, Redux Toolkit, dan TailwindCSS. Berikut adalah penjelasan lengkap struktur project.

## 🗂️ Root Directory

```
shinobi-legacy/
├── public/              # Static assets
├── src/                 # Source code
├── dist/                # Production build (generated)
├── node_modules/        # Dependencies (generated)
├── .git/                # Git repository
├── package.json         # NPM dependencies & scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # TailwindCSS configuration
├── postcss.config.js    # PostCSS configuration
├── .eslintrc.cjs        # ESLint configuration
├── .prettierrc          # Prettier configuration
├── .editorconfig        # Editor configuration
├── .gitignore           # Git ignore rules
├── .env.example         # Environment variables template
├── netlify.toml         # Netlify deployment config
├── vercel.json          # Vercel deployment config
├── index.html           # HTML entry point
└── README.md            # Main documentation
```

## 📁 `/src` - Source Code

### Main Files

```
src/
├── main.jsx            # React entry point
├── App.jsx             # Main App component with routing
└── styles/
    └── index.css       # Global CSS & Tailwind
```

### `/components` - React Components

#### `/components/battle/` - Battle System
```
battle/
├── BattleCharacter.jsx    # Character display in battle
├── BattleActions.jsx      # Action buttons (Attack, Jutsu, etc)
└── BattleLog.jsx          # Battle history log
```

#### `/components/character/` - Character Management
```
character/
├── CharacterStats.jsx     # Stats display (HP, CP, Attack, etc)
└── InventoryGrid.jsx      # Inventory & equipment grid
```

#### `/components/map/` - Navigation
```
map/
└── VillageMap.jsx         # Village location grid
```

#### `/components/ui/` - Reusable UI Components
```
ui/
├── Button.jsx             # Customizable button component
├── Card.jsx               # Card container component
├── Modal.jsx              # Modal/dialog component
├── StatBar.jsx            # HP/CP/EXP progress bars
└── index.js               # Barrel export
```

#### `/components/shared/` - Shared Components
```
shared/
├── ElementBadge.jsx       # Element indicator badge
├── RarityBadge.jsx        # Item rarity badge
├── Loading.jsx            # Loading spinner
└── index.js               # Barrel export
```

### `/pages` - Page Components

```
pages/
├── Home.jsx               # Landing/home page
├── CharacterCreation.jsx  # Character creation wizard
├── Village.jsx            # Village hub
├── Battle.jsx             # Battle screen
├── Missions.jsx           # Mission selection
├── Shop.jsx               # Item shop
├── Profile.jsx            # Character profile
├── Inventory.jsx          # Inventory management
├── Hospital.jsx           # HP/CP restoration
├── Arena.jsx              # PvP arena (coming soon)
└── Dojo.jsx               # Training hall (coming soon)
```

### `/store` - Redux State Management

```
store/
├── store.js               # Redux store configuration
└── slices/
    ├── playerSlice.js     # Player state (character, inventory, stats)
    ├── battleSlice.js     # Battle state (combat system)
    └── gameSlice.js       # Game state (settings, UI, data)
```

#### State Structure

**playerSlice:**
- character (name, element, gender)
- inventory (items array)
- equipment (weapon, armor, accessory)
- jutsuList (learned jutsu)
- currency (gold, gem)
- stats (level, HP, CP, attack, defense, etc)
- missions (completed, available, active)
- achievements
- battleStats (wins, losses)

**battleSlice:**
- isActive (battle ongoing)
- battleInstance (BattleSystem class)
- player (battle player state)
- enemy (battle enemy state)
- turn (current turn number)
- isPlayerTurn (turn indicator)
- battleLog (action history)
- winner (battle result)
- rewards (battle rewards)

**gameSlice:**
- currentLocation (village location)
- allJutsu (jutsu database)
- allItems (items database)
- allMissions (missions database)
- settings (sound, music, volume)
- ui (menu states, dialogs)

### `/utils` - Utility Functions

```
utils/
├── constants.js           # Game constants (elements, rarities, etc)
├── gameLogic.js           # Core game logic (stats, damage, etc)
├── battleSystem.js        # Battle system class & AI
├── storage.js             # LocalStorage utilities
└── index.js               # Barrel export
```

#### Key Functions

**gameLogic.js:**
- `calculateStats()` - Calculate character stats
- `calculateExpForLevel()` - EXP curve
- `calculateDamage()` - Damage calculation
- `applyStatusEffect()` - Status effect logic
- `processStatusEffects()` - Process active effects
- `canUseJutsu()` - Jutsu availability check
- `getRandomItem()` - Random item generation
- `calculateRewards()` - Mission rewards
- `formatNumber()` - Number formatting
- `getElementColor()` - Element color mapping

**battleSystem.js:**
- `BattleSystem` class - Core battle logic
- `createAIAction()` - AI decision making

**storage.js:**
- `saveToStorage()` - Save to localStorage
- `loadFromStorage()` - Load from localStorage
- `savePlayerData()` - Save player data
- `loadPlayerData()` - Load player data
- `exportSaveData()` - Export save file
- `importSaveData()` - Import save file

### `/data` - Game Data (JSON)

```
data/
├── jutsu.json             # Jutsu database (8 jutsu)
├── items.json             # Items database (11 items)
└── missions.json          # Missions database (5 missions)
```

#### Data Structure Examples

**jutsu.json:**
```json
{
  "id": "fireball",
  "name": "Katon: Goukakyuu no Jutsu",
  "type": "ninjutsu",
  "element": "fire",
  "rank": "C",
  "cost": { "cp": 20, "cooldown": 2 },
  "power": { "base": 50, "scaling": 1.5 },
  "description": "Jutsu api yang mengeluarkan bola api besar",
  "effects": [...]
}
```

**items.json:**
```json
{
  "id": "health_potion",
  "name": "Health Potion",
  "type": "consumable",
  "rarity": "common",
  "effects": [...],
  "price": { "buy": 100, "sell": 50 },
  "description": "Memulihkan 50 HP",
  "icon": "💊"
}
```

**missions.json:**
```json
{
  "id": "tutorial_1",
  "name": "Tutorial: Latihan Dasar",
  "difficulty": "easy",
  "level": 1,
  "description": "...",
  "objectives": [...],
  "enemy": {...},
  "rewards": {...},
  "story": {...}
}
```

### `/hooks` - Custom React Hooks

```
hooks/
├── useSound.js            # Audio playback hook
└── useLocalStorage.js     # LocalStorage state hook
```

## 🎨 Styling System

### TailwindCSS Configuration

**Custom Colors:**
- Fire: `#DC143C` (Red)
- Water: `#4682B4` (Blue)
- Thunder: `#FFA500` (Orange/Yellow)
- Wind: `#228B22` (Green)
- Earth: `#A0522D` (Brown)
- UI: `#2C3E50` (Dark), `#ECF0F1` (Light)

**Custom Classes:**
- `.btn` - Base button
- `.btn-primary` - Primary button (fire theme)
- `.btn-secondary` - Secondary button
- `.card` - Card container
- `.input` - Input field
- `.element-badge` - Element badge
- `.stat-bar` - Progress bar container
- `.stat-fill` - Progress bar fill

### Animation Classes

- `animate-slide-in` - Slide in from top
- `animate-fade-in` - Fade in
- `animate-bounce-slow` - Slow bounce
- `animate-pulse-slow` - Slow pulse
- `animate-attack` - Attack animation
- `animate-damage` - Damage animation

## 📦 Dependencies

### Production Dependencies
- `react` (18.2.0) - UI library
- `react-dom` (18.2.0) - React DOM
- `react-router-dom` (6.20.0) - Routing
- `@reduxjs/toolkit` (2.0.1) - State management
- `react-redux` (9.0.4) - React-Redux bindings
- `framer-motion` (10.16.16) - Animations
- `howler` (2.2.4) - Audio engine
- `clsx` (2.0.0) - Class name utility
- `lucide-react` (0.300.0) - Icons

### Development Dependencies
- `vite` (5.0.8) - Build tool
- `@vitejs/plugin-react` (4.2.1) - React plugin
- `tailwindcss` (3.4.0) - CSS framework
- `autoprefixer` (10.4.16) - CSS prefixer
- `postcss` (8.4.32) - CSS processor
- `eslint` (8.55.0) - Linter
- `prettier` (3.1.1) - Code formatter

## 🔧 Build Process

### Development
```bash
npm run dev
# Starts Vite dev server on port 3000
```

### Production Build
```bash
npm run build
# Creates optimized build in /dist
```

### Preview Build
```bash
npm run preview
# Preview production build locally
```

## 💾 LocalStorage Structure

### Keys Used
- `shinobi_player` - Player data
- `shinobi_settings` - Game settings
- `shinobi_save_version` - Save version

### Player Data Schema
```json
{
  "character": {
    "name": "string",
    "element": "string",
    "gender": "string",
    "createdAt": "number"
  },
  "inventory": [],
  "equipment": {},
  "jutsuList": [],
  "currency": {},
  "stats": {},
  "missions": {},
  "achievements": [],
  "battleStats": {},
  "lastSaved": "number",
  "version": "string"
}
```

## 🚀 Deployment Structure

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- Redirects: All routes to `index.html`

### Vercel
- Auto-detected as Vite project
- Build output: `dist`
- Framework preset: Vite

## 📝 File Naming Conventions

- **Components**: PascalCase (e.g., `CharacterStats.jsx`)
- **Utilities**: camelCase (e.g., `gameLogic.js`)
- **Data files**: lowercase (e.g., `jutsu.json`)
- **Pages**: PascalCase (e.g., `Battle.jsx`)
- **Configs**: lowercase (e.g., `vite.config.js`)

## 🔍 Import Aliases

Configured in `vite.config.js`:

```javascript
'@' → './src'
'@components' → './src/components'
'@pages' → './src/pages'
'@store' → './src/store'
'@utils' → './src/utils'
'@data' → './src/data'
'@hooks' → './src/hooks'
'@styles' → './src/styles'
```

Usage:
```javascript
import Button from '@components/ui/Button'
import { ELEMENTS } from '@utils/constants'
import jutsuData from '@data/jutsu.json'
```

## 📊 Bundle Analysis

Production build sizes:
- **index.html**: ~1.3 KB
- **CSS**: ~23 KB (gzip: ~5 KB)
- **Redux vendor**: ~25 KB (gzip: ~9 KB)
- **Main JS**: ~69 KB (gzip: ~19 KB)
- **Animation vendor**: ~102 KB (gzip: ~34 KB)
- **React vendor**: ~159 KB (gzip: ~52 KB)

**Total**: ~379 KB (gzip: ~119 KB)

---

**Struktur ini dirancang untuk:**
✅ Modular dan mudah di-maintain
✅ Scalable untuk fitur baru
✅ Performance optimal
✅ Developer-friendly
✅ Production-ready

🥷 Happy Coding!
