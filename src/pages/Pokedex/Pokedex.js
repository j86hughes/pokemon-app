import React, { useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";

import PokemonCard from "./PokemonCard";
import "./home.css";

const P = new Pokedex();

const getGenderLists = async () => {
  let maleList = [];
  let femaleList = [];
  try {
    maleList = await P.getGenderByName("male");
    femaleList = await P.getGenderByName("female");
  } catch (error) {
    console.log(error);
  }

  return {
    maleList,
    femaleList,
  };
};

const getPokemonDetails = async (pokemon) => {

  const item = await P.getPokemonByName(pokemon.name);
  return item;
};



const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const totalPokemon = 898;

  const getRandomPokemon = async () => {
    setLoading(true);

    const pokemonList = await P.getPokemonsList({
      limit: 12,
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
    const genderLists = await getGenderLists();

    setLoading(true);
    const pokemonList = await P.getPokemonsList({
      limit: totalPokemon,
      offset: 0,
    });
    if (pokemonList?.results) {
      const pokemonListWithDetails = await Promise.all(
        pokemonList.results?.map(getPokemonDetails)
      );

      pokemonListWithDetails.forEach((item) => {
        item.gender = [];

        genderLists?.maleList?.pokemon_species_details.forEach((genderItem) => {
          if (genderItem?.pokemon_species?.name === item.name) {
            item.gender.push("male");
          }
        });

        genderLists?.femaleList?.pokemon_species_details.forEach((genderItem) => {
          if (genderItem?.pokemon_species?.name === item.name) {
            item.gender.push("female");
          }
        });
      });

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

  let weightArray = []
  for (let i = 0; i < 12; i++) {
    Array.from(weightArray.push(pokemon[i].weight))
  }
  console.log(weightArray[0].toString().length)


  // for (let i = 0; i < weightArray.length; i++) {
  //   console.log(weightArray[i].toString().length)
  // }

  //   let decimal0 = weightArray[91].toString()
  //   console.log(decimal0.length)
  //   console.log(decimal0)
  //   console.log(decimal0.slice(0, 0) + '.' + decimal0.slice(0));

  //   let decimal1 = weightArray[0].toString()
  //   console.log(decimal1.length)
  //   console.log(decimal1)
  //   console.log(decimal1.slice(0, 1) + '.' + decimal1.slice(1));

  //   let decimal2 = weightArray[5].toString()
  //   console.log(decimal2.length)
  //   console.log(decimal2)
  //   console.log(decimal2.slice(0, 2) + '.' + decimal2.slice(2));

  //   let decimal3 = weightArray[796].toString()
  //   console.log(decimal3.length)
  //   console.log(decimal3)
  //   console.log(decimal3.slice(0, 3) + '.' + decimal3.slice(3));
  // }
  // console.log(Math.max(...weightArray))


  let decimalArray = []
  for (let i = 0; i < weightArray.length; i++) {
    if (weightArray[i].toString().length === 1) {
      decimalArray.push((weightArray[i].toString().slice(0, 0) + '.' + weightArray[i].toString().slice(0)));
      // decimalArray.push(weightArray[i])
    }
    if (weightArray[i].toString().length === 2) {
      decimalArray.push((weightArray[i].toString().slice(0, 1) + '.' + weightArray[i].toString().slice(1)));
      // decimalArray.push(weightArray[i])
    }
    if (weightArray[i].toString().length === 3) {
      decimalArray.push((weightArray[i].toString().slice(0, 2) + '.' + weightArray[i].toString().slice(2)));
      // decimalArray.push(weightArray[i])
    }
    if (weightArray[i].toString().length === 4) {
      decimalArray.push((weightArray[i].toString().slice(0, 3) + '.' + weightArray[i].toString().slice(3)));
      // decimalArray.push(weightArray[i])
    }
  }

    for (let i = 0, j = 0; i < 4 && j < 4; i++) {
    if (weightArray[i].toString().length === i) {
      decimalArray.push((weightArray[i].toString().slice(0, j) + '.' + weightArray[i].toString().slice((j+1))));
      decimalArray.push(weightArray[i])
    }
  }

  console.log(decimalArray)



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
      <div className="selectWrapper">
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
