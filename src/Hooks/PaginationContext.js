// import React, { createContext, useContext, useState } from 'react';
// import { fetchData } from '../RequestPokemon';

// const PaginationContext = createContext();

// export const PaginationProvider = ({ children }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const goToNextPage = () => {
//     setCurrentPage(prevPage => prevPage + 1);
//   };

//   const goToPrevPage = () => {
//     setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
//   };

//   const fetchPokemonData = async (startId) => {
//     try {
//       const updatedPokemonList = await fetchData(startId, 20);
//       return updatedPokemonList;
//     } catch (error) {
//       console.error('Произошла ошибка при загрузке данных:', error);
//       throw error;
//     }
//   };

//   return (
//     <PaginationContext.Provider value={{ currentPage, goToNextPage, goToPrevPage, fetchPokemonData }}>
//       {children}
//     </PaginationContext.Provider>
//   );
// };

// export const usePaginationContext = () => {
//   const context = useContext(PaginationContext);
//   if (!context) {
//     throw new Error('usePaginationContext must be used within a PaginationProvider');
//   }
//   return context;
// };
