import React from 'react';
import './pokemon.css'



const Stats = ({ pokemonItem }) => {

  let statsArray = pokemonItem.stats;
  console.log(item.base_stat)
  // console.log(statsArray)
  // if (item.stat.name.length < 8) {
  //   console.log(item.stat.name.charAt(7).toUpperCase() +
  //     item.stat.name.slice(8))
  // }
  // if (item.stat.name.length < 8) {
  //   console.log(item.stat.name.charAt(7).toUpperCase() +
  //     item.stat.name.slice(8))
  // }


  // Stat Name:
  // let statNames = [];
  // for(let i = 0; i < statsArray.length; i++){
  //   statNames.push(statsArray[i].stat.name)
  // }
  // // Stat Value:
  // let statValues = [];
  // for(let i = 0; i < statsArray.length; i++){
  //     statValues.push(statsArray[i].base_stat)
  // }
  // console.log(statNames)
  // console.log(statValues)


  // let actualStats = {};
  // statNames.forEach((statNames, i) => actualStats[statNames] = statValues[i]);
  // console.log(actualStats);


  //  255 is the Maximum value of pokemon stats
  // There are 15 li bars
  // 255 / 15 = 17?
  // So each li bar's max value would be 17?
  // let x = Math.round({item.base_stat} / 17)
  // console.log(x)
  // document.querySelector(".stat-ul-child:nth-child(-n + {$x})").style.backgroundColor = "#30a7d7"
  // .stat-ul-child:nth-child(-n + x)
  
  //  let changeColor = document.querySelector


  //  function changeColor(){
  //    let x = item.base_stat
  //   let y = Math.round(x / 17)
  //   return y
  //  }
  // //  changeColor()
  // document.querySelector"stat-ul-child:nth-child(-n + changeColor)"


  return (
    <div className='stats-wrapper'>
      <div className="stats-div">
        <h3 className='stats-header'>Stats</h3>
        <div className='stats-container'>
            {statsArray.map((item) => {

          


            return (
  
              <div>
              <span className='stat-name'>
                {item.stat.name.charAt(0).toUpperCase() + item.stat.name.slice(1, 8) +
                  item.stat.name.charAt(8).toUpperCase() +
                  item.stat.name.slice(9)
                }</span>
              <span className='stat-value'>
                    {
                      item.base_stat}
                  </span>
                  </div>
            );
            })}

        </div>
      </div>
    </div>
  )
}

export default Stats
