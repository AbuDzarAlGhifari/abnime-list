import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Popular = () => {
  const [page, setPage] = useState(1);
  const [animeTop, setAnimeTop] = useState([]);

  const getTopAnime = async () => {
    try {
      const data = await axios.get(
        `https://api.jikan.moe/v4/top/anime?page=${page}`
      );
      setAnimeTop(data.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    getTopAnime();
  },[page]);

  return (
    <div className="pt-2 justify-center text-sm bg-gradient-to-bl from-gray-400 to-red-700 min-h-screen">
      <div className="p-2">
        <h3 className="text-center font-kenia text-white text-sm sm:text-lg lg:text-2xl">{`ANIME TERPOPULER #${page}`}</h3>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 mx-2 sm:mx-4">
        {animeTop.data?.map((top) => (
          <Card key={top.mal_id} all={top} />
        ))}
      </div>
      <Pagination
        page={page}
        lastPage={animeTop.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
};

export default Popular;
