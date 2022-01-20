import React from 'react';
import './pokemon.css'

const Image = ({ src, name }) => {
  return (
    <div className='imageDiv'>
      {src && (
        <img
          className="pokemonImage"
          height={400}
          width={400}
          alt={name}
          src={src}
        />
      )}
    </div>  
  )
};

export default Image