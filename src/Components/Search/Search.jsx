import React, { useState, useContext } from "react";
import useApi from "../../Hooks/useApi";
import { MessageContext } from "../../Context/Messagecontext";

import SearchItem from "./SearchItem";

export default function Search() {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const { showMessage } = useContext(MessageContext);
  const {
    item: items,
    loading: itemsLoading,
    error,
  } = useApi(
    `https://api.themoviedb.org/3/search/multi?api_key=01672aea203f4a08b7d92c56e3461b0e&language=en-US&query=${query}&page=1`
  );

  if (error) return null;
  error ? showMessage(error) : "";

  function handleChange(e) {
    if (e.target.value.length === 0) {
      setQuery("");
      setInputValue(e.target.value);
    } else {
      setInputValue(e.target.value);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    setQuery(inputValue);
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

      {(items.length > 0 && query.length > 0) || error ? (
        <div className="absolute top-11 w-full flex flex-col gap-2 bg-background p-2 rounded-md overflow-y-scroll max-h-[400px]">
          {items.length > 10
            ? items.map((item, index) => (
                <SearchItem key={index} item={item} setQuery={setQuery} />
              ))
            : items.map((item, index) => (
                <SearchItem key={index} item={item} setQuery={setQuery} />
              ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
