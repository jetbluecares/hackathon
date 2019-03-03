import React from 'react'
import Link from 'react-router-dom'
import {connect} from 'react-redux'
import {setItems} from '../store/items'
import {SelectionScreen} from '../components'

const Category = props => {
  const {items, name, handleClick, link} = props

  console.log('made it category', props)
  if (props.link) {
    return (
      <Link to={props.link}>
        <button type="button">{name}</button>
      </Link>
    )
  }
  return (
    <div className="categories-container">
      <button type="button" onClick={() => handleClick(items)}>
        {name}
      </button>
    </div>
  )
}

export default Category
