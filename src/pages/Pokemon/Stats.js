import React from 'react';
import './pokemon.css'


const Stats = ({ pokemonItem }) => {
  let statsArray = pokemonItem.stats;
    return(
        <div className='stats-wrapper'>
        <div className="stats-div">
            <h3 className='stats-header'>Stats</h3>
        {statsArray.map((item) => {
          return (
            <div
              className={`stats-card ${item.stat.name}`}
              key={item.stat.name}>
              {item.stat.name.charAt(0).toUpperCase() +
                item.stat.name.slice(1)}
            </div>
          );
        })}
      </div>
      </div>
    )
}

export default Stats
