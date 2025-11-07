import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Card from '@components/ui/Card'
import { 
  Swords, 
  ShoppingCart, 
  Scroll, 
  Heart, 
  Home,
  Target,
  Users
} from 'lucide-react'

const locations = [
  {
    id: 'dojo',
    name: 'Dojo',
    icon: Swords,
    description: 'Training & skill learning',
    path: '/dojo'
  },
  {
    id: 'arena',
    name: 'Arena',
    icon: Target,
    description: 'PvP battles',
    path: '/arena'
  },
  {
    id: 'mission_hall',
    name: 'Mission Hall',
    icon: Scroll,
    description: 'Accept quests',
    path: '/missions'
  },
  {
    id: 'shop',
    name: 'Shop',
    icon: ShoppingCart,
    description: 'Buy items & equipment',
    path: '/shop'
  },
  {
    id: 'hospital',
    name: 'Hospital',
    icon: Heart,
    description: 'Restore HP/Chakra',
    path: '/hospital'
  },
  {
    id: 'village_square',
    name: 'Village Square',
    icon: Users,
    description: 'Social hub',
    path: '/village'
  }
]

export default function VillageMap() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-ui-dark via-ui-primary to-ui-dark p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-ninja text-gradient from-fire to-thunder mb-2">
            Village Map
          </h1>
          <p className="text-ui-secondary/70">Pilih lokasi yang ingin dikunjungi</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => {
            const Icon = location.icon
            return (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  hover
                  onClick={() => navigate(location.path)}
                  className="group cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-fire to-fire-dark flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-ninja mb-1">{location.name}</h3>
                      <p className="text-sm text-ui-secondary/70">{location.description}</p>
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
