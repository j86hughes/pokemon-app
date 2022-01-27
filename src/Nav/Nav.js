import React from 'react';
import "./Nav.css";

const Nav = () => {
    return (
        <nav className="main">
            <div className="content-wrapper">
                <div className='nav-div' id='home-tab'><a className='nav-link'>Home</a></div>
                <div className='nav-div' id='pokedex-tab'><a className='nav-link'>Pokedex</a></div>
                <div className='nav-div' id='about-tab'><a className='nav-link'>About</a></div>
            </div>
        </nav>
    );
}

export default Nav