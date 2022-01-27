import React from "react";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import Nav from "./Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Tits = () => <div>TITS</div>;

const App = () => (
  <>
    <Nav />
    <Router>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/:pokemon" element={<Pokemon />} />
        <Route path="/tits" element={<Tits />} />
      </Routes>
    </Router>
  </>
);

export default App;
