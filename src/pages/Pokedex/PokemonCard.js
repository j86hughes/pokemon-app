import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { formatName, formatNumber } from "../../utils";
import Type from "../../components/Type/Type"


const PokemonCard = ({ pokemonItem }) => {
  let navigate = useNavigate();
  // let typesArray = pokemonItem.types;
  const pokemonImage =
    pokemonItem.sprites?.other?.["official-artwork"]?.front_default;
  const name = formatName(pokemonItem.name);

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
        <div className="pokemonId">{formatNumber(pokemonItem.id)}</div>
        <div className="pokemonName">{name}</div>
        <div className="cardTypeContainer">
         <Type isLarge={false} pokemonItem={pokemonItem} />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
