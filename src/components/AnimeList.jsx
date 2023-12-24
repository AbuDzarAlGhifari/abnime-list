import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const AnimeList = () => {
  const navigate = useNavigate();

  const [animeTop, setAnimeTop] = useState([]);
  const [animeUpcoming, setAnimeUpcoming] = useState([]);
  const [animeSeasonNow, setAnimeSeasonNow] = useState([]);

  const getTopAnime = async () => {
    try {
      const data = await axios.get(
        "https://api.jikan.moe/v4/top/anime?limit=12"
      );
      setAnimeTop(data.data.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const getAnimeUpcoming = async () => {
    try {
      const data = await axios.get(
        "https://api.jikan.moe/v4/seasons/upcoming?limit=12"
      );
      setAnimeUpcoming(data.data.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const getAnimeSeasonNow = async () => {
    try {
      const data = await axios.get(
        "https://api.jikan.moe/v4/seasons/now?limit=12"
      );
      setAnimeSeasonNow(data.data.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    getTopAnime();
    getAnimeUpcoming();
    getAnimeSeasonNow();
  }, []);

  return (
    <div className="py-4 justify-center text-sm bg-red-700 min-h-screen">
      <div className="flex mx-1 sm:mx-3 mt-1 sm:mt-2 lg:mt-3  pt-4 px-4 justify-between font-poppins font-semibold text-white text-decoration-line: underlin text-xs sm:text-sm lg:text-lg bg-red-700 rounded-t-md">
        <h1>Anime Top Season</h1>
        <h1
          className="cursor-pointer underline italic text-yellow-300 hover:text-blue-400"
          onClick={() => navigate("/top")}>
          other...
        </h1>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 mx-2 sm:mx-4 bg-red-700 rounded-b-md">
        {animeSeasonNow?.map((now) => (
          <Card key={now.mal_id} all={now} />
        ))}
      </div>

      <div className="flex mx-1 sm:mx-3 mt-1 sm:mt-2 lg:mt-3  pt-4 px-4 justify-between font-poppins font-semibold text-white text-decoration-line: underlin text-xs sm:text-sm lg:text-lg bg-red-700 rounded-t-md">
        <h1>Anime Popular</h1>
        <h1
          className="cursor-pointer underline italic text-yellow-300 hover:text-blue-400"
          onClick={() => navigate("/popular")}>
          other...
        </h1>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 mx-2 sm:mx-4 bg-red-700  rounded-b-md">
        {animeTop?.map((top) => (
          <Card key={top.mal_id} all={top} />
        ))}
      </div>

      <div className="flex mx-1 sm:mx-3 mt-1 sm:mt-2 lg:mt-3  pt-4 px-4 justify-between font-poppins font-semibold text-white text-decoration-line: underlin text-xs sm:text-sm lg:text-lg bg-red-700 rounded-t-md">
        <h1>Up Comming Anime</h1>
        <h1
          className="cursor-pointer underline italic text-yellow-300 hover:text-blue-400"
          onClick={() => navigate("/up")}>
          other...
        </h1>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 mx-2 sm:mx-4 bg-red-700 rounded-b-md">
        {animeUpcoming?.map((up) => (
          <Card key={up.mal_id} all={up} />
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
