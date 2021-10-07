import React, { useEffect, useState } from "react";
import "./App.css";
var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();

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
      let ourList = [];
      for (const pokemonItem of pokemonList.results) {
        let pokemon = await P.getPokemonByName(pokemonItem.name);
        if (pokemon) {
          ourList.push(pokemon);
        }
      }
      setPokemon(ourList);
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
      
      <h1>Pokémon Pokedex Encyclopedia !</h1>
      {/* <div className="randomizer" onClick={randList}>Random</div> */}
      <div className="container">
      

      {pokemon?.map((pokemonItem) => {
        return (
          <div key={pokemonItem.name}>
            <img src={pokemonItem.sprites.front_default} />
            {/* <div className="pokemon-number"></div> */}
            <div className="pokemon-name">{pokemonItem.name}</div>
          </div>
        );
      })}
      </div>
    </div>
  );
}
       
export default App;
