import React, {Component} from 'react'
import {NavLink, withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCity, getOneDestination} from '../store/index'
import DestinationList from './destinationList'

class Destination extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectDestination: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getCity()
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.getOneDestination(this.state.selectDestination)
  }

  handleChange(event) {
    this.setState({
      selectDestination: event.target.value
    })
  }

  render() {
    let {destination} = this.props
    // const {destination = this.props.destination
    console.log(destination, 'redux store')
    if (destination) {
      return (
        <div>
          <div>Flights from New York, JFK</div>
          <label htmlFor="dest-select">Choose a destination</label>
          <select id="dest-select" onSubmit={this.handleSubmit}>
            <option>Choose a destination</option>
            {this.props.destination.map(city => {
              return (
                <DestinationList
                  city={city}
                  key={city.id}
                  selectedDestination={this.state.selectDestination}
                />

                // <option value={city.name} key={city.id}>
                //   {city.name}
                // </option>

                // <option value={city.name} key={city.id}>
                //   {city.name}
                // </option>
              )
            })}
          </select>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  destination: state.destination
})

const mapDispatchProps = dispatch => ({
  getCity: () => dispatch(getCity()),
  getOneDestination: amenties => dispatch(getOneDestination(amenties))
})
export default connect(mapStateToProps, mapDispatchProps)(Destination)
