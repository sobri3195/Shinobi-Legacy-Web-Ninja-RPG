# 📡 API Reference - Shinobi Legacy

Documentation for game data structures, state management, and API endpoints.

---

## 📋 Table of Contents

- [Data Structures](#data-structures)
- [State Management](#state-management)
- [Local Storage API](#local-storage-api)
- [Game Logic Functions](#game-logic-functions)
- [Future Backend API](#future-backend-api)

---

## 🗂️ Data Structures

### Character

```typescript
interface Character {
  id: string;
  name: string;
  element: 'fire' | 'water' | 'thunder' | 'wind' | 'earth';
  gender: 'male' | 'female';
  level: number;
  experience: number;
  experienceToNext: number;
  
  stats: {
    hp: number;
    maxHp: number;
    cp: number;
    maxCp: number;
    attack: number;
    defense: number;
    speed: number;
    strength: number;
    endurance: number;
    agility: number;
    spirit: number;
    luck: number;
  };
  
  appearance: {
    hair: string;
    hairColor: string;
    skinTone: string;
    outfit: string;
  };
  
  inventory: Item[];
  equipment: Equipment;
  jutsu: Jutsu[];
  quests: Quest[];
  achievements: Achievement[];
  
  currency: {
    gold: number;
    gems: number;
  };
  
  pvp: {
    rank: 'E' | 'D' | 'C' | 'B' | 'A' | 'S';
    wins: number;
    losses: number;
    winStreak: number;
    rating: number;
  };
  
  createdAt: number;
  lastLogin: number;
}
```

### Jutsu (Skill)

```typescript
interface Jutsu {
  id: string;
  name: string;
  description: string;
  type: 'ninjutsu' | 'taijutsu' | 'genjutsu' | 'kekkei-genkai';
  element?: 'fire' | 'water' | 'thunder' | 'wind' | 'earth' | 'neutral';
  rank: 'E' | 'D' | 'C' | 'B' | 'A' | 'S';
  
  cost: {
    cp: number;
    cooldown: number;
  };
  
  power: {
    base: number;
    scaling: number;
    criticalModifier: number;
  };
  
  effects: {
    type: 'damage' | 'heal' | 'buff' | 'debuff' | 'status';
    value: number;
    duration: number;
    chance: number;
  }[];
  
  requirements: {
    level: number;
    element?: string;
    prerequisite?: string[];
  };
  
  animation: string;
  sound: string;
  icon: string;
}
```

### Item

```typescript
interface Item {
  id: string;
  name: string;
  description: string;
  type: 'consumable' | 'equipment' | 'material' | 'quest' | 'special';
  category: string;
  
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  
  stats?: {
    hp?: number;
    cp?: number;
    attack?: number;
    defense?: number;
    speed?: number;
    [key: string]: number | undefined;
  };
  
  effects?: {
    type: string;
    value: number;
    duration?: number;
  }[];
  
  price: {
    buy: number;
    sell: number;
  };
  
  stackable: boolean;
  maxStack: number;
  quantity: number;
  
  weight: number;
  level: number;
  tradeable: boolean;
  
  icon: string;
}
```

### Equipment

```typescript
interface Equipment {
  weapon?: Item;
  offhand?: Item;
  head?: Item;
  body?: Item;
  legs?: Item;
  boots?: Item;
  accessory1?: Item;
  accessory2?: Item;
}
```

### Quest/Mission

```typescript
interface Quest {
  id: string;
  title: string;
  description: string;
  type: 'main' | 'side' | 'daily' | 'weekly' | 'event';
  difficulty: 'easy' | 'normal' | 'hard' | 'expert';
  
  objectives: {
    type: 'kill' | 'collect' | 'talk' | 'explore' | 'survive';
    target: string;
    current: number;
    required: number;
    completed: boolean;
  }[];
  
  rewards: {
    experience: number;
    gold: number;
    gems?: number;
    items?: { id: string; quantity: number }[];
    jutsu?: string[];
  };
  
  requirements: {
    level: number;
    quest?: string[];
  };
  
  npc: {
    id: string;
    name: string;
    dialogue: {
      start: string[];
      progress: string[];
      complete: string[];
    };
  };
  
  status: 'available' | 'active' | 'completed';
  startTime?: number;
  expiryTime?: number;
}
```

### Battle State

```typescript
interface BattleState {
  id: string;
  type: 'pve' | 'pvp';
  difficulty?: string;
  
  player: BattleCharacter;
  enemy: BattleCharacter;
  
  turn: number;
  currentTurn: 'player' | 'enemy';
  
  log: BattleLogEntry[];
  
  status: 'preparing' | 'ongoing' | 'victory' | 'defeat' | 'fled';
  
  rewards?: {
    experience: number;
    gold: number;
    items: Item[];
  };
}

interface BattleCharacter {
  id: string;
  name: string;
  element: string;
  level: number;
  
  currentHp: number;
  maxHp: number;
  currentCp: number;
  maxCp: number;
  
  stats: {
    attack: number;
    defense: number;
    speed: number;
  };
  
  statusEffects: StatusEffect[];
  jutsu: Jutsu[];
  jutsucooldowns: { [jutsuId: string]: number };
  
  position: 'front' | 'back';
  isDefending: boolean;
}

interface StatusEffect {
  type: 'burn' | 'poison' | 'stun' | 'freeze' | 'shield' | 'strengthen' | 'weaken';
  duration: number;
  value: number;
  source: string;
}

interface BattleLogEntry {
  turn: number;
  actor: string;
  action: string;
  target: string;
  damage?: number;
  healing?: number;
  effect?: string;
  message: string;
  timestamp: number;
}
```

### Achievement

```typescript
interface Achievement {
  id: string;
  name: string;
  description: string;
  category: 'combat' | 'collection' | 'progression' | 'social' | 'special';
  
  requirements: {
    type: string;
    target: string | number;
    current: number;
    required: number;
  }[];
  
  rewards: {
    gems?: number;
    title?: string;
    badge?: string;
    item?: string;
  };
  
  unlocked: boolean;
  unlockedAt?: number;
  
  hidden: boolean;
  icon: string;
}
```

---

## 🗄️ State Management

### Redux Store Structure

```typescript
interface RootState {
  user: UserState;
  character: CharacterState;
  battle: BattleState;
  inventory: InventoryState;
  quests: QuestsState;
  map: MapState;
  ui: UIState;
}

// User State
interface UserState {
  isLoggedIn: boolean;
  userId: string | null;
  settings: {
    sound: boolean;
    music: boolean;
    volume: number;
    language: 'id' | 'en';
    graphics: 'low' | 'medium' | 'high';
  };
}

// Character State
interface CharacterState {
  current: Character | null;
  characters: Character[];
  isLoading: boolean;
  error: string | null;
}

// Inventory State
interface InventoryState {
  items: Item[];
  equipment: Equipment;
  capacity: number;
  currentWeight: number;
  maxWeight: number;
}

// Quests State
interface QuestsState {
  available: Quest[];
  active: Quest[];
  completed: Quest[];
  daily: Quest[];
}

// Map State
interface MapState {
  currentLocation: string;
  unlockedLocations: string[];
  npcs: NPC[];
}

// UI State
interface UIState {
  activeModal: string | null;
  notification: Notification | null;
  loading: boolean;
  tooltips: boolean;
}
```

### Redux Actions

```typescript
// Character Actions
characterSlice.actions = {
  createCharacter(payload: CharacterCreatePayload),
  updateCharacter(payload: Partial<Character>),
  deleteCharacter(id: string),
  levelUp(),
  gainExperience(amount: number),
  modifyStats(stats: Partial<Stats>),
  learnJutsu(jutsu: Jutsu),
  equipItem(item: Item, slot: string),
  unequipItem(slot: string),
}

// Battle Actions
battleSlice.actions = {
  startBattle(payload: BattleStartPayload),
  endBattle(result: 'victory' | 'defeat'),
  performAction(action: BattleAction),
  takeDamage(payload: { target: 'player' | 'enemy', amount: number }),
  healTarget(payload: { target: 'player' | 'enemy', amount: number }),
  applyStatusEffect(payload: StatusEffect),
  removeStatusEffect(payload: { target: string, effectType: string }),
  nextTurn(),
}

// Inventory Actions
inventorySlice.actions = {
  addItem(item: Item, quantity: number),
  removeItem(itemId: string, quantity: number),
  useItem(itemId: string),
  sortInventory(sortBy: 'name' | 'rarity' | 'type'),
  equipItem(item: Item, slot: string),
  unequipItem(slot: string),
}

// Quest Actions
questSlice.actions = {
  acceptQuest(quest: Quest),
  updateObjective(payload: { questId: string, objectiveIndex: number, progress: number }),
  completeQuest(questId: string),
  claimRewards(questId: string),
  abandonQuest(questId: string),
}
```

---

## 💾 Local Storage API

**Shinobi Legacy menggunakan LocalStorage sebagai solusi penyimpanan utama.** Semua data game (karakter, progress, inventory, settings) disimpan langsung di browser pengguna tanpa memerlukan backend database.

### Storage Keys

```typescript
const STORAGE_KEYS = {
  CHARACTER: 'shinobi_character',
  SETTINGS: 'shinobi_settings',
  SAVE_DATA: 'shinobi_save',
  ACHIEVEMENTS: 'shinobi_achievements',
}
```

### Save/Load Functions

```typescript
// Save game data
function saveGame(character: Character): void {
  const saveData = {
    character,
    timestamp: Date.now(),
    version: '1.0.0',
  };
  localStorage.setItem(STORAGE_KEYS.SAVE_DATA, JSON.stringify(saveData));
}

// Load game data
function loadGame(): Character | null {
  const data = localStorage.getItem(STORAGE_KEYS.SAVE_DATA);
  if (!data) return null;
  
  const saveData = JSON.parse(data);
  return saveData.character;
}

// Delete save data
function deleteSave(): void {
  localStorage.removeItem(STORAGE_KEYS.SAVE_DATA);
}

// Export save data
function exportSave(): string {
  const data = localStorage.getItem(STORAGE_KEYS.SAVE_DATA);
  return btoa(data || '');
}

// Import save data
function importSave(encodedData: string): void {
  const data = atob(encodedData);
  localStorage.setItem(STORAGE_KEYS.SAVE_DATA, data);
}
```

---

## 🎮 Game Logic Functions

### Battle System

```typescript
// Calculate damage
function calculateDamage(
  attacker: BattleCharacter,
  defender: BattleCharacter,
  jutsu?: Jutsu
): number {
  let baseDamage = attacker.stats.attack - (defender.stats.defense * 0.5);
  
  if (jutsu) {
    baseDamage = jutsu.power.base + (attacker.stats.attack * jutsu.power.scaling);
  }
  
  const elementModifier = getElementAdvantage(
    attacker.element,
    defender.element
  );
  
  const isCritical = Math.random() < getCriticalRate(attacker);
  const criticalModifier = isCritical ? 1.5 : 1.0;
  
  const randomVariance = 0.85 + Math.random() * 0.3;
  
  const finalDamage = Math.floor(
    baseDamage * elementModifier * criticalModifier * randomVariance
  );
  
  return Math.max(1, finalDamage);
}

// Get element advantage
function getElementAdvantage(
  attackerElement: string,
  defenderElement: string
): number {
  const advantages: { [key: string]: string[] } = {
    fire: ['wind'],
    wind: ['thunder'],
    thunder: ['earth'],
    earth: ['water'],
    water: ['fire'],
  };
  
  if (advantages[attackerElement]?.includes(defenderElement)) {
    return 1.5; // Super effective
  }
  
  if (advantages[defenderElement]?.includes(attackerElement)) {
    return 0.75; // Not effective
  }
  
  return 1.0; // Neutral
}

// Process turn
function processTurn(state: BattleState, action: BattleAction): BattleState {
  // Implementation details...
  return newState;
}
```

### Character Progression

```typescript
// Calculate XP required for next level
function calculateXPRequired(currentLevel: number): number {
  const baseXP = 100;
  return Math.floor(baseXP * Math.pow(currentLevel, 1.5));
}

// Level up character
function levelUpCharacter(character: Character): Character {
  const newCharacter = { ...character };
  newCharacter.level += 1;
  newCharacter.experience -= newCharacter.experienceToNext;
  newCharacter.experienceToNext = calculateXPRequired(newCharacter.level);
  
  // Increase stats
  newCharacter.stats.maxHp += 50;
  newCharacter.stats.maxCp += 25;
  newCharacter.stats.attack += 5;
  newCharacter.stats.defense += 3;
  newCharacter.stats.speed += 2;
  
  // Full heal
  newCharacter.stats.hp = newCharacter.stats.maxHp;
  newCharacter.stats.cp = newCharacter.stats.maxCp;
  
  return newCharacter;
}
```

---

## 🌐 Future Backend API

### Planned Endpoints

```
Base URL: https://api.shinobi-legacy.com/v1
```

#### Authentication

```
POST   /auth/register
POST   /auth/login
POST   /auth/logout
POST   /auth/refresh
GET    /auth/profile
```

#### Characters

```
GET    /characters
GET    /characters/:id
POST   /characters
PUT    /characters/:id
DELETE /characters/:id
POST   /characters/:id/level-up
```

#### Battle

```
POST   /battle/start
POST   /battle/:id/action
POST   /battle/:id/end
GET    /battle/:id/log
```

#### Quests

```
GET    /quests
GET    /quests/:id
POST   /quests/:id/accept
POST   /quests/:id/progress
POST   /quests/:id/complete
```

#### PvP

```
GET    /pvp/matchmaking
POST   /pvp/challenge/:userId
GET    /pvp/leaderboard
GET    /pvp/history
```

#### Shop

```
GET    /shop/items
GET    /shop/featured
POST   /shop/purchase
POST   /shop/sell
```

#### Social

```
GET    /clans
POST   /clans/:id/join
GET    /friends
POST   /friends/add
POST   /chat/send
```

---

## 🔐 Authentication Flow

```typescript
// JWT Token structure
interface AuthToken {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: 'Bearer';
}

// User authentication
async function login(email: string, password: string): Promise<AuthToken> {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  
  return response.json();
}
```

---

## 📊 Error Handling

```typescript
interface APIError {
  code: string;
  message: string;
  details?: any;
  timestamp: number;
}

// Error codes
const ERROR_CODES = {
  INVALID_INPUT: 'INVALID_INPUT',
  NOT_FOUND: 'NOT_FOUND',
  UNAUTHORIZED: 'UNAUTHORIZED',
  INSUFFICIENT_FUNDS: 'INSUFFICIENT_FUNDS',
  LEVEL_TOO_LOW: 'LEVEL_TOO_LOW',
  ITEM_NOT_OWNED: 'ITEM_NOT_OWNED',
  BATTLE_ACTIVE: 'BATTLE_ACTIVE',
  COOLDOWN_ACTIVE: 'COOLDOWN_ACTIVE',
};
```

---

## 🧪 Testing

### Example API Tests

```typescript
describe('Battle System', () => {
  it('should calculate damage correctly', () => {
    const damage = calculateDamage(player, enemy);
    expect(damage).toBeGreaterThan(0);
  });
  
  it('should apply element advantage', () => {
    const modifier = getElementAdvantage('fire', 'wind');
    expect(modifier).toBe(1.5);
  });
});
```

---

**Last Updated**: 2024
**Version**: 1.0.0

[🔙 Back to README](README.md)
