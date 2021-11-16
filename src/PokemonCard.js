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

const PokemonCard = ({ pokemonItem, yah, kimchi }) => {
  let typesArray = pokemonItem.types;

  return (
    <div key={pokemonItem.name}>
      <img alt={pokemonItem.name} src={pokemonItem.sprites.front_default} />
      <div>{pokemonItem.name}</div>
      <div className="typesContainer">
        {typesArray.map((item) => {
          return (
            <div
              className={getClassName(item.type.name)}
              key={item.type.name}
            >
              {item.type.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonCard;
