import axios from "axios";
import React, { useEffect, useState } from "react";

function useSearch(query) {
  let [item, setItem] = useState({});
  let [loading, setLoading] = useState(true);
  async function getData() {
    try {
      let response = await axios.get(
        `https://api.themoviedb.org/3/search/collection?api_key=01672aea203f4a08b7d92c56e3461b0e&query=${query}&language=en-US&page=1`
      );

      response.data.results
        ? setItem(response.data.results)
        : setItem(response.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    setLoading(true);
    getData();
  }, [query]);

  return { item, loading };
}
export default useSearch;
