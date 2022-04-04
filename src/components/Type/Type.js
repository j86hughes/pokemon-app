import React from "react";
import "./Type.css";

const Type = ({ pokemonItem, isLarge }) => {
  let typesArray = pokemonItem?.types;
  return (
    <div className={isLarge ? "type-container-large" : "type-container-small"}>
      {typesArray?.map((item) => {
        return (
          <div
            className={
              isLarge
                ? `types-card-large ${item.type.name}`
                : `types-card-small ${item.type.name}`
            }
            key={item.type.name}
          >
            {item.type.name}
          </div>
        );
      })}
    </div>
  );
};

export default Type;
