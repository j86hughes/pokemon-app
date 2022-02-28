import React from "react";
import { useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const getPokemonNumber = (number) => {
  if (number < 10) {
    return `#00${number}`;
  }
  if (number < 100) {
    return `#0${number}`;
  }
  return `#${number}`;
};

const PokemonCard = ({ pokemonItem }) => {
  const classes = useStyles();
  let navigate = useNavigate();
  let typesArray = pokemonItem.types;
  const pokemonImage =
    pokemonItem.sprites?.other?.["official-artwork"]?.front_default;

  return (
    <div
      className={classes.pokemonCardContainer}
      key={pokemonItem.name}
      onClick={() => navigate(`/${pokemonItem.name}`)}
    >
      {pokemonImage && (
        <img
          className={classes.pokemonImage}
          height={200}
          width={200}
          alt={pokemonItem.name}
          src={pokemonImage}
        />
      )}
      <div className={classes.copyContainer}>
        <div className={classes.pokemonId}>
          {getPokemonNumber(pokemonItem.id)}
        </div>
        <div className={classes.pokemonName}>
          {pokemonItem.name.charAt(0).toUpperCase() + pokemonItem.name.slice(1)}
        </div>
        <div className={classes.typesContainer}>
          {typesArray.map((item) => (
            <div
              className={[classes.typesCard, classes[item.type.name]].join(" ")}
              key={item.type.name}
            >
              {item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
