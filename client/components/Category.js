import React, {Component} from 'react'
import Link from 'react-router-dom'
import {connect} from 'react-redux'
import {setItems} from '../store/items'
import {SelectionScreen} from '../components'

class Category extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {items, name, handleClick, link, onClick} = this.props
    console.log('made it category', this.props)
    if (link) {
      return (
        <Link to={link}>
          <button type="button">{name}</button>
        </Link>
      )
    } else if (name === 'Call Attendant') {
      return (
        <div className="categories-container">
          <button className="name-button" type="button" onClick={onClick}>
            {name}
          </button>
        </div>
      )
    } else {
      return (
        <div className="categories-container">
          <button
            className="name-button"
            type="button"
            onClick={() => handleClick(items)}
          >
            {name}
          </button>
        </div>
      )
    }
  }
}

export default Category
