import React from "react";
import CastItem from "../../Cast/CastItem";
import { toHoursAndMinutes } from "../../../../utils/Time";

export default function DetailsItem({ items, cast, castloading }) {

  return (
    <>
      <h1 className="md:text-3xl text-2xl font-bold ">
        {items.title}
        {items.name}
      </h1>

      <div className="flex md:flex-nowrap flex-wrap gap-2 pt-1">
        {Array.isArray(items.genres)
          ? items.genres.map((item, index) => {
              return (
                <p
                  key={index}
                  className="text-md font-semibold text-active pe-2"
                >
                  {item.name}
                </p>
              );
            })
          : ""}
        <p className="text-md">
          <i className="fa-solid fa-star text-amber-400"></i>{" "}
          {items.vote_average ? items.vote_average.toFixed(1) : ""}
        </p>
      </div>

      <p className="text-lg text-secfont md:pe-5 pe-1 py-5 ">
        {items.overview.length > 500
          ? items.overview.slice(0, 500) + "..."
          : items.overview}
      </p>
      <div className="flex flex-col gap-2">
        {items.runtime ? (
          <p className="text-md font-semibold">
            Duration:{" "}
            <span className="text-secfont font-medium">
              {toHoursAndMinutes(items.runtime)}
            </span>
          </p>
        ) : (
          <p className="text-md font-semibold">
            Numder of episodes:{" "}
            <span className="text-secfont font-medium">
              {" "}
              {items.number_of_episodes}
            </span>
          </p>
        )}
        {items.number_of_seasons ? (
          <p className="text-md font-semibold">
            seasons:{" "}
            <span className="text-secfont font-medium">
              {items.number_of_seasons}
            </span>
          </p>
        ) : (
          ""
        )}
        {items.release_date ? (
          <p className="text-md font-semibold">
            Release Date:{" "}
            <span className="text-secfont font-medium">
              {items.release_date}
            </span>
          </p>
        ) : (
          <p className="text-md font-semibold">
            Release Date:{" "}
            <span className="text-secfont font-medium">
              {items.first_air_date}
            </span>
          </p>
        )}
      </div>
      <div className="cast">
        <CastItem cast={cast} castloading={castloading} />
      </div>
    </>
  );
}
