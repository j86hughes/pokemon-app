import { React, useEffect, useState } from 'react';
import './App.css';

const Pokedex = require('pokedex-promise-v2');

const P = new Pokedex();

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPokemon = async ({ limit = 150, offset = 0 }) => {
    setLoading(true);
    const pokemonList = await P.getPokemonsList({
      limit,
      offset,
    });
    if (pokemonList?.results) {
      const pokemonListWithDetails = await Promise.all(
        pokemonList.results?.map(async (element) => {
          const item = await P.getPokemonByName(element.name);
          if (item) {
            return item;
          }
          return null;
        }),
      );

      setPokemon(pokemonListWithDetails);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemon({});
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="App">
      <button
        type="button"
        alt="Surprise me!"
        onClick={() => getPokemon({
          limit: 12,
          offset: Math.floor(Math.random() * 150),
        })}
      >
        Surprise me!
      </button>
      <button type="button" onClick={() => getPokemon({})}>
        Show all!
      </button>
      {pokemon?.map((pokemonItem) => (
        <div key={pokemonItem.name}>
          <img alt={pokemonItem.name} src={pokemonItem.sprites.front_default} />
          <div>{pokemonItem.name}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
