import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const getData = async (url) => {
  const response = await axios.get(url, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page: 1,
    },
  });

  return response.data.results ?? response.data;
};

function useApi(url) {
  const { data, error, isPending, isLoading } = useQuery({
    queryKey: ["data", url],
    queryFn: () => getData(url),
    enabled: Boolean(url),
  });

  return {
    data,
    error,
    isPending,
    isLoading,
  };
}

export default useApi;
