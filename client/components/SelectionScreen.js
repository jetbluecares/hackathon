import React, {Component} from 'react'
import {Item} from '../components'
import {connect} from 'react-redux'

class SelectionScreen extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.state = {
      showHidden: false
    }
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
    console.log('DID WE MAKE IT', this.props)
    const {items} = this.props
    if (this.state.showHidden) {
      return (
        <div>
          <div className="alert">
            <span className="closebtn" onClick={this.onClick}>
              &times;
            </span>
            <strong>Thank you</strong> Your request has been submitted and a
            flight attendant will be with you shortly
          </div>
          <div className="selection-container">
            <div className="selection-items">
              <div className="selection-single-item">
                {items.map(item => (
                  <Item
                    key={item.name}
                    name={item.name}
                    image={item.imageUrl}
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
      <div className="selection-container">
        <div className="selection-items">
          <div className="selection-single-item">
            {items.map(item => (
              <Item
                key={item.name}
                name={item.name}
                image={item.imageUrl}
                onClick={this.onClick}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  items: state.items
})

export default connect(mapState)(SelectionScreen)
