import React from "react";
import "./pokemon.css";
import { formatName, formatNumber } from "../../utils";

const Heading = ({ pokemonItem }) => {
  const name = formatName(pokemonItem.name);
  const number = formatNumber(pokemonItem.id)
  return (
    <div className="pokemon-name-heading">
      <span className="pokemon-name">{name}</span>
      <span className="pokemon-id">{number}</span>
    </div>
  );
};

export default Heading;
