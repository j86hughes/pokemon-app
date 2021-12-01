import React from "react";
import "./App.css";

const getClassName = (type) => {
  switch (type) {
    case "grass":
      return "grassType";
    case "poison":
      return "poisonType";
    case "fire":
      return "fireType";
  }
};

const PokemonCard = ({ pokemonItem }) => {
  let typesArray = pokemonItem.types;

  const pokemonImage =
    pokemonItem.sprites?.other?.["official-artwork"]?.front_default;

  return (
    <div className="pokemonCardContainer" key={pokemonItem.name}>
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
        <div>{pokemonItem.name.charAt(0).toUpperCase() + pokemonItem.name.slice(1)}</div>
        <div className="typesContainer">
          {typesArray.map((item) => {
            return (
              <div
                className={getClassName(item.type.name)}
                key={item.type.name}
              >
                {item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
