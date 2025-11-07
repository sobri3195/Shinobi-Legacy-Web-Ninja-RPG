import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'
import { ArrowLeft, Swords, Star } from 'lucide-react'

export default function Missions() {
  const navigate = useNavigate()
  const { allMissions } = useSelector(state => state.game)
  const { missions: playerMissions, stats } = useSelector(state => state.player)

  const availableMissions = allMissions.filter(
    mission => !playerMissions.completed.includes(mission.id) && mission.level <= stats.level + 3
  )

  const handleStartMission = (mission) => {
    navigate('/battle', { state: { mission } })
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'text-green-500'
      case 'normal':
        return 'text-blue-500'
      case 'hard':
        return 'text-orange-500'
      case 'expert':
        return 'text-red-500'
      default:
        return 'text-ui-secondary'
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

          <h1 className="text-4xl font-ninja text-gradient from-fire to-thunder mb-2">
            Mission Hall
          </h1>
          <p className="text-ui-secondary/70">
            Pilih misi dan buktikan kemampuanmu!
          </p>
        </motion.div>

        <div className="grid gap-6">
          {availableMissions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Swords className="w-5 h-5 text-fire" />
                      <h3 className="text-xl font-ninja">{mission.name}</h3>
                      <span className={`text-sm font-bold uppercase ${getDifficultyColor(mission.difficulty)}`}>
                        {mission.difficulty}
                      </span>
                    </div>

                    <p className="text-ui-secondary/70 mb-4">{mission.description}</p>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div>
                        <span className="text-ui-secondary/70">Level: </span>
                        <span className="font-bold">{mission.level}</span>
                      </div>
                      <div>
                        <span className="text-ui-secondary/70">Enemy: </span>
                        <span className="font-bold">{mission.enemy.name}</span>
                      </div>
                      <div>
                        <span className="text-ui-secondary/70">Rewards: </span>
                        <span className="font-bold text-thunder">
                          {mission.rewards.exp} EXP • {mission.rewards.gold} Gold
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    onClick={() => handleStartMission(mission)}
                    disabled={mission.level > stats.level + 3}
                  >
                    Mulai Misi
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {availableMissions.length === 0 && (
          <Card className="text-center py-12">
            <p className="text-ui-secondary/50">
              Tidak ada misi yang tersedia saat ini.
            </p>
            <p className="text-sm text-ui-secondary/70 mt-2">
              Selesaikan misi lain atau tingkatkan levelmu!
            </p>
          </Card>
        )}

        {playerMissions.completed.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-ninja mb-4">Misi Selesai</h2>
            <div className="flex flex-wrap gap-2">
              {playerMissions.completed.map((missionId) => (
                <span
                  key={missionId}
                  className="px-3 py-1 bg-green-600/20 border border-green-600/50 rounded-full text-sm flex items-center gap-1"
                >
                  <Star className="w-3 h-3" />
                  {missionId}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
