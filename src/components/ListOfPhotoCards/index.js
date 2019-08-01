import React from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
import { PhotoCard } from '../PhotoCard'

const withPhotos = graphql(gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)

const WrappedComponent = ({
  data: {
    photos = []
  }
} = {}) => (
  <ul>
    {
      photos.map(photo =>
        <PhotoCard
          key={photo.id}
          id={photo.id}
          src={photo.src}
          likes={photo.likes}
        />)
    }
  </ul>
)

export const ListOfPhotoCards = withPhotos(WrappedComponent)
