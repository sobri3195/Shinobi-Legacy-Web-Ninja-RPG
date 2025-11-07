import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'
import { ArrowLeft, BookOpen } from 'lucide-react'

export default function Dojo() {
  const navigate = useNavigate()
  const { jutsuList } = useSelector(state => state.player)

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

          <h1 className="text-4xl font-ninja text-gradient from-fire to-thunder mb-2">
            Dojo
          </h1>
          <p className="text-ui-secondary/70">
            Tempat latihan dan belajar jutsu baru
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-xl font-ninja mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-fire" />
              Jutsu yang Dikuasai
            </h3>
            
            {jutsuList.length > 0 ? (
              <div className="space-y-3">
                {jutsuList.map((jutsu) => (
                  <div
                    key={jutsu.id}
                    className="p-4 bg-ui-dark rounded-lg border border-ui-secondary/10"
                  >
                    <h4 className="font-semibold mb-1">{jutsu.name}</h4>
                    <p className="text-sm text-ui-secondary/70 mb-2">{jutsu.description}</p>
                    <div className="flex gap-4 text-xs text-ui-secondary/70">
                      <span>Type: {jutsu.type}</span>
                      <span>Rank: {jutsu.rank}</span>
                      <span>CP: {jutsu.cost.cp}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-ui-secondary/50 text-center py-8">
                Belum ada jutsu yang dikuasai
              </p>
            )}
          </Card>

          <Card className="text-center">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl mb-6"
            >
              🥋
            </motion.div>

            <h2 className="text-2xl font-ninja mb-4">Training Hall</h2>
            
            <p className="text-ui-secondary/70 mb-6">
              Fitur training dan skill tree sedang dalam pengembangan!
            </p>

            <div className="space-y-2 text-left max-w-sm mx-auto">
              <p className="text-sm font-semibold mb-2">Coming Soon:</p>
              <ul className="text-sm text-ui-secondary/70 space-y-1">
                <li>• Skill tree system</li>
                <li>• Training missions</li>
                <li>• Jutsu upgrade</li>
                <li>• Combat tutorials</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
