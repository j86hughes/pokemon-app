import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pokedex from "pokedex-promise-v2";
import { createUseStyles } from "react-jss";

import Heading from "./Heading";
import Type from "./Type";
import Pagination from "./Pagination";
import Stats from "./Stats";
import Info from "./Info";
import breakpoints from "../../utils/styles/breakpoints";

const useStyles = createUseStyles({
  pokemonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    maxWidth: 890,
    [breakpoints.sm]: {
      padding: 8,
      width: "85.4%",
    },
  },
  mainContents: {
    display: "flex",
    flexDirection: "column",
    padding: 16,
    [breakpoints.md]: {
      flexDirection: "row",
    },
  },
  pokemonImage: {
    width: "100%",
    height: "auto",
    backgroundColor: "#F2F2F2",
    borderRadius: "3%",
    marginBottom: 30,
  },
});

const P = new Pokedex();

const Pokemon = () => {
  const classes = useStyles();
  const { name } = useParams();
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);

  const getPokemonDetails = async (name) => {
    setLoading(true);
    const item = await P.getPokemonByName(name);
    setPokemon(item);
    setLoading(false);
  };

  useEffect(() => {
    if (name) {
      getPokemonDetails(name);
    }
  }, [name]);

  if (loading) {
    return <div className="pokeball" />;
  }

  if (!pokemon) {
    return null;
  }

  const image = pokemon.sprites?.other?.["official-artwork"]?.front_default;

  return (
    <>
      <div className={classes.pokemonContainer}>
        <Pagination pokemonItem={pokemon} />
        <Heading pokemonItem={pokemon} />
        <div className={classes.mainContents}>
          <div>
            {image && (
              <img className={classes.pokemonImage} alt={name} src={image} />
            )}
            <Stats pokemonItem={pokemon} />
          </div>
          <div>
            <Info pokemonItem={pokemon} />
            <Type pokemonItem={pokemon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
