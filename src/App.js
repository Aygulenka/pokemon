import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './HomePages/Home';
import ListPokemons from './ListPokemons';
import GetPokemons from './GetPokemons';
import Header from './Header';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemonList" element={<GetPokemons />} />
    </Routes>
    </>
  );
}

export default App;
