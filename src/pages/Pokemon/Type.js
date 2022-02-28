import React from 'react';
// import './pokemon.css'


const Type = ({pokemonItem}) => {
  let typesArray = pokemonItem.types;
    return(
        <div className='type-wrapper'>
        <h3>Type</h3>
        <div className="type-div">
        {typesArray.map((item) => {
          return (
            <div
              className={`types-card ${item.type.name}`}
              key={item.type.name}>
              {item.type.name.charAt(0).toUpperCase() +
                item.type.name.slice(1)}
            </div>
          );
        })}
      </div>
      </div>
    )
}

export default Type
