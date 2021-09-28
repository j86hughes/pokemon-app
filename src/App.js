import { useEffect, useState } from "react";
import "./App.css";
var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const getPokemon = async () => {
      var interval = {
        limit: 150,
        offset: 0,
      };
      const pokemonList = await P.getPokemonsList(interval);
      if (pokemonList?.results) {
        let ourList = [];
        for (const pokemonItem of pokemonList.results) {
          let pokemon = await P.getPokemonByName(pokemonItem.name);
          if (pokemon) {
            ourList.push(pokemon);
          }
        }
        setPokemon(ourList);
      }
    };

    getPokemon();
  }, []);

  return (
    <div className="App">
      {pokemon?.map((pokemonItem) => {
        return (
          <div key={pokemonItem.name}>
            <img src={pokemonItem.sprites.front_default} />
            <div>{pokemonItem.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
