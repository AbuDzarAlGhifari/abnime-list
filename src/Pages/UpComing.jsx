import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Upcoming = () => {
  const [page, setPage] = useState(1);
  const [animeUpcoming, setAnimeUpcoming] = useState([]);

  const getAnimeUpcoming = async () => {
    try {
      const data = await axios.get(
        `https://api.jikan.moe/v4/seasons/upcoming?page=${page}`
      );
      setAnimeUpcoming(data.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    getAnimeUpcoming();
  }, [page]);

  return (
    <div className="pt-2 justify-center text-sm bg-red-700 min-h-screen">
      <div className="p-2">
        <h3 className="text-center font-poppins font-extrabold text-white text-sm sm:text-lg lg:text-2xl">{`UP COMING ANIME #${page}`}</h3>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 mx-2 sm:mx-4">
        {animeUpcoming.data?.map((top) => (
          <Card key={top.mal_id} all={top} />
        ))}
      </div>
      <Pagination
        page={page}
        lastPage={animeUpcoming.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
};

export default Upcoming;
