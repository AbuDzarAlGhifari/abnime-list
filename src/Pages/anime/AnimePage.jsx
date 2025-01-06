import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/common/card/Card';

const AnimePage = () => {
  const navigate = useNavigate();

  const [animeTop, setAnimeTop] = useState([]);
  const [animeUpcoming, setAnimeUpcoming] = useState([]);
  const [animeSeasonNow, setAnimeSeasonNow] = useState([]);

  const getTopAnime = async () => {
    try {
      const data = await axios.get(
        'https://api.jikan.moe/v4/top/anime?limit=12'
      );
      setAnimeTop(data.data.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const getAnimeUpcoming = async () => {
    try {
      const data = await axios.get(
        'https://api.jikan.moe/v4/seasons/upcoming?limit=12'
      );
      setAnimeUpcoming(data.data.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const getAnimeSeasonNow = async () => {
    try {
      const data = await axios.get(
        'https://api.jikan.moe/v4/seasons/now?limit=12'
      );
      setAnimeSeasonNow(data.data.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    getTopAnime();
    getAnimeUpcoming();
    getAnimeSeasonNow();
  }, []);

  return (
    <div className="justify-center min-h-screen py-4 text-sm bg-red-700">
      <div className="flex justify-between px-4 pt-4 mx-1 mt-1 text-xs font-semibold text-white bg-red-700 sm:mx-3 sm:mt-2 lg:mt-3 font-poppins text-decoration-line: underlin sm:text-sm lg:text-lg rounded-t-md">
        <h1>Anime Top Season</h1>
        <h1
          className="italic text-yellow-300 underline cursor-pointer hover:text-blue-400"
          onClick={() => navigate('/top')}
        >
          other...
        </h1>
      </div>
      <div className="grid grid-cols-3 mx-2 bg-red-700 sm:grid-cols-4 lg:grid-cols-6 sm:mx-4 rounded-b-md">
        {animeSeasonNow?.map((now) => (
          <Card key={now.mal_id} all={now} />
        ))}
      </div>

      <div className="flex justify-between px-4 pt-4 mx-1 mt-1 text-xs font-semibold text-white bg-red-700 sm:mx-3 sm:mt-2 lg:mt-3 font-poppins text-decoration-line: underlin sm:text-sm lg:text-lg rounded-t-md">
        <h1>Anime Popular</h1>
        <h1
          className="italic text-yellow-300 underline cursor-pointer hover:text-blue-400"
          onClick={() => navigate('/popular')}
        >
          other...
        </h1>
      </div>

      <div className="grid grid-cols-3 mx-2 bg-red-700 sm:grid-cols-4 lg:grid-cols-6 sm:mx-4 rounded-b-md">
        {animeTop?.map((top) => (
          <Card key={top.mal_id} all={top} />
        ))}
      </div>

      <div className="flex justify-between px-4 pt-4 mx-1 mt-1 text-xs font-semibold text-white bg-red-700 sm:mx-3 sm:mt-2 lg:mt-3 font-poppins text-decoration-line: underlin sm:text-sm lg:text-lg rounded-t-md">
        <h1>Up Comming Anime</h1>
        <h1
          className="italic text-yellow-300 underline cursor-pointer hover:text-blue-400"
          onClick={() => navigate('/up')}
        >
          other...
        </h1>
      </div>
      <div className="grid grid-cols-3 mx-2 bg-red-700 sm:grid-cols-4 lg:grid-cols-6 sm:mx-4 rounded-b-md">
        {animeUpcoming?.map((up) => (
          <Card key={up.mal_id} all={up} />
        ))}
      </div>
    </div>
  );
};

export default AnimePage;
