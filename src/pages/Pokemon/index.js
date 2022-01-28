import React from "react";
import { useLocation } from "react-router-dom";

import Heading from "./Heading";
import Type from "./Type";
// import Nav from "./Nav";
import Pagination from "./Pagination";
import Stats from "./Stats";
import Image from "./Image";
import Info from "./Info";

const Test = () => {
  const { state } = useLocation();
  const pokemonItem = state?.pokemonItem;
  return (
    <div className="pokemon-page">
      {/* <Nav /> */}
      <Pagination pokemonItem={pokemonItem} />
      <div className="pokemon-container">
      <Heading pokemonItem={pokemonItem} />
      <div className="row3" pokemonItem={pokemonItem} >
        <Image
          src={pokemonItem.sprites?.other?.["official-artwork"]?.front_default}
        />
        <Info pokemonItem={pokemonItem} />
        <Type pokemonItem={pokemonItem} />
      </div>
      <Stats pokemonItem={pokemonItem} />
      </div>
    </div>
  );
};

export default Test;
