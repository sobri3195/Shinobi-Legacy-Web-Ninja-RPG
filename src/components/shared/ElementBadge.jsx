import React from 'react'
import { ELEMENT_DATA } from '@utils/constants'
import clsx from 'clsx'

export default function ElementBadge({ element, size = 'md' }) {
  const elementInfo = ELEMENT_DATA[element]
  if (!elementInfo) return null

  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-2'
  }

  return (
    <span
      className={clsx('element-badge', sizes[size])}
      style={{ backgroundColor: elementInfo.color }}
    >
      {elementInfo.icon} {elementInfo.name}
    </span>
  )
}
