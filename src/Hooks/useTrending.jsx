import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

async function fetchTrending(mediaType) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/${mediaType}/day`,
    {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    },
  );
  return data ? data.results : data.data;
}

const fetchTopRated = async (mediaType) => {
  const data = await axios(
    `https://api.themoviedb.org/3/${mediaType}/top_rated`,
    {
      params: {
        api_key: API_KEY,
        language: "en-US",
        // page: 1,
      },
    },
  );
  return data ? data.data.results : data.data;
};

export const useTrending = (mediaType) => {
  return useQuery({
    queryKey: ["trending", mediaType],
    queryFn: () => fetchTrending(mediaType),
  });
};
export function useTopRated(mediaType) {
  return useQuery({
    queryKey: ["topRated", mediaType],
    queryFn: () => fetchTopRated(mediaType),
  });
}
