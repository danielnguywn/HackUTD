import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'


function NavBarPre() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="title-blue">
                    EarnNest
                </Link>
            </div>
            <div className='navbar-right'>
                <Link to="/signin" className="navbar-button-solid">Sign in</Link>
                <Link to="/signup" className="navbar-button-hollow">Sign up</Link>
            </div>
        </nav>
    )
}

export default NavBarPre