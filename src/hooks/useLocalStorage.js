import { useState, useEffect } from 'react'
import { saveToStorage, loadFromStorage } from '@utils/storage'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    return loadFromStorage(key, initialValue)
  })

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value
    setStoredValue(valueToStore)
    saveToStorage(key, valueToStore)
  }

  return [storedValue, setValue]
}
