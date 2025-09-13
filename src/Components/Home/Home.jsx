import React, { useRef } from "react";
import HomeSection from "./HomeSection/HomeSection";
import { useContext } from "react";
import { TrandingContext } from "../../Context/Mediacontext";
import MediaItem from "../MediaItem/MediaItem";
import Headeritem from "./Headeritem";
import Loader from "../Loader/Loader";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  let itemdetails = useRef({});
  let { movies, Tv, moviestopRated, TvtopRated } = useContext(TrandingContext);
  itemdetails.current = movies.slice(0, 3);
  const isTablet = useMediaQuery({ maxWidth: 1290 });
  if (
    itemdetails.current.length === 0 ||
    moviestopRated.length === 0 ||
    TvtopRated.length === 0 ||
    Tv.length === 0 ||
    movies.length === 0
  )
    return <Loader />;

  return (
    <>
      <div>
        <HomeSection itemdetails={itemdetails.current} />
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 2xl:grid-cols-5 md:gap-4 gap-8 py-10 pe-0">
            {movies.slice(0, 1).map((item, index) => (
              <Headeritem key={index} item={item.media_type} />
            ))}

            {isTablet ? (
              <div className="px-8 sm:col-span-2 col-span-1 xl:col-span-5 lg:col-span-4 md:col-span-3 2xl:col-span-5  flex gap-4 overflow-x-auto py-5 w-full md:gap-4 gap-8 py-10">
                {movies.slice(0, 15).map((item, index) => {
                  return (
                    <div key={index} className="md:min-w-[220px] min-w-[200px]">
                      <MediaItem item={item} />
                    </div>
                  );
                })}
              </div>
            ) : (
              movies
                .slice(0, 5)
                .map((item, index) => <MediaItem key={index} item={item} />)
            )}
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 2xl:grid-cols-5 md:gap-4 gap-8 py-10 pe-0">
            {moviestopRated.slice(0, 1).map((item, index) => (
              <Headeritem key={index} item={"topRated Movies"} />
            ))}
            {isTablet ? (
              <div className="px-8 sm:col-span-2 col-span-1 xl:col-span-5 lg:col-span-4 md:col-span-3 2xl:col-span-5 flex gap-4 overflow-x-auto py-5 w-full md:gap-4 gap-8 py-10">
                {moviestopRated.slice(0, 15).map((item, index) => {
                  return (
                    <div key={index} className="md:min-w-[220px] min-w-[200px]">
                      <MediaItem item={item} />
                    </div>
                  );
                })}
              </div>
            ) : (
              moviestopRated
                .slice(0, 5)
                .map((item, index) => <MediaItem key={index} item={item} />)
            )}
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 2xl:grid-cols-5 md:gap-4 gap-8 py-10">
            {Tv.slice(0, 1).map((item, index) => (
              <Headeritem key={index} item={item.media_type} />
            ))}

            {isTablet ? (
              <div className="px-8 sm:col-span-2 col-span-1 xl:col-span-5 lg:col-span-4 md:col-span-3 2xl:col-span-5  flex gap-4 overflow-x-auto py-5 w-full md:gap-4 gap-8 py-10">
                {Tv.slice(0, 15).map((item, index) => {
                  return (
                    <div key={index} className="md:min-w-[220px] min-w-[200px]">
                      <MediaItem item={item} />
                    </div>
                  );
                })}
              </div>
            ) : (
              Tv.slice(0, 5).map((item, index) => (
                <MediaItem key={index} item={item} />
              ))
            )}
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 2xl:grid-cols-5 md:gap-4 gap-8 py-10">
            {TvtopRated.slice(0, 1).map((item, index) => (
              <Headeritem key={index} />
            ))}

            {isTablet ? (
              <div className="px-8 sm:col-span-2 col-span-1 xl:col-span-5 lg:col-span-4 md:col-span-3 2xl:col-span-5  flex gap-4 overflow-x-auto py-5 w-full md:gap-4 gap-8 py-10">
                {TvtopRated.slice(0, 15).map((item, index) => {
                  return (
                    <div key={index} className="md:min-w-[220px] min-w-[200px]">
                      <MediaItem item={item} />
                    </div>
                  );
                })}
              </div>
            ) : (
              TvtopRated.slice(0, 5).map((item, index) => (
                <MediaItem key={index} item={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
