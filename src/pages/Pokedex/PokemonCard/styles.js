import breakpoints from "../../../utils/styles/breakpoints";

export default {
  "@keyframes bounce": {
    "0%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-3px)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
  pokemonCardContainer: {
    display: "flex",
    flex: 1,
    margin: 16,
    "&:hover": {
      animationDuration: "0.25s",
      animationName: "$bounce",
    },
    [breakpoints.xs]: {
      width: "100%",
      flexDirection: "column",
    },
    [breakpoints.sm]: {
      width: "88%",
    },
  },
  copyContainer: {
    display: "flex",
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
    backgroundColor: "#F2F2F2",
    borderRadius: "3%",
    cursor: "pointer",
    // "&:hover": {
    //   animationDelay: "-0.2s",
    //   animationDuration: "1s",
    //   animationIterationCount: "infinite",
    //   animationName: "$bounce",
    //   // backgroundColor: "red",
    //   // display: "none",
    // },
  },
  pokemonId: {
    fontFamily: "Exo",
    color: "#919191",
    fontWeight: 600,
    fontSize: "80%",
    marginTop: 2,
  },
  pokemonName: {
    fontFamily: "Exo",
    fontSize: 22,
    marginTop: 5,
    fontWeight: 500,
    color: "#313131",
  },
  typesContainer: {
    display: "flex",
    flex: 1,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: 11,
  },
  typesCard: {
    fontFamily: "Exo",
    fontSize: 11,
    marginRight: 4,
    borderRadius: 3,
    width: 38,
    maxWidth: 110,
    textAlign: "center",
    paddingtop: 2,
    paddingBottom: 2,
    paddingLeft: 16,
    paddingRight: 16,
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
