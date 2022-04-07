import React from "react";
import { useNavigate } from "react-router-dom";
import { formatName, formatNumber } from "../../utils";
import "./Pokemon.css";

const Pagination = ({ pokemonItem }) => {
  let navigate = useNavigate();
  const previous = formatName(pokemonItem?.prevPokemon?.name);
  const next = formatName(pokemonItem?.nextPokemon?.name);
  const prevId = formatNumber(pokemonItem.prevPokemon.id)
  const nextId = formatNumber(pokemonItem.nextPokemon.id)

  return (
    <section className=" pagination section pokedex-pokemon-header">
      <div className="pokedex-pokemon-pagination">
        <div
          className="previous"
          onClick={() => navigate(`/${pokemonItem.prevPokemon.name}`)}
        >
          <div className="left">
            <span className="icon icon_arrow_sm_left" />
            <span className="pokemon-number">{prevId}</span>
            <span className="pokemon-name">{previous}</span>
          </div>
        </div>
        <div
          className="next"
          onClick={() => navigate(`/${pokemonItem.nextPokemon.name}`)}
        >
          <div className="right">
            <span className="icon icon_arrow_sm_right" />
            <span className="pokemon-name">{next}</span>
            <span className="pokemon-number">{nextId}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
