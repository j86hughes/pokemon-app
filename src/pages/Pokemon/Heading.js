import React from "react";
import "./pokemon.css";
import { formatName } from "../../utils";

const Heading = ({ pokemonItem }) => {
  const name = formatName(pokemonItem.name);
  const getPokemonNumber = (number) => {
    if (number < 10) {
      return `#00${number}`;
    }
    if (number < 100) {
      return `#0${number}`;
    }
    return `#${number}`;
  };
  return (
    <div className="pokemon-name-heading">
      <span className="pokemon-name">{name}</span>
      <span className="pokemon-id">{getPokemonNumber(pokemonItem.id)}</span>
    </div>
  );
};

export default Heading;
