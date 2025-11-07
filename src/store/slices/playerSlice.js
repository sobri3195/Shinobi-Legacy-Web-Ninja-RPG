import { createSlice } from '@reduxjs/toolkit'
import { calculateStats, calculateExpForLevel } from '@utils/gameLogic'
import { savePlayerData, loadPlayerData } from '@utils/storage'

const initialState = {
  character: null,
  inventory: [],
  equipment: {
    weapon: null,
    armor: null,
    accessory: null
  },
  jutsuList: [],
  currency: {
    gold: 1000,
    gem: 50
  },
  stats: {
    level: 1,
    exp: 0,
    expToNext: 100,
    currentHp: 100,
    maxHp: 100,
    currentCp: 50,
    maxCp: 50,
    attack: 10,
    defense: 5,
    speed: 10,
    critical: 0.05,
    evasion: 0.05
  },
  missions: {
    completed: [],
    available: [],
    active: null
  },
  achievements: [],
  battleStats: {
    wins: 0,
    losses: 0,
    totalBattles: 0
  },
  isLoaded: false
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    createCharacter: (state, action) => {
      const { name, element, gender } = action.payload
      state.character = {
        name,
        element,
        gender,
        createdAt: Date.now()
      }
      
      const baseStats = calculateStats(state.stats, 1, element)
      state.stats = {
        ...state.stats,
        ...baseStats,
        currentHp: baseStats.maxHp,
        currentCp: baseStats.maxCp
      }
      
      state.isLoaded = true
      savePlayerData(state)
    },

    loadPlayer: (state, action) => {
      const savedData = loadPlayerData()
      if (savedData) {
        return { ...savedData, isLoaded: true }
      }
      return state
    },

    gainExp: (state, action) => {
      const exp = action.payload
      state.stats.exp += exp

      while (state.stats.exp >= state.stats.expToNext) {
        state.stats.exp -= state.stats.expToNext
        state.stats.level += 1
        
        const newStats = calculateStats(state.stats, state.stats.level, state.character.element)
        state.stats = {
          ...state.stats,
          ...newStats,
          expToNext: calculateExpForLevel(state.stats.level)
        }
        
        state.stats.currentHp = newStats.maxHp
        state.stats.currentCp = newStats.maxCp
      }

      savePlayerData(state)
    },

    addCurrency: (state, action) => {
      const { type, amount } = action.payload
      state.currency[type] += amount
      savePlayerData(state)
    },

    spendCurrency: (state, action) => {
      const { type, amount } = action.payload
      if (state.currency[type] >= amount) {
        state.currency[type] -= amount
        savePlayerData(state)
        return true
      }
      return false
    },

    addItem: (state, action) => {
      const item = action.payload
      const existingItem = state.inventory.find(i => i.id === item.id)
      
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1
      } else {
        state.inventory.push({ ...item, quantity: 1 })
      }
      
      savePlayerData(state)
    },

    removeItem: (state, action) => {
      const itemId = action.payload
      const itemIndex = state.inventory.findIndex(i => i.id === itemId)
      
      if (itemIndex !== -1) {
        const item = state.inventory[itemIndex]
        if (item.quantity > 1) {
          item.quantity -= 1
        } else {
          state.inventory.splice(itemIndex, 1)
        }
      }
      
      savePlayerData(state)
    },

    equipItem: (state, action) => {
      const item = action.payload
      const slot = item.type
      
      if (state.equipment[slot]) {
        state.inventory.push(state.equipment[slot])
      }
      
      state.equipment[slot] = item
      state.inventory = state.inventory.filter(i => i.id !== item.id)
      
      savePlayerData(state)
    },

    unequipItem: (state, action) => {
      const slot = action.payload
      
      if (state.equipment[slot]) {
        state.inventory.push(state.equipment[slot])
        state.equipment[slot] = null
      }
      
      savePlayerData(state)
    },

    learnJutsu: (state, action) => {
      const jutsu = action.payload
      if (!state.jutsuList.find(j => j.id === jutsu.id)) {
        state.jutsuList.push(jutsu)
        savePlayerData(state)
      }
    },

    updateHealth: (state, action) => {
      const { hp, cp } = action.payload
      if (hp !== undefined) {
        state.stats.currentHp = Math.max(0, Math.min(state.stats.maxHp, hp))
      }
      if (cp !== undefined) {
        state.stats.currentCp = Math.max(0, Math.min(state.stats.maxCp, cp))
      }
    },

    restoreHealth: (state) => {
      state.stats.currentHp = state.stats.maxHp
      state.stats.currentCp = state.stats.maxCp
      savePlayerData(state)
    },

    completeMission: (state, action) => {
      const missionId = action.payload
      if (!state.missions.completed.includes(missionId)) {
        state.missions.completed.push(missionId)
      }
      state.missions.active = null
      savePlayerData(state)
    },

    updateBattleStats: (state, action) => {
      const { result } = action.payload
      state.battleStats.totalBattles += 1
      if (result === 'win') {
        state.battleStats.wins += 1
      } else {
        state.battleStats.losses += 1
      }
      savePlayerData(state)
    },

    resetPlayer: () => {
      return initialState
    }
  }
})

export const {
  createCharacter,
  loadPlayer,
  gainExp,
  addCurrency,
  spendCurrency,
  addItem,
  removeItem,
  equipItem,
  unequipItem,
  learnJutsu,
  updateHealth,
  restoreHealth,
  completeMission,
  updateBattleStats,
  resetPlayer
} = playerSlice.actions

export default playerSlice.reducer
