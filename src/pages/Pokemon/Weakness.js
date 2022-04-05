import React from "react";
import "./pokemon.css";

const Weakness = ({ damageStuff1, damageStuff2 }) => {
  let weakness1 = damageStuff1.double_damage_from.map((item) => (
    item.name
  ));
  let weakness2 = damageStuff2?.double_damage_from.map((item) => (
    item.name
  ));

  const alpha = weakness1.concat(weakness2);

//   const JimsSon = [];
//   jim.forEach((item) => JimsSon.push(item.props.children[1]));

  const beta = [...new Set(alpha)];
//   console.log(jimmy);
  let weakness =  beta.map((item) => (
    <span className={item}> {item}</span>
  ));

  return (
    <div className="weakness-card">
      <h3>Weaknesses</h3>
      <div>{weakness}</div>
    </div>
  );
};

export default Weakness;
