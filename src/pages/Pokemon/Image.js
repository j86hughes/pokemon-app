import React from 'react';
// import './pokemon.css'

const Image = ({ src, name }) => {
  return (
    <div className='image-div'>
      {src && (
        <img
          className="pokemon-image"
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
