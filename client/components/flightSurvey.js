import React from 'react'
import {connect} from 'react-redux'

const Flight = props => {
  const {name, displayName, handleSubmit, error} = props
  const {classes} = props

  return <div className="login-new" />
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      if (formName === 'signup') {
        const firstName = evt.target.firstName.value
        const lastName = evt.target.lastName.value
        dispatch(auth(email, password, formName, firstName, lastName))
      } else {
        dispatch(auth(email, password, formName))
      }
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(
  withStyles(styles)(AuthForm)
)
export const Signup = connect(mapSignup, mapDispatch)(
  withStyles(styles)(AuthForm)
)

//Based on your experience, how would you rate your experience?

//Rate your satisfaction with the following aspects of your travel planning experience with JetBlue:

//How was the check in process?
//How was navigating JetBlue.com?
//How helpful was airport staff?
//Ease of passing through security?
//Helpfulness of staff after security?
//Availaibility of flight information?
//Airpot terminal?
//Boarding process?
