import React from "react";
import "./pokemon.css";

const SingleStat = ({ singleStatBars }) => (
  <ul style={{ display: 'flex', flexDirection: 'column-reverse' }}>
    {singleStatBars.reverse().map((bar, index) => {
      return (
        <li
          key={index}
          style={{
            height: 10,
            width: 20,
            backgroundColor: bar ? "#30a7d7" : "white",
            marginBottom: 5,
            marginRight: 10,
          }}
        ></li>
      );
    })}
  </ul>
);

const Stats = ({ pokemonItem }) => {
  let statsArray = pokemonItem.stats;
  let numsArray = [];
  for (let i = 0; i < statsArray.length; i++) {
    const newObj = statsArray[i];
    const nums = newObj.base_stat;
    numsArray.push(Math.round(nums / 17));
  }

  const giveMeTheBarYouCaaaaant = (blueBarNumber) => {
    const singleStatBarsArray = [];
    for (let i = 0; i < 15; i++) {
      singleStatBarsArray.push(false);
    }

    for (let i = 0; i < blueBarNumber; i++) {
      singleStatBarsArray[i] = true;
    }

    return singleStatBarsArray;
  };

  return (
    <div className="stats-wrapper">
      <div className="stats-div">
        <h3 className="stats-header">Stats</h3>
        <div className="stats-container">
          <div className="stat-ul-parent" style={{ display: "flex", flexDirection: 'row' }}>
            {numsArray.map((finalNum, index) => {
              const singleStatBars = giveMeTheBarYouCaaaaant(finalNum);
              return <SingleStat key={`${index}-statbar`} singleStatBars={singleStatBars} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
