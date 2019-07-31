import { useState, useEffect, useRef } from 'react'

export function useNearScreen () {
  const [show, setShow] = useState(false)
  const elementRef = useRef(null)

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]

        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })

      observer.observe(elementRef.current)
    })
  }, [])

  return [show, elementRef]
}
