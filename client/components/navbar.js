import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import JetBlue_Airways_Logo from '../../public/JetBlue_Airways_Logo.png'
import {MainScreen} from '../components'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>JetBlue</h1>
    <nav>
      <img
        id="logo"
        src={JetBlue_Airways_Logo}
        height="40"
        alt="piggybank logo"
      />
    </nav>
    <div>
      {/* The navbar will show these links before you log in */}
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/mainscreen">Main Screen</Link>
    </div>
    <hr />
  </div>
)
