import { useState } from 'react'
export default function useLocalStorage (key, initialVal) {
  const [storedValue, setStoredValue] = useState(function () {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialVal
    } catch (e) {
      console.log(e)
      return initialVal
    }
  })

  function setLocalStorage (value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStoredValue(value)
    } catch {
      console.log('Error')
    }
  }

  return [storedValue, setLocalStorage]
}
