import React from "react";
import "./pokemon.css";
import { useState } from "react";

const Versions = ({ blue, red }) => {
  const [showBlue, setShowBlue] = useState(true);

  return (
    <div className="Test">
      <div>
        <p className="versions-p">{showBlue ? blue : red} </p>
      </div>
      <div>
        Versions:{" "}
        <button className="version-blue" onClick={() => setShowBlue(true)}>
          Blue
        </button>
        <button className="version-red" onClick={() => setShowBlue(false)}>
          Red
        </button>
      </div>
    </div>
  );
};

export default Versions;
