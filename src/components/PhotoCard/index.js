import React, { useState, useEffect, useRef } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Article, ImageWrapper, Image, Button } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

function useLocalStorage (key, initialVal) {
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

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, setShow] = useState(false)
  const articelRef = useRef(null)
  const key = `likes_${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

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

      observer.observe(articelRef.current)
    })
  }, [])

  const LikeIcon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={articelRef}>
      {
        show &&
        <>
          <a href={`/detail/${id}`}>
            <ImageWrapper>
              <Image src={src} />
            </ImageWrapper>
          </a>

          <Button onClick={function () { setLiked(!liked) }}>
            <LikeIcon size='32px' />
            {likes} likes!
          </Button>
        </>
      }
    </Article>
  )
}
