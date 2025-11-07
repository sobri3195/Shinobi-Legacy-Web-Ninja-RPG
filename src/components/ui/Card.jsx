import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function Card({ 
  children, 
  className = '',
  hover = false,
  onClick = null,
  ...props 
}) {
  const Component = onClick ? motion.div : 'div'
  
  return (
    <Component
      whileHover={hover && onClick ? { scale: 1.02, y: -4 } : {}}
      onClick={onClick}
      className={clsx(
        'card',
        onClick && 'cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
