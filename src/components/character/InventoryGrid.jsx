import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'
import RarityBadge from '@components/shared/RarityBadge'
import { equipItem, removeItem } from '@store/slices/playerSlice'

export default function InventoryGrid() {
  const { inventory, equipment } = useSelector(state => state.player)
  const dispatch = useDispatch()

  const handleEquip = (item) => {
    if (item.type === 'weapon' || item.type === 'armor' || item.type === 'accessory') {
      dispatch(equipItem(item))
    }
  }

  const handleUse = (item) => {
    if (item.type === 'consumable') {
      dispatch(removeItem(item.id))
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <h3 className="text-xl font-ninja mb-4">Equipment</h3>
        <div className="grid grid-cols-3 gap-4">
          {['weapon', 'armor', 'accessory'].map(slot => (
            <div key={slot} className="p-4 border-2 border-dashed border-ui-secondary/20 rounded-lg">
              <p className="text-xs text-ui-secondary/70 uppercase mb-2">{slot}</p>
              {equipment[slot] ? (
                <div className="space-y-2">
                  <p className="font-semibold">{equipment[slot].icon} {equipment[slot].name}</p>
                  <RarityBadge rarity={equipment[slot].rarity} />
                </div>
              ) : (
                <p className="text-ui-secondary/50 text-sm">Empty</p>
              )}
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-ninja mb-4">Inventory ({inventory.length}/50)</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {inventory.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="p-4 bg-ui-dark rounded-lg border border-ui-secondary/10 hover:border-fire/50 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <span className="text-2xl">{item.icon}</span>
                  {item.quantity > 1 && (
                    <span className="text-xs bg-fire px-2 py-1 rounded-full">
                      x{item.quantity}
                    </span>
                  )}
                </div>
                <p className="font-semibold text-sm">{item.name}</p>
                <RarityBadge rarity={item.rarity} />
                <p className="text-xs text-ui-secondary/70">{item.description}</p>
                
                <div className="flex gap-2 pt-2">
                  {(item.type === 'weapon' || item.type === 'armor' || item.type === 'accessory') && (
                    <Button
                      size="sm"
                      onClick={() => handleEquip(item)}
                      className="flex-1 text-xs"
                    >
                      Equip
                    </Button>
                  )}
                  {item.type === 'consumable' && (
                    <Button
                      size="sm"
                      variant="success"
                      onClick={() => handleUse(item)}
                      className="flex-1 text-xs"
                    >
                      Use
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {inventory.length === 0 && (
          <div className="text-center py-12 text-ui-secondary/50">
            <p>Inventory kosong</p>
          </div>
        )}
      </Card>
    </div>
  )
}
