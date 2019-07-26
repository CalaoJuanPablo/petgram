import React from 'react'
import { GlobalStyles } from './components/styles/GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { PhotoCard } from './components/PhotoCard'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

function App (props) {
  return (
    <React.Fragment>
      <Logo />
      <GlobalStyles />
      <ListOfCategories />
      <ListOfPhotoCards />
    </React.Fragment>
  )
}

export default App
