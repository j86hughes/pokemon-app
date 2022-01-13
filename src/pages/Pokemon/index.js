import React from "react";
import { useParams, useLocation } from "react-router-dom";

import Bio from "./Bio";

const Test = () => {
  const params = useParams();
  const { state } = useLocation();
  const pokemonItem = state?.pokemonItem;
  // console.log('YOHANS YALALALALALALALALALALA', state);
  return (
    <div>
      {pokemonItem?.name}
      <div>
      <Bio bioText="hello yaaalalalalalalalalal"/>
      </div>
    </div>
  );
};

export default Test;
