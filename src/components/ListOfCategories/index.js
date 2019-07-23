import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(function () {
    window.fetch('https://petgram-server-cjp.calaojuanpablo.now.sh/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data)
      })
  }, [])

  return (
    <List>
      {
        categories.map(
          category =>
            <Item key={category.id}><Category {...category} /></Item>
        )
      }
    </List>
  )
}
