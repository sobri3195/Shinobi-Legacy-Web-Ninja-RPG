export const ELEMENTS = {
  FIRE: 'fire',
  WATER: 'water',
  THUNDER: 'thunder',
  WIND: 'wind',
  EARTH: 'earth'
}

export const ELEMENT_DATA = {
  [ELEMENTS.FIRE]: {
    name: 'Api',
    color: '#DC143C',
    icon: '🔥',
    bonus: { attack: 1.2, defense: 0.9 },
    description: 'Serangan agresif dengan damage tinggi'
  },
  [ELEMENTS.WATER]: {
    name: 'Air',
    color: '#4682B4',
    icon: '🌊',
    bonus: { attack: 0.9, defense: 1.1, healing: 1.3 },
    description: 'Defensive dengan healing ability'
  },
  [ELEMENTS.THUNDER]: {
    name: 'Petir',
    color: '#FFA500',
    icon: '⚡',
    bonus: { attack: 1.1, speed: 1.3, critical: 1.4 },
    description: 'Speed tinggi dan critical chance'
  },
  [ELEMENTS.WIND]: {
    name: 'Angin',
    color: '#228B22',
    icon: '🌪️',
    bonus: { attack: 1.0, evasion: 1.3, speed: 1.2 },
    description: 'Evasion dan combo attack'
  },
  [ELEMENTS.EARTH]: {
    name: 'Tanah',
    color: '#A0522D',
    icon: '🌍',
    bonus: { attack: 0.8, defense: 1.4, hp: 1.2 },
    description: 'Defense tinggi dan endurance'
  }
}

export const ELEMENT_WEAKNESS = {
  [ELEMENTS.FIRE]: ELEMENTS.WATER,
  [ELEMENTS.WATER]: ELEMENTS.THUNDER,
  [ELEMENTS.THUNDER]: ELEMENTS.EARTH,
  [ELEMENTS.EARTH]: ELEMENTS.WIND,
  [ELEMENTS.WIND]: ELEMENTS.FIRE
}

export const RARITY = {
  COMMON: 'common',
  UNCOMMON: 'uncommon',
  RARE: 'rare',
  EPIC: 'epic',
  LEGENDARY: 'legendary'
}

export const RARITY_DATA = {
  [RARITY.COMMON]: { name: 'Common', color: '#9CA3AF', multiplier: 1.0 },
  [RARITY.UNCOMMON]: { name: 'Uncommon', color: '#10B981', multiplier: 1.2 },
  [RARITY.RARE]: { name: 'Rare', color: '#3B82F6', multiplier: 1.5 },
  [RARITY.EPIC]: { name: 'Epic', color: '#8B5CF6', multiplier: 2.0 },
  [RARITY.LEGENDARY]: { name: 'Legendary', color: '#F59E0B', multiplier: 3.0 }
}

export const JUTSU_TYPE = {
  NINJUTSU: 'ninjutsu',
  TAIJUTSU: 'taijutsu',
  GENJUTSU: 'genjutsu',
  KEKKEI_GENKAI: 'kekkei_genkai'
}

export const STATUS_EFFECTS = {
  BURN: 'burn',
  FREEZE: 'freeze',
  POISON: 'poison',
  STUN: 'stun',
  SHIELD: 'shield',
  BUFF_ATK: 'buff_atk',
  BUFF_DEF: 'buff_def',
  DEBUFF_ATK: 'debuff_atk',
  DEBUFF_DEF: 'debuff_def'
}

export const ITEM_TYPE = {
  WEAPON: 'weapon',
  ARMOR: 'armor',
  ACCESSORY: 'accessory',
  CONSUMABLE: 'consumable',
  SCROLL: 'scroll',
  MATERIAL: 'material'
}

export const RANK = {
  E: 'E',
  D: 'D',
  C: 'C',
  B: 'B',
  A: 'A',
  S: 'S'
}

export const BASE_STATS = {
  HP: 100,
  CP: 50,
  ATTACK: 10,
  DEFENSE: 5,
  SPEED: 10,
  CRITICAL: 0.05,
  EVASION: 0.05
}

export const LEVEL_UP_MULTIPLIER = {
  HP: 10,
  CP: 5,
  ATTACK: 2,
  DEFENSE: 1,
  SPEED: 1
}

export const MISSION_DIFFICULTY = {
  EASY: 'easy',
  NORMAL: 'normal',
  HARD: 'hard',
  EXPERT: 'expert'
}

export const VILLAGE_LOCATIONS = {
  DOJO: 'dojo',
  ARENA: 'arena',
  MISSION_HALL: 'mission_hall',
  SHOP: 'shop',
  HOSPITAL: 'hospital',
  VILLAGE_SQUARE: 'village_square',
  TRAINING_GROUNDS: 'training_grounds'
}

export const CURRENCY = {
  GOLD: 'gold',
  GEM: 'gem'
}

export const MAX_INVENTORY_SIZE = 50
export const MAX_LEVEL = 100
export const EXP_CURVE = 100
export const BATTLE_TURN_TIMEOUT = 30000

export const STORAGE_KEYS = {
  PLAYER: 'shinobi_player',
  SETTINGS: 'shinobi_settings',
  SAVE_VERSION: 'shinobi_save_version'
}

export const GAME_VERSION = '1.0.0'
