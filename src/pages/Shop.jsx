import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'
import RarityBadge from '@components/shared/RarityBadge'
import { addItem, spendCurrency } from '@store/slices/playerSlice'
import { ArrowLeft, Coins, Gem } from 'lucide-react'

export default function Shop() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { allItems } = useSelector(state => state.game)
  const { currency } = useSelector(state => state.player)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'weapon', name: 'Weapons' },
    { id: 'armor', name: 'Armor' },
    { id: 'consumable', name: 'Consumables' },
    { id: 'scroll', name: 'Scrolls' }
  ]

  const filteredItems = selectedCategory === 'all'
    ? allItems
    : allItems.filter(item => item.type === selectedCategory)

  const handleBuy = (item) => {
    if (currency.gold >= item.price.buy) {
      const success = dispatch(spendCurrency({ type: 'gold', amount: item.price.buy }))
      if (success !== false) {
        dispatch(addItem(item))
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-ui-dark via-ui-primary to-ui-dark p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button
            variant="secondary"
            onClick={() => navigate('/village')}
            icon={<ArrowLeft />}
            className="mb-4"
          >
            Kembali
          </Button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-ninja text-gradient from-fire to-thunder mb-2">
                Shop
              </h1>
              <p className="text-ui-secondary/70">
                Beli item dan equipment untuk petualanganmu
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-ui-dark rounded-lg">
                <Coins className="w-5 h-5 text-thunder" />
                <span className="font-bold">{currency.gold}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-ui-dark rounded-lg">
                <Gem className="w-5 h-5 text-water" />
                <span className="font-bold">{currency.gem}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-fire text-white'
                  : 'bg-ui-dark text-ui-secondary/70 hover:bg-ui-dark/70'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const canAfford = currency.gold >= item.price.buy
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className={!canAfford ? 'opacity-50' : ''}>
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <span className="text-4xl">{item.icon}</span>
                      <RarityBadge rarity={item.rarity} />
                    </div>

                    <div>
                      <h3 className="font-ninja text-lg">{item.name}</h3>
                      <p className="text-sm text-ui-secondary/70">{item.description}</p>
                    </div>

                    {item.stats && (
                      <div className="flex flex-wrap gap-2 text-xs">
                        {Object.entries(item.stats).map(([stat, value]) => (
                          <span key={stat} className="px-2 py-1 bg-ui-dark rounded">
                            {stat}: +{value}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2 border-t border-ui-secondary/10">
                      <div className="flex items-center gap-1">
                        <Coins className="w-4 h-4 text-thunder" />
                        <span className="font-bold">{item.price.buy}</span>
                      </div>

                      <Button
                        size="sm"
                        onClick={() => handleBuy(item)}
                        disabled={!canAfford}
                      >
                        Beli
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
