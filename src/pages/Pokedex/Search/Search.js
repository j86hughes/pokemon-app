import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="searchDiv">
      <div className="search-mini-div">
        <div className="column-6 push-1">
          <div className="filter-text-search">
            <label className="nameornumber">Name or Number</label>
          </div>
          <span className="twitter-typehead">
            <input className="input1"></input>
            <input className="input2"></input>
            <div>
              <div></div>
            </div>
          </span>
          <input type="submit" className="button button-search" value="Search" id="search"></input>
          <p className="subtitle">
            Use the Advanced Search to explore Pokémon by type, weakness,
            Ability, and more!
          </p>
        </div>
        <div className="column-6 push-7">
          <div className="content-block content-block-full">
            <div className="banner banner-green">
              <h2 className="searchH2">
                Search for a Pokémon by name or using its National Pokédex
                number.
              </h2>
            </div>

            <span className="notch-bottom-right-small"> </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
