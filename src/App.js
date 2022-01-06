import React from "react";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/:pokemon" element={<Pokemon />} />
    </Routes>
  </Router>
);

export default App;
