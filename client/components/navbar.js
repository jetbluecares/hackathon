import React from 'react'
import {Link} from 'react-router-dom'
import jetbluelogo from '../../public/jetbluelogo.svg'

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
