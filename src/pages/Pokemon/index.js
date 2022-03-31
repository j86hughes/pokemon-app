import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pokedex from "pokedex-promise-v2";
import Pokeball from "../../components/Pokeball/Pokeball";
import Heading from "./Heading";
import Type from "../../components/Type/Type";
import Pagination from "./Pagination";
import Stats from "./Stats";
import Image from "./Image";
import Info from "./Info";
import Evolution from "./Evolution";
import Versions from "./Versions"

const P = new Pokedex();

const Pokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);

  const getPokemonDetails = async (name) => {
    setLoading(true);
    const item = await P.getPokemonByName(name);
    item.spec = await P.getPokemonSpeciesByName(name);
    const cat = await fetch(item.species.url)
    const catSpec = await cat.json()
    item.category = catSpec.genera[7].genus
    console.log(item)
   
    // await way with while loop:
    const evoChainUrl = item.spec.evolution_chain.url;
    const evo = await fetch(evoChainUrl);
    const evoObj = await evo.json();
    // console.log(evoObj);

    const evoListNames = [];
    let evolves = evoObj.chain;
    while (evolves) {
      evoListNames.push(evolves.species.name);
      evolves = evolves.evolves_to[0];
    }

    let evoListItems = await Promise.all(
      evoListNames.map(async (name) => {
        const item = await P.getPokemonByName(name);
        return item;
      })
    );

    item.evoListItems = evoListItems;

    item.prevPokemon = await P.getPokemonByName(
      item.id === 1 ? 898 : item.id - 1
    );
    item.nextPokemon = await P.getPokemonByName(
      item.id === 898 ? 1 : item.id + 1
    );

    const item1 = await P.getGenderByName("male");
    const item2 = await P.getGenderByName("female");

    item.canBeMale =
      item1?.pokemon_species_details.find(
        (pokemon) => pokemon?.pokemon_species?.name === item.name
      ) !== undefined;

    item.canBeFemale =
      item2?.pokemon_species_details.find(
        (pokemon) => pokemon?.pokemon_species?.name === item.name
      ) !== undefined;

    item.unknown = !item.canBeMale && !item.canBeFemale;

    setPokemon(item);
    setLoading(false);
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
  let blue = pokemon?.spec?.flavor_text_entries[0]?.flavor_text
  let red = pokemon?.spec?.flavor_text_entries[3]?.flavor_text

  return (
    <div className="pokemon-page">
      <Pagination pokemonItem={pokemon} />
      <div className="pokemon-container">
        <Heading pokemonItem={pokemon} />
        <div className="main-contents">
          <div className="row3" pokemonItem={pokemon}>
            <Image
              src={pokemon.sprites?.other?.["official-artwork"]?.front_default}
            />
            <Versions blue={blue} red={red} />
            <Info pokemonItem={pokemon} />
            <Type pokemonItem={pokemon} isLarge={true} />
          </div>
          <Stats pokemonItem={pokemon} />
        </div>

        {pokemon.evoListItems.length > 1 ? (
          <Evolution pokemonItem={pokemon} />
        ) : null}
      </div>
    </div>
  );
};

export default Pokemon;
