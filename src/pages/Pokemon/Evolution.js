import React from "react";
import { useNavigate } from "react-router-dom";
import { formatName, formatNumber } from "../../utils";
import Type from "./Type";
import "./pokemon.css";


const Evolution = ({ pokemonItem }) => {
  let navigate = useNavigate();
  const evolutions = pokemonItem?.evoListItems?.map((item) => (
    <div className="GIJOE" onClick={() => navigate(`/${item.name}`)}>
      <img
        className="Jims"
        height={200}
        width={200}
        src={item.sprites?.other["official-artwork"]?.front_default}
      />
      <span>
        <h3 className="gi">{formatName(item.name)}</h3>
        <h3 className="ji">{formatNumber(item.id)}</h3>
      </span>
      <Type pokemonItem={item} />
    </div>
  ));
  return (
    <div className="Jim">
      <span className="Jimh2span">
        <h2>Evolutions</h2>
      </span>

      <div className="Jimmers">{evolutions}</div>
    </div>
  );
};

export default Evolution;
