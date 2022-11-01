import React from 'react';

function Navbar() {
    return (
        <header>
            <nav className='navbar'>
                <div className='logo'>
                    <h2>LIVDO</h2>
                </div>
                <div className='nav-links'>
                    <a href='#'>Home</a>
                    <a href='#'>Course</a>
                    <a href='#'>Blog</a>
                    <a href='#'>Contact Us</a>
                </div>
                <div className='nav-button'>
                    <button>sign up</button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;