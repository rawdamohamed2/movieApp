import React from "react";
import { useSearchMovie } from "../../../Context/MovieSearch";
import { useMediaQuery } from "react-responsive";
export default function PaginationMovie() {
  const { nextPage, prevPage, pageNav, totalPages, page } = useSearchMovie();

  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  let pageRange = 4;
  if (isMobile) pageRange = 1;
  else if (isTablet) pageRange = 2;

  const startPage = Math.max(1, page - pageRange);
  const endPage = Math.min(totalPages, page + pageRange);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center pt-5">
      <ul className="flex justify-between items-center gap-2">
        <li onClick={prevPage} className="btn cursor-pointer">
          Prev
        </li>
        {pages
          ? pages.map((num) => {
              return (
                <li
                  key={num}
                  className={`btn cursor-pointer ${page === num && "active"}`}
                  onClick={() => pageNav(num)}
                >
                  {num}
                </li>
              );
            })
          : ""}
        <li onClick={nextPage} className="btn cursor-pointer">
          Next
        </li>
      </ul>
    </div>
  );
}
