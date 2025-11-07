import { STORAGE_KEYS, GAME_VERSION } from './constants'

export const saveToStorage = (key, data) => {
  try {
    const serialized = JSON.stringify(data)
    localStorage.setItem(key, serialized)
    return true
  } catch (error) {
    console.error('Error saving to localStorage:', error)
    return false
  }
}

export const loadFromStorage = (key, defaultValue = null) => {
  try {
    const serialized = localStorage.getItem(key)
    if (serialized === null) {
      return defaultValue
    }
    return JSON.parse(serialized)
  } catch (error) {
    console.error('Error loading from localStorage:', error)
    return defaultValue
  }
}

export const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(key)
    return true
  } catch (error) {
    console.error('Error removing from localStorage:', error)
    return false
  }
}

export const clearAllStorage = () => {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key)
    })
    return true
  } catch (error) {
    console.error('Error clearing localStorage:', error)
    return false
  }
}

export const savePlayerData = (player) => {
  return saveToStorage(STORAGE_KEYS.PLAYER, {
    ...player,
    lastSaved: Date.now(),
    version: GAME_VERSION
  })
}

export const loadPlayerData = () => {
  const data = loadFromStorage(STORAGE_KEYS.PLAYER)
  
  if (!data) return null

  if (data.version !== GAME_VERSION) {
    console.warn('Save data version mismatch. Migration may be required.')
  }

  return data
}

export const exportSaveData = () => {
  const player = loadFromStorage(STORAGE_KEYS.PLAYER)
  const settings = loadFromStorage(STORAGE_KEYS.SETTINGS)

  const saveData = {
    player,
    settings,
    version: GAME_VERSION,
    exportedAt: new Date().toISOString()
  }

  const blob = new Blob([JSON.stringify(saveData, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `shinobi-legacy-save-${Date.now()}.json`
  link.click()
  URL.revokeObjectURL(url)
}

export const importSaveData = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    
    reader.onload = (e) => {
      try {
        const saveData = JSON.parse(e.target.result)
        
        if (!saveData.version || !saveData.player) {
          reject(new Error('Invalid save data format'))
          return
        }

        saveToStorage(STORAGE_KEYS.PLAYER, saveData.player)
        if (saveData.settings) {
          saveToStorage(STORAGE_KEYS.SETTINGS, saveData.settings)
        }

        resolve(saveData)
      } catch (error) {
        reject(error)
      }
    }

    reader.onerror = () => {
      reject(new Error('Failed to read file'))
    }

    reader.readAsText(file)
  })
}
