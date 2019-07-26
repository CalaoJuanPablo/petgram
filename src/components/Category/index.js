import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://www.polytec.com.au/img/products/960-960/oyster-grey.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    <p>{ emoji }</p>
  </Anchor>
)
