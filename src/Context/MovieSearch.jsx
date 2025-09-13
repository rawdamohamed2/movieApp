import axios from "axios";
import { createContext, useContext, useLayoutEffect, useState } from "react";

const MovieSearchContext = createContext(null);

function MovieSearchProvider({ children }) {
  const [results, setResults] = useState([]);
  const [page, setpage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});

  const apiKey = "01672aea203f4a08b7d92c56e3461b0e";

  const movieSearch = async (filtersParams) => {
    setLoading(true);
    setError(null);
    const mergedFilters = { ...filters, ...filtersParams };

    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie",
        {
          params: {
            api_key: apiKey,
            with_text_query: mergedFilters.query || undefined,
            with_genres: mergedFilters.genre || undefined,
            primary_release_year: mergedFilters.year || undefined,
            "vote_average.gte": mergedFilters.rating || undefined,
            with_original_language: mergedFilters.language || undefined,
            sort_by: mergedFilters.sortBy || "popularity.desc",
            page: mergedFilters.page || 1,
          },
        }
      );
      setResults(response.data.results || []);
      setTotalPages(response.data.total_pages || 1);
      setpage(mergedFilters.page || 1);
      setFilters(mergedFilters);
    } catch (err) {
      console.error(err);
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  useLayoutEffect(() => {
    movieSearch({});
  }, []);
  const nextPage = () => {
    if (page < totalPages) {
      setpage(page + 1);
      movieSearch({ page: page + 1 });
    }
  };
  const prevPage = () => {
    if (page > 1) {
      setpage(page - 1);
      movieSearch({ page: page - 1 });
    }
  };
  const pageNav = (page) => {
    if (page < totalPages) {
      setpage(page);
      movieSearch({ page: page });
    }
  };

  return (
    <MovieSearchContext.Provider
      value={{
        results,
        loading,
        error,
        page,
        totalPages,
        movieSearch,
        nextPage,
        prevPage,
        pageNav,
      }}
    >
      {children}
    </MovieSearchContext.Provider>
  );
}
export function useSearchMovie() {
  return useContext(MovieSearchContext);
}
export default MovieSearchProvider;
