import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'
import CharacterStats from '@components/character/CharacterStats'
import { ArrowLeft, Trophy, Target } from 'lucide-react'

export default function Profile() {
  const navigate = useNavigate()
  const { character, battleStats, missions, currency } = useSelector(state => state.player)

  if (!character) {
    navigate('/')
    return null
  }

  const winRate = battleStats.totalBattles > 0
    ? ((battleStats.wins / battleStats.totalBattles) * 100).toFixed(1)
    : 0

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

          <h1 className="text-4xl font-ninja text-gradient from-fire to-thunder">
            Profile
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <CharacterStats />

          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-ninja mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-thunder" />
                Battle Statistics
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-ui-secondary/70">Total Battles</span>
                  <span className="font-bold">{battleStats.totalBattles}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ui-secondary/70">Wins</span>
                  <span className="font-bold text-green-500">{battleStats.wins}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ui-secondary/70">Losses</span>
                  <span className="font-bold text-red-500">{battleStats.losses}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-ui-secondary/10">
                  <span className="text-ui-secondary/70">Win Rate</span>
                  <span className="font-bold text-thunder">{winRate}%</span>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-ninja mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-fire" />
                Progress
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-ui-secondary/70">Missions Completed</span>
                  <span className="font-bold">{missions.completed.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ui-secondary/70">Gold</span>
                  <span className="font-bold text-thunder">{currency.gold}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ui-secondary/70">Gems</span>
                  <span className="font-bold text-water">{currency.gem}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
