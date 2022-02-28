export default {
  pokemonCardContainer: {
    display: 'flex',
    width: "100%",
    flex: 1,
    flexDirection: "column",
    margin: 16,
    "&:hover": {
      animationName: "bounce",
      animationDuration: "0.2s",
      animationIterationCount: 1,
      animationTimingFunction: "linear",
    },
    // "@keyframes bounce": {
    //   0%   { transform: translateY(0), }
    //   50%  { transform: translateY(-3px), }
    //   100% { transform: translateY(0), }
    // }
  },
  "@media (min-width: 511px)": {
    pokemonCardContainer: {
      width: "88%",
    },
  },
  "@media (min-width: 769px)": {
    pokemonCardContainer: {
    }
  },
  copyContainer: {
    display: 'flex',
    width: "auto",
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    textAlign: "left",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: 16,
    paddingLeft: "3%",
  },
  pokemonImage: {
    width: "100%",
    height: "auto",
    /* height: 100%, */
    backgroundColor: "#F2F2F2",
    borderRadius: "3%",
    cursor: "pointer",
    /* height: 100%, */
    /* width: auto, */
  },
  pokemonId: {
    color: "#919191",
    fontWeight: 600,
    fontSize: "80%",
  },
  pokemonName: {
    fontSize: "115%",
    marginBottom: 5,
    fontWeight: 500,
    color: "#313131",
  },
  typesContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: 11,
    lineHeight: 18,
  },
  typesCard: {
    marginRight: "1%",
    borderRadius: 3,
    width: "40%",
    textAlign: "center",
  },
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
};
