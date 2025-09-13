import axios from "axios";
import React, { useEffect, useState } from "react";

function useApi(url) {
  let [item, setItem] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState("");
  async function getData() {
    try {
      let response = await axios.get(url);
      // console.log(response.data);
      response.data.results
        ? setItem(response.data.results)
        : setItem(response.data);
    } catch (error) {
      setError(error?.message || error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    setLoading(true);
    getData();
  }, [url]);

  return { item, loading, error };
}
export default useApi;
