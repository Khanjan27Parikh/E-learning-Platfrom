import React from 'react';
import './index'

function Navbar() {
    return (
        <header>
            <h1>LIVDO</h1>
            <nav>
                <a href='#'>Home</a>
                <a href='#'>Course</a>
                <a href='#'>Blog</a>
                <a href='#'>Contact Us</a>
                <button>SignIn</button>
                <button>SignUp</button>
            </nav>
        </header>
    );
}

export default Navbar;