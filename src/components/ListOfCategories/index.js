import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server-cjp.calaojuanpablo.now.sh/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()

  useEffect(function () {
    function onScroll (e) {
      window.scrollY > 200
        ? setShowFixed(true)
        : setShowFixed(false)
    }

    document.addEventListener('scroll', onScroll)

    return function () {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  const renderList = (fixed) =>
    <List fixed={fixed}>
      {
        loading
          ? [1, 2, 3, 4, 5].map(
            placeholder =>
              <Item key={placeholder}><Category /></Item>
          )
          : categories.map(
            category =>
              <Item key={category.id}><Category {...category} /></Item>
          )
      }
    </List>

  return (
    <>
      {renderList()}
      {showFixed && renderList(showFixed)}
    </>
  )
}
