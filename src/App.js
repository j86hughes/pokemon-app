import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createUseStyles } from "react-jss";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import Nav from "./Nav/Nav";
import styles from "./styles";
import "./App.css";

const useStyles = createUseStyles(styles);

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.appContentContainer}>
      <Nav />
      <div className={classes.appRoutesContainer}>
        <Router>
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/:name" element={<Pokemon />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
