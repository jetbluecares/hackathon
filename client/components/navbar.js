import React from 'react'
import JetBlue_Airways_Logo from '../../public/JetBlue_Airways_Logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <nav>
      <Link to="/">
        <img
          id="logo"
          src={JetBlue_Airways_Logo}
          height="60"
          alt="jetblue logo"
        />
      </Link>
    </nav>
  </div>
)

export default Navbar
