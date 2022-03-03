import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#a4a4a4",
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 12,
    paddingBottom: 20,
    borderRadius: 10,
  },
  statsContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#a4a4a4",
  },
  statsHeader: {
    margin: 0,
    marginBottom: 24,
    fontWeight: 100,
  },
  statbarsAndName: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 54,
  },
  barsContainer: {
    display: "flex",
    flexDirection: "column-reverse",
    width: "100%"
  },
  bar: {
    height: 8,
    marginBottom: 4,
  },
  statName: {
    fontSize: 12,
    fontWeight: 800,
    color: "#212121",
    textAlign: "center",
  }
});

const StatBar = ({ numOfBarsColored, statName, classes, isFirst }) => {
  const numThing = numOfBarsColored;
  const statsLabel = statName;
  const lisArray = Array.from(new Array(15));
  const liMapped = lisArray.map((a, i) => {
    const changeColor = i < numThing ? "#30a7d7" : "white";
    return (
      <div
        className={classes.bar}
        style={{ backgroundColor: changeColor }}
      />
    );
  });
  return (
    <div className={classes.statbarsAndName} style={{ marginLeft: isFirst ? 0 : 6}}>
      <div className={classes.barsContainer}>{liMapped}</div>
      {statsLabel}
    </div>
  );
};

const Stats = ({ pokemonItem }) => {
  const classes = useStyles();
  const statsArray = pokemonItem.stats;
  const numsArray = [];
  for (let i = 0; i < statsArray.length; i++) {
    const newObj = statsArray[i];
    const nums = newObj.base_stat;
    numsArray.push(Math.round(nums / 17));
  }

  const statsMapped = statsArray.map((stats) => {
    const statName =
      stats.stat.name.charAt(0) +
      stats.stat.name.slice(1, 8).replace("-", " ") +
      stats.stat.name.charAt(8) +
      stats.stat.name.slice(9);
    return <span className={classes.statName}>{statName}</span>;
  });

  return (
    <div className={classes.container}>
      <h3 className={classes.statsHeader}>Stats</h3>
      <div className={classes.statsContainer}>
        {numsArray.map((num, index) => (
          <StatBar
            isFirst={index ===  0}
            numOfBarsColored={num}
            statName={statsMapped[index]}
            classes={classes}
          />
        ))}
      </div>
    </div>
  );
};

export default Stats;
