export function getFromLocalStorage (key, defaultVal) {
  try {
    const item = window.localStorage.getItem(key)
    return JSON.parse(item)
  } catch (e) {
    console.error(e)
  }
}

export function setFromLocalStorage (key, val) {
  try {
    window.localStorage.setItem(key, JSON.stringify(val))
    return val
  } catch (e) {
    console.error(e)
  }
}
