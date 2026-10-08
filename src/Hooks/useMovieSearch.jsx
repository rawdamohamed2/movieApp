import axios from "axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const fetchMovieSearch = async ({ queryKey }) => {
  const [, filters, page] = queryKey;

  const { data } = await axios.get(
    "https://api.themoviedb.org/3/discover/movie",
    {
      params: {
        api_key: API_KEY,
        with_text_query: filters.query || undefined,
        with_genres: filters.genre || undefined,
        primary_release_year: filters.year || undefined,
        "vote_average.gte": filters.rating || undefined,
        with_original_language: filters.language || undefined,
        sort_by: filters.sortBy || "popularity.desc",
        page,
      },
    },
  );

  return data;
};

export function useMovieSearch(filters, page) {
  return useQuery({
    queryKey: ["movieSearch", filters, page],
    queryFn: fetchMovieSearch,
    placeholderData: keepPreviousData,
  });
}
