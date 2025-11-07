# 🥷 Shinobi Legacy - Complete Guide

## 🎯 Ringkasan Project

**Shinobi Legacy** adalah game RPG berbasis web yang terinspirasi dari Ninja Saga (Facebook). Dibangun dengan **React.js**, **Redux Toolkit**, **TailwindCSS**, dan **Framer Motion**, game ini menawarkan pengalaman turn-based ninja battle yang penuh strategi.

### ✨ Highlights
- ✅ **Fully Functional** - MVP Complete
- 🎮 **Turn-Based Combat** - Strategic battle system
- 💾 **LocalStorage** - No backend required
- 📱 **Responsive** - Desktop & mobile ready
- 🚀 **Fast** - Optimized with Vite
- 🎨 **Beautiful** - Tailwind + Framer Motion

---

## 📋 Cara Memulai

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Start Development Server
```bash
npm run dev
```
Buka http://localhost:3000

### 3️⃣ Build for Production
```bash
npm run build
```

### 4️⃣ Deploy
```bash
# Netlify
npm run build
# Upload dist/ folder

# Vercel
vercel deploy
```

---

## 🎮 Fitur Game

### ✅ Implemented

#### 1. Character Creation
- Pilih nama, gender, dan element
- 5 elements: Fire, Water, Thunder, Wind, Earth
- Stats based on element
- Visual customization

#### 2. Battle System
- Turn-based 1v1 combat
- 4 actions: Attack, Jutsu, Defend, Item
- HP & CP management
- Status effects (burn, freeze, poison, stun)
- Critical hits & evasion
- Element advantages
- AI opponent
- Battle log
- Victory/defeat screens

#### 3. Mission System
- 5 missions (tutorial to boss)
- 4 difficulty levels
- Story-driven
- Rewards (EXP, Gold, Items)
- Mission tracking

#### 4. Inventory & Equipment
- Grid-based inventory
- 3 equipment slots
- 5 rarity tiers
- Item categories
- Equip/unequip
- Use consumables

#### 5. Shop
- Buy items with gold
- Category filters
- Item details
- Affordability check

#### 6. Village Map
- 6 locations to explore
- Dojo, Arena, Mission Hall, Shop, Hospital, Village Square
- Interactive navigation

#### 7. Character Profile
- Full stats display
- Battle statistics
- Mission completion
- Currency

#### 8. Hospital
- Free HP/CP restoration
- Visual stat bars

### 🔄 Coming Soon (v1.5+)

- Arena PvP battles
- Ranking system
- Dojo training & skill tree
- More missions
- Clan/Guild system
- Daily quests
- Achievement system
- Sound effects & music

---

## 📁 Struktur Project

```
shinobi-legacy/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── store/          # Redux store
│   ├── utils/          # Game logic
│   ├── data/           # Game data (JSON)
│   ├── hooks/          # Custom hooks
│   ├── styles/         # CSS
│   ├── App.jsx         # Main app
│   └── main.jsx        # Entry point
├── public/             # Static assets
├── dist/               # Build output
├── package.json        # Dependencies
├── vite.config.js      # Vite config
└── tailwind.config.js  # Tailwind config
```

---

## 🔧 Tech Stack

### Frontend
- **React** 18.2 - UI library
- **Redux Toolkit** 2.0 - State management
- **React Router** v6 - Routing
- **TailwindCSS** 3.4 - Styling
- **Framer Motion** 10.16 - Animations
- **Lucide React** - Icons

### Build & Dev
- **Vite** 5.0 - Build tool
- **ESLint** - Code linting
- **Prettier** - Code formatting

### Audio (Ready for implementation)
- **Howler.js** 2.2 - Audio engine

---

## 🎨 Design System

### Colors
```css
Fire:    #DC143C (Red)
Water:   #4682B4 (Blue)
Thunder: #FFA500 (Orange)
Wind:    #228B22 (Green)
Earth:   #A0522D (Brown)
UI Dark: #2C3E50
UI Light:#ECF0F1
```

### Components
- Button (Primary, Secondary, Danger, Success)
- Card (with hover effects)
- Modal/Dialog
- StatBar (HP, CP, EXP)
- ElementBadge
- RarityBadge

### Animations
- Slide in/out
- Fade in/out
- Bounce
- Pulse
- Attack/Damage effects

---

## 🗃️ Game Data

### Elements (5)
- Fire - High attack, aggressive
- Water - Defensive, healing
- Thunder - Speed, critical chance
- Wind - Evasion, combo
- Earth - High defense, endurance

### Jutsu (8)
1. Fireball (Fire)
2. Water Dragon (Water)
3. Lightning Blade (Thunder)
4. Wind Shuriken (Wind)
5. Earth Wall (Earth)
6. Taijutsu Combo
7. Shadow Clone
8. Substitution

### Items (11)
- Consumables: Health Potion, Chakra Potion, Antidote
- Weapons: Kunai, Shuriken, Katana, Demon Blade
- Armor: Ninja Armor
- Accessories: Chakra Amulet
- Scrolls: Fire Scroll

### Missions (5)
1. Tutorial (Lvl 1) - Training Dummy
2. Bandit (Lvl 2) - Easy
3. Wild Wolf (Lvl 5) - Normal
4. Rogue Ninja (Lvl 10) - Hard
5. Shadow Master (Lvl 20) - Expert Boss

---

## 💡 Game Mechanics

