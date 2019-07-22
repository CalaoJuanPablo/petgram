import React from 'react'
import { GlobalStyles } from './GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { PhotoCard } from './components/PhotoCard'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

function App (props) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <ListOfCategories />
      <PhotoCard />
      <ListOfPhotoCards />
    </React.Fragment>
  )
}

export default App
