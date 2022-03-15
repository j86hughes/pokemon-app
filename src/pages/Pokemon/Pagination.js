import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./pokemon.css";

const Pagination = ({ pokemonItem }) => {
  let navigate = useNavigate();
  return (
    <section className=" pagination section pokedex-pokemon-header">
      <div className="pokedex-pokemon-pagination">
        <div
          className="previous"
          onClick={() => navigate(`/${pokemonItem.prevPokemon.name}`)}
        >
          <div className="left">
            <span className="icon icon_arrow_sm_left" />
            <span className="pokemon-number">{pokemonItem.prevPokemon.id}</span>
            <span className="pokemon-name">{pokemonItem.prevPokemon.name.split('-')[0]}</span>
          </div>
        </div>
        <div
          className="next"
          onClick={() => navigate(`/${pokemonItem.nextPokemon.name}`)}
        >
          <div className="right">
            <span className="icon icon_arrow_sm_right" />
            <span className="pokemon-name">{pokemonItem.nextPokemon.name.split('-')[0]}</span>
            <span className="pokemon-number">{pokemonItem.nextPokemon.id}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
