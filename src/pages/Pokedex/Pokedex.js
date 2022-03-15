import React, { useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";
import PokemonCard from "./PokemonCard/index.js";
import { createUseStyles } from "react-jss";
import Pokeball from "../../components/Pokeball";
import styles from "./styles";

const P = new Pokedex();

const useStyles = createUseStyles(styles);

const getGenderLists = async () => {
  let maleList = [];
  let femaleList = [];
  try {
    maleList = await P.getGenderByName("male");
    femaleList = await P.getGenderByName("female");
  } catch (error) {
    console.log(error);
  }

  return {
    maleList,
    femaleList,
  };
};

const getPokemonDetails = async (pokemon) => {
  const item = await P.getPokemonByName(pokemon.name);
  return item;
};

const totalPokemon = 898;

const PokedexPage = () => {
  const classes = useStyles();
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRandomPokemon = async () => {
    setLoading(true);

    const pokemonList = await P.getPokemonsList({
      limit: totalPokemon,
      offset: 0,
    });

    const randomPokemonArray = [];
    for (let i = 1; i < 13; i += 1) {
      randomPokemonArray.push(
        pokemonList.results[Math.floor(Math.random() * totalPokemon)]
      );
    }

    const pokemonListWithDetails = await Promise.all(
      randomPokemonArray.map(getPokemonDetails)
    );

    setPokemon(pokemonListWithDetails);
    setLoading(false);
  };

  const getPokemon = async () => {
    setLoading(true);
    const pokemonList = await P.getPokemonsList({
      limit: 12,
      offset: 0,
    });
    if (pokemonList?.results) {
      const pokemonListWithDetails = await Promise.all(
        pokemonList.results?.map(getPokemonDetails)
      );

      setPokemon(pokemonListWithDetails);
      setLoading(false);
    }
  };

  const handleSelectChange = async (event) => {
    let sortedPokemon = [];
    if (event.target.value === "numberAsc") {
      setLoading(true);
      sortedPokemon = await pokemon.sort(function (a, b) {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
    }
    if (event.target.value === "numberDesc") {
      setLoading(true);
      sortedPokemon = await pokemon.sort(function (a, b) {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
        return 0;
      });
    }
    if (event.target.value === "nameAsc") {
      setLoading(true);
      sortedPokemon = await pokemon.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
    if (event.target.value === "nameDesc") {
      setLoading(true);
      sortedPokemon = await pokemon.sort(function (a, b) {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
    }
    setLoading(false);
    setPokemon(sortedPokemon);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  if (loading) {
    return <Pokeball />;
  }

  return (
    <div className={classes.pokedexContainer}>
      <div className={classes.titleContainer}>
        <p className={classes.title}>Pokédex</p>
      </div>
      <div className={classes.filtersContainer}>
        <button
          className={classes.randomizer}
          type="button"
          alt="Surprise me!"
          onClick={getRandomPokemon}
        >
          Surprise Me!
        </button>
        <div className={classes.selectWrapper}>
          <select
            id="#sortOrder"
            className={classes.sortOrder}
            onChange={handleSelectChange}
          >
            <option value="noSort">Sort results by...</option>
            <option value="numberAsc">Lowest Number (First)</option>
            <option value="numberDesc">Highest Number (First)</option>
            <option value="nameAsc">A-Z</option>
            <option value="nameDesc">Z-A</option>
          </select>
        </div>
      </div>
      <div className={classes.pokedexResultsContainer}>
        {pokemon?.map((poke) => (
          <PokemonCard pokemonItem={poke} key={poke.name} />
        ))}
      </div>
    </div>
  );
};

export default PokedexPage;
