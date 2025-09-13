import React from "react";
import { Link } from "react-router-dom";
import DetailsItem from "./DetailsItem/DetailsItem";
import Loader from "../../Loader/Loader";
import NotFound from "../../../assets/notFoundp.jpg";
export default function ItemHeader({
  items,
  itemsloading,
  cast,
  castloading,
  media_type,
}) {
  if (itemsloading) return <Loader />;
  if (items.length === 0 && cast.length === 0) return null;
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
      <div className="lg:col-span-1 md:col-span-2 col-span-1">
        <img
          src={
            items.poster_path
              ? `https://image.tmdb.org/t/p/w500/${items.poster_path}`
              : NotFound
          }
          alt=""
          className="mx-auto max-h-[500px] rounded-lg mb-3 mt-2 "
        />
        <Link to={`/trailer/${media_type}/${items.id}`} className="btn">
          Watch Trailer
        </Link>
      </div>

      <div className="lg:col-span-3 md:col-span-2 col-span-1 md:p-2">
        <DetailsItem items={items} cast={cast} castloading={castloading} />
      </div>
    </div>
  );
}
