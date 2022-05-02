import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pokedex from "pokedex-promise-v2";
import "./Search.css";

const P = new Pokedex();

const Search = () => {
  const [pokemon, setPokemon] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonList = await P.getPokemonsList({
        limit: 898,
        offset: 0,
      });
      return pokemonList;
    };
    const pokemonx = async () => {
      const pokemony = await getPokemon();
      const pokemonz = pokemony.results;
      console.log(pokemonz);
      setPokemon(pokemonz);
    };
    pokemonx();
  }, []);

  // the value of the search field
  const [name, setName] = useState("");
  // the search result
  const [foundPokemon, setFoundPokemon] = useState("");
  // console.log(pokemonItem)
  const pokemons = pokemon.map((poke) => poke.name);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = pokemons.filter((pokemon) => {
        return pokemon.toLowerCase().startsWith(keyword.toLowerCase());
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
    <div className="search-container">
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
              <p className="jim" onClick={() => setName(poke.charAt(0).toUpperCase() + poke.slice(1))}>
                {poke}
              </p>
            ))}
          </div>
        ) : null}
        <div>
          <button className="button-result" onClick={() => navigate(`/${name.toLowerCase()}`)}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
