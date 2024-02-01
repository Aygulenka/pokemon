import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './pokemonList.css';
import pokemon from '../Assets/Pictures/pokemon-removebg-preview.png';
import SwitchButton from '../Utils/SwitchButton';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const handleClick = () => {
    if (location.pathname === '/') {
      navigate('/pokemonList');
    } else if (location.pathname === '/pokemonList') {
      navigate('/');
    }
  };

  return (
    <div className='flex'>
      <div className='pos'>
        <SwitchButton />
      </div>
      <Link to={location.pathname === '/' ? '/pokemonList' : '/'}>
        <img
          src={pokemon}
          className='centre-pokemon'
          alt='text'
          onClick={handleClick}
        />
      </Link>
    </div>
  );
};

export default Header;
