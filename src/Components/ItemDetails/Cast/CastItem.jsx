import React from "react";
import NotFound from "../../../assets/NotFound.png";
import { Link } from "react-router-dom";
export default function CastItem({ cast, castloading }) {
  if (castloading) return null;
  let Crewlist = cast.crew
    ? cast.crew.filter((item) => {
        return item.job == "Director";
      })
    : "";
  let Castlist = cast.cast;

  return (
    <div>
      {Crewlist.length == 0 ? (
        ""
      ) : (
        <p className="text-md font-semibold py-2">
          Director:{" "}
          <span className="text-secfont font-medium">{Crewlist[0].name}</span>
        </p>
      )}
      {Castlist.length == 0 ? (
        ""
      ) : (
        <h1 className="text-lg font-medium py-2">Cast: </h1>
      )}

      <div className="flex gap-4 overflow-x-auto py-2 w-full">
        {Castlist.length !== 0
          ? Castlist.slice(0, 8).map((item, index) => {
              return (
                <Link
                  to={`/people/${item.id}`}
                  key={index}
                  className="text-center flex flex-col justify-center items-center md:w-[100px] "
                >
                  {item.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                      alt={item.name}
                      className="lg:w-[80px] lg:h-[80px] min-w-[75px] h-[75px] lg:mx-0 mx-auto rounded-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <img
                      src={NotFound}
                      alt={item.name}
                      className=" w-[80px] h-[80px] rounded-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <p className="mt-2 text-sm leading-tight text-center mx-auto lg:ps-0 ps-4">
                    {item.name}
                  </p>
                </Link>
              );
            })
          : ""}
      </div>
    </div>
  );
}
