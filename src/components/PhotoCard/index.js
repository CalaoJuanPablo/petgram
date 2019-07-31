import React, { useState, useEffect, useRef } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks'
import { Article, ImageWrapper, Image, Button } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

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
