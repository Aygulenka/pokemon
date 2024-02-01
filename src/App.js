import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import GetPokemons from './Components/GetPokemons';
import Header from './Pages/Header';

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
