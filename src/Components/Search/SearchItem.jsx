import React from "react";
import NotFound from "../../assets/NotFound.png";
import { Link } from "react-router-dom";
export default function SearchItem({ item, itemsLoading, setQuery }) {
  if (itemsLoading) return null;

  return (
    <Link
      onClick={() => setQuery("")}
      to={`/itemdetails/${item.id}/${item.media_type}`}
      className="w-full flex items-center gap-2 bg-secondbg p-2 rounded-md hover:scale-102 transition-all duration-300 ease-in-out"
    >
      <img
        src={
          item.poster_path
            ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
            : NotFound
        }
        alt=""
        className="w-[40px] h-[40px] rounded-full "
      />
      <p>
        {item.name}
        {item.title}
      </p>
    </Link>
  );
}
