import React from 'react'
import jetbluelogo from '../../public/jetbluelogo.svg'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <nav>
      <Link to="/">
        <img id="logo" src={jetbluelogo} height="60" alt="jetblue logo" />
      </Link>
    </nav>
  </div>
)

export default Navbar
