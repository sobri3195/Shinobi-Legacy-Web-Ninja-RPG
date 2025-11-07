import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import Button from '@components/ui/Button'
import Modal from '@components/ui/Modal'
import { performAction } from '@store/slices/battleSlice'
import { canUseJutsu } from '@utils/gameLogic'
import { Sword, Sparkles, Shield, Package } from 'lucide-react'

export default function BattleActions({ disabled }) {
  const dispatch = useDispatch()
  const { player } = useSelector(state => state.battle)
  const { jutsuList, inventory } = useSelector(state => state.player)
  const [showJutsu, setShowJutsu] = useState(false)
  const [showItems, setShowItems] = useState(false)

  const handleAttack = () => {
    dispatch(performAction({ actionType: 'attack' }))
  }

  const handleDefend = () => {
    dispatch(performAction({ actionType: 'defend' }))
  }

  const handleJutsu = (jutsu) => {
    dispatch(performAction({ actionType: 'jutsu', data: { jutsu } }))
    setShowJutsu(false)
  }

  const handleItem = (item) => {
    dispatch(performAction({ actionType: 'item', data: { item } }))
    setShowItems(false)
  }

  const consumableItems = inventory.filter(item => item.type === 'consumable')

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Button
          variant="danger"
          onClick={handleAttack}
          disabled={disabled}
          icon={<Sword className="w-5 h-5" />}
        >
          Attack
        </Button>

        <Button
          variant="primary"
          onClick={() => setShowJutsu(true)}
          disabled={disabled}
          icon={<Sparkles className="w-5 h-5" />}
        >
          Jutsu
        </Button>

        <Button
          variant="secondary"
          onClick={handleDefend}
          disabled={disabled}
          icon={<Shield className="w-5 h-5" />}
        >
          Defend
        </Button>

        <Button
          variant="success"
          onClick={() => setShowItems(true)}
          disabled={disabled || consumableItems.length === 0}
          icon={<Package className="w-5 h-5" />}
        >
          Item
        </Button>
      </div>

      <Modal
        isOpen={showJutsu}
        onClose={() => setShowJutsu(false)}
        title="Pilih Jutsu"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jutsuList.map((jutsu) => {
            const usable = canUseJutsu(player, jutsu)
            return (
              <motion.div
                key={jutsu.id}
                whileHover={{ scale: usable ? 1.02 : 1 }}
                className={`p-4 bg-ui-dark rounded-lg border-2 ${
                  usable ? 'border-fire/50 cursor-pointer' : 'border-ui-secondary/10 opacity-50'
                }`}
                onClick={() => usable && handleJutsu(jutsu)}
              >
                <h4 className="font-ninja text-lg mb-2">{jutsu.name}</h4>
                <p className="text-sm text-ui-secondary/70 mb-3">{jutsu.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span>CP: {jutsu.cost.cp}</span>
                  <span>Power: {jutsu.power.base}</span>
                  {jutsu.cost.cooldown > 0 && (
                    <span>CD: {jutsu.cost.cooldown}</span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </Modal>

      <Modal
        isOpen={showItems}
        onClose={() => setShowItems(false)}
        title="Pilih Item"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {consumableItems.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-ui-dark rounded-lg border-2 border-fire/50 cursor-pointer"
              onClick={() => handleItem(item)}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{item.icon}</span>
                <div className="flex-1">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-ui-secondary/70">{item.description}</p>
                  {item.quantity > 1 && (
                    <span className="text-xs">Quantity: {item.quantity}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Modal>
    </>
  )
}
