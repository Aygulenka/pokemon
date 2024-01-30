import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pica from './pictures/pica.jpg';
import ivi from './pictures/ivi.jpg'
import muty from './pictures/muty.png'
import './pika.css';
import pokemon from './pictures/pokemon.png'

const Home = () => {
  const [showPica, setShowPica] = useState(true);

  //димоунт(пустой массив) и виланмаунт
  useEffect(() => {
    // Устанавливаем таймер, чтобы через 6 секунд скрыть pica
    const timer = setTimeout(() => {
      setShowPica(false);
    }, 6000);

    // Очищаем таймер при размонтировании компонента
    return () => clearTimeout(timer);
  }, []); // Пустой массив зависимостей, чтобы useEffect выполнялся только один раз при монтировании

  return (
    <div className="home">
      {showPica && (
        <div className='center-pica'>
          <img src={pica} alt="pica" className='slide-in-out'/>
        </div>
      )}
      {!showPica && (
        <>
        <Link to="/pokemonList">
        <img src={pokemon} className='centre-pokemon' alt='text' />
      </Link>
        <img src={ivi} alt="ivi" className='left'/>
        <img src={muty} alt="muty" className='right'/>
        <div className='center-image'>
          <Link to="/pokemonList">ХОЧУ БОЛЬШЕ ПОКЕМОНОВ</Link>
        </div>
        </>
      )}
    </div>
  );
};

export default Home;
