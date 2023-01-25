import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <nav className='navbar'>
                <div className='logo'>
                    <h2>TECHNOSTACK</h2>
                </div>
                <div className='nav_links'>
                    <NavLink activeClassName='active_class' to='/'>Home</NavLink>
                    <NavLink to='#' activeClassName='active_class'>Course</NavLink>
                    <NavLink to='#' activeClassName='active_class'>Blog</NavLink>
                    <NavLink activeClassName='active_class' to='/contact'>Contact Us</NavLink>
                </div>
                <div className='nav_button'>
                    <button>sign in</button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;