import React from 'react'
import {Link} from 'react-router-dom'

const Item = props => {
  return (
    <div>
      <button type="button" key={props.name}>
        <h1>{props.name}</h1>
        <img src={props.imageUrl} />
      </button>
    </div>
  )
}

export default Item
