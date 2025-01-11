import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ page, lastPage, setPage }) => {
  const [searchPage, setSearchPage] = useState('');

  const scrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const handlePageChange = (e) => {
    const value = e.target.value;
    if (value >= 0 && value <= lastPage) {
      setSearchPage(value);
    }
  };

  const handleGo = () => {
    if (searchPage >= 1 && searchPage <= lastPage) {
      setPage(searchPage);
      scrollTop();
    }
  };

  // Generate an array of pages for navigation
  const pageNumbers = [];
  for (let i = 1; i <= lastPage; i++) {
    if (i <= 3 || i >= lastPage - 2 || (i >= page - 2 && i <= page + 2)) {
      pageNumbers.push(i);
    } else if (i === page - 3 || i === page + 3) {
      pageNumbers.push('...');
    }
  }

  return (
    <div className="inline-flex -space-x-px rounded-lg bg-red-950">
      {/* Previous Page Button */}
      {page > 1 && (
        <button
          onClick={handlePrevPage}
          className="inline-flex items-center px-2 py-2 text-sm font-semibold text-white transition-all transform rounded-l-md hover:text-yellow-500 hover:scale-110"
        >
          <span className="sr-only">Previous</span>
          <FaChevronLeft />
        </button>
      )}

      {/* Page Numbers */}
      {pageNumbers.map((num, index) =>
        num === '...' ? (
          <span
            key={index}
            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white"
          >
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => {
              setPage(num);
              scrollTop();
            }}
            className={`inline-flex items-center px-4 py-2 text-sm font-semibold text-white hover:text-yellow-500 transition-all transform hover:scale-110 ${
              num === page ? 'font-bold text-yellow-500' : ''
            }`}
          >
            {num}
          </button>
        )
      )}

      {/* Next Page Button */}
      {page < lastPage && (
        <button
          onClick={handleNextPage}
          className="inline-flex items-center px-2 py-2 text-sm font-semibold text-white transition-all transform rounded-r-md hover:text-yellow-500 hover:scale-110"
        >
          <span className="sr-only">Next</span>
          <FaChevronRight />
        </button>
      )}

      {/* Go to Page Input */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          inputMode="numeric"
          value={searchPage}
          onChange={handlePageChange}
          className="px-3 py-1 text-gray-700 rounded-md w-14 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          onClick={handleGo}
          className="px-2 py-1 text-white transition-all transform bg-yellow-500 rounded-md hover:bg-yellow-600 hover:scale-105"
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default Pagination;
