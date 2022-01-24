import React from 'react';
import './pokemon.css'


const Stats = ({ pokemonItem }) => {
  let statsArray = pokemonItem.stats;
    return(
        <div className='stats-wrapper'>
        <div className="statsDiv">
            <h3 className='stats-header'>Stats</h3>
        {statsArray.map((item) => {
          return (
            <div
              className={`statsCard ${item.stat.name}`}
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



{/* <ul>
          <li className="first">
            <ul className="gauge">
              <li data-value={3} className="meter" style={{top: '80%'}} />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
            <span>HP</span>
          </li>
          <li>
            <ul className="gauge">
              <li data-value={3} className="meter" style={{top: '80%'}} />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
            <span>Attack</span>
          </li>
          <li>
            <ul className="gauge">
              <li data-value={3} className="meter" style={{top: '80%'}} />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
            <span>Defense</span>
          </li>
          <li>
            <ul className="gauge">
              <li data-value={4} className="meter" style={{top: '73.3333%'}} />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
            <span>Special Attack</span>
          </li>
          <li>
            <ul className="gauge">
              <li data-value={4} className="meter" style={{top: '73.3333%'}} />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
            <span>Special Defense</span>
          </li>
          <li>
            <ul className="gauge">
              <li data-value={3} className="meter" style={{top: '80%'}} />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
            <span>Speed</span>
          </li>
        </ul> */}