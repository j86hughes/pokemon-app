import React from "react";
import { useParams } from "react-router-dom";

const Test = () => {
  let params = useParams();
  return (
    <div>
      {params.pokemon}
    </div>
  );
};

export default Test;
