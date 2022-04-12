import { useState, useEffect } from "react";
import Pokedex from "pokedex-promise-v2";
import Pokeball from "../../../components/Pokeball/Pokeball";
import "./Search.css";

const P = new Pokedex();

const getPokemonDetails = async (pokemon) => {
  const item = await P.getPokemonByName(pokemon.name);
  return item;
};

const Search = async () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const totalPokemon = 898;

  setLoading(true);
  const pokemonList = await P.getPokemonsList({
    limit: totalPokemon,
    offset: 0,
  });

  const pokemonListWithDetails = await Promise.all(
    pokemonList.results?.map(getPokemonDetails)
  );
  setPokemon(pokemonListWithDetails);
  setLoading(false);

  const [name, setName] = useState("");
  const [foundPokemon, setFoundPokemon] = useState(pokemonListWithDetails);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = pokemonListWithDetails.filter((pokemon) => {
        pokemon.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundPokemon(results);
    } else {
      setFoundPokemon(pokemonListWithDetails);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  useEffect(() => {
    Search();
  }, []);

  if (loading) {
    return <Pokeball />;
  }

  return (
    <div className="searchDiv">
      <div className="search-mini-div">
        <div className="column-6 push-1">
          <div className="filter-text-search">
            <label className="nameornumber">Name or Number</label>
          </div>
          <span className="twitter-typehead">
            <input
              type="search"
              className="input1"
              value={name}
              onChange={filter}
            ></input>
            <input className="input2"></input>
            <div>
              {foundPokemon && foundPokemon.length > 0 ? (
                foundPokemon.map((pokemon) => (
                  <li className="user">
                    <span className="user-name">{pokemon.name}</span>
                  </li>
                ))
              ) : (
                <h1>No results found!</h1>
              )}
            </div>
          </span>
          <input
            type="submit"
            className="button button-search"
            value="Search"
            id="search"
          ></input>
          <p className="subtitle">
            Use the Advanced Search to explore Pokémon by type, weakness,
            Ability, and more!
          </p>
        </div>
        <div className="column-6 push-7">
          <div className="content-block content-block-full">
            <div className="banner banner-green">
              <h2 className="searchH2">
                Search for a Pokémon by name or using its National Pokédex
                number.
              </h2>
            </div>

            <span className="notch-bottom-right-small"> </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
