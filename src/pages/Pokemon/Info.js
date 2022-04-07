import React from "react";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import "./Pokemon.css";

const Info = ({ pokemonItem }) => {
  let height = pokemonItem.height;
  let weight = pokemonItem.weight;
  let category = pokemonItem.category.replace("Pokémon", "")

  const abilities = pokemonItem.abilities?.map(({ ability }) => (
    <span className="info-value" id="info-abilities">
      {ability?.name.replaceAll("-", " ")}
    </span>
  ));
 

  const decimalize = (num) => {
    return (num / 10).toFixed(1);
  };

  return (
    <div className="info-div" height={200} width={400}>
      <div className="info-ul-div1">
        <ul className="info-ul1">
          <li className="info-li">
            <span className="info-label">Height</span>
            <span className="info-value">{decimalize(height)} m</span>
          </li>
          <li className="info-li">
            <span className="info-label">Weight</span>
            <span className="info-value">{decimalize(weight)} kg</span>
          </li>
          <li className="info-li">
            <span className="info-label">Gender</span>
            {pokemonItem.canBeMale ? (
              <span className="info-value">    <MaleIcon className="malePokemon"></MaleIcon>
              </span>
            ) : null}
            {pokemonItem.canBeFemale ? (
              <span className="info-value">    <FemaleIcon className="femalePokemon"></FemaleIcon>
              </span>
            ) : null}
            {pokemonItem.unknown ? (
              <span className="info-value">Unknown</span>
            ) : null}
          </li>
        </ul>
      </div>
      <div className="info-ul-div2">
        <ul className="info-ul2">
          <li className="info-li">
            <span className="info-label">Category</span>
            <span className="info-value">{category}</span>
          </li>
          <li className="info-li">
            <span className="info-label">Abilities</span>
            {abilities}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
