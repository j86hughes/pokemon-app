import breakpoints from "../utils/styles/breakpoints";

export default {
  topNavbar: {
    width: "100%",
    height: 62,
    backgroundColor: "#f5f5f5",
  },
  navbarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    height: 87,
    borderColor: "#f0f0f0",
    borderBottomWidth: 2,
    borderStyle: "solid",
    [breakpoints.xs]: {
      display: "none",
    },
    [breakpoints.sm]: {
      display: "none",
    },
    [breakpoints.md]: {
      display: "flex",
    },
  },
  navItemsContainer: {
    position: "relative",
    display: "flex",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: 890,
  },
  navItem: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    color: "#464646",
    alignItems: "center",
    height: "100%",
    backgroundColor: "white",
    width: "14.2%",
    cursor: "pointer",
    overflow: "visible",
    height: 87,
    borderBottomWidth: 6,
    borderBottomStyle: "solid",
  },
  linkName: {
    display: "flex",
    fontFamily: "arial",
    fontSize: 14,
    textAlign: "center",
  },
  iconPlaceholder: {
    display: "flex",
    height: 46,
    width: "100%",
  },
  home: {
    borderBottomColor: "#919191",
    "&:hover": {
      backgroundColor: "#919191",
      color: "white",
    },
  },
  pokedex: {
    borderBottomColor: "#E3350D",
    "&:hover": {
      backgroundColor: "#E3350D",
      color: "white",
    },
  },
  videoGames: {
    borderBottomColor: "#ee6b2f",
    "&:hover": {
      backgroundColor: "#ee6b2f",
      color: "white",
    },
  },
  tradingCard: {
    borderBottomColor: "#e6bc2f",
    "&:hover": {
      backgroundColor: "#e6bc2f",
      color: "white",
    },
  },
  pokemonTV: {
    borderBottomColor: "#4dad5b",
    "&:hover": {
      backgroundColor: "#4dad5b",
      color: "white",
    },
  },
  playPokemonEvents: {
    borderBottomColor: "#30a7d7",
    "&:hover": {
      backgroundColor: "#30a7d7",
      color: "white",
    },
  },
  news: {
    borderBottomColor: "#1b53ba",
    "&:hover": {
      backgroundColor: "#1b53ba",
      color: "white",
    },
  },
  isFirst: {
    borderBottomLeftRadius: 8,
    color: "red",
  },
};
