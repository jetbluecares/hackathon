import React, {Component} from 'react'
import {NavLink, withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCity} from '../store'

export class Destination extends Component {
  constructor() {
    super()
    this.setState = {
      selectDestination: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      destinations: alldest()
    })
  }

  handleChange(event) {
    // this.setState({
    //   selectDestination: event.target.value
    // })
  }

  render() {
    //const {destination} = this.props.destination
    console.log(this.props, 'detidjsf')
    return (
      <div>
        <label htmlFor="dest-select">Choose a destination</label>
        <select id="dest-select">
          {this.props.destination.map(city => {
            return (
              <option value={city.name} key={city.id}>
                {city.name}
              </option>
            )
          })}
        </select>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  destination: state.destination
})

const mapDispatchProps = dispatch => ({
  alldest: () => getCity()
})
export default withRouter(
  connect(mapStateToProps, mapDispatchProps)(Destination)
)
