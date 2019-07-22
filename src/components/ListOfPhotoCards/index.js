import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => (
  <ul>
    {
      [1, 2, 3, 4].map(id => <PhotoCard key={id} />)
    }
  </ul>
)
