import React from 'react';
import { useLocation } from "react-router-dom";
import './pokemon.css'

const Image = () => {
  const { state } = useLocation();
  const pokemonItem = state?.pokemonItem;
  const pokemonImage =
  pokemonItem.sprites?.other?.["official-artwork"]?.front_default;
  return (
    <div className='imageDiv'>
      {pokemonImage && (
        <img
          className="pokemonImage"
          height={400}
          width={400}
          alt={pokemonItem.name}
          src={pokemonImage}
        />
      )}

    </div>  
  )
};

export default Image