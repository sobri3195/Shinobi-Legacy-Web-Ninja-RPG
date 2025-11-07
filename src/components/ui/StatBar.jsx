import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function StatBar({ 
  label,
  current, 
  max, 
  color = 'fire',
  showValues = true,
  className = ''
}) {
  const percentage = Math.min(100, (current / max) * 100)

  const colors = {
    fire: 'from-fire to-fire-dark',
    water: 'from-water to-water-dark',
    thunder: 'from-thunder to-thunder-dark',
    wind: 'from-wind to-wind-dark',
    earth: 'from-earth to-earth-dark',
    hp: 'from-green-500 to-green-700',
    cp: 'from-blue-500 to-blue-700',
    exp: 'from-yellow-500 to-yellow-700'
  }

  return (
    <div className={clsx('space-y-1', className)}>
      {label && (
        <div className="flex justify-between text-sm">
          <span className="font-semibold">{label}</span>
          {showValues && (
            <span className="text-ui-secondary/70">
              {current} / {max}
            </span>
          )}
        </div>
      )}
      <div className="stat-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={clsx(
            'stat-fill bg-gradient-to-r',
            colors[color] || colors.fire
          )}
        />
      </div>
    </div>
  )
}
