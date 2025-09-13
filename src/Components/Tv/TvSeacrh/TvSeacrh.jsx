import React, { useState, useContext } from "react";
import { useSearch } from "../../../Context/Tvsearch";
import Loader from "../../Loader/Loader";
import { MessageContext } from "../../../Context/Messagecontext";
export default function TvSeacrh() {
  const { showMessage } = useContext(MessageContext);
  const [filters, setFilters] = useState({
    query: "",
    genre: "",
    year: "",
    rating: "",
    language: "",
    sortBy: "popularity.desc",
    mediaType: "tv",
  });

  const { loading, error, searchTv } = useSearch();

  if (loading) return <Loader />;
  if (error) return showMessage(error);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    searchTv(filters);
  };

  const handleReset = () => {
    const resetFilters = {
      query: "",
      genre: "",
      year: "",
      rating: "",
      language: "",
      sortBy: "popularity.desc",
      mediaType: "tv",
    };
    setFilters(resetFilters);
    searchTv(resetFilters);
  };

  return (
    <div className="lg:w-[70%] w-full my-4">
      <div className="grid grid-cols-1 py-5 justify-center w-full">
        <div className="search flex flex-col w-full">
          <label htmlFor="TvSearch" className="text-md text-start">
            Search
          </label>
          <input
            type="text"
            name="query"
            id="TvSearch"
            placeholder="Select Tv"
            className="w-full bg-input py-[6px] px-3 rounded-lg mt-2"
            value={filters.query}
            onChange={handleChange}
          />
        </div>
        <div className="flex my-5 md:flex-row flex-col gap-4">
          <div className="grid sm:grid-cols-3 grid-cols-2 md:grid-cols-5 gap-4 ">
            <div className="Genre flex flex-col">
              <label htmlFor="Genre">Genre</label>
              <select
                name="genre"
                id="Genre"
                className="w-full bg-input py-[9px] px-3 rounded-lg mt-2 "
                value={filters.genre}
                onChange={handleChange}
              >
                <option value="">All</option>
                <option value="16">Animation</option>
                <option value="35">Comedy</option>
                <option value="99">Documentary</option>
                <option value="80">Crime</option>
                <option value="18">Drama</option>
                <option value="10751">Family</option>
                <option value="10762">Kids</option>
                <option value="9648">Mystery</option>
                <option value="10763">News</option>
                <option value="10764">Reality</option>
                <option value="10765">Sci-Fi & Fantasy</option>
                <option value="10766">Soap</option>
                <option value="10767">Talk</option>
                <option value="10768">War & Politics</option>
                <option value="37">Western</option>
                <option value="10759">Action & Adventure</option>
              </select>
            </div>
            <div className="Year flex flex-col">
              <label htmlFor="Year">Year</label>
              <input
                type="number"
                name="year"
                id="Year"
                value={filters.year}
                onChange={handleChange}
                placeholder="e.g. 2024"
                className="w-full bg-input py-[9px] px-3 rounded-lg mt-2 "
              />
            </div>
            <div className="Rating flex flex-col">
              <label htmlFor="rating">Rating</label>
              <select
                name="rating"
                id="rating"
                className="w-full bg-input py-[9px] px-3 rounded-lg mt-2 "
                value={filters.rating}
                onChange={handleChange}
              >
                <option className="my-2 text-md" value="">
                  All
                </option>
                <option className="my-2 text-md" value="9">
                  9 +
                </option>
                <option className="my-2 text-md" value="8">
                  8 +
                </option>
                <option className="my-2 text-md" value="7">
                  7 +
                </option>
                <option className="my-2 text-md" value="6">
                  6 +
                </option>
                <option className="my-2 text-md" value="5">
                  5 +
                </option>
                <option className="my-2 text-md" value="4">
                  4 +
                </option>
                <option className="my-2 text-md" value="3">
                  3 +
                </option>
                <option className="my-2 text-md" value="2">
                  2 +
                </option>
                <option className="my-2 text-md" value="1">
                  1 +
                </option>
              </select>
            </div>
            <div className="Language flex flex-col">
              <label htmlFor="Language">Language</label>
              <select
                name="language"
                id="Language"
                className="w-full bg-input py-[9px] px-3 rounded-lg mt-2 "
                value={filters.language}
                onChange={handleChange}
              >
                <option className="my-2 text-md" value="">
                  All
                </option>
                <option className="my-2 text-md" value="xx">
                  No Language
                </option>
                <option className="my-2 text-md" value="en">
                  English
                </option>
                <option className="my-2 text-md" value="ar">
                  Arabic
                </option>
                <option className="my-2 text-md" value="fr">
                  French
                </option>
                <option className="my-2 text-md" value="es">
                  Spanish
                </option>
                <option className="my-2 text-md" value="de">
                  German
                </option>
                <option className="my-2 text-md" value="it">
                  Italian
                </option>
                <option className="my-2 text-md" value="ja">
                  Japanese
                </option>
                <option className="my-2 text-md" value="ko">
                  Korean
                </option>
                <option className="my-2 text-md" value="hi">
                  Hindi
                </option>
                <option className="my-2 text-md" value="tr">
                  Turkish
                </option>
                <option className="my-2 text-md" value="zh">
                  Chinese
                </option>
                <option className="my-2 text-md" value="ru">
                  Russian
                </option>
              </select>
            </div>
            <div className="SortBy flex flex-col">
              <label htmlFor="SortBy">Sort By</label>
              <select
                name="sortBy"
                id="SortBy"
                className="w-full bg-input py-[9px] px-3 rounded-lg mt-2"
                value={filters.sortBy}
                onChange={handleChange}
              >
                <option value="">All</option>
                <option value="popularity.desc">Most Popular</option>
                <option value="first_air_date.desc">Newest</option>
                <option value="first_air_date.asc">Oldest</option>
                <option value="vote_average.desc">Top Rated</option>
                <option value="original_title.asc">Title (A → Z)</option>
                <option value="original_title.desc">Title (Z → A)</option>
              </select>
            </div>
          </div>
          <div className="search flex gap-4">
            <button
              className="bg-button rounded-lg block w-full py-2 px-4 h-[39px] text-center mt-8"
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              className="bg-button rounded-lg block w-full py-2 px-4 h-[39px] text-center mt-8"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
