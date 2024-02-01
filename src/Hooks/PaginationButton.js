// import React, { useEffect, useState } from 'react';
// import './Pagination.css';
// import { fetchData } from '../RequestPokemon';
// import PerPage from './PerPage';


// const PaginationButton = ({ onPageChange, pokemonId, onFetchData}) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [startId, setStartId] = useState(1)

//   // Добавим useEffect, чтобы следить за изменениями в pokemonId
//   useEffect(() => {
//    // setCurrentPage(1); // Сбросим currentPage при изменении pokemonId
//   }, [pokemonId]);
// console.log(startId)
//   const handlePrevClick = async () => {
//     setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
//     const prevStartId = Math.max(startId - 40, 0);
//     const updatedPokemonList = await onFetchData(prevStartId);
//     setStartId(prevStartId); // Обновляем startId
//     onPageChange(() => updatedPokemonList);
//     console.log("currentPage:", currentPage, 'prevstartId', prevStartId, 'pokemonId', pokemonId);
//   };

//   const handleNextClick = async () => {
//     setCurrentPage(prevPage => prevPage + 1);
//     const newStartId = pokemonId + 20;
//     const updatedPokemonList = await onFetchData(newStartId);
//     setStartId(newStartId); // Обновляем startId
//     onPageChange(() => updatedPokemonList);
//     console.log("currentPage:", currentPage, 'newstartId', newStartId, 'pokemonId', pokemonId);
//   };

//   return (
//     <div className='pagContainer'>
//     <div className='perPage'>
//       <PerPage/>
//     </div>
//     <div className='example'>

//       <div className='text' onClick={handlePrevClick}>
//         previous project
//       </div>
//       <div className='counter'>
//         <span className='number'>{String(currentPage).padStart(2, '0')}</span>
//         <div className='background'></div>
//         <span className='number'>04</span>
//       </div>
//       <div className='text' onClick={handleNextClick}>
//         next project
//       </div>
      
//     </div>
//     </div>
//   );
// };

// export default PaginationButton;
import React, { useEffect, useState } from 'react';
import './Pagination.css';
import { fetchData } from '../RequestPokemon';

const PaginationButton = ({ onPageChange, pokemonId, onFetchData}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [startId, setStartId] = useState(1);
  
  useEffect(() => {
    // setCurrentPage(1); // Сбросим currentPage при изменении pokemonId
  }, [pokemonId]);


  const handlePrevClick = async () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    const prevStartId = Math.max(startId - 40, 0);
    const updatedPokemonList = await onFetchData(prevStartId);
    setStartId(prevStartId); // Обновляем startId
    onPageChange(() => updatedPokemonList);
    console.log("currentPage:", currentPage, 'prevStartId', prevStartId, 'pokemonId', pokemonId);
  };

  const handleNextClick = async () => {
    setCurrentPage(prevPage => prevPage + 1);
    const newStartId = pokemonId + 20;
    const updatedPokemonList = await onFetchData(newStartId);
    setStartId(newStartId); // Обновляем startId
    onPageChange(() => updatedPokemonList);
    console.log("currentPage:", currentPage, 'newStartId', newStartId, 'pokemonId', pokemonId);
  };



  return (
    <div className='example'>
      <div className='text' onClick={handlePrevClick}>
        previous project
      </div>
      <div className='counter'>
        <span className='number'>{String(currentPage).padStart(2, '0')}</span>
        <div className='background'></div>
        <span className='number'>131</span>
      </div>
      <div className='text' onClick={handleNextClick}>
        next project
      </div>
    </div>
  );
};

export default PaginationButton;

