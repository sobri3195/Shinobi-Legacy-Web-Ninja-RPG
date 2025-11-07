import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'
import StatBar from '@components/ui/StatBar'
import { restoreHealth } from '@store/slices/playerSlice'
import { ArrowLeft, Heart, Zap } from 'lucide-react'

export default function Hospital() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { stats } = useSelector(state => state.player)

  const isFullHealth = stats.currentHp === stats.maxHp && stats.currentCp === stats.maxCp

  const handleHeal = () => {
    dispatch(restoreHealth())
  }

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
            Hospital
          </h1>
          <p className="text-ui-secondary/70">
            Pulihkan HP dan Chakra-mu secara gratis
          </p>
        </motion.div>

        <Card className="text-center">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-8xl mb-6"
          >
            🏥
          </motion.div>

          <h2 className="text-2xl font-ninja mb-6">Nurse Station</h2>

          <div className="max-w-md mx-auto space-y-4 mb-8">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-green-500" />
                <span className="font-semibold">Health Points</span>
              </div>
              <StatBar
                current={stats.currentHp}
                max={stats.maxHp}
                color="hp"
                showValues
              />
            </div>

            <div className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-blue-500" />
                <span className="font-semibold">Chakra Points</span>
              </div>
              <StatBar
                current={stats.currentCp}
                max={stats.maxCp}
                color="cp"
                showValues
              />
            </div>
          </div>

          {isFullHealth ? (
            <div className="text-green-500 mb-4">
              ✓ Kamu sudah dalam kondisi prima!
            </div>
          ) : (
            <Button
              variant="success"
              size="lg"
              onClick={handleHeal}
              className="mb-4"
            >
              Pulihkan Sepenuhnya (Gratis)
            </Button>
          )}

          <p className="text-sm text-ui-secondary/70">
            Hospital selalu siap membantu para ninja yang terluka
          </p>
        </Card>
      </div>
    </div>
  )
}
