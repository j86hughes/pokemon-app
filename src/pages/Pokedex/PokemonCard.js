import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./home.css";

const getPokemonNumber = (number) => {
  if (number < 10) {
    return `#00${number}`;
  }
  if (number < 100) {
    return `#0${number}`;
  }
  return `#${number}`;
};

const PokemonCard = ({ pokemonItem }) => {
  let navigate = useNavigate();
  let typesArray = pokemonItem.types;
  const pokemonImage =
    pokemonItem.sprites?.other?.["official-artwork"]?.front_default;

  return (
    <div
      className="pokemonCardContainer"
      key={pokemonItem.name}
      onClick={() => navigate(`/${pokemonItem.name}`)}
    >
      {pokemonImage && (
        <img
          className="pokemonImage"
          height={200}
          width={200}
          alt={pokemonItem.name}
          src={pokemonImage}
        />
      )}
      <div className="copyContainer">
        <div className="pokemonId">{getPokemonNumber(pokemonItem.id)}</div>
        <div className="pokemonName">
          {pokemonItem.name.charAt(0).toUpperCase() + pokemonItem.name.slice(1)}
        </div>
        <div className="typesContainer">
          {typesArray.map((item) => {
            return (
              <div
                className={`typesCard ${item.type.name}`}
                key={item.type.name}
              >
                {item.type.name.charAt(0).toUpperCase() +
                  item.type.name.slice(1)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
