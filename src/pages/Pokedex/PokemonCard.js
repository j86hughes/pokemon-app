import React from "react";
import { useNavigate } from "react-router-dom";
import "./PokemonCard.css";
import { formatName, formatNumber, getTypeArray } from "../../utils";
import Type from "../../components/Type/Type";

const PokemonCard = ({ pokemonItem }) => {
  let navigate = useNavigate();
  const pokemonImage =
    pokemonItem.sprites?.other?.["official-artwork"]?.front_default;
  const name = formatName(pokemonItem.name);
  const typesArray = getTypeArray(pokemonItem.types);

  return (
    <div
      className="pokemonCardContainer"
      key={pokemonItem.name}
      onClick={() => navigate(`/${pokemonItem.name}`)}
    >
      {pokemonImage && (
        <img
          className="pokemonImage"
          alt={pokemonItem.name}
          src={pokemonImage}
        />
      )}
      <div className="copyContainer">
        <div className="pokemonId">{formatNumber(pokemonItem.id)}</div>
        <div className="pokemonName">{name}</div>
        <div className="cardTypeContainer">
          <Type isLarge={false} typesArray={typesArray} />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
