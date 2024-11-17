import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'


function NavBarDash() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="title-white">
                    EarnNest
                </Link>
            </div>
            <div className='navbar-right'>
                <Link to="/signup" className="navbar-button-hollow">Sign out</Link>
            </div>
        </nav>
    )
}

export default NavBarDash