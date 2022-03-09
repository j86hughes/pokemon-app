import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pokedex from "pokedex-promise-v2";
import Pokeball from "../../components/Pokeball/Pokeball"
import Heading from "./Heading";
import Type from "./Type";
import Pagination from "./Pagination";
import Stats from "./Stats";
import Image from "./Image";
import Info from "./Info";

const P = new Pokedex();

const Pokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);

  const getPokemonDetails = async (name) => {
    setLoading(true);
    const item = await P.getPokemonByName(name);
    item.prevPokemon = await P.getPokemonByName(item.id === 1 ? 898 : item.id - 1)
    item.nextPokemon = await P.getPokemonByName(item.id === 898 ? 1 : item.id + 1)
    item.gender = []
    const item1 = await P.getGenderByName('male');
    const item2 = await P.getGenderByName('female')


    item1?.pokemon_species_details.forEach((i) => {
      if (i?.pokemon_species?.name === item.name) {
        item.gender.push(item1.name);

      }
    });
    item2?.pokemon_species_details.forEach((i) => {
      if (i?.pokemon_species?.name === item.name) {
        item.gender.push(item2.name);
      }
    });
    setPokemon(item);
    setLoading(false)
  };

  useEffect(() => {
    if (name) {
      getPokemonDetails(name);
    }
  }, [name]);

  if (loading) {
    return <Pokeball />;
  }

  if (!pokemon) {
    return null;
  }

  return (
    <div className="pokemon-page">
      <Pagination pokemonItem={pokemon} />
      <div className="pokemon-container">
        <Heading pokemonItem={pokemon} />
        <div className="main-contents">
          <div className="row3" pokemonItem={pokemon} >
            <Image
              src={pokemon.sprites?.other?.["official-artwork"]?.front_default}
            />
            <Info pokemonItem={pokemon} />
            <Type pokemonItem={pokemon} />
          </div>
          <Stats pokemonItem={pokemon} />
        </div>
      </div>
    </div>
  );
};

export default Pokemon;