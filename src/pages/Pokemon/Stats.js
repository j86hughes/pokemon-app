import React from "react";
import "./Pokemon.css";

const StatBar = ({ numOfBarsColored, statName }) => {
  const numThing = numOfBarsColored;
  const statsLabel = statName;
  const lisArray = Array.from(new Array(15));
  const liMapped = lisArray.map((a, i) => {
    const changeColor = i < numThing ? "#30a7d7" : "white";
    return <li className="stat-li" style={{ backgroundColor: changeColor }} />;
  });
  return (
    <div>
      <ul className="bar-ul">{liMapped}</ul>
      {statsLabel}
    </div>
  );
};

const Stats = ({ pokemonItem }) => {
  const statsArray = pokemonItem.stats;
  const numsArray = [];
  for (let i = 0; i < statsArray.length; i++) {
    const newObj = statsArray[i];
    const nums = newObj.base_stat;
    numsArray.push(Math.round(nums / 17));
  }
  const statsMapped = statsArray.map((stats) => {
    ``;
    const statName =
      stats.stat.name.charAt(0) +
      stats.stat.name.slice(1, 8).replace("-", " ") +
      stats.stat.name.charAt(8) +
      stats.stat.name.slice(9);
    return <span className="stats-span">{statName}</span>;
  });
  return (
    <div className="stats-wrapper">
      <div className="stats-div">
        <h3 className="stats-header">Stats</h3>
        <div className="stats-container">
          <ul className="stat-ul-parent">
            {numsArray.map((num, index) => {
              return (
                <div className="stat-ul-div">
                  <StatBar
                    numOfBarsColored={num}
                    statName={statsMapped[index]}
                  />
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stats;
