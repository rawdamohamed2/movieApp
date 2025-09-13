import React from "react";

export default function Headeritem({ item }) {
  if (item === "movie") {
    item = "Trending Movies";
  } else if (item === "tv") {
    item = "Trending Tv";
  } else if (item === "topRated Movies") {
    item = "Top Rated Movies";
  } else {
    item = "Top Rated Tv";
  }

  return (
    <>
      <div className="hearderTitle sm:col-span-2 col-span-1  xl:col-span-5 lg:col-span-4 md:col-span-3 2xl:col-span-5 py-3 ">
        <h2 className="text-4xl font-bold">
          <span className="text-active"> {item}</span>
        </h2>
        <p className="text-md text-secfont px-2">Most {item} of the week</p>
      </div>
    </>
  );
}
