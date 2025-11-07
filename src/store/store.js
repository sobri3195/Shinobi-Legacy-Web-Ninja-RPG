import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './slices/playerSlice'
import battleReducer from './slices/battleSlice'
import gameReducer from './slices/gameSlice'

export const store = configureStore({
  reducer: {
    player: playerReducer,
    battle: battleReducer,
    game: gameReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['battle/setBattle'],
        ignoredPaths: ['battle.battleInstance']
      }
    })
})
