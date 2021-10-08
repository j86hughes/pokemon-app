import { useEffect, useState } from "react";
import "./App.css";
var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();

// const title = <h1>Pokemon Pokedex Encyclopedia!</h1>;
// ReactDOM.render(title, document.getElementById('root'));

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
    
    
  },
  []);
  // const randList = () => Pokedex.sort(() => Math.random() - 0.5);
  

//   function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

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

// const handleClick = () => alert("Hello world!");
// const button = <button onClick={handleClick}>Click here</button>;

// const randList = () => pokemonList.sort(() => Math.random() - 0.5);
// const div = <div onClick={randList}>Random</div>;
       

export default App;
