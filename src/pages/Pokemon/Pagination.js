import React from 'react';
import './pokemon.css'

const Pagination  = ({ pokemonItem }) => {
      return (
        <section className=" pagination section pokedex-pokemon-header">
          <div className="pokedex-pokemon-pagination">
            <a href="/uk/pokedex/calyrex" className="previous">
              <div className="left">
                <span className="icon icon_arrow_sm_left" />
                <span className="pokemon-number">#898</span>
                <span className="pokemon-name">Calyrex</span>
              </div>
            </a>
            <a href="/uk/pokedex/ivysaur" className="next">
              <div className="right">
                <span className="icon icon_arrow_sm_right" />
                <span className="pokemon-name">Ivysaur</span>
                <span className="pokemon-number">#002</span>
              </div>
            </a>
          </div>
        </section>
      );
    }

  export default Pagination
  