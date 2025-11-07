import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loadPlayer } from '@store/slices/playerSlice'

import Home from '@pages/Home'
import CharacterCreation from '@pages/CharacterCreation'
import Village from '@pages/Village'
import Battle from '@pages/Battle'
import Missions from '@pages/Missions'
import Shop from '@pages/Shop'
import Profile from '@pages/Profile'
import Inventory from '@pages/Inventory'
import Hospital from '@pages/Hospital'
import Arena from '@pages/Arena'
import Dojo from '@pages/Dojo'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPlayer())
  }, [dispatch])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character-creation" element={<CharacterCreation />} />
        <Route path="/village" element={<Village />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/arena" element={<Arena />} />
        <Route path="/dojo" element={<Dojo />} />
      </Routes>
    </div>
  )
}

export default App
