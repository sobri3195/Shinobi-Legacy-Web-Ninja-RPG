import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import VillageMap from '@components/map/VillageMap'
import CharacterStats from '@components/character/CharacterStats'
import Button from '@components/ui/Button'
import { Menu, User, Package } from 'lucide-react'

export default function Village() {
  const navigate = useNavigate()
  const { character } = useSelector(state => state.player)

  if (!character) {
    navigate('/')
    return null
  }

  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-ui-primary/90 backdrop-blur-game border-b border-ui-secondary/10"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h2 className="text-xl font-ninja">Shinobi Legacy</h2>
          
          <div className="flex gap-3">
            <Button
              size="sm"
              variant="secondary"
              onClick={() => navigate('/profile')}
              icon={<User className="w-4 h-4" />}
            >
              Profile
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => navigate('/inventory')}
              icon={<Package className="w-4 h-4" />}
            >
              Inventory
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="pt-20">
        <VillageMap />
      </div>
    </div>
  )
}
