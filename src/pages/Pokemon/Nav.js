import React from 'react';
import { useLocation } from "react-router-dom";
import './pokemon.css'

const Nav = () => {
    const { state } = useLocation();
    // const pokemonItem = state?.pokemonItem;
    return (
        <nav className="main">
            {/* <div className="blocker" /> */}
            <div className="content-wrapper">
                <div className='navDivs' id='homeTab'><a className='navLinks'>Home</a></div>
                <div className='navDivs' id='pokedexTab'><a className='navLinks'>Pokedex</a></div>
                <div className='navDivs' id='aboutTab'><a className='navLinks'>About</a></div>
            </div>
        </nav>
    );
}

export default Nav