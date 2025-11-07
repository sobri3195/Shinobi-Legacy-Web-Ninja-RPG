import React from 'react'
import { motion } from 'framer-motion'
import StatBar from '@components/ui/StatBar'
import ElementBadge from '@components/shared/ElementBadge'

export default function BattleCharacter({ character, isPlayer, isActive }) {
  if (!character) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: isPlayer ? -50 : 50 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        scale: isActive ? 1.05 : 1
      }}
      transition={{ duration: 0.3 }}
      className={`relative ${isPlayer ? 'text-left' : 'text-right'}`}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-ninja">{character.name}</h3>
            <p className="text-sm text-ui-secondary/70">Level {character.level}</p>
          </div>
          <ElementBadge element={character.element} size="sm" />
        </div>

        <div className="space-y-2">
          <StatBar
            current={character.currentHp}
            max={character.maxHp}
            color="hp"
            showValues
          />
          <StatBar
            current={character.currentCp}
            max={character.maxCp}
            color="cp"
            showValues
          />
        </div>

        {character.statusEffects && character.statusEffects.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {character.statusEffects.map((effect, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-ui-dark rounded-full"
              >
                {effect.type} ({effect.duration})
              </span>
            ))}
          </div>
        )}

        <motion.div
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
          animate={{
            opacity: isActive ? [1, 0.5, 1] : 0,
            scale: isActive ? [1, 1.2, 1] : 1
          }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          {isActive && (
            <div className="w-3 h-3 bg-fire rounded-full shadow-lg" />
          )}
        </motion.div>
      </div>

      <motion.div
        className="mt-8 w-40 h-40 mx-auto rounded-full border-4 flex items-center justify-center text-6xl"
        style={{
          borderColor: character.element ? `var(--${character.element})` : '#DC143C',
          boxShadow: `0 0 30px ${character.element ? `var(--${character.element})` : '#DC143C'}`
        }}
        animate={{
          boxShadow: isActive 
            ? [`0 0 20px var(--${character.element})`, `0 0 40px var(--${character.element})`, `0 0 20px var(--${character.element})`]
            : `0 0 20px var(--${character.element})`
        }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        🥷
      </motion.div>
    </motion.div>
  )
}
