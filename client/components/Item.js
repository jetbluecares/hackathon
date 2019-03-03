import React from 'react'
import Link from 'react-router-dom'
import {connect} from 'react-redux'

const Item = props => {
  console.log('props items feedback', props.items)
  let items = props.items
  let singleItem = items[0]
  let feedback = singleItem.type
  console.log('feedback', feedback)

  if (feedback === 'feedback') {
    return (
      <div className="categories-container">
        <button className="name-button" type="button">
          {props.name}
        </button>
      </div>
    )
  } else {
    return (
      <div className="item-container">
        <button
          className="item-button"
          type="button"
          key={props.name}
          onClick={props.onClick}
        >
          <h1>{props.name}</h1>
          <img src={props.image} className="img" />
        </button>
      </div>
    )
  }
}
const mapState = state => ({
  items: state.items
})

export default connect(mapState)(Item)
