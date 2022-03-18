import React from 'react';
import './Navbar.css'

const Navbar = () =>{
    return (
        <nav className='navbar'>
            <div className='nav--container'>
                <h1 className='nav--title'>Meme Generator</h1>
                <span className='nav--subtitle'>React Practice</span>
            </div>
        </nav>
    )
}

export default Navbar;