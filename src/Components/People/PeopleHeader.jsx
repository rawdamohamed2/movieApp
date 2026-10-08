import React from "react";
import NotFound from "../../assets/NotFound.png";
export default function PeopleHeader({ item, itemloading }) {
  if (itemloading) return null;

  return (
    <div className="grid gap-4 justify-center items-center w-full start pt-[50px] overflow-hidden">
      <div className="flex gap-4 lg:justify-center lg:items-center justify-stretch items-stretch relative personImage transition-all duration-1000 ease-in-out">
        <img
          src={
            item?.profile_path
              ? `https://image.tmdb.org/t/p/original/${item.profile_path}`
              : NotFound
          }
          alt=""
          className="max-w-[250px] min-h-[400px] rounded-lg mt-6"
        />
        <div className="overlay md:flex flex-col justify-center lg:mt-0 mt-6 items-center gap-3 xl:absolute xl:bottom-0 xl:right-[-170%] lg:relative lg:bottom-0 lg:right-0 hidden  transition-all duration-1000 ease-in-out lg:w-[400px] lg:h-[400px] bg-background rounded-lg">
          <p className="text-2xl font-semibold">{item.name}</p>
          {item?.biography ? (
            <p className="text-md font-medium leading-6 text-center py-2 text-secfont">
              {item.biography.slice(0, 350)}
            </p>
          ) : (
            ""
          )}
          {item?.birthday ? (
            <p className="text-md text-center font-semibold">
              Born:{" "}
              <span className="text-secfont font-medium">{item.birthday}</span>
            </p>
          ) : (
            ""
          )}
          {item.place_of_birth ? (
            <p className="text-md text-center font-semibold">
              Place of Birth:{" "}
              <span className="text-secfont font-medium">
                {item.place_of_birth}
              </span>
            </p>
          ) : (
            ""
          )}
          {item.deathday ? (
            <p className="text-md text-center font-semibold">
              deathday:{" "}
              <span className="text-secfont font-medium">{item.deathday}</span>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
