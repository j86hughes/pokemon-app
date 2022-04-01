import React from "react";
import "./pokemon.css";
import { useState } from "react";

const Versions = ({ blue, red }) => {
  const [color, setColor] = useState(true);

  return (
    <div className="Test">
      <div>
        <p className="versions-p">{color ? blue : red} </p>
      </div>
      <div>
        Versions:{" "}
        <button className="version-blue" onClick={() => setColor(true)}>
          Blue
        </button>
        <button className="version-red" onClick={() => setColor(false)}>
          Red
        </button>
      </div>
    </div>
  );
};

export default Versions;
