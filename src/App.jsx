import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './GlobalStyles'

function App (props) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <ListOfCategories />
    </React.Fragment>
  )
}

export default App
