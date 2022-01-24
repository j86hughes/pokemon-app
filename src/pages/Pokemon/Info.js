import React from "react";
import "./pokemon.css";

const Info = ({ pokemonItem }) => {
  return (
    <div className="infoDiv" height={200} width={400}>
      <div className="ulDiv1">
        <ul className="infoUl1">
          <li className="infoLi">
            <span className="infoLabel">Height</span>
            <span className="infoValue">{pokemonItem.height}</span>
          </li>
          <li className="infoLi">
            <span className="infoLabel">Weight</span>
            <span className="infoValue">{pokemonItem.weight}</span>
          </li>
          <li className="infoLi">
            <span className="infoLabel">Gender</span>
            <span className="infoValue">Iconblahblah</span>
          </li>
        </ul>
      </div>
      <div className="ulDiv2">
        <ul className="infoUl2">
          <li className="infoLi">
            <span className="infoLabel">Category</span>
            <span className="infoValue">Blah</span>
          </li>
          <li className="infoLi">
            <span className="infoLabel">Abilities</span>
            <span className="infoValue">
              {pokemonItem.abilities[0].ability.name.charAt(0).toUpperCase() +
                pokemonItem.abilities[0].ability.name.slice(1)}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default Info;
