import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='container'>

        <ul className='nav-links'>
          <h3 className='logo'>Logo</h3>
            <Link to='/'><li>Home</li></Link>
            <Link to='/About'><li>About</li></Link>
            {/* <Link to='/'><li>Contact</li></Link> */}
            <Link to='/LoginSignup'><li>Login/Signup</li></Link>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar
