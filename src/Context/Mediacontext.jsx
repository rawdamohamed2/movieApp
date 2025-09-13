import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TrandingContext = createContext(null);

function TrandingcontextProvider({ children }) {
  let [movies, setMovies] = useState([]);
  let [Tv, setTv] = useState([]);
  let [moviestopRated, setMoviestopRated] = useState([]);
  let [TvtopRated, setTvtopRated] = useState([]);

  async function getTrending(type, mediaType, state) {
    try {
      let url =
        type == "topRated"
          ? `https://api.themoviedb.org/3/${mediaType}/top_rated?api_key=01672aea203f4a08b7d92c56e3461b0e&language=en-US&page=1`
          : `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=01672aea203f4a08b7d92c56e3461b0e`;

      let response = await axios.get(url);
      state(response.data.results);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getTrending("trending", "movie", setMovies);
    getTrending("trending", "tv", setTv);
    getTrending("topRated", "movie", setMoviestopRated);
    getTrending("topRated", "tv", setTvtopRated);
  }, []);

  return (
    <TrandingContext.Provider
      value={{ movies, Tv, moviestopRated, TvtopRated }}
    >
      {children}
    </TrandingContext.Provider>
  );
}
export default TrandingcontextProvider;
