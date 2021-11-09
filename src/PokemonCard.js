import React from "react";
import "./App.css";

const PokemonCard = ({ pokemonItem, yah }) => {
  // console.log('YOHANS YALALALALALALALALA', pokemonItem.types);
  let typesArray = pokemonItem.types;
  return (
    <div key={pokemonItem.name}>
      <img alt={pokemonItem.name} src={pokemonItem.sprites.front_default} />
      <div>{pokemonItem.name}</div>
      {typesArray.map((item) => {
        // console.log(item.type.name);
        return <div key={item.type.name}>{item.type.name}</div>;
      })}
    </div>
  );
};

export default PokemonCard;
