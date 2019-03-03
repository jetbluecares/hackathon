import React, {Component} from 'react'
import {NavLink, withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCity, getOneDestination} from '../store/index'

class DestinationList extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //  selectDestination: {}
  }
  //  this.handleChange = this.handleChange.bind(this)
  //  this.handleSubmit = this.handleSubmit.bind(this)
  // }

  // componentDidMount() {
  //  this.props.getCity()
  // }

  // handleSubmit(event) {
  //  event.preventDefault()
  //  this.props.getOneDestination(this.state.selectDestination)
  // }

  // handleChange(event) {
  //  this.setState({
  //   selectDestination: event.target.value
  //  })
  // }

  render() {
    const city = this.props.city
    return (
      <option value={city.name} key={city.id}>
        {city.name}
      </option>

      // <div>
      // {city.imageUrl.map(pic => {
      //  return (
      //   <image src={pic} key={pic}/>
      //  )
      // })}
      // </div>
    )
  }
}

const mapStateToProps = state => ({
  destination: state.destination
})

const mapDispatchProps = dispatch => ({
  getCity: () => dispatch(getCity()),
  getOneDestination: amenties => dispatch(getOneDestination(amenties))
})
export default connect(mapStateToProps, mapDispatchProps)(DestinationList)
