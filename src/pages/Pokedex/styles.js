import breakpoints from "../../utils/styles/breakpoints";

const styles = {
  pokedexContainer: {
    maxWidth: 1024,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  titleContainer: {
    fontFamily: "Exo",
    display: "flex",
    backgroundColor: "white",
    width: "100%",
    fontWeight: 100,
    fontSize: 30,
    color: "#919191",
    [breakpoints.md]: {
      width: "85.4%",
      paddingLeft: 16
    },
  },
  pokedexResultsContainer: {
    padding: 8,
    backgroundColor: "white",
    display: "grid",
    gridTemplateColumns: "1f",
    [breakpoints.sm]: {
      gridTemplateColumns: "1fr 1fr",
      width: "85.4%",
    },
    [breakpoints.md]: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    [breakpoints.lg]: {
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
  },
  filtersContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    paddingBottom: 28,
    [breakpoints.md]: {
      padding: 8,
      width: "85.4%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  randomizer: {
    backgroundColor: "#30a7d7",
    width: "85.4%",
    padding: 12,
    color: "white",
    fontFamily: "Exo",
    fontSize: 16,
    fontWeight: 500,
    borderRadius: 5,
    border: "none",
    cursor: "pointer",
    transition: "100ms ease-in",
    "&:hover": {
      backgroundColor: "#1b82b1",
    },
    marginBottom: 16,
    [breakpoints.md]: {
      width: "34.71%",
      marginBottom: 0,
    },
  },
  selectWrapper: {
    width: "85.4%",
    [breakpoints.md]: {
      width: "40%",
    },
  },
  sortOrder: {
    backgroundColor: "#313131",
    fontFamily: "Exo",
    color: "white",
    width: "100%",
    padding: "8px 0px",
    borderRadius: 5,
    fontSize: 16,
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
};

export default styles;
