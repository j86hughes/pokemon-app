import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pokemon.css";

const Explore = () => {
  const navigate = useNavigate();

  return (
    <div className="explore-div">
      <a className="explore-link" onClick={() => navigate(`/`)}>
        Explore More Pokémon
      </a>
    </div>
  );
};

export default Explore;
