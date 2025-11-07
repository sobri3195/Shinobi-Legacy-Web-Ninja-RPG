import { createSlice } from '@reduxjs/toolkit'
import jutsuData from '@data/jutsu.json'
import itemsData from '@data/items.json'
import missionsData from '@data/missions.json'

const initialState = {
  currentLocation: 'village_square',
  allJutsu: jutsuData,
  allItems: itemsData,
  allMissions: missionsData,
  settings: {
    soundEnabled: true,
    musicEnabled: true,
    soundVolume: 0.7,
    musicVolume: 0.5
  },
  ui: {
    showMenu: false,
    showInventory: false,
    showShop: false,
    currentDialog: null
  }
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.currentLocation = action.payload
    },

    updateSettings: (state, action) => {
      state.settings = { ...state.settings, ...action.payload }
    },

    toggleUI: (state, action) => {
      const { key, value } = action.payload
      state.ui[key] = value !== undefined ? value : !state.ui[key]
    },

    setDialog: (state, action) => {
      state.ui.currentDialog = action.payload
    },

    closeDialog: (state) => {
      state.ui.currentDialog = null
    }
  }
})

export const {
  setLocation,
  updateSettings,
  toggleUI,
  setDialog,
  closeDialog
} = gameSlice.actions

export default gameSlice.reducer
