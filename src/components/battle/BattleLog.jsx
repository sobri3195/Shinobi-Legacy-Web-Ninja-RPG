import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import Card from '@components/ui/Card'

export default function BattleLog() {
  const { battleLog } = useSelector(state => state.battle)
  const logEndRef = useRef(null)

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [battleLog])

  const getLogColor = (type) => {
    switch (type) {
      case 'attack':
        return 'text-fire'
      case 'jutsu':
        return 'text-thunder'
      case 'critical':
        return 'text-fire font-bold'
      case 'evade':
        return 'text-wind'
      case 'heal':
        return 'text-green-400'
      case 'status':
        return 'text-purple-400'
      case 'victory':
        return 'text-green-500 font-bold'
      case 'defeat':
        return 'text-red-500 font-bold'
      default:
        return 'text-ui-secondary'
    }
  }

  return (
    <Card className="h-64 overflow-y-auto scrollbar-hide">
      <h3 className="text-lg font-ninja mb-3 sticky top-0 bg-ui-primary z-10">Battle Log</h3>
      <div className="space-y-2">
        <AnimatePresence>
          {battleLog.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`text-sm ${getLogColor(log.type)} pl-2 border-l-2 border-current`}
            >
              <span className="text-ui-secondary/50 mr-2">[Turn {log.turn}]</span>
              {log.message}
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={logEndRef} />
      </div>
    </Card>
  )
}
