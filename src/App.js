import React, { useEffect, useState } from 'react';
import Pokedex from 'pokedex-promise-v2';
import './App.css';

const P = new Pokedex();

const getPokemonDetails = async (pokemon) => {
  const item = await P.getPokemonByName(pokemon.name);
  return item;
};

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const totalPokemon = 898;

  const getRandomPokemon = async () => {
    setLoading(true);

    const pokemonList = await P.getPokemonsList({
      limit: totalPokemon,
      offset: 0,
    });

    const randomPokemonArray = [];
    for (let i = 1; i < 13; i += 1) {
      randomPokemonArray.push(pokemonList.results[Math.floor(Math.random() * totalPokemon)]);
    }

    const pokemonListWithDetails = await Promise.all(
      randomPokemonArray.map(getPokemonDetails),
    );

    setPokemon(pokemonListWithDetails);
    setLoading(false);
  };

  const getPokemon = async () => {
    setLoading(true);
    const pokemonList = await P.getPokemonsList({
      limit: totalPokemon,
      offset: 0,
    });
    if (pokemonList?.results) {
      const pokemonListWithDetails = await Promise.all(
        pokemonList.results?.map(getPokemonDetails),
      );

      setPokemon(pokemonListWithDetails);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  if (loading) {
    return <div className="pokeball" />;
  }

  return (
    <div className="App">
      <h1>Pokémon Pokedex Encyclopedia !</h1>
      <button
        type="button"
        alt="Surprise me!"
        onClick={getRandomPokemon}
      >
        Surprise me!
      </button>
      <button type="button" onClick={() => getPokemon()}>
        Show all!
      </button>
      <div className="container">
        {pokemon?.map((pokemonItem) => (
          <div key={pokemonItem.name}>
            <img
              alt={pokemonItem.name}
              src={pokemonItem.sprites.front_default}
            />
            <div>{pokemonItem.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
