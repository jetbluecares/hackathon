import React, {Component} from 'react'
import {NavLink, withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'

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
  }

  handleChange(event) {
    this.setState({
      selectDestination: event.target.value
    })
  }
}

const mapStateToProps = state => ({
  destination: state.destination
})

export default withRouter(connect(mapStateToProps)(Destination))
