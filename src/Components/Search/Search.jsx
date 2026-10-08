import { useState } from "react";
import useApi from "../../Hooks/useApi";
import SearchItem from "./SearchItem";
import Loader from "../Loader/Loader.jsx";

export default function Search() {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(query)}`;

  const {
    data: items = [],
    isFetching,
    isError,
    error,
  } = useApi(url, query.trim().length > 0);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(inputValue.trim());
  }

  return (
    <div className="lg:w-[350px] md:max-w-[350px] w-full relative">
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Search"
          className="w-full p-2 rounded-lg bg-input text-white"
        />
      </form>

      {query && isFetching && <Loader />}

      {query && isError && (
        <p className="text-red-500">
          {error?.message || "Something went wrong"}
        </p>
      )}

      {query && !isFetching && !isError && (
        <div className="absolute top-11 w-full flex flex-col gap-2 bg-background p-2 rounded-md overflow-y-scroll max-h-[400px]">
          {items.length > 0 ? (
            items.map((item) => (
              <SearchItem key={item.id} item={item} setQuery={setQuery} />
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}
    </div>
  );
}
