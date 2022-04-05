import React from "react";
import "./Type.css";

const Type = ({ typesArray, isLarge }) => {

  return (
    <div className={isLarge ? "type-container-large" : "type-container-small"}>
      {typesArray?.map((item) => {
        return (
          <div
            className={
              isLarge
                ? `types-card-large ${item}`
                : `types-card-small ${item}`
            }
            key={item}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Type;
