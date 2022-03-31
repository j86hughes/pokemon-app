import React from "react";
import "./pokemon.css";
import { useState } from "react";

const Versions = ( {blue, red} ) => {
  const [Text, setText] = useState(blue)

  return (
    <div className="Test">
      <div>
        <p className="blue-p">{Text}</p>
        <p className="red-p">{setText}</p>
      </div>
      <div>
        Versions:{" "}
        <button className="version-blue" onClick={() => setText(blue)}>
          Blue
        </button>
        <button className="version-red" onClick={() => setText(red)}>
          Red
        </button>
      </div>
    </div>
  );
};

export default Versions;
