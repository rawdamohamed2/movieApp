import React from "react";
import { useMediaQuery } from "react-responsive";

export default function PaginationMovie({ page, totalPages, setPage }) {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({
    minWidth: 641,
    maxWidth: 1024,
  });

  let pageRange = 4;

  if (isMobile) {
    pageRange = 1;
  } else if (isTablet) {
    pageRange = 2;
  }

  const startPage = Math.max(1, page - pageRange);
  const endPage = Math.min(totalPages, page + pageRange);

  const pages = [];

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const pageNav = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="flex justify-center items-center pt-5">
      <ul className="flex justify-between items-center gap-2">
        <li
          onClick={prevPage}
          className={`btn ${
            page === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          Prev
        </li>

        {pages.map((num) => (
          <li
            key={num}
            className={`btn cursor-pointer ${page === num ? "active" : ""}`}
            onClick={() => pageNav(num)}
          >
            {num}
          </li>
        ))}

        <li
          onClick={nextPage}
          className={`btn ${
            page === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          Next
        </li>
      </ul>
    </div>
  );
}
