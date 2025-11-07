import { createSlice } from '@reduxjs/toolkit'
import { BattleSystem } from '@utils/battleSystem'

const initialState = {
  isActive: false,
  battleInstance: null,
  player: null,
  enemy: null,
  turn: 0,
  isPlayerTurn: true,
  battleLog: [],
  winner: null,
  rewards: null
}

export const battleSlice = createSlice({
  name: 'battle',
  initialState,
  reducers: {
    startBattle: (state, action) => {
      const { player, enemy } = action.payload
      const battle = new BattleSystem(player, enemy)
      
      state.isActive = true
      state.battleInstance = battle
      state.player = battle.player
      state.enemy = battle.enemy
      state.turn = battle.turn
      state.isPlayerTurn = battle.isPlayerTurn
      state.battleLog = battle.battleLog
      state.winner = null
      state.rewards = null
    },

    performAction: (state, action) => {
      if (!state.battleInstance || !state.isActive) return

      const { actionType, data } = action.payload
      const battle = state.battleInstance

      if (state.isPlayerTurn) {
        switch (actionType) {
          case 'attack':
            battle.attack(battle.player, battle.enemy, true)
            break
          case 'jutsu':
            battle.useJutsu(battle.player, battle.enemy, data.jutsu, true)
            break
          case 'defend':
            battle.defend(battle.player, true)
            break
          case 'item':
            battle.useItem(battle.player, data.item, true)
            break
          default:
            break
        }
      }

      const battleEnded = battle.checkBattleEnd()
      
      if (!battleEnded) {
        battle.processTurnEnd()
        state.isPlayerTurn = !state.isPlayerTurn
      }

      const battleState = battle.getState()
      state.player = battleState.player
      state.enemy = battleState.enemy
      state.turn = battleState.turn
      state.battleLog = battleState.battleLog
      state.winner = battleState.winner

      if (battleEnded) {
        state.isActive = false
      }
    },

    performEnemyAction: (state, action) => {
      if (!state.battleInstance || !state.isActive || state.isPlayerTurn) return

      const battle = state.battleInstance
      const enemyAction = action.payload

      switch (enemyAction.type) {
        case 'attack':
          battle.attack(battle.enemy, battle.player, false)
          break
        case 'jutsu':
          battle.useJutsu(battle.enemy, battle.player, enemyAction.jutsu, false)
          break
        case 'defend':
          battle.defend(battle.enemy, false)
          break
        default:
          break
      }

      const battleEnded = battle.checkBattleEnd()
      
      if (!battleEnded) {
        battle.processTurnEnd()
        state.isPlayerTurn = true
      }

      const battleState = battle.getState()
      state.player = battleState.player
      state.enemy = battleState.enemy
      state.turn = battleState.turn
      state.battleLog = battleState.battleLog
      state.winner = battleState.winner

      if (battleEnded) {
        state.isActive = false
      }
    },

    setRewards: (state, action) => {
      state.rewards = action.payload
    },

    endBattle: (state) => {
      return initialState
    }
  }
})

export const {
  startBattle,
  performAction,
  performEnemyAction,
  setRewards,
  endBattle
} = battleSlice.actions

export default battleSlice.reducer
