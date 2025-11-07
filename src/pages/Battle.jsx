import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { startBattle, performEnemyAction, endBattle, setRewards } from '@store/slices/battleSlice'
import { gainExp, addCurrency, addItem, completeMission, updateBattleStats } from '@store/slices/playerSlice'
import BattleCharacter from '@components/battle/BattleCharacter'
import BattleActions from '@components/battle/BattleActions'
import BattleLog from '@components/battle/BattleLog'
import Button from '@components/ui/Button'
import Modal from '@components/ui/Modal'
import { createAIAction } from '@utils/battleSystem'
import { calculateRewards } from '@utils/gameLogic'

export default function Battle() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const { player, enemy, isActive, isPlayerTurn, winner, rewards } = useSelector(state => state.battle)
  const playerData = useSelector(state => state.player)
  const [showRewards, setShowRewards] = useState(false)

  useEffect(() => {
    const missionData = location.state?.mission
    if (!missionData) {
      navigate('/missions')
      return
    }

    const playerStats = {
      ...playerData.stats,
      ...playerData.character,
      jutsu: playerData.jutsuList
    }

    const enemyStats = {
      ...missionData.enemy,
      maxHp: missionData.enemy.hp,
      maxCp: missionData.enemy.cp,
      jutsu: missionData.enemy.jutsu || []
    }

    dispatch(startBattle({ player: playerStats, enemy: enemyStats }))
  }, [])

  useEffect(() => {
    if (!isActive && !isPlayerTurn && enemy) {
      const timer = setTimeout(() => {
        const action = createAIAction(enemy, player)
        dispatch(performEnemyAction(action))
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [isPlayerTurn, isActive])

  useEffect(() => {
    if (winner && !showRewards) {
      const missionData = location.state?.mission
      if (winner === 'player' && missionData) {
        const calculatedRewards = calculateRewards(missionData)
        dispatch(setRewards(calculatedRewards))
        
        dispatch(gainExp(calculatedRewards.exp))
        dispatch(addCurrency({ type: 'gold', amount: calculatedRewards.gold }))
        
        if (calculatedRewards.items) {
          calculatedRewards.items.forEach(itemId => {
            const itemData = missionData.rewards.items?.find(i => i === itemId)
            if (itemData) {
              dispatch(addItem({ id: itemData, name: itemId }))
            }
          })
        }

        dispatch(completeMission(missionData.id))
        dispatch(updateBattleStats({ result: 'win' }))
      } else {
        dispatch(updateBattleStats({ result: 'loss' }))
      }
      
      setShowRewards(true)
    }
  }, [winner])

  const handleEndBattle = () => {
    dispatch(endBattle())
    navigate('/village')
  }

  if (!player || !enemy) {
    return null
  }

  return (
    <div className="min-h-screen battle-scene p-4">
      <div className="max-w-7xl mx-auto py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <BattleCharacter
              character={player}
              isPlayer={true}
              isActive={isPlayerTurn && isActive}
            />
            
            <BattleCharacter
              character={enemy}
              isPlayer={false}
              isActive={!isPlayerTurn && isActive}
            />
          </div>

          <BattleLog />

          {isActive && isPlayerTurn && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <BattleActions disabled={!isPlayerTurn || !isActive} />
            </motion.div>
          )}

          {!isActive && !isPlayerTurn && (
            <div className="text-center text-ui-secondary/70">
              <p>Musuh sedang berpikir...</p>
            </div>
          )}
        </motion.div>
      </div>

      <Modal
        isOpen={showRewards}
        onClose={handleEndBattle}
        title={winner === 'player' ? '🎉 Victory!' : '💀 Defeat'}
        closeButton={false}
      >
        <div className="text-center space-y-6">
          {winner === 'player' ? (
            <>
              <p className="text-xl">Selamat! Kamu menang!</p>
              
              {rewards && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-ui-dark rounded-lg">
                      <p className="text-sm text-ui-secondary/70">EXP</p>
                      <p className="text-2xl font-bold text-thunder">+{rewards.exp}</p>
                    </div>
                    <div className="p-4 bg-ui-dark rounded-lg">
                      <p className="text-sm text-ui-secondary/70">Gold</p>
                      <p className="text-2xl font-bold text-thunder">+{rewards.gold}</p>
                    </div>
                  </div>

                  {rewards.items && rewards.items.length > 0 && (
                    <div>
                      <p className="text-sm text-ui-secondary/70 mb-2">Items:</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {rewards.items.map((item, index) => (
                          <span key={index} className="px-3 py-1 bg-fire/20 rounded-full text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            <>
              <p className="text-xl">Kamu kalah dalam pertempuran...</p>
              <p className="text-ui-secondary/70">
                Tingkatkan levelmu dan coba lagi!
              </p>
            </>
          )}

          <Button onClick={handleEndBattle} className="w-full">
            Kembali ke Village
          </Button>
        </div>
      </Modal>
    </div>
  )
}
