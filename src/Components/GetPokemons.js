
import React, { useEffect, useState } from 'react';
import ListPokemons from '../Pages/ListPokemons';
import { fetchData } from '../Assets/RequestPokemon';
import CheckPosition from '../Utils/InfinityScroll';
import PaginationButton from '../Utils/PaginationButton';
import { useSwitchContext } from '../Utils/SwithContext';
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
      //заменяем
      setPokemonList(updatedPokemonList);
      setDataLoaded(true);
    } catch (error) {
      console.error('Произошла ошибка при загрузке данных:', error);
    }
  };

  const fetchMoreDataForScroll = async (startId) => {
    try {
      const updatedPokemonList = await fetchData(startId, 20);
      // подгружаем 
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
