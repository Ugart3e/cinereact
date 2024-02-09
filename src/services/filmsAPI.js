/**
 * The function `obtenerPeliculas` is an asynchronous function that takes a search query as input and
 * makes a request to the OMDB API to retrieve movies based on the search query.
 * @param busqueda - The parameter `busqueda` is a string that represents the search query for movies.
 * It is used to search for movies based on the provided keywords.
 */
const obtenerPeliculas = async (busqueda) => {
    try {
      if (busqueda.length >= 3) {
        let apiUrl = `https://www.omdbapi.com/?apikey=61b8922&s=${busqueda}&page=1`;
      }

      const response = await axios.get(apiUrl);

      if (response.data.Response === 'False') {
        throw new Error("Error en la consulta");
      }

    } catch (error) {
      console.log(error);
    }
  };

export const getFavoriteMovies = () => {
  try {
      const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
      return favoriteMovies;
  } catch (error) {
      console.log(error);
      return [];
  }
};




/**
 * The function `getMoviesBy` fetches movies from the OMDB API based on provided keywords.
 * @param keywords - The `keywords` parameter is a string that represents the search keywords for the
 * movies. It is used to search for movies that match the given keywords.
 * @returns The function `getMoviesBy` is returning a fetch request to the OMDB API with the specified
 * keywords and page number.
 */
  export const getMoviesBy = (keywords) => {
    return fetch(`https://www.omdbapi.com/?apikey=61b8922&s=${keywords}&page=1`);
}