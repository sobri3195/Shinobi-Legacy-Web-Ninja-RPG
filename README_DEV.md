# 🥷 Shinobi Legacy - Developer Guide

## 📚 Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Development Workflow](#development-workflow)
- [Adding Content](#adding-content)
- [State Management](#state-management)
- [Styling Guide](#styling-guide)
- [Testing](#testing)
- [Deployment](#deployment)

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/shinobi-legacy.git
cd shinobi-legacy

# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit http://localhost:3000

## 📁 Project Structure

```
src/
├── components/
│   ├── battle/          # Battle system components
│   │   ├── BattleCharacter.jsx
│   │   ├── BattleActions.jsx
│   │   └── BattleLog.jsx
│   ├── character/       # Character management
│   │   ├── CharacterStats.jsx
│   │   └── InventoryGrid.jsx
│   ├── map/            # Navigation
│   │   └── VillageMap.jsx
│   ├── ui/             # Reusable UI
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Modal.jsx
│   │   └── StatBar.jsx
│   └── shared/         # Shared components
│       ├── ElementBadge.jsx
│       ├── RarityBadge.jsx
│       └── Loading.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── CharacterCreation.jsx
│   ├── Village.jsx
│   ├── Battle.jsx
│   ├── Missions.jsx
│   ├── Shop.jsx
│   ├── Profile.jsx
│   ├── Inventory.jsx
│   ├── Hospital.jsx
│   ├── Arena.jsx
│   └── Dojo.jsx
├── store/              # Redux state
│   ├── store.js
│   └── slices/
│       ├── playerSlice.js
│       ├── battleSlice.js
│       └── gameSlice.js
├── utils/              # Utilities
│   ├── constants.js
│   ├── gameLogic.js
│   ├── battleSystem.js
│   └── storage.js
├── data/               # Game data (JSON)
│   ├── jutsu.json
│   ├── items.json
│   └── missions.json
├── hooks/              # Custom hooks
│   ├── useSound.js
│   └── useLocalStorage.js
├── styles/             # Global styles
│   └── index.css
├── App.jsx
└── main.jsx
```

## 🎮 Key Features

### 1. Character System
- Element-based stats
- Level progression
- Equipment management

### 2. Battle System
- Turn-based combat
- AI opponent
- Status effects
- Element advantages

### 3. Mission System
- Multiple difficulty levels
- Rewards (EXP, Gold, Items)
- Story-driven

### 4. Inventory & Shop
- Equipment slots
- Item categories
- Rarity system

## 🔧 Development Workflow

### Adding a New Page

1. Create page in `src/pages/`
```jsx
// src/pages/NewPage.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NewPage() {
  return <div>New Page</div>
}
```

2. Add route in `App.jsx`
```jsx
<Route path="/new-page" element={<NewPage />} />
```

### Adding a New Component

1. Create component in appropriate folder
2. Export from index file
3. Import where needed

## 📦 Adding Content

### Adding a New Jutsu

Edit `src/data/jutsu.json`:

```json
{
  "id": "my_jutsu",
  "name": "My Jutsu",
  "type": "ninjutsu",
  "element": "fire",
  "rank": "B",
  "cost": { "cp": 30, "cooldown": 2 },
  "power": { "base": 60, "scaling": 1.5 },
  "description": "My custom jutsu",
  "effects": [
    { "type": "burn", "duration": 2, "value": 10 }
  ]
}
```

### Adding a New Item

Edit `src/data/items.json`:

```json
{
  "id": "my_item",
  "name": "My Item",
  "type": "weapon",
  "rarity": "rare",
  "stats": { "attack": 20 },
  "price": { "buy": 500, "sell": 250 },
  "description": "My custom weapon",
  "icon": "⚔️"
}
```

### Adding a New Mission

Edit `src/data/missions.json`:

```json
{
  "id": "my_mission",
  "name": "My Mission",
  "difficulty": "normal",
  "level": 5,
  "description": "Mission description",
  "objectives": ["Defeat enemy"],
  "enemy": {
    "id": "enemy_id",
    "name": "Enemy Name",
    "level": 5,
    "element": "fire",
    "hp": 100,
    "cp": 50,
    "attack": 15,
    "defense": 10,
    "speed": 12,
    "jutsu": []
  },
  "rewards": {
    "exp": 200,
    "gold": 300,
    "items": []
  },
  "story": {
    "intro": "Mission intro",
    "victory": "Victory text",
    "defeat": "Defeat text"
  }
}
```

## 🔄 State Management

### Redux Slices

#### Player Slice
- Character data
- Inventory
- Equipment
- Stats
- Currency

#### Battle Slice
- Battle state
- Turn management
- Battle log
- Rewards

#### Game Slice
- Current location
- Game data (jutsu, items, missions)
- Settings
- UI state

### Dispatching Actions

```jsx
import { useDispatch } from 'react-redux'
import { gainExp, addItem } from '@store/slices/playerSlice'

const dispatch = useDispatch()

// Add EXP
dispatch(gainExp(100))

// Add item
dispatch(addItem({ id: 'health_potion', name: 'Health Potion' }))
```

## 🎨 Styling Guide

### TailwindCSS Classes

```jsx
// Button
<button className="btn btn-primary">Click</button>

// Card
<div className="card">Content</div>

// Element badge
<span className="element-badge">Fire</span>
```

### Custom Colors

```jsx
// In Tailwind config
colors: {
  fire: '#DC143C',
  water: '#4682B4',
  thunder: '#FFA500',
  wind: '#228B22',
  earth: '#A0522D'
}
```

### Framer Motion

```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  Content
</motion.div>
```

## 🧪 Testing

### Running Tests

```bash
npm test
```

### Manual Testing Checklist

- [ ] Character creation
- [ ] Battle system
- [ ] Mission completion
- [ ] Shop purchases
- [ ] Inventory management
- [ ] Level up
- [ ] LocalStorage persistence

## 🚀 Deployment

### Netlify

1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

### Vercel

1. Import project
2. Auto-detect Vite
3. Deploy

### Manual

```bash
npm run build
# Upload dist/ folder to hosting
```

## 📝 Code Style

### Naming Conventions

- **Components**: PascalCase (e.g., `CharacterStats`)
- **Files**: PascalCase for components, camelCase for utils
- **Functions**: camelCase (e.g., `handleClick`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_LEVEL`)

### Component Structure

```jsx
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function MyComponent({ prop1, prop2 }) {
  // State
  const [state, setState] = useState()
  
  // Redux
  const data = useSelector(state => state.player)
  const dispatch = useDispatch()
  
  // Effects
  useEffect(() => {
    // ...
  }, [])
  
  // Handlers
  const handleClick = () => {
    // ...
  }
  
  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  )
}
```

## 🐛 Debugging

### Redux DevTools

Install Redux DevTools extension for Chrome/Firefox

### Console Logging

```jsx
console.log('Debug:', data)
```

### React DevTools

Install React DevTools extension

## 📚 Resources

- [React Docs](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [TailwindCSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Vite](https://vitejs.dev)

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## 📞 Support

- GitHub Issues
- Discord Community
- Email: dev@shinobi-legacy.com

---

**Happy Coding! 🥷✨**
