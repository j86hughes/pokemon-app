import React from "react";
import "./App.css";

const getClassName = (type) => {
  switch (type) {
    case "grass":
      return "grassType";
    case "poison":
      return "poisonType";
    case "fire":
      return "fireType";
    case "water":
      return "waterType";
    case "flying":
      return "flyingType";
    case "bug":
      return "bugType";
    case "normal":
      return "normalType";
    case "electric":
      return "electricType";
    case "ground":
      return "groundType";
    case "fairy":
      return "fairyType";
    case "fighting":
      return "fightingType";
    case "psychic":
      return "psychicType";  
    case "rock":
      return "rockType";
    case "steel":
      return "steelType";
    case "ice":
      return "iceType";
    case "ghost":
      return "ghostType";
    case "dragon":
      return "dragonType";
    case "dark":
      return "darkType";
    default:
      console.log("N3IN!")
  }
  
};

// const coordinateColor = function() {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);

//   if (r < 100 && g < 100 && b < 100) {
//     getClassName.type.style.color = "white";
//   }
// }

const PokemonCard = ({ pokemonItem }) => {
  let typesArray = pokemonItem.types;
  console.log(pokemonItem.id);
  // let idArray = pokemonItem.id;
  // const newArray = typesArray.map((item) => item.type.name);
  // console.log(newArray);

  // const newerArray = newArray.map((i) => i.filter );
  // console.log(newerArray);

  // const onlyUnique = (value, index, self) => {
  //   return self.indexOf(value) === index;
  // }
  // const uniqueValues = newArray.filter(onlyUnique);
  // // console.log(uniqueValues);
   

  
  

  
  return (
    <div key={pokemonItem.name}>
      <img alt={pokemonItem.name} src={pokemonItem.sprites.front_default} />
      <div>{pokemonItem.name}</div>
      <div className="typesContainer">

        {typesArray.map((item) => {
          return (
            
            <div
              className={getClassName(item.type.name)}
              key={item.type.name}
            >
              {item.type.name}
            </div>
            
          );
          
        })}

            
            <div>
              
              {pokemonItem.id}
            </div>
          
          
    
        
      </div>
      
    </div>
    
  );
  
};

export default PokemonCard;


