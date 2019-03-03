import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import JetBlue_Airways_Logo from '../../public/JetBlue_Airways_Logo.png'

const Navbar = ({handleClick, isLoggedIn}) => (
  <nav>
    <img
      id="logo"
      src={JetBlue_Airways_Logo}
      height="40"
      alt="piggybank logo"
    />
  </nav>
)
