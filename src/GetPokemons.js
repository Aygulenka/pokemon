// GetPokemons.js

import React, { useEffect, useState } from 'react';
import ListPokemons from './ListPokemons';
import { fetchData } from './RequestPokemon';
import CheckPosition from './Hooks/InfinityScroll';
import PaginationButton from './Hooks/PaginationButton';
import { useSwitchContext } from './Hooks/SwithContext';
// import { usePaginationContext } from './Hooks/PaginationContext';

const GetPokemons = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const { isChecked } = useSwitchContext();
  // const { currentPage, fetchPokemonData } = usePaginationContext();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const updatedPokemonList = await fetchData();
        setPokemonList(updatedPokemonList);
        setDataLoaded(true);
      } catch (error) {
        console.error('Произошла ошибка при загрузке данных:', error);
      }
    };

    fetchDataAndSetState();
  }, []);

  const fetchMoreDataForPagination = async (startId) => {
    try {
      const updatedPokemonList = await fetchData(startId, 20);
      // Очищаем предыдущий массив и устанавливаем новые данные
      setPokemonList(updatedPokemonList);
      setDataLoaded(true);
    } catch (error) {
      console.error('Произошла ошибка при загрузке данных:', error);
    }
  };

  const fetchMoreDataForScroll = async (startId) => {
    try {
      const updatedPokemonList = await fetchData(startId, 20);
      // Добавляем новые данные к предыдущим
      setPokemonList(prevList => [...prevList, ...updatedPokemonList]);
    } catch (error) {
      console.error('Произошла ошибка при загрузке данных:', error);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {dataLoaded ? (
        <>
          <ListPokemons pokemonList={pokemonList} />
          {isChecked ? (
            <CheckPosition onFetchData={fetchMoreDataForScroll} pokemonId={pokemonList.length > 0 ? pokemonList[pokemonList.length - 1].id : null} />
          ) : (
            <PaginationButton currentPage={currentPage} onFetchData={fetchMoreDataForPagination} onPageChange={handlePageChange} pokemonId={pokemonList.length > 0 ? pokemonList[pokemonList.length - 1].id : null} />
          )}
        </>
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
};

export default GetPokemons;
