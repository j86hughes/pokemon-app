import React from 'react';
import { useLocation } from "react-router-dom";
import './pokemon.css'


const Statssmall = () => {
  const { state } = useLocation();
  const pokemonItem = state?.pokemonItem;
  let typesArray = pokemonItem.types;
    return(
        <div className='type-wrapper'>
        <h3>Type</h3>
        <div className="typeDiv">
        {typesArray.map((item) => {
          return (
            <div
              className={`typesCard ${item.type.name}`}
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

export default Statssmall