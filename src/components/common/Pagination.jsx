const Pagination = ({ page, lastPage, setPage }) => {
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

  return (
    <div className="flex items-center justify-center gap-4 px-2 py-4 text-sm font-bold text-white font-poppins sm:text-lg lg:text-2xl">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="italic text-yellow-300 underline transition-all hover:text-blue-400 "
        >
          Prev
        </button>
      )}

      <p>
        {page} of {lastPage}
      </p>

      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="italic text-yellow-300 underline transition-all hover:text-blue-400"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
