import React from 'react'
import { useSelector } from 'react-redux'
import Card from '@components/ui/Card'
import StatBar from '@components/ui/StatBar'
import ElementBadge from '@components/shared/ElementBadge'
import { Heart, Zap, Sword, Shield, Wind } from 'lucide-react'

export default function CharacterStats() {
  const { character, stats } = useSelector(state => state.player)

  if (!character) return null

  return (
    <Card>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-ninja">{character.name}</h2>
            <p className="text-sm text-ui-secondary/70">Level {stats.level}</p>
          </div>
          <ElementBadge element={character.element} />
        </div>

        <StatBar
          label="HP"
          current={stats.currentHp}
          max={stats.maxHp}
          color="hp"
        />

        <StatBar
          label="CP"
          current={stats.currentCp}
          max={stats.maxCp}
          color="cp"
        />

        <StatBar
          label="EXP"
          current={stats.exp}
          max={stats.expToNext}
          color="exp"
        />

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-ui-secondary/10">
          <div className="flex items-center gap-2">
            <Sword className="w-5 h-5 text-fire" />
            <div>
              <p className="text-xs text-ui-secondary/70">Attack</p>
              <p className="text-lg font-bold">{stats.attack}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-water" />
            <div>
              <p className="text-xs text-ui-secondary/70">Defense</p>
              <p className="text-lg font-bold">{stats.defense}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Wind className="w-5 h-5 text-wind" />
            <div>
              <p className="text-xs text-ui-secondary/70">Speed</p>
              <p className="text-lg font-bold">{stats.speed}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-thunder" />
            <div>
              <p className="text-xs text-ui-secondary/70">Critical</p>
              <p className="text-lg font-bold">{(stats.critical * 100).toFixed(1)}%</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
