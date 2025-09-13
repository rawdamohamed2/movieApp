import axios from "axios";
import { useEffect, useState, useContext, useCallback } from "react";
import { UserContext } from "../Context/Usercontext";

function usePost(url, body = {}, sendToken = false, auto = true) {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(auto);
  const [error, setError] = useState("");
  let { getUser } = useContext(UserContext);

  const callApi = useCallback(
    async (customBody = null) => {
      setLoading(true);
      try {
        let headers = {};
        if (sendToken) {
          const token = localStorage.getItem("token");
          if (token) headers.token = token;
        }

        const response = await axios.post(url, customBody || body, { headers });

        if (response.data?.token) {
          localStorage.setItem("token", response.data.token);
          getUser();
        }

        setItem(response.data?.results || response.data);
        setError("");
      } catch (err) {
        setError(err.response?.data?.message || "Error");
      } finally {
        setLoading(false);
      }
    },
    [url, body, sendToken]
  );

  useEffect(() => {
    if (auto) {
      callApi();
    }
  }, [url, body, sendToken, auto, callApi]);

  return { item, loading, error, callApi };
}

export default usePost;
