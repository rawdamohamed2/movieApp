import axios from "axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const fetchTvSearch = async ({ queryKey }) => {
  const [, filters, page] = queryKey;

  const { data } = await axios.get("https://api.themoviedb.org/3/discover/tv", {
    params: {
      api_key: API_KEY,
      with_text_query: filters.query || undefined,
      with_genres: filters.genre || undefined,
      first_air_date_year: filters.year || undefined,
      "vote_average.gte": filters.rating || undefined,
      with_original_language: filters.language || undefined,
      sort_by: filters.sortBy || "popularity.desc",
      page,
    },
  });

  return data;
};

export function useTvSearch(filters, page) {
  return useQuery({
    queryKey: ["tvSearch", filters, page],
    queryFn: fetchTvSearch,
    placeholderData: keepPreviousData,
  });
}
