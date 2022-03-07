import React from "react";
import "./pokemon.css";

const Info = ({ pokemonItem }) => {

  console.log(pokemonItem)
  let height = pokemonItem.height
  let weight = pokemonItem.weight
  let ability1 = pokemonItem.abilities[0].ability.name
  console.log(pokemonItem.abilities)
  // let ability2 = pokemonItem.abilities.length > 1 ? pokemonItem.abilities[1].ability.name : null

  const decimalize = num => {
    return (num / 10).toFixed(1)
  }

  return (
    <div className="info-div" height={200} width={400}>
      <div className="ul-div1">
        <ul className="info-ul1">
          <li className="info-li">
            <span className="info-label">Height</span>
            <span>{decimalize(height)} m</span>
          </li>
          <li className="info-li">
            <span className="info-label">Weight</span>
            <span>{decimalize(weight)} kg</span>
          </li>
        </ul>
      </div>
      <div className="ul-div2">
        <ul className="info-ul2">
          <li className="info-li">
            <span className="info-label">Gender</span>
            <span className="info-value" id="info-gender"></span>
          </li>
          <li className="info-li">
            <span className="info-label">Abilities</span>
            <span className="info-value" id="info-abilities">
              {ability1.replace('-', ' ')}
              {/* {ability2.replace('-', ' ')} */}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
