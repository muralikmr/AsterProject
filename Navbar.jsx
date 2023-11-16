import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='logo'>
                <HashLink to="/#home">Hotel taj</HashLink>
                </div>
            <div className='nav-links'>
                <li><HashLink to="/#home">HOME</HashLink></li>
                <li><HashLink smooth to="/#about">ABOUT</HashLink></li>
                <li><HashLink smooth to="/#brands">BRANDS</HashLink></li>
                <li><NavLink to="/contact">CONTACT</NavLink></li>
                <li><NavLink to="/services">SERVICES</NavLink></li>
                
            </div>
            
        </nav>
    )
}

export default Navbar