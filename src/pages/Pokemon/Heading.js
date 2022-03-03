import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  headingContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 40,
  },
  pokemonName: {
    fontSize: 32,
    fontFamily: "Exo",
  },
  pokemonId: {
    fontSize: 32,
    fontFamily: "Exo",
    marginLeft: 16,
    color: "#616161"
  },
});

const getPokemonNumber = (number) => {
  if (number < 10) {
    return `#00${number}`;
  }
  if (number < 100) {
    return `#0${number}`;
  }
  return `#${number}`;
};

const Heading = ({ pokemonItem }) => {
  const classes = useStyles();
  return (
    <div className={classes.headingContainer}>
      <div className={classes.pokemonName}>
        {pokemonItem.name.charAt(0).toUpperCase() + pokemonItem.name.slice(1)}
      </div>
      <div className={classes.pokemonId}>{getPokemonNumber(pokemonItem.id)}</div>
    </div>
  );
};

export default Heading;
