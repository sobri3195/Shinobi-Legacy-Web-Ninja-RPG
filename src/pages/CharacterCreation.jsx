import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'
import { createCharacter } from '@store/slices/playerSlice'
import { ELEMENTS, ELEMENT_DATA } from '@utils/constants'

export default function CharacterCreation() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    element: '',
    gender: 'male'
  })

  const handleSubmit = () => {
    if (formData.name && formData.element) {
      dispatch(createCharacter(formData))
      navigate('/village')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ui-dark via-ui-primary to-ui-dark flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-4xl"
      >
        <Card className="p-8">
          <h1 className="text-4xl font-ninja text-center mb-8">
            Ciptakan Ninja-mu
          </h1>

          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Nama Ninja
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Masukkan nama ninja..."
                  className="input"
                  maxLength={20}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Gender
                </label>
                <div className="flex gap-4">
                  {['male', 'female'].map((gender) => (
                    <button
                      key={gender}
                      onClick={() => setFormData({ ...formData, gender })}
                      className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                        formData.gender === gender
                          ? 'border-fire bg-fire/20'
                          : 'border-ui-secondary/20 hover:border-ui-secondary/50'
                      }`}
                    >
                      <span className="text-4xl">{gender === 'male' ? '👨' : '👩'}</span>
                      <p className="mt-2 capitalize">{gender}</p>
                    </button>
                  ))}
                </div>
              </div>

              <Button
                onClick={() => setStep(2)}
                disabled={!formData.name}
                className="w-full"
              >
                Lanjut: Pilih Elemen
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <p className="text-center text-ui-secondary/70 mb-6">
                Pilih elemen dasar yang akan menentukan gaya bertarung-mu
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.values(ELEMENTS).map((element) => {
                  const data = ELEMENT_DATA[element]
                  return (
                    <motion.button
                      key={element}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFormData({ ...formData, element })}
                      className={`p-6 rounded-xl border-2 transition-all ${
                        formData.element === element
                          ? 'border-fire bg-fire/20 shadow-lg'
                          : 'border-ui-secondary/20 hover:border-ui-secondary/50'
                      }`}
                      style={{
                        borderColor: formData.element === element ? data.color : undefined
                      }}
                    >
                      <span className="text-5xl block mb-3">{data.icon}</span>
                      <h3 className="text-xl font-ninja mb-2">{data.name}</h3>
                      <p className="text-sm text-ui-secondary/70">{data.description}</p>
                    </motion.button>
                  )
                })}
              </div>

              <div className="flex gap-4">
                <Button
                  variant="secondary"
                  onClick={() => setStep(1)}
                  className="flex-1"
                >
                  Kembali
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.element}
                  className="flex-1"
                >
                  Mulai Petualangan!
                </Button>
              </div>
            </motion.div>
          )}
        </Card>
      </motion.div>
    </div>
  )
}
