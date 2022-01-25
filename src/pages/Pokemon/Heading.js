import React from 'react';
import './pokemon.css'

const Heading = ({ pokemonItem }) => {
  const getPokemonNumber = (number) => {
    if (number < 10) {
      return `#00${number}`;
    }
    if (number < 100) {
      return `#0${number}`;
    }
    return `#${number}`;
  };
  return (
      <div className='pokemon-name-heading'>
      <span className='pokemonName'>{pokemonItem.name.charAt(0).toUpperCase() + pokemonItem.name.slice(1)}</span> 
      <span className='pokemonId'>{getPokemonNumber(pokemonItem.id)}</span>
      </div>
  )
};

export default Heading
