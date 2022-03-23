import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pokedex from "pokedex-promise-v2";
import Pokeball from "../../components/Pokeball/Pokeball";
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
    // console.log(item);
    const spec = await P.getPokemonSpeciesByName(name);
    console.log(spec);
    const evolutionChainUrl = spec.evolution_chain.url;
    console.log("CAAAAAAAAAAAAANT", evolutionChainUrl);
    const pleasenaaaaah = await fetch(evolutionChainUrl);

    const evolves = [];
    fetch(evolutionChainUrl)
      .then((response) => response.json())
      .then((data) => {
        let evoList = data.chain;
        while (evoList) {
          evolves.push(evoList.species.name);
          evoList = evoList.evolves_to[0];
        }
      });
    console.log(evolves);

    // const cant74 = async (name) => {
      // console.log("YAAAAAAAAAAAAAAAAAAAAAAAAH!");
      // console.log(name);
    // };

    // const evolutionListWithDetails = await Promise.all(evolves.map(cant74));
    evolves.map((name) => console.log('FEAST', name));

    //   console.log(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`)
    // }

    // item?.map((poke) => console.log(poke));

    //     const evoPokemons = item.evol.chain.map(evolution => getPokemonByName(evolution.thePath.name));

    // const loadedPokemons = await Promise.all(evoPokemons) //waits to load them

    // const pokemonFrontDefaults = loadedPokemons.map(pokemon => pokemon.path.frontDefault)

    // item.evoImagePaths = pokemonFrontDefaults

    // const interval = {
    //   limit: 10,
    //   offset: 34
    // }
    // const evols = await P.getEvolutionChainsList();
    // console.log(evols)
    // const evolsz = await Promise.all(evols);
    // console.log(evolsz)
    // console.log(evolsz);
    // const evoArr = Array.from(evols.results);
    // console.log(evoArr);

    // const jim = evoArr.map((thing) => console.log(thing));

    // console.log(jim);

    // const arrOne = item?.evol?.chain?.species?.map((name) => name)
    // console.log(arrOne)

    //   .then((response) => response.json())
    //   .then((data) => data);
    // console.log(cant);

    // const evolves = [];
    // let nextPokemon = item;
    // while (nextPokemon.evolvesTo) {
    //   evolves.push(nextPokemon.evolvesTo[0]);
    //   nextPokemon = nextPokemon.evolvesTo[0];
    // }

    // const evolves = [];

    // console.log(evolves)
    // item.evolves = evolves
    // console.log(evolves)
    // while (item.nextPokemon) {
    //   evolves.push(item.evol?.chain?.evolves_to[0]?.species?.name);
    //   item.nextPokemon =
    //     item.evol?.chain?.evolves_to[0]?.evolves_to[0]?.species?.name;
    // }
    // console.log(evolves);
    // console.log(item)
    // console.log(item.nextPokemon)

    // const evoPokemons = item.evol.chain.map(evolution => getPokemonByName(evolution.evol.chain.evolves_to[0].species.name));

    // spec.image = item.sprites?.other?.["official-artwork"]?.front_default;
    // console.log(spec);

    // console.log(
    //   item?.evol?.chain?.species?.name,
    //   item?.evol?.chain?.evolves_to[0]?.species?.name,
    //   item?.evol?.chain?.evolves_to[0]?.evolves_to[0]?.species?.name
    // );

    // const pokemonImage =
    //   item.sprites?.other?.["official-artwork"]?.front_default;

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

  // for(let i = 0; i < totalPokemon; i++){

  // }

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
            <Info pokemonItem={pokemon} />
            <Type pokemonItem={pokemon} />
          </div>
          <Stats pokemonItem={pokemon} />
        </div>
        <div className="Jim">
          {pokemon?.evol?.chain?.evolves_to[0]?.species?.name?.length > 0 ? (
            //       <img
            //         src={
            //           `${pokemon?.evol?.chain?.species?.name}`.sprites?.other?.[
            //             "official-artwork"
            //           ]?.front_default
            //         }  height={200}
            // width={200}
            //       />
            //     ) && (
            //       <img
            //         src={
            //           (pokemon?.evol?.chain?.evolves_to[0]?.species?.name).sprites
            //             ?.other?.["official-artwork"]?.front_default
            //         }  height={200}
            // width={200}
            //       />
            <img
              height={200}
              width={200}
              src={pokemon.sprites?.other?.["official-artwork"]?.front_default}
            />
          ) : null}
          <img
            height={200}
            width={200}
            src={
              pokemon.nextPokemon.sprites?.other?.["official-artwork"]
                ?.front_default
            }
          />

          {pokemon?.evol?.chain?.evolves_to[0]?.evolves_to[0]?.species?.name
            ?.length > 0 ? (
            <img
              src={
                pokemon.evol.chain.evolves_to[0].evolves_to[0].species.name
                  .sprites?.other?.["official-artwork"]?.front_default
              }
              height={200}
              width={200}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
