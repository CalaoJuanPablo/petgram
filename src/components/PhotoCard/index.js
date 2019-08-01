import React, { useState, useEffect, useRef } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage, useNearScreen } from '../../hooks'
import { Article, ImageWrapper, Image, Button } from './styles'

const DEFAULT_IMAGE = 'https://www.polytec.com.au/img/products/960-960/oyster-grey.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `likes_${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, articelRef] = useNearScreen()

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
