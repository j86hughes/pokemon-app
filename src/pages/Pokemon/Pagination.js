import React from "react";
import { useNavigate } from "react-router-dom";
import "./pokemon.css";

const Pagination = ({ pokemonItem }) => {
  let navigate = useNavigate();
  const prevPokemonName = pokemonItem?.prevPokemon?.name;
  const prevPokemonId = pokemonItem?.prevPokemon?.id
  const nextPokemonName = pokemonItem?.nextPokemon?.name
  const nextPokemonid = pokemonItem?.nextPokemon?.id
  return (
    <section className=" pagination section pokedex-pokemon-header">
      <div className="pokedex-pokemon-pagination">
        <div
          className="previous"
          onClick={() => navigate(`/${prevPokemonName}`)}
        >
          <div className="left">
            <span className="icon icon_arrow_sm_left" />
            <span className="pokemon-number">{prevPokemonId}</span>
            <span className="pokemon-name">{prevPokemonName}</span>
          </div>
        </div>
        <div
          className="next"
          onClick={() => navigate(`/${nextPokemonName}`)}
        >
          <div className="right">
            <span className="icon icon_arrow_sm_right" />
            <span className="pokemon-name">{nextPokemonName}</span>
            <span className="pokemon-number">{nextPokemonid}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pagination;