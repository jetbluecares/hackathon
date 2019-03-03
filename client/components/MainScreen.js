import React from 'react'
import {Link} from 'react-router-dom'
import {Category} from '../components'
import {
  snacks,
  drinks,
  comfort,
  feedback,
  nextDestination,
  entertainment
} from '../images'
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
    items: entertainment
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
    items: feedback
  },
  {
    name: 'Next Destination',
    items: nextDestination
  }
]

class MainScreen extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.onClick = this.onClick.bind(this)
    this.state = {
      showHidden: false
    }
  }

  handleClick(items) {
    this.props.setItems(items)
    history.push('/category')
  }
  onClick() {
    if (this.state.showHidden) {
      this.setState({
        showHidden: false
      })
    } else {
      this.setState({
        showHidden: true
      })
    }
  }

  render() {
    console.log('this.props', this.props)
    if (this.state.showHidden) {
      return (
        <div>
          <div>
            <div className="alert">
              <span className="closebtn" onClick={this.onClick}>
                &times;
              </span>
              <strong>Thank you</strong> Your request has been submitted and a
              flight attendant will be with you shortly.
            </div>
          </div>
          <div className="main-container">
            <div className="main-question">
              <h1>What can we help you with?</h1>
            </div>

            <div className="main-categories">
              <div className="main-single-category">
                {categories.map(category => (
                  <Category
                    key={category}
                    name={category.name}
                    items={category.items}
                    handleClick={this.handleClick}
                    onClick={this.onClick}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="main-container">
        <div className="main-question">
          <h1>What can we help you with?</h1>
        </div>

        <div className="main-categories">
          <div className="main-single-category">
            {categories.map(category => (
              <Category
                key={category}
                name={category.name}
                items={category.items}
                handleClick={this.handleClick}
                onClick={this.onClick}
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
