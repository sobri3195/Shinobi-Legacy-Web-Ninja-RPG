import React from 'react'
import { RARITY_DATA } from '@utils/constants'
import clsx from 'clsx'

export default function RarityBadge({ rarity, size = 'sm' }) {
  const rarityInfo = RARITY_DATA[rarity]
  if (!rarityInfo) return null

  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1'
  }

  return (
    <span
      className={clsx('rounded-full font-bold uppercase tracking-wider', sizes[size])}
      style={{ 
        backgroundColor: rarityInfo.color,
        color: 'white'
      }}
    >
      {rarityInfo.name}
    </span>
  )
}
