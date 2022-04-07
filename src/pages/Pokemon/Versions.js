import React from "react";
import "./Pokemon.css";
import { useState } from "react";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Versions = ({ blue, red }) => {
  const [showBlue, setShowBlue] = useState(true);

  return (
    <div className="Test">
      <div>
        <p className="versions-p">{showBlue ? blue : red} </p>
      </div>
      <div>
        Versions:{" "}
        <span className="version-span">
        <CatchingPokemonIcon className="version-blue" onClick={() => setShowBlue(true)}>
          Blue
        </CatchingPokemonIcon>
        </span>
        <span className="version-span">
        <CatchingPokemonIcon className="version-red" onClick={() => setShowBlue(false)}>
          Red
        </CatchingPokemonIcon>
        </span>
      </div>
    </div>
  );
};

export default Versions;
