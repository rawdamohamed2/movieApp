import React from "react";
import Loader from "../../Loader/Loader";
import MediaItem from "../../MediaItem/MediaItem";
import { useMediaQuery } from "react-responsive";
export default function SimilarItems({ similar, similarloading }) {
  const isTablet = useMediaQuery({ maxWidth: 1290 });
  if (similarloading) return null;

  return (
    <>
      {similar.length !== 0 ? (
        <>
          <h1 className="text-2xl font-bold pt-5">Recommended Movies</h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-5 gap-x-4 py-6 md:px-6 px-0  bg-transparent">
            {isTablet ? (
              <div className="px-8 sm:col-span-2 col-span-1 xl:col-span-5 lg:col-span-4 md:col-span-3 2xl:col-span-5  flex gap-4 overflow-x-auto py-5 w-full md:gap-4 gap-8 py-10">
                {similar.loading ? (
                  <Loader />
                ) : (
                  similar
                    .filter((item) => item.poster_path !== null)
                    .map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="md:min-w-[200px] min-w-[150px]"
                        >
                          <MediaItem item={item} />
                        </div>
                      );
                    })
                )}
              </div>
            ) : similar.loading ? (
              <Loader />
            ) : (
              similar
                .filter((item) => item.poster_path !== null)
                .map((item, index) => {
                  return <MediaItem key={index} item={item} />;
                })
            )}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
