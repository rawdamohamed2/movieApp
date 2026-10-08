import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const API_KEY = import.meta.env("API_KEY");

const search = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/collection`,
    {
      params: {
        api_key: API_KEY,
        language: "en-US",
        query: query,
        page: 1,
      },
    },
  );
  return response.data.results ? response.data.results : response.data;
};

function useSearch(query) {
  return useQuery({
    queryKey: ["query", query],
    query: search,
  });
}
export default useSearch;
