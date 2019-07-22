import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { ImageWrapper, Image, Button } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => (
  <article>
    <a href={`/detail/${id}`}>
      <ImageWrapper>
        <Image src={src} />
      </ImageWrapper>
    </a>

    <Button>
      <MdFavoriteBorder size='32px' />
      {likes} likes!
    </Button>
  </article>
)
