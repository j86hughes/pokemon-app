import React from "react";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import Nav from "./Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="appContentContainer">
      <Nav />
      <div className="appRoutesContainer">
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
