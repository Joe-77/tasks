import React from "react";

const Paginate = ({
  currentPage,
  setCurrentPage,
  totalPages = 5,
  ref,
}: {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  ref: any;
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const getDisplayedPages = () => {
    if (totalPages <= 7) {
      return pages;
    }

    if (currentPage <= 4) {
      return [...pages.slice(0, 5), "...", totalPages];
    }

    if (currentPage >= totalPages - 3) {
      return [1, "...", ...pages.slice(totalPages - 5)];
    }

    return [
      1,
      "...",
      ...pages.slice(currentPage - 2, currentPage + 1),
      "...",
      totalPages,
    ];
  };

  return (
    <div className="flex justify-center items-center gap-4 my-20">
      <button
        onClick={() => {
          setCurrentPage(currentPage - 1);
          ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        Prev
      </button>

      {getDisplayedPages().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-4 py-2">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => {
              setCurrentPage(page as number);
              ref.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className={`px-4 py-2 rounded-lg ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => {
          if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
          }
          ref.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default React.memo(Paginate);
