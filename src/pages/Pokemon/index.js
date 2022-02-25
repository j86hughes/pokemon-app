import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Heading from "./Heading";
import Type from "./Type";
import Pagination from "./Pagination";
import Stats from "./Stats";
import Image from "./Image";
import Info from "./Info";

const Pokemon = () => {

  const getPokemonDetails = async (pokemon) => {
    const item = await P.getPokemonByName(pokemon.name);
    console.log(item)
    return item;
  };
  useEffect(() => {
    getPokemonDetails();
  }, []);
  
  const { state } = useLocation();
  const pokemonItem = state?.pokemonItem;
  return (
    <div className="pokemon-page">
      <Pagination pokemonItem={pokemonItem} />
      <div className="pokemon-container">
        <Heading pokemonItem={pokemonItem} />
        <div className="main-contents">
          <div className="row3" pokemonItem={pokemonItem} >
            <Image
              src={pokemonItem.sprites?.other?.["official-artwork"]?.front_default}
            />
            <Info pokemonItem={pokemonItem} />
            <Type pokemonItem={pokemonItem} />
          </div>
          <Stats pokemonItem={pokemonItem} />
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
