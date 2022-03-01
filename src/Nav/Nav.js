import React from "react";
import { createUseStyles } from "react-jss";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const navItems = [
  {
    class: "home",
    title: "Home",
  },
  {
    class: "pokedex",
    title: "Pokédex",
  },
  {
    class: "videoGames",
    title: "Video Games & Apps",
  },
  {
    class: "tradingCard",
    title: "Trading Card Game",
  },
  {
    class: "pokemonTV",
    title: "Pokémon TV",
  },
  {
    class: "playPokemonEvents",
    title: "Play! Pokémon Events",
  },
  {
    class: "news",
    title: "News",
  },
];

const Nav = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.topNavbar} />
      <div className={classes.navbarContainer}>
        <div className={classes.navItemsContainer}>
          {navItems.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === navItems.length - 1;
            return (
              <div
                className={[
                  classes.navItem,
                  classes[item.class],
                  isFirst ? classes[isFirst] : null,
                ].join(" ")}
                style={{
                  borderBottomLeftRadius: isFirst ? 4 : 0,
                  borderBottomRightRadius: isLast ? 4 : 0,
                }}
                key={item.class}
              >
                <a className={classes.linkName}>{item.title}</a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Nav;
