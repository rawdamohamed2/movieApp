import React from "react";
import Loader from "../Loader/Loader";
import TvSeacrh from "./TvSeacrh/TvSeacrh";
import { useSearch } from "../../Context/Tvsearch";
import Pagination from "./Pagination/Pagination";
import MediaItem from "../MediaItem/MediaItem";
export default function Tv() {
  const { results } = useSearch();

  if (results.length == 0) return <Loader />;

  return (
    <section className="min-h-dvh py-10 start">
      <div className="container mx-auto ">
        <div className="search flex justify-center items-center">
          <TvSeacrh />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
          {results.length == 0
            ? ""
            : results.map((item, index) => (
                <MediaItem key={index} item={item} />
              ))}
        </div>
        <div className="Pagination">
          <Pagination />
        </div>
      </div>
    </section>
  );
}
