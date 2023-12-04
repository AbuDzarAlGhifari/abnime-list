import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const TopAnime = () => {
  const [page, setPage] = useState(1);
  const [animeSeasonNow, setAnimeSeasonNow] = useState([]);

  const getAnimeSeasonNow = async () => {
    try {
      const data = await axios.get(
        `https://api.jikan.moe/v4/seasons/now?page=${page}`
      );
      setAnimeSeasonNow(data.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    getAnimeSeasonNow();
  }, [page]);

  return (
    <div className="pt-2 justify-center text-sm bg-gradient-to-bl from-gray-400 to-red-700 min-h-screen">
      <div className="p-2">
        <h3 className="text-center font-kenia text-white text-sm sm:text-lg lg:text-2xl">{`ANIME TOP SEASON #${page}`}</h3>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 mx-2 sm:mx-4">
        {animeSeasonNow.data?.map((top) => (
          <Card key={top.mal_id} all={top} />
        ))}
      </div>
      <Pagination
        page={page}
        lastPage={animeSeasonNow.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
};

export default TopAnime;
