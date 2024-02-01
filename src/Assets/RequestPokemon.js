import axios from "axios";
export const fetchData = async (startId = 0, limit = 20) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}offset=${startId}&limit=${limit}`);
      const results = response.data.results;
      const pokemonDetailsPromises = results.map(result => axios.get(result.url));
      const pokemonDetailsResponses = await Promise.all(pokemonDetailsPromises);
      const updatedPokemonList = pokemonDetailsResponses.map(response => response.data);
  
      console.log(updatedPokemonList);
      return updatedPokemonList; // Возвращаем данные
    } catch (error) {
      console.error('Произошла ошибка при загрузке данных:', error);
      throw error; // Прокидываем ошибку дальше
    }
  };