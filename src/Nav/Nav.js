import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="main">
      <div className="content-wrapper">
        <div className="nav-div" id="home-tab">
          <a className="nav-link">Home</a>
        </div>
        <div className="nav-div" id="pokedex-tab">
          <a className="nav-link">Pokédex</a>
        </div>
        <div className="nav-div" id="games-tab">
          <a className="nav-link">Video Games & Apps</a>
        </div>
        <div className="nav-div" id="trading-tab">
          <a className="nav-link">Trading Card Game</a>
        </div>
        <div className="nav-div" id="tv-tab">
          <a className="nav-link">Pokémon TV</a>
        </div>
        <div className="nav-div" id="play-tab">
          <a className="nav-link">Play! Pokémon Events</a>
        </div>
        <div className="nav-div" id="news-tab">
          <a className="nav-link">News</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
