import React, { useState, useContext } from "react";
import useApi from "../../../Hooks/useApi";
import { toHoursAndMinutes } from "../../../utils/Time";

import { Link } from "react-router-dom";
import { MessageContext } from "../../../Context/Messagecontext";
export default function HomeSe({ itemdetails }) {
  let [show, setShow] = useState(true);
  let { showMessage } = useContext(MessageContext);
  let {
    item: movie,
    loading: loading,
    error,
  } = useApi(
    `https://api.themoviedb.org/3/movie/${itemdetails}?api_key=01672aea203f4a08b7d92c56e3461b0e&language=en-US`
  );
  if (!itemdetails && itemdetails.length === 0 && movie.length == 0)
    return null;
  function LoadMore() {
    let few = "";
    let more = "";
    if (movie.overview.length > 200) {
      few = movie.overview.slice(0, 201);
      more = movie.overview;
      if (show) {
        return few;
      } else {
        return more;
      }
    } else {
      return movie.overview;
    }
  }

  error ? showMessage(error) : "";
  if (error)
    return (
      <h1 className="container mx-auto text-center w-full sm:p-9 flex flex-col min-h-dvh text-6xl font-bold justify-center items-center ">
        Something went wrong
      </h1>
    );
  return (
    <>
      {loading ? null : (
        <div className="grid gap-3 lg:mt-0 mt-[50px] lg:py-0 py-5 md:px-[70px] h-auto ">
          <h1 className="md:text-6xl sm:text-4xl text-3xl font-bold">
            {movie.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            {movie.genres
              ? movie.genres.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="sm:text-md text-sm font-semibold text-active"
                    >
                      {item.name}
                    </p>
                  );
                })
              : ""}
          </div>
          <h2 className="text-lg">
            {LoadMore()}{" "}
            {movie.overview.length > 200 ? (
              <button
                onClick={() => setShow(!show)}
                className="text-active lg:text-md text-sm"
              >
                Read More
              </button>
            ) : (
              ""
            )}
          </h2>
          <div className="flex gap-2">
            <p className="sm:text-md text-sm">
              <i className="fa-solid fa-star text-amber-400 "></i>{" "}
              {movie.vote_average.toFixed(1)}
            </p>
            <span className="sm:text-md text-sm">|</span>
            <p className="sm:text-md text-sm">
              <i className="fa-regular fa-clock text-secfont "></i>{" "}
              {toHoursAndMinutes(movie.runtime)}
            </p>
          </div>
          <Link
            to={`/trailer/movie/${movie.id}`}
            className="block w-fit border border-button px-6 py-3 rounded-lg sm:mt-4 mt-2 hover:border-border hover:text-active transition-all duration-300 ease-in-out "
          >
            Watch Trailer
          </Link>
        </div>
      )}
    </>
  );
}
