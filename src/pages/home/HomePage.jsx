import React, { useRef } from "react";
import HomeSection from "../../Components/Home/HomeSection.jsx";
import MediaItem from "../../Components/MediaItem/MediaItem";
import HeaderItem from "../../Components/Home/HeaderItem.jsx";
import Loader from "../../Components/Loader/Loader";
import { useTopRated, useTrending } from "../../Hooks/useTrending.jsx";

export default function HomePage() {
  let itemDetails = useRef({});
  const {
    data: movies,
    error: moviesError,
    isPending: moviesLoading,
  } = useTrending("movie");
  const { data: tv, error: tvError, isPending: tvLoading } = useTrending("tv");
  const {
    data: moviesTopRated,
    error: moviesTopRatedError,
    isPending: moviesTopRatedLoading,
  } = useTopRated("movie");
  const {
    data: tvTopRated,
    error: tvTopRatedError,
    isPending: tvTopRatedLoading,
  } = useTopRated("tv");

  if (moviesLoading && tvLoading) return <Loader />;

  if (!moviesTopRated || !tvTopRated || !tv || !movies) return <Loader />;
  itemDetails.current = movies && movies.slice(0, 3);

  return (
    <main>
      <HomeSection itemDetails={itemDetails.current} />
      <div className="container mx-auto">
        {/*Trending Movies section*/}
        {moviesLoading ? (
          <Loader />
        ) : moviesError ? (
          <h1 className="container mx-auto text-center w-full sm:p-9 flex flex-col min-h-dvh text-6xl font-bold justify-center items-center ">
            {moviesError ? moviesError?.toString() : "Something went wrong"}
          </h1>
        ) : (
          <section className="grid sm:grid-cols-2 grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 2xl:grid-cols-5 md:gap-4 gap-8 py-10 pe-0">
            {movies.slice(0, 1).map((item, index) => (
              <HeaderItem key={index} item={item.media_type} />
            ))}

            <div className="px-8 sm:col-span-2 col-span-1 xl:col-span-5 lg:col-span-4 md:col-span-3 2xl:col-span-5  flex gap-4 overflow-x-auto py-5 w-full md:gap-4 gap-8 py-10">
              {movies.slice(0, 15).map((item, index) => {
                return (
                  <div key={index} className="md:min-w-[220px] min-w-[200px]">
                    <MediaItem item={item} />
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/*Top Rated Movies section*/}
        {moviesTopRatedLoading ? (
          <Loader />
        ) : moviesTopRatedError ? (
          <h1 className="container mx-auto text-center w-full sm:p-9 flex flex-col min-h-dvh text-6xl font-bold justify-center items-center ">
            {moviesTopRatedError
              ? moviesTopRatedError?.toString()
              : "Something went wrong"}
          </h1>
        ) : (
          <section className="grid sm:grid-cols-2 grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 2xl:grid-cols-5 md:gap-4 gap-8 py-10 pe-0">
            {moviesTopRated.slice(0, 1).map((item, index) => (
              <HeaderItem key={index} item={"topRated Movies"} />
            ))}
            <div className="px-8 sm:col-span-2 col-span-1 xl:col-span-5 lg:col-span-4 md:col-span-3 2xl:col-span-5 flex gap-4 overflow-x-auto py-5 w-full md:gap-4 gap-8 py-10">
              {moviesTopRated.slice(0, 15).map((item, index) => {
                return (
                  <div key={index} className="md:min-w-[220px] min-w-[200px]">
                    <MediaItem item={item} />
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/*Trending Tv section*/}
        {tvLoading ? (
          <Loader />
        ) : tvError ? (
          <h1 className="container mx-auto text-center w-full sm:p-9 flex flex-col min-h-dvh text-6xl font-bold justify-center items-center ">
            {tvError ? tvError?.toString() : "Something went wrong"}
          </h1>
        ) : (
          <section className="grid sm:grid-cols-2 grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 2xl:grid-cols-5 md:gap-4 gap-8 py-10">
            {tv.slice(0, 1).map((item, index) => (
              <HeaderItem key={index} item={item.media_type} />
            ))}

            <div className="px-8 sm:col-span-2 col-span-1 xl:col-span-5 lg:col-span-4 md:col-span-3 2xl:col-span-5  flex gap-4 overflow-x-auto py-5 w-full md:gap-4 gap-8 py-10">
              {tv.slice(0, 15).map((item, index) => {
                return (
                  <div key={index} className="md:min-w-[220px] min-w-[200px]">
                    <MediaItem item={item} />
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/*Top Rated Tv section*/}
        {tvTopRatedLoading ? (
          <Loader />
        ) : tvTopRatedError ? (
          <h1 className="container mx-auto text-center w-full sm:p-9 flex flex-col min-h-dvh text-6xl font-bold justify-center items-center ">
            {tvTopRatedError
              ? tvTopRatedError?.toString()
              : "Something went wrong"}
          </h1>
        ) : (
          <section className="grid sm:grid-cols-2 grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 2xl:grid-cols-5 md:gap-4 gap-8 py-10">
            {tvTopRated.slice(0, 1).map((item, index) => (
              <HeaderItem key={index} />
            ))}

            <div className="px-8 sm:col-span-2 col-span-1 xl:col-span-5 lg:col-span-4 md:col-span-3 2xl:col-span-5  flex gap-4 overflow-x-auto py-5 w-full md:gap-4 gap-8 py-10">
              {tvTopRated.slice(0, 15).map((item, index) => {
                return (
                  <div key={index} className="md:min-w-[220px] min-w-[200px]">
                    <MediaItem item={item} />
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
