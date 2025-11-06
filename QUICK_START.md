# 🚀 Quick Start Guide - Shinobi Legacy

Get started with Shinobi Legacy development in 5 minutes!

---

## 📋 Prerequisites

Before you begin, ensure you have:

- ✅ **Node.js** 16 or higher ([Download](https://nodejs.org/))
- ✅ **npm** or **yarn** package manager
- ✅ **Git** ([Download](https://git-scm.com/))
- ✅ Code editor (VS Code recommended)
- ✅ Modern web browser

Check your installations:

```bash
node --version   # Should be v16+
npm --version    # Should be 7+
git --version    # Should be 2+
```

---

## ⚡ Installation (< 2 minutes)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/shinobi-legacy.git
cd shinobi-legacy
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

This will install:
- React & React DOM
- Redux Toolkit
- React Router
- Framer Motion
- TailwindCSS
- Howler.js
- And other dependencies

### 3. Set Up Environment Variables

```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your preferred editor
nano .env  # or code .env
```

Minimal configuration:
```env
VITE_GAME_VERSION=1.0.0
VITE_ENABLE_SOUND=true
VITE_DEBUG_MODE=true
```

### 4. Start Development Server

```bash
npm run dev
# or
yarn dev
```

The game will open at: **http://localhost:3000** 🎮

---

## 🎯 First Steps

### Create Your First Ninja

1. Open http://localhost:3000 in your browser
2. Click "Create New Character"
3. Choose your ninja's:
   - 👤 Name
   - ⚡ Element (Fire, Water, Thunder, Wind, Earth)
   - 🎨 Appearance
4. Click "Start Adventure"

### Test Battle System

1. Navigate to the Village Map
2. Go to "Mission Hall"
3. Accept a tutorial mission
4. Complete your first battle!

---

## 📁 Project Structure

Understanding the codebase:

```
shinobi-legacy/
│
├── src/
│   ├── components/      # React components
│   │   ├── character/   # Character-related components
│   │   ├── battle/      # Battle system components
│   │   ├── map/         # Map & navigation
│   │   └── ui/          # Reusable UI components
│   │
│   ├── pages/           # Main page components
│   │   ├── Home.jsx
│   │   ├── CharacterCreation.jsx
│   │   ├── Village.jsx
│   │   └── Battle.jsx
│   │
│   ├── store/           # Redux state management
│   │   ├── slices/      # Redux slices
│   │   └── store.js     # Store configuration
│   │
│   ├── utils/           # Utility functions
│   │   ├── gameLogic.js     # Core game logic
│   │   ├── battleSystem.js  # Battle calculations
│   │   └── constants.js     # Game constants
│   │
│   ├── data/            # Game data (JSON)
│   │   ├── jutsu.json       # Skill data
│   │   ├── items.json       # Item database
│   │   ├── missions.json    # Quest data
│   │   └── npcs.json        # NPC information
│   │
│   ├── hooks/           # Custom React hooks
│   ├── styles/          # Global styles
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Entry point
│
├── public/              # Static assets
│   ├── assets/
│   │   ├── images/
│   │   ├── sounds/
│   │   └── music/
│   └── favicon.ico
│
├── .env.example         # Environment variables template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # TailwindCSS config
└── package.json         # Dependencies
```

---

## 🛠️ Common Development Tasks

### Running Tests

```bash
npm test
# or
npm run test:watch  # Watch mode
```

### Building for Production

```bash
npm run build

# Preview production build
npm run preview
```

### Linting & Formatting

```bash
# Check for linting errors
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format
```

### Type Checking (if using TypeScript)

```bash
npm run type-check
```

---

## 🎨 Making Your First Change

Let's add a custom greeting!

### 1. Open the Home Page Component

```bash
code src/pages/Home.jsx
```

### 2. Find the Welcome Section

Look for something like:

```jsx
<h1>Welcome to Shinobi Legacy</h1>
```

### 3. Customize It

```jsx
<h1>Welcome, Future Hokage! 🥷</h1>
<p>Your ninja journey begins here...</p>
```

### 4. Save and See Changes

The page will automatically reload with your changes! ✨

---

## 🎮 Adding New Content

### Adding a New Jutsu

Edit `src/data/jutsu.json`:

```json
{
  "id": "my_jutsu",
  "name": "Custom Jutsu",
  "type": "ninjutsu",
  "element": "fire",
  "rank": "C",
  "cost": { "cp": 30, "cooldown": 2 },
  "power": { "base": 80, "scaling": 1.2 },
  "description": "My awesome custom jutsu!"
}
```

### Adding a New Item

Edit `src/data/items.json`:

```json
{
  "id": "my_item",
  "name": "Custom Potion",
  "type": "consumable",
  "rarity": "rare",
  "effects": [
    { "type": "heal", "value": 100 }
  ],
  "price": { "buy": 500, "sell": 250 }
}
```

### Creating a New Component

```bash
# Create new component file
touch src/components/MyComponent.jsx
```

```jsx
// src/components/MyComponent.jsx
import React from 'react';

export default function MyComponent() {
  return (
    <div className="my-component">
      <h2>My Custom Component</h2>
    </div>
  );
}
```

---

## 🐛 Debugging

### Enable Debug Mode

In `.env`:
```env
VITE_DEBUG_MODE=true
```

### Using Browser DevTools

1. Open browser DevTools (F12)
2. Check Console tab for logs
3. Use React DevTools extension
4. Monitor Network tab for API calls

### Common Issues

#### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- --port 3001
```

#### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Build Errors

```bash
# Clear build cache
rm -rf dist .vite
npm run build
```

---

## 📚 Learning Resources

### Documentation

- 📖 [Full README](README.md)
- 🎮 [Game Mechanics](GAME_MECHANICS.md)
- 📡 [API Reference](API_REFERENCE.md)
- 🚀 [Deployment Guide](DEPLOYMENT.md)

### React & Tools

- [React Documentation](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Vite Guide](https://vitejs.dev/)
- [TailwindCSS Docs](https://tailwindcss.com/)

### Game Development

- [Phaser Game Engine](https://phaser.io/) (alternative)
- [PixiJS](https://pixijs.com/) (for 2D graphics)
- [Howler.js Audio](https://howlerjs.com/)

---

## 💡 Tips for New Contributors

### Best Practices

1. **Create feature branches**
   ```bash
   git checkout -b feature/my-new-feature
   ```

2. **Write meaningful commit messages**
   ```bash
   git commit -m "Add new fire jutsu: Fireball Technique"
   ```

3. **Test before committing**
   ```bash
   npm test && npm run build
   ```

4. **Keep components small and focused**
   - One component = One responsibility

5. **Use TypeScript types** (if applicable)
   ```typescript
   interface Props {
     name: string;
     level: number;
   }
   ```

### Code Style

- Use functional components with hooks
- Follow existing naming conventions
- Add comments for complex logic
- Keep files under 300 lines

---

## 🤝 Getting Help

### Community

- 💬 [Discord Server](#) - Join our community
- 🐛 [GitHub Issues](https://github.com/yourusername/shinobi-legacy/issues) - Report bugs
- 📧 Email: dev@shinobi-legacy.com

### Before Asking for Help

1. ✅ Check existing issues
2. ✅ Read documentation
3. ✅ Search Discord/community
4. ✅ Try debugging yourself
5. ✅ Prepare minimal reproduction

### How to Ask Good Questions

**❌ Bad**: "It doesn't work, help!"

**✅ Good**: 
```
I'm trying to add a new jutsu but getting this error:
[Error message]

Steps I tried:
1. Added jutsu to jutsu.json
2. Restarted dev server

Environment:
- Node v18.0.0
- npm 8.0.0
- Browser: Chrome 120
```

---

## 🎯 Next Steps

Now that you're set up, try:

1. ✨ Create your first ninja character
2. ⚔️ Complete a tutorial battle
3. 🔧 Make a small code change
4. 📚 Read the [Game Mechanics](GAME_MECHANICS.md) doc
5. 🤝 Join the community Discord

---

## 🚀 Ready to Deploy?

When you're ready to share your game:

1. Follow the [Deployment Guide](DEPLOYMENT.md)
2. Deploy to Netlify (easiest)
3. Share your game URL
4. Collect feedback

---

## ⭐ Show Your Support

If you like this project:

- ⭐ Star the repository
- 🐛 Report bugs
- 💡 Suggest features
- 🤝 Contribute code
- 📣 Share with friends

---

**Happy coding, future Shinobi! 🥷✨**

[🔙 Back to README](README.md) | [📖 Full Documentation](README.md#-table-of-contents)
