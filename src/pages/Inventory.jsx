import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Button from '@components/ui/Button'
import InventoryGrid from '@components/character/InventoryGrid'
import { ArrowLeft } from 'lucide-react'

export default function Inventory() {
  const navigate = useNavigate()

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
            Inventory & Equipment
          </h1>
        </motion.div>

        <InventoryGrid />
      </div>
    </div>
  )
}
