import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Pokedex from "pokedex-promise-v2";

import Heading from "./Heading";
import Type from "./Type";
import Nav from "./Nav";
import Pagination from "./Pagination";
import Stats from "./Stats";
import Image from "./Image";
import Info from "./Info";

const P = new Pokedex();

const Pokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState();
  const [count, setCount] = useState(0);

  const getPokemonDetails = async (name) => {
    const item = await P.getPokemonByName(name);
    setPokemon(item);
  };

  useEffect(() => {
    if (name) {
      getPokemonDetails(name);
    }
  }, [name]);

  if (!pokemon) {
    return null;
  }

  return (
    <div className="pokemonPage">
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>YALALALALALALALALA</button>
      <Nav />
      <Pagination pokemonItem={pokemon} />
      <Heading pokemonItem={pokemon} />
      <div className="col3" pokemonItem={pokemon}>
        <Image
          src={pokemon.sprites?.other?.["official-artwork"]?.front_default}
        />
        <Info pokemonItem={pokemon} />
        <Type pokemonItem={pokemon} />
      </div>
      <Stats pokemonItem={pokemon} />
    </div>
  );
};

export default Pokemon;
