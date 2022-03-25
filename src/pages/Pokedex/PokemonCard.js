import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { formatName, formatNumber } from "../../utils";


const PokemonCard = ({ pokemonItem }) => {
  let navigate = useNavigate();
  let typesArray = pokemonItem.types;
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
