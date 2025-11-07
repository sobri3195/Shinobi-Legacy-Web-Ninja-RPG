import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'
import { ArrowLeft, Swords } from 'lucide-react'

export default function Arena() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-ui-dark via-ui-primary to-ui-dark p-8">
      <div className="max-w-4xl mx-auto">
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

          <h1 className="text-4xl font-ninja text-gradient from-fire to-thunder mb-2">
            Arena
          </h1>
          <p className="text-ui-secondary/70">
            Uji kemampuanmu melawan ninja lain
          </p>
        </motion.div>

        <Card className="text-center py-12">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-8xl mb-6"
          >
            ⚔️
          </motion.div>

          <h2 className="text-3xl font-ninja mb-4">Coming Soon!</h2>
          
          <p className="text-ui-secondary/70 mb-8 max-w-md mx-auto">
            Arena PvP sedang dalam pengembangan. Segera kamu bisa bertarung melawan ninja lain dan naik rank!
          </p>

          <div className="space-y-4 max-w-md mx-auto text-left">
            <div className="p-4 bg-ui-dark rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Swords className="w-5 h-5 text-fire" />
                Fitur Arena v2.0
              </h3>
              <ul className="text-sm text-ui-secondary/70 space-y-1">
                <li>• Ranked PvP battles</li>
                <li>• Sistem ranking E-S</li>
                <li>• Leaderboard global</li>
                <li>• Reward mingguan</li>
                <li>• Tournament events</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
