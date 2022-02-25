import React from "react";
import "./pokemon.css";

const Info = ({ pokemonItem }) => {
  const test = async () => {
    await P.getGenderByName("male")
      .then((response) => {
        console.log('YOHANS YALALALALALALALALALALALALA', { response });
      })
      .catch((error) => {
        console.log("There was an ERROR: ", error);
      });
  };
  return (
    <div className="info-div" height={200} width={400}>
      <div className="ul-div1">
        <ul className="info-ul1">
          <li className="info-li">
            <span className="info-label">Height</span>
            <span className="info-value">{pokemonItem.height}</span>
          </li>
          <li className="info-li">
            <span className="info-label">Weight</span>
            <span className="info-value">{pokemonItem.weight}</span>
          </li>
          <li className="info-li">
            <span className="info-label">Gender</span>
            <span className="info-value">Iconblahblah</span>
          </li>
        </ul>
      </div>
      <div className="ul-div2">
        <ul className="info-ul2">
          <li className="info-li">
            <span className="info-label">Category</span>
            <span className="info-value">Blah</span>
          </li>
          <li className="info-li">
            <span className="info-label">Abilities</span>
            <span className="info-value">
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
