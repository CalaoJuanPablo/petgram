import { useState } from 'react'
import { setFromLocalStorage, getFromLocalStorage } from '../utils'
export function useLocalStorage (key, initialVal) {
  const [storedValue, setStoredValue] = useState(getFromLocalStorage(key) || initialVal)

  function setLocalStorage (value) {
    setFromLocalStorage(key, value)
    setStoredValue(value)
  }

  return [storedValue, setLocalStorage]
}
