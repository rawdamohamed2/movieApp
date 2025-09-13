import { createContext, useContext, useLayoutEffect, useState } from "react";
import axios from "axios";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});

  const apiKey = "01672aea203f4a08b7d92c56e3461b0e";

  const searchTv = async (filtersParams) => {
    setLoading(true);
    setError(null);
    const mergedFilters = { ...filters, ...filtersParams };
    try {
      const discoverRes = await axios.get(
        "https://api.themoviedb.org/3/discover/tv",
        {
          params: {
            api_key: apiKey,
            with_text_query: mergedFilters.query || undefined,
            with_genres: mergedFilters.genre || undefined,
            first_air_date_year: mergedFilters.year || undefined,
            "vote_average.gte": mergedFilters.rating || undefined,
            with_original_language: mergedFilters.language || undefined,
            sort_by: mergedFilters.sortBy || "popularity.desc",
            page: mergedFilters.page || 1,
          },
        }
      );

      setResults(discoverRes.data.results || []);
      setTotalPages(discoverRes.data.total_pages || 1);
      setPage(mergedFilters.page || 1);
      setFilters(mergedFilters);
    } catch (err) {
      console.error(err);
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  useLayoutEffect(() => {
    searchTv({});
  }, []);

  const nextPage = () => {
    if (page < totalPages) {
      searchTv({ page: page + 1 });
    }
  };

  const prevPage = () => {
    if (page > 1) {
      searchTv({ page: page - 1 });
    }
  };
  const pageNav = (page, filters) => {
    if (page < totalPages) {
      searchTv({ page: page });
    }
  };

  return (
    <SearchContext.Provider
      value={{
        results,
        loading,
        error,
        page,
        totalPages,
        searchTv,
        nextPage,
        prevPage,
        pageNav,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

// 🟢 Hook لاستخدام الـ context بسهولة
export function useSearch() {
  return useContext(SearchContext);
}

export default SearchProvider;
