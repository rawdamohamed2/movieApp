import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../../assets/NotFound.png";
export default function MediaItem({ item }) {
  let type = item.first_air_date ? "tv" : item.cast_id ? "movie" : "movie";

  return (
    <div className="movie col-span-1 relative hover:scale-105 transition-all duration-300 ease-in-out md:px-0 rounded-lg bg-background flex flex-col">
      <Link
        to={`/itemdetails/${item.id}/${type}`}
        className="flex flex-col flex-1 "
      >
        <img
          src={
            item.poster_path
              ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
              : NotFound
          }
          alt="movie poster"
          className="w-full md:h-[350px] h-[350px] rounded-lg"
        />

        <div className="layer absolute top-0 left-0 w-full h-full bg-black/50 rounded-lg flex flex-col justify-end py-3">
          {item.overview.length > 100 ? (
            <p className="md:text-sm text-sm md:px-2 px-2 pt-3">
              {item.overview.slice(0, 100)}...
            </p>
          ) : (
            <p className="md:text-sm text-sm md:px-2 px-2 pt-3">
              {item.overview}
            </p>
          )}
          <p className="md:text-md text-lg md:px-2 px-2 pt-3 ">
            {item.title}
            {item.name}
          </p>
        </div>
        {item.vote_average ? (
          <p className="text-md text-center md:p-2 p-2  absolute top-0 end-0 bg-button rounded-lg">
            <i className="fa-solid fa-star text-amber-400"></i>{" "}
            {item.vote_average.toFixed(1)}
          </p>
        ) : (
          ""
        )}
      </Link>
    </div>
  );
}
