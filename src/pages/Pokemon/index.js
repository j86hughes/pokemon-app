import React from "react";
import { useLocation } from "react-router-dom";

import Heading from "./Heading";
import Statssmall from "./Statssmall";
import Nav from "./Nav";
import Pagination from "./Pagination";
import Stats from "./Stats";
import Image from "./Image";
import Info from "./Info";

const Test = () => {
  const { state } = useLocation();
  const pokemonItem = state?.pokemonItem;
  console.log(pokemonItem);
  return (
    <div className="pokemonPage">
      <Nav pokemonItem={pokemonItem} />
      <Pagination pokemonItem={pokemonItem} />
      <Heading pokemonItem={pokemonItem} />
      <div className="col3" pokemonItem={pokemonItem} >
        <Image
          src={pokemonItem.sprites?.other?.["official-artwork"]?.front_default}
        />
        <Info pokemonItem={pokemonItem} />
        <Statssmall pokemonItem={pokemonItem} />
      </div>
      <Stats pokemonItem={pokemonItem} />
    </div>
  );
};

export default Test;
