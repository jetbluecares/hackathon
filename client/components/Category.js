import React from 'react'

import {connect} from 'react-redux'
import {setItems} from '../store/items'
import {SelectionScreen} from '../components'

const Category = props => {
  const {items, name, handleClick} = props

  console.log('made it category', props)
  return (
    <div className="categories-container">
      <button type="button" onClick={() => handleClick(items)}>
        {name}
      </button>
    </div>
  )
}

// const mapDispatch = dispatch => ({
//   setItems: items => dispatch(setItems(items)),

// })

export default Category
