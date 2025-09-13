import React from "react";
import useApi from "../../../Hooks/useApi";
import MediaItem from "../../MediaItem/MediaItem";
import Loader from "../../Loader/Loader";

export default function PeopleDetails({ id }) {
  let { item: movies, loading: moviesloading } = useApi(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=01672aea203f4a08b7d92c56e3461b0e&language=en-US`
  );
  let { item: Tv, loading: Tvloading } = useApi(
    `https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=01672aea203f4a08b7d92c56e3461b0e&language=en-US`
  );

  if (moviesloading || Tvloading) return <Loader />;
  let MoviesCast = movies.cast;
  let MoviesCrew = movies.crew.filter(
    (movie, index, self) => index === self.findIndex((m) => m.id === movie.id)
  );
  let TvCast = Tv.cast.filter(
    (movie, index, self) => index === self.findIndex((m) => m.id === movie.id)
  );
  console.log(Tv);
  let TvCrew = Tv.crew.filter(
    (movie, index, self) => index === self.findIndex((m) => m.id === movie.id)
  );

  return (
    <div className="flex flex-col gap-4 justify-center items-start py-5 overflow-auto">
      {MoviesCast.length !== 0 ? (
        <h1 className="relative text-3xl font-bold after">
          <span className="text-active">Featured Movies</span> of the Actor
        </h1>
      ) : (
        ""
      )}
      <div className="flex gap-4 overflow-x-auto py-5 w-full px-5">
        {MoviesCast.length !== 0
          ? MoviesCast.map((item, index) => (
              <div key={index} className="md:min-w-[200px] min-w-[150px]">
                <MediaItem item={item} />
              </div>
            ))
          : ""}
      </div>
      {MoviesCrew.length !== 0 ? (
        <h1 className="relative text-3xl font-bold after mt-9">
          <span className="text-active">Crew Movies Work</span> of the Actor
        </h1>
      ) : (
        ""
      )}
      <div className="flex gap-4 overflow-x-auto py-5 w-full  px-5">
        {MoviesCrew.length !== 0 || MoviesCrew
          ? MoviesCrew.map((item, index) => (
              <div key={index} className="md:min-w-[200px] min-w-[150px]">
                <MediaItem item={item} />
              </div>
            ))
          : ""}
      </div>
      {TvCast.length !== 0 ? (
        <h1 className="relative text-3xl font-bold after mt-9">
          <span className="text-active">Featured Tv</span> of the Actor
        </h1>
      ) : (
        ""
      )}
      <div className="flex md:gap-4 gap-6 overflow-x-auto py-5 w-full  px-5">
        {TvCast.length !== 0
          ? TvCast >= 50
            ? TvCast.slice(0, 50).map((item, index) => (
                <div key={index} className="md:min-w-[200px] min-w-[150px]">
                  <MediaItem item={item} />
                </div>
              ))
            : TvCast.map((item, index) => (
                <div key={index} className="md:min-w-[200px] min-w-[150px]">
                  <MediaItem item={item} />
                </div>
              ))
          : ""}
      </div>

      {TvCrew.length !== 0 ? (
        <h1 className="relative text-3xl font-bold after mt-9">
          <span className="text-active">Crew Tv Work</span> of the Actor
        </h1>
      ) : (
        ""
      )}
      <div className="flex gap-4 overflow-x-auto py-5 w-full  px-5">
        {TvCrew.length !== 0
          ? TvCrew >= 50
            ? TvCrew.slice(0, 50).map((item, index) => (
                <div key={index} className="md:min-w-[200px] min-w-[150px]">
                  <MediaItem item={item} />
                </div>
              ))
            : TvCrew.map((item, index) => (
                <div key={index} className="md:min-w-[200px] min-w-[120px]">
                  <MediaItem item={item} />
                </div>
              ))
          : ""}
      </div>
    </div>
  );
}
