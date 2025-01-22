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
  const pageNumbers = [];
  const range = 1;

  for (let i = 1; i <= lastPage; i++) {
    if (i === 1) {
      pageNumbers.push(i);
    } else if (i === lastPage) {
      pageNumbers.push(i);
    } else if (i >= page - range && i <= page + range) {
      pageNumbers.push(i);
    } else if (i === page - range - 1 || i === page + range + 1) {
      pageNumbers.push('...');
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-4 rounded-lg bg-red-950 sm:gap-4">
      {/* Previous Page Button */}
      {page > 1 && (
        <button
          onClick={handlePrevPage}
          className="flex items-center px-2 py-2 text-sm font-semibold text-white transition-all transform rounded-md sm:px-3 sm:py-2 hover:text-yellow-500 hover:scale-110"
        >
          <span className="sr-only">Previous</span>
          <FaChevronLeft />
        </button>
      )}

      {/* Page Numbers */}
      <div className="flex flex-wrap items-center justify-center gap-1">
        {pageNumbers.map((num, index) =>
          num === '...' ? (
            <span
              key={index}
              className="px-2 text-sm font-semibold text-white sm:px-3"
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
              className={`px-2 py-1 text-sm font-semibold text-white rounded-md sm:px-3 sm:py-2 hover:text-yellow-500 transition-all transform hover:scale-110 ${
                num === page ? 'font-bold text-yellow-500 bg-yellow-600' : ''
              }`}
            >
              {num}
            </button>
          )
        )}
      </div>

      {/* Next Page Button */}
      {page < lastPage && (
        <button
          onClick={handleNextPage}
          className="flex items-center px-2 py-2 text-sm font-semibold text-white transition-all transform rounded-md sm:px-3 sm:py-2 hover:text-yellow-500 hover:scale-110"
        >
          <span className="sr-only">Next</span>
          <FaChevronRight />
        </button>
      )}

      {/* Go to Page Input */}
      <div className="flex items-center gap-2 mt-2 sm:mt-0">
        <input
          type="text"
          inputMode="numeric"
          value={searchPage}
          onChange={handlePageChange}
          className="w-16 px-2 py-1 text-center text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:w-20"
          placeholder="Page"
        />
        <button
          onClick={handleGo}
          className="px-3 py-1 text-white transition-all transform bg-yellow-500 rounded-md hover:bg-yellow-600 hover:scale-105"
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default Pagination;
