import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const AnimeList = () => {
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
    <div className="py-4 justify-center text-sm bg-gradient-to-bl from-gray-400 to-red-700">
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="custom-loader flex justify-center items-center"></div>
        </div>
      ) : (
        <div className="flex mx-4 mt-3 pt-4 px-4 justify-between font-kenia text-white text-decoration-line: underlin lg:text-lg bg-red-700 rounded-t-md">
          <h1>Anime Top Season</h1>
          <h1 className="cursor-pointer text-yellow-400">Lainnya..</h1>
        </div>
      )}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 mx-4 bg-red-700 rounded-b-md">
        {animeSeasonNow?.map((now) => (
          <Card all={now} />
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="custom-loader flex justify-center items-center"></div>
        </div>
      ) : (
        <div className="flex mx-4 mt-3 pt-4 px-4 justify-between font-kenia text-white text-decoration-line: underlin lg:text-lg bg-red-700 rounded-t-md">
          <h1>Anime Popular</h1>
          <h1 className="cursor-pointer text-yellow-400">Lainnya..</h1>
        </div>
      )}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 mx-4 bg-red-700  rounded-b-md">
        {animeTop?.map((top) => (
          <Card all={top} />
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="custom-loader flex justify-center items-center"></div>
        </div>
      ) : (
        <div className="flex mx-4 mt-3 pt-4 px-4 justify-between font-kenia text-white text-decoration-line: underlin lg:text-lg bg-red-700 rounded-t-md">
          <h1>Up Coming Anime</h1>
          <h1 className="cursor-pointer text-yellow-400">Lainnya..</h1>
        </div>
      )}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 mx-4 bg-red-700 rounded-b-md">
        {animeUpcoming?.map((up) => (
          <Card all={up} />
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
