import React, { useState } from "react";
import PaginationMovie from "../../Components/Movies/PaginationMovie.jsx";
import MovieSearch from "../../Components/Movies/MovieSearch.jsx";
import Loader from "../../Components/Loader/Loader";
import MediaItem from "../../Components/MediaItem/MediaItem";
import { useMovieSearch } from "../../Hooks/useMovieSearch.jsx";

const initialFilters = {
  query: "",
  genre: "",
  year: "",
  rating: "",
  language: "",
  sortBy: "popularity.desc",
};

export default function MoviesPage() {
  const [filters, setFilters] = useState(initialFilters);
  const [appliedFilters, setAppliedFilters] = useState(initialFilters);
  const [page, setPage] = useState(1);

  const { data, isPending, isFetching, error } = useMovieSearch(
    appliedFilters,
    page,
  );

  if (isPending) {
    return <Loader />;
  }

  if (error) {
    return (
      <h1 className="container mx-auto text-center w-full sm:p-9 flex flex-col min-h-dvh text-6xl font-bold justify-center items-center ">
        {error ? error?.toString() : "Something went wrong"}
      </h1>
    );
  }

  const results = data?.results ?? [];
  const totalPages = data?.total_pages ?? 1;

  return (
    <main className="min-h-dvh py-10 start">
      <div className="container mx-auto">
        <div className="search flex justify-center items-center">
          <MovieSearch
            filters={filters}
            setFilters={setFilters}
            setPage={setPage}
            setAppliedFilters={setAppliedFilters}
            initialFilters={initialFilters}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {results.map((item) => (
            <MediaItem key={item.id} item={item} />
          ))}
        </div>

        {isFetching && <Loader />}

        <div className="Pagination">
          <PaginationMovie
            page={page}
            totalPages={totalPages}
            setPage={setPage}
          />
        </div>
      </div>
    </main>
  );
}
