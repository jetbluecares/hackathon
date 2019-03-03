import React from 'react'
import {Link} from 'react-router-dom'
import JetBlue_Airways_Logo from '../../public/JetBlue_Airways_Logo.png'

const Navbar = () => (
  <div>
    <nav>
      <img
        id="logo"
        src={JetBlue_Airways_Logo}
        height="60"
        alt="jetblue logo"
      />
    </nav>
  </div>
)

export default Navbar
