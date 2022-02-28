const styles = {
  pokedexContainer: {
    maxWidth: 1024,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pokedexResultsContainer: {
    backgroundColor: "white",
    display: "grid",
    gridTemplateColumns: "1f",
  },
  "@media (min-width: 511px)": {
    pokedexResultsContainer: {
      gridTemplateColumns: "1fr 1fr",
    },
  },
  "@media (min-width: 769px)": {
    pokedexResultsContainer: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  },
  "@media (min-width: 1025px)": {
    pokedexResultsContainer: {
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      width: "85.4%",
    },
  },
  randomizer: {
    backgroundColor: "#30a7d7",
    color: "white",
    width: "35%",
    fontSize: "11rem",
    fontFamily: "Exo",
    fontWeight: 500,
    padding: "14%",
    borderRadius: 5,
    border: "none",
    marginLeft: 32,
    cursor: "pointer",
    transition: "100ms ease-in",
    '&:hover': {
      backgroundColor: "#1b82b1",
    }
  },
  selectWrapper: {
    width: "40%",
    float: "right",
    paddingRight: "3%",
  },
  sortOrder: {
    backgroundColor: "#313131",
    fontFamily: "Exo",
    color: "white",
    width: " 100%",
    padding: "27% 0%",
    borderRadius: 5,
    fontSize: "100%",
    fontWeight: 500,
  },
  pokeball: {
    position: "fixed",
    border: "3px solid #36454F",
    borderRadius: "50%",
    backgroundColor: "white",
    width: "20vw",
    height: "20vw",
    backgroundImage: "linear-gradient(red 50%, white 50%)",
    top: "40%",
    animation: "spin infinite 10s linear",
  },
  // @keyframes spin {
  //   from {
  //     transform: rotate(0deg),
  //   },
  //   to {
  //     transform: rotate(360deg),
  //   },
  // },
  // pokeball::before {
  //   position: absolute,
  //   content: "",
  //   height: 1vw,
  //   width: 20vw,
  //   backgroundColor: #36454F,
  //   top: 50%,

  // },
  // pokeball::after {
  //   position: absolute,
  //   content: "",
  //   height: 5vw,
  //   width: 5vw,
  //   backgroundColor: white,
  //   top: 40%,
  //   right: 35%,
  //   /* margin:auto, */
  //   border-radius: 50%,
  //   border: 1px solid #36454F,
  //   background-image: radial-gradient(
  //     #36454F 50%,
  //     white 50%
  //   ),
  // },
  grass: {
    backgroundColor: "#9bcc50",
    color: "#212121",
  },
  poison: {
    backgroundColor: "#b97fc9",
    color: "white",
  },
  fire: {
    backgroundColor: "#fd7d24",
    color: "white",
  },
  water: {
    backgroundColor: "#4592c4",
    color: "white",
  },
  flying: {
    background: "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)",
    color: "#212121",
  },
  bug: {
    backgroundColor: "#729f3f",
    color: "white",
  },
  normal: {
    backgroundColor: "#a4acaf",
    color: "#212121",
  },
  electric: {
    backgroundColor: "#eed535",
    color: "#212121",
  },
  ground: {
    background: "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)",
    color: "#212121",
  },
  fairy: {
    backgroundColor: "#fdb9e9",
    color: "#212121",
  },
  fighting: {
    backgroundColor: "#d56723",
    color: "white",
  },
  psychic: {
    backgroundColor: "#f366b9",
    color: "white",
  },
  rock: {
    backgroundColor: "#a38c21",
    color: "white",
  },
  steel: {
    backgroundColor: "#9eb7b8",
    color: "#212121",
  },
  ice: {
    backgroundColor: "#51c4e7",
    color: "#212121",
  },
  ghost: {
    backgroundColor: "#7b62a3",
    color: "white",
  },
  dragon: {
    background: "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)",
    color: "white",
  },
  dark: {
    backgroundColor: "#707070",
    color: "white",
  },
  "@font-face": [
    {
      fontFamily: "Pokemon",
      src: "url('//dbonlinewebfontscom/t/f4d1593471d222ddebd973210265762aeot')"
    },
  ]

  // @import url('https://fontsgoogleapiscom/css2?family=VT323&display=swap'),

  // @import url('https://fontsgoogleapiscom/css2?family=Exo:wght@400,500,600,700&display=swap'),
};

export default styles;
