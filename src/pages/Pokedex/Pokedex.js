import React, { useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";

import PokemonCard from "./PokemonCard";
import "./home.css";

const P = new Pokedex();

const getPokemonDetails = async (pokemon) => {
  const item = await P.getPokemonByName(pokemon.name);
  return item;
};

// const getGenderDetails = async (gender) => {
//   const item = await P.getGenderByName(gender.name);
//   return item;
// };

// const getGender = async () => {
//   const genderList = await P.getGendersList({
//     limit: totalPokemon,
//     offset: 0,
//   });
//   if (genderList?.results) {
//     const genderListWithDetails = await Promise.all(
//       genderList.results?.map(getGenderDetails)
//     );

//     setPokemon(genderListWithDetails);
//     setLoading(false);
//   }
// }

// for(let i = 0; i < gender1.pokemon_species_details.length; i++){
//   console.log([i])
// }
// if(gender1.pokemon_species_details[i].pokemon_species.name === pokemonItem.name){
//    console.log(gender1.name)
// }

// const getGender = async () => {
//   await P.getGenderByName("female")
// .then((response) => {
//   console.log({response});
// })
// .catch((error) => {
//   console.log('There was an ERROR: ', error);
// });
// }


// const test = async () => {
//   await P.getGenderByName("male")
//     .then((response) => {
//       console.log('YOHANS YALALALALALALALALALALALALA', { response });
//     })
//     .catch((error) => {
//       console.log("There was an ERROR: ", error);
//     });
// };




// const test = async () => {
//   await P.getGenderByName("male")
// .then((gender2) => {
//   console.log({gender2});
// })
// .catch((error) => {
//   console.log('There was an ERROR: ', error);
// })};
// test()
// P.getGenderByName("unknown")
// .then((gender3) => {
//   console.log(gender3);
// })
// .catch((error) => {
//   console.log('There was an ERROR: ', error);
// });

// function doSomething() {
//   return new Promise((resolve, reject) => {
//     console.log("It is done.");
//     if (Math.random() > .5) {
//       resolve("SUCCESS")
//     } else {
//       reject("FAILURE")
//     }
//   })
// };

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const totalPokemon = 898;

  const getRandomPokemon = async () => {
    setLoading(true);

    const pokemonList = await P.getPokemonsList({
      limit: totalPokemon,
      offset: 0,
    });

    const randomPokemonArray = [];
    for (let i = 1; i < 13; i += 1) {
      randomPokemonArray.push(
        pokemonList.results[Math.floor(Math.random() * totalPokemon)]
      );
    }

    const pokemonListWithDetails = await Promise.all(
      randomPokemonArray.map(getPokemonDetails)
    );

    setPokemon(pokemonListWithDetails);
    setLoading(false);
  };

  const getPokemon = async () => {
    setLoading(true);
    const pokemonList = await P.getPokemonsList({
      limit: 12,
      offset: 0,
    });
    if (pokemonList?.results) {
      const pokemonListWithDetails = await Promise.all(
        pokemonList.results?.map(getPokemonDetails)
      );

      setPokemon(pokemonListWithDetails);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  if (loading) {
    return <div className="pokeball" />;
  }

  const handleSelectChange = async (event) => {
    let sortedPokemon = [];
    if (event.target.value === "numberAsc") {
      setLoading(true);
      sortedPokemon = await pokemon.sort(function (a, b) {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
    }
    if (event.target.value === "numberDesc") {
      setLoading(true);
      sortedPokemon = await pokemon.sort(function (a, b) {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
        return 0;
      });
    }
    if (event.target.value === "nameAsc") {
      setLoading(true);
      sortedPokemon = await pokemon.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
    if (event.target.value === "nameDesc") {
      setLoading(true);
      sortedPokemon = await pokemon.sort(function (a, b) {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
    }
    setLoading(false);
    setPokemon(sortedPokemon);
  };

  return (
    <div className="App">
      <h1>Pokédex</h1>
      <button
        className="randomizer"
        type="button"
        alt="Surprise me!"
        onClick={getRandomPokemon}
      >
        Surprise Me!
      </button>
      <div className="custom-select-wrapper">
        <select id="sortOrder" onChange={handleSelectChange}>
          <option value="noSort">Sort results by...</option>
          <option value="numberAsc">Lowest Number (First)</option>
          <option value="numberDesc">Highest Number (First)</option>
          <option value="nameAsc">A-Z</option>
          <option value="nameDesc">Z-A</option>
        </select>
      </div>
      <div className="container">
        {pokemon?.map((cunt) => (
          <PokemonCard pokemonItem={cunt} key={cunt.name} />
        ))}
      </div>
    </div>
  );
};

export default Home;
