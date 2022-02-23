import React from "react";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Tits = () => <div>TITS</div>;

const App = () => (
  <>
    <div>2 l8 m8</div>
    <Router>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/:name" element={<Pokemon />} />
        <Route path="/tits" element={<Tits />} />
      </Routes>
    </Router>
  </>
);

export default App;
