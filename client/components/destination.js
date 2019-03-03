import React, {Component} from 'react'
import {NavLink, withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCity} from '../store/index'

class Destination extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   selectDestination: {}
    // }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    console.log('comdpdidmount')
    console.log('this.props', this.props)
    this.props.getCity()
  }

  // handleSubmit(event) {
  //   event.preventDefault()
  // }

  // handleChange(event) {
  //   // this.setState({
  //   //   selectDestination: event.target.value
  //   // })
  // }

  render() {
    let alldestinat = this.props.destination
    // const {destination} = this.props.destination
    console.log(alldestinat, 'redux store')
    return (
      <div />
      //   {alldestinat} && (
      //     <div>
      //       <label htmlFor="dest-select">Choose a destination</label>
      //       <select id="dest-select" onSubmit={this.handleSubmit}>
      //         {this.props.destination.map(city => {
      //           return (
      //             <option value={city.name} key={city.id}>
      //               {city.name}
      //             </option>
      //           )
      //         })}
      //       </select>
      //     </div>
      //   ) : (
      //     <div />
      //   )
    )
  }
}

const mapStateToProps = state => ({
  destination: state.destination.destination
})

const mapDispatchProps = dispatch => ({
  getCity: () => dispatch(getCity())
})
export default connect(mapStateToProps, mapDispatchProps)(Destination)
