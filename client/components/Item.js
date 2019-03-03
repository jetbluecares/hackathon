import React from 'react'
const Item = props => {
  return (
    <div className="item-container">
      <button className="item-button" type="button" key={props.name}>
        <h1>{props.name}</h1>
        <img src={props.image} className="img" />
      </button>
    </div>
  )
}

export default Item
