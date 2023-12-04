const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-white text-sm sm:text-lg lg:text-2xl">
            { page <= 1 ? null : 
                <button onClick={handlePrevPage} className="transition-all underline text-yellow-300 hover:text-blue-400 ">Prev</button>
            }

            <p>{page} of {lastPage}</p>

            { page >= lastPage ? null : 
                <button onClick={handleNextPage} className="transition-all underline text-yellow-300 hover:text-blue-400">Next</button>
            }
        </div>
    )
}

export default Pagination