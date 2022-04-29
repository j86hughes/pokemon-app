import { useState } from "react";
import "./Search.css";



const Search = ({pokemonItem}) => {
console.log(pokemonItem)
// the value of the search field
const [name, setName] = useState("");
// the search result
const [foundPokemon, setFoundPokemon] = useState("");

    const pokemons = pokemonItem.map((pokemon) => pokemon);
    // console.log(pokemons)

    const filter = (e) => {
      const keyword = e.target.value;
  
      if (keyword !== "") {
        const results = pokemons.filter((pokemon) => {
          return pokemon.name.toLowerCase().startsWith(keyword.toLowerCase());
          // Use the toLowerCase() method to make it case-insensitive
        });
        setFoundPokemon(results);
      } else {
        setFoundPokemon("");
        // If the text field is empty, show all users
      }
      setName(keyword);
    };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />
      <div className="pokemon-list">
        {foundPokemon && foundPokemon.length > 0 ? (
          <div className="pokedexResultsContainer">
            {foundPokemon?.map((poke) => (
              <p>{poke.name}</p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
