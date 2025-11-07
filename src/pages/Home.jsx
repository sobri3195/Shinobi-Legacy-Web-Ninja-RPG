import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@components/ui/Button'
import { loadPlayer } from '@store/slices/playerSlice'
import { Play, Plus, BookOpen, Settings } from 'lucide-react'

export default function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { character, isLoaded } = useSelector(state => state.player)

  useEffect(() => {
    dispatch(loadPlayer())
  }, [dispatch])

  const handleNewGame = () => {
    navigate('/character-creation')
  }

  const handleContinue = () => {
    navigate('/village')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ui-dark via-fire-dark/20 to-ui-dark flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="mb-8"
        >
          <h1 className="text-7xl font-ninja text-gradient from-fire via-thunder to-fire bg-gradient-to-r mb-4">
            🥷 SHINOBI LEGACY
          </h1>
        </motion.div>

        <p className="text-xl text-ui-secondary/80 mb-12">
          Hidupkan kembali keseruan Ninja Saga dalam petualangan ninja epik!
        </p>

        <div className="space-y-4 max-w-md mx-auto">
          {isLoaded && character ? (
            <Button
              variant="primary"
              size="lg"
              onClick={handleContinue}
              icon={<Play />}
              className="w-full"
            >
              Lanjutkan Petualangan
            </Button>
          ) : null}

          <Button
            variant={character ? 'secondary' : 'primary'}
            size="lg"
            onClick={handleNewGame}
            icon={<Plus />}
            className="w-full"
          >
            Ninja Baru
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/guide')}
            icon={<BookOpen />}
            className="w-full"
          >
            Panduan
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/settings')}
            icon={<Settings />}
            className="w-full"
          >
            Pengaturan
          </Button>
        </div>

        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 text-sm text-ui-secondary/50"
        >
          <p>v1.0.0 • Made with ❤️ by Shinobi Legacy Team</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
