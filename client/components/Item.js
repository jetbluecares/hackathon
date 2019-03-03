import React from 'react'
const Item = props => {
  return (
    <div className="item-container">
      <button type="button" onClick={props.onClick} key={props.name}>
        <h1>{props.name}</h1>
        <img src={props.image} className="img" />
      </button>
    </div>
  )
}

export default Item
