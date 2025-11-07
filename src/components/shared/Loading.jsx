import React from 'react'
import { motion } from 'framer-motion'

export default function Loading({ message = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <motion.div
        className="flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-4 h-4 bg-fire rounded-full"
            animate={{
              y: ['0%', '-50%', '0%'],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.15
            }}
          />
        ))}
      </motion.div>
      <p className="mt-4 text-ui-secondary/70">{message}</p>
    </div>
  )
}