### Stats System
- **HP** - Health Points
- **CP** - Chakra Points
- **Attack** - Damage dealt
- **Defense** - Damage reduction
- **Speed** - Turn order
- **Critical** - Crit chance
- **Evasion** - Dodge chance

### Level System
- Start at Level 1
- Max Level 100
- EXP curve: 100 * level^1.5
- Stats increase per level
- Element bonuses applied

### Battle System
- Turn-based
- Player vs Enemy
- 4 actions per turn
- Status effects
- Element advantages
- AI decision making
- Rewards on victory

### Element System
```
Fire > Wind > Earth > Thunder > Water > Fire
```

- Advantage: 1.5x damage
- Disadvantage: 0.7x damage
- Neutral: 1.0x damage

### Rarity System
- Common (1.0x) - Gray
- Uncommon (1.2x) - Green
- Rare (1.5x) - Blue
- Epic (2.0x) - Purple
- Legendary (3.0x) - Orange

---

## 🎯 Gameplay Loop

```
1. Create Character
     ↓
2. Explore Village
     ↓
3. Accept Mission
     ↓
4. Battle Enemy
     ↓
5. Win & Get Rewards
     ↓
6. Level Up
     ↓
7. Buy Equipment
     ↓
8. Repeat (Get Stronger)
```

---

## 💾 LocalStorage

### Auto-Save
Game auto-saves after:
- Character creation
- Mission completion
- Shop purchase
- Item usage
- Equipment change
- Hospital visit

### Manual Save/Load
- Export save data (JSON)
- Import save data
- Clear all data

### Save Structure
```json
{
  "character": {...},
  "inventory": [...],
  "equipment": {...},
  "stats": {...},
  "currency": {...},
  "missions": {...},
  "version": "1.0.0",
  "lastSaved": 1234567890
}
```

---

## 🚀 Performance

### Bundle Size
- Total: ~379 KB
- Gzipped: ~119 KB
- First Load: < 2s
- Page Transitions: < 100ms

### Optimization
- Code splitting (vendor chunks)
- Lazy loading (coming soon)
- Image optimization
- CSS purging
- Tree shaking

---

## 📱 Responsive Design

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Mobile Features
- Touch-friendly buttons
- Swipe gestures (coming soon)
- Adaptive layouts
- Optimized fonts

---

## 🧪 Testing Checklist

### Functionality
- [x] Character creation
- [x] Village navigation
- [x] Mission selection
- [x] Battle system
- [x] Inventory management
- [x] Shop purchases
- [x] Equipment system
- [x] Level up
- [x] HP/CP restoration
- [x] LocalStorage persistence

### Browser Support
- [x] Chrome/Edge (latest)
- [x] Firefox (latest)
- [x] Safari (latest)
- [ ] Mobile browsers

### Performance
- [x] Fast initial load
- [x] Smooth animations
- [x] No memory leaks
- [x] Responsive UI

---

## 🐛 Known Issues

None currently! 🎉

### Future Improvements
- Add sound effects
- Add background music
- Implement Arena PvP
- Add more missions
- Skill tree system
- Achievement system
- Daily quests

---

## 📚 Documentation

### Available Docs
- `README.md` - Main documentation
- `README_SETUP.md` - Setup instructions
- `README_DEV.md` - Developer guide
- `STRUKTUR_PROJECT.md` - Project structure
- `FEATURES.md` - Feature list
- `GAME_MECHANICS.md` - Game mechanics
- `API_REFERENCE.md` - API reference
- `DEPLOYMENT.md` - Deployment guide
- `CHANGELOG.md` - Version history

### Quick Links
- [Quick Start](QUICK_START.md)
- [Game Mechanics](GAME_MECHANICS.md)
- [API Reference](API_REFERENCE.md)
- [Deployment](DEPLOYMENT.md)

---

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit PR

---

## 📞 Support

- 🐛 **Issues**: GitHub Issues
- 💬 **Discord**: [Join Community](#)
- 📧 **Email**: dev@shinobi-legacy.com

---

## 📄 License

MIT License - See [LICENSE](LICENSE) file

---

## 🙏 Credits

### Inspired By
- **Ninja Saga** (Facebook) by ngmoco
- Naruto, Bleach, One Piece anime

### Technologies
- React Team
- Redux Team
- Tailwind Labs
- Framer Motion
- Vite Team

### Community
- Contributors
- Testers
- Players

---

## 🎊 Changelog

### v1.0.0 (Current)
- ✅ MVP Complete
- ✅ Character creation
- ✅ Battle system
- ✅ Mission system
- ✅ Shop & inventory
- ✅ Profile & stats
- ✅ Hospital
- ✅ LocalStorage

### v1.5.0 (Planned)
- 🔄 Arena PvP
- 🔄 Ranking system
- 🔄 More missions
- 🔄 Sound & music

### v2.0.0 (Future)
- 💡 Clan system
- 💡 Guild wars
- 💡 World bosses
- 💡 Trading

---

## 🌟 Star History

⭐ Star this repo if you like it!

---

## 📊 Stats

- **Lines of Code**: ~5,000+
- **Components**: 25+
- **Pages**: 10
- **Game Data**: 24+ entries
- **Build Time**: ~4s
- **Bundle Size**: 119 KB (gzipped)

---

**Made with ❤️ by Shinobi Legacy Team**

**🥷 Mulai Petualangan Ninja-mu Sekarang! 🥷**

```bash
npm install && npm run dev
```

**Happy Gaming! ✨**

---

*Last Updated: 2024*
*Version: 1.0.0*
*Status: Production Ready ✅*
