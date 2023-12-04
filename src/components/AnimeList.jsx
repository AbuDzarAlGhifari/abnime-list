import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const AnimeList = () => {
  const navigate = useNavigate();

  //state
  const [animeTop, setAnimeTop] = useState([]);
  const [animeUpcoming, setAnimeUpcoming] = useState([]);
  const [animeSeasonNow, setAnimeSeasonNow] = useState([]);
  const [loading, setLoading] = useState(true);

  //get Top Anime
  const getTopAnime = async () => {
    try {
      const data = await axios.get(
        "https://api.jikan.moe/v4/top/anime?limit=12"
      );
      setAnimeTop(data.data.data);
      setLoading(false);
      // console.log(data.data.data)
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  //get Upcoming Anime
  const getAnimeUpcoming = async () => {
    try {
      const data = await axios.get(
        "https://api.jikan.moe/v4/seasons/upcoming?limit=12"
      );
      setAnimeUpcoming(data.data.data);
      setLoading(false);
      // console.log(data.data.data)
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  //get Anime Season Now
  const getAnimeSeasonNow = async () => {
    try {
      const data = await axios.get(
        "https://api.jikan.moe/v4/seasons/now?limit=12"
      );
      setAnimeSeasonNow(data.data.data);
      setLoading(false);
      // console.log(data.data.data)
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  //render
  useEffect(() => {
    getTopAnime();
    getAnimeUpcoming();
    getAnimeSeasonNow();
  }, []);

  return (
    <div className="py-4 justify-center text-sm bg-gradient-to-bl from-gray-400 to-red-700 min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="custom-loader flex justify-center items-center"></div>
        </div>
      ) : (
        <div className="flex mx-2 sm:mx-4 mt-1 sm:mt-2 lg:mt-3  pt-4 px-4 justify-between font-kenia text-white text-decoration-line: underlin lg:text-lg bg-red-700 rounded-t-md">
          <h1>Anime Top Season</h1>
          <h1
            className="cursor-pointer underline text-yellow-300 hover:text-blue-400"
            onClick={() => navigate("/top")}>
            Lainnya..
          </h1>
        </div>
      )}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 mx-2 sm:mx-4 bg-red-700 rounded-b-md">
        {animeSeasonNow?.map((now) => (
          <Card key={now.mal_id} all={now} />
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="custom-loader flex justify-center items-center"></div>
        </div>
      ) : (
        <div className="flex mx-2 sm:mx-4  mt-3 pt-4 px-4 justify-between font-kenia text-white text-decoration-line: underlin lg:text-lg bg-red-700 rounded-t-md">
          <h1>Anime Popular</h1>
          <h1 className="cursor-pointer underline text-yellow-300 hover:text-blue-400" onClick={() => navigate("/popular")}>
            Lainnya..
          </h1>
        </div>
      )}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 mx-2 sm:mx-4 bg-red-700  rounded-b-md">
        {animeTop?.map((top) => (
          <Card key={top.mal_id} all={top} />
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="custom-loader flex justify-center items-center"></div>
        </div>
      ) : (
        <div className="flex mx-2 sm:mx-4 mt-3 pt-4 px-4 justify-between font-kenia text-white text-decoration-line: underlin lg:text-lg bg-red-700 rounded-t-md">
          <h1>Up Coming Anime</h1>
          <h1 className="cursor-pointer underline text-yellow-300 hover:text-blue-400" onClick={() => navigate("/up")}>
            Lainnya..
          </h1>
        </div>
      )}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 mx-2 sm:mx-4 bg-red-700 rounded-b-md">
        {animeUpcoming?.map((up) => (
          <Card key={up.mal_id} all={up} />
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
