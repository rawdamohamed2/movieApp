import React, { useState, useContext } from "react";
import useApi from "../../Hooks/useApi.jsx";
import { toHoursAndMinutes } from "../../utils/Time.jsx";

import { Link } from "react-router-dom";
import { MessageContext } from "../../Context/Messagecontext.jsx";
export default function HomeContent({ id }) {
  let [show, setShow] = useState(true);
  let { showMessage } = useContext(MessageContext);
  let {
    data: movie,
    isPending,
    error,
  } = useApi(`https://api.themoviedb.org/3/movie/${id}`);
  if (!id) return null;
  if (isPending) return null;

  if (!movie) return null;

  error ? showMessage(error) : "";
  if (error)
    return (
      <h1 className="container mx-auto text-center w-full sm:p-9 flex flex-col min-h-dvh text-6xl font-bold justify-center items-center ">
        Something went wrong
      </h1>
    );

  function LoadMore() {
    const overview = movie?.overview ?? "";

    if (overview.length > 200) {
      return show ? overview.slice(0, 201) : overview;
    }

    return overview;
  }
  return (
    <>
      {isPending ? null : (
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
            {(movie?.overview ?? "").length > 200 && (
              <button
                onClick={() => setShow(!show)}
                className="text-active lg:text-md text-sm"
              >
                {show ? "Read More" : "Show Less"}
              </button>
            )}
          </h2>
          <div className="flex gap-2">
            <p className="sm:text-md text-sm">
              <i className="fa-solid fa-star text-amber-400 "></i>{" "}
              {(movie?.vote_average ?? 0).toFixed(1)}
            </p>
            <span className="sm:text-md text-sm">|</span>
            <p className="sm:text-md text-sm">
              <i className="fa-regular fa-clock text-secfont "></i>{" "}
              {movie?.runtime ? toHoursAndMinutes(movie.runtime) : ""}
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
