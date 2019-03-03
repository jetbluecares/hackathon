import React from 'react'
import {Link} from 'react-router-dom'
import {Category} from '../components'
import {snacks, drinks, comfort} from '../images'
import {connect} from 'react-redux'
import {setItems} from '../store/index'
import history from '../history'

const categories = [
  {
    name: 'Snacks',
    items: snacks
  },
  {
    name: 'Drinks',
    items: drinks
  },
  {
    name: 'Entertainment',
    items: null
  },
  {
    name: 'Comfort',
    items: comfort
  },
  {
    name: 'Call Attendant',
    items: null
  },
  {
    name: 'Give Feedback',
    items: null
  }
]

class MainScreen extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(items) {
    this.props.setItems(items)
    history.push('/category')
  }

  render() {
    return (
      <div className="main-container">
        <div className="main-question">
          <h2>What can we help you with?</h2>
        </div>

        <div className="main-categories">
          <div>
            {categories.map(category => (
              <Category
                key={category}
                name={category.name}
                items={category.items}
                handleClick={this.handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  setItems: items => dispatch(setItems(items))
})

export default connect(null, mapDispatch)(MainScreen)
