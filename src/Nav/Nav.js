import React from "react";
import "./Nav.css";

const Nav = () => {

  return (
    <nav className="main">
      <div className="content-wrapper">
        <div className="nav-div" id="home-tab">
          <a className="nav-link">
            <div>Home</div></a>
        </div>
        <div className="nav-div" id="pokedex-tab">
          <a className="nav-link">
            <div >Pokédex</div></a>
        </div>
        <div className="nav-div" id="games-tab">
          <a className="nav-link" href="https://www.pokemon.com/uk/pokemon-video-games/">
            <div>Video Games & Apps</div></a>
        </div>
        <div className="nav-div" id="trading-tab">
          <a className="nav-link" href="https://www.pokemon.com/uk/pokemon-tcg/">
            <div>Trading Card Game</div></a>
        </div>
        <div className="nav-div" id="tv-tab">
          <a className="nav-link" href="https://www.pokemon.com/uk/pokemon-episodes/">
            <div>Pokémon TV</div></a>
        </div>
        <div className="nav-div" id="play-tab">
          <a className="nav-link" href="https://www.pokemon.com/uk/play-pokemon/">
            <div>Play! Pokémon Events</div></a>
        </div>
        <div className="nav-div" id="news-tab">
          <a className="nav-link" href="https://www.pokemon.com/uk/pokemon-news/">
            <div>News</div></a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
