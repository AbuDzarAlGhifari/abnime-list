import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const AnimeList = () => {
    const [animeTop, setAnimeTop] = useState([]);
    const [animeUpcoming, setAnimeUpcoming] = useState([]);
    const [animeSeasonNow, setAnimeSeasonNow] = useState([]);

    const fetchTop = async () => {
        const data = await axios.get("https://api.jikan.moe/v4/top/anime?limit=12");
        setAnimeTop(data.data.data);
        console.log(data.data.data)
    };

    const fetchUp = async () => {
        const data = await axios.get("https://api.jikan.moe/v4/seasons/upcoming?limit=12");
        setAnimeUpcoming(data.data.data);
        // console.log(data.data.data)
    };

    const fetchNow = async () => {
      const data = await axios.get("https://api.jikan.moe/v4/seasons/now?limit=12");
      setAnimeSeasonNow(data.data.data);
      // console.log(data.data.data)
    };

    useEffect(() => {
        fetchTop();
        fetchUp();
        fetchNow();
      }, []);

  return (
    <div className="container justify-center py-4 text-sm bg-gradient-to-bl from-gray-400 to-red-700">
        
        <h1 className="mx-4 pt-4 font-kenia text-white text-center lg:text-lg bg-red-700 rounded-t-lg">----------- ----------- Anime Season Now ----------- -----------</h1>
        <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 bg-red-700 mx-4 rounded-b-lg'>
          {animeSeasonNow?.map(b => (
          <Card all={b} />
          ))}
        </div>

        <h1 className="mx-4 mt-4 pt-4 font-kenia  text-center lg:text-lg bg-gray-400 rounded-t-lg">----------- ----------- Popular Anime ----------- -----------</h1>
        <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 bg-gray-400 mx-4 rounded-b-lg'>
          {animeTop?.map(top => (
          <Card all={top} />
          ))}
        </div>

        <h1 className="mx-4 mt-4 pt-4 font-kenia text-white text-center lg:text-lg bg-red-700 rounded-t-lg">----------- ----------- Up Coming Anime ----------- -----------</h1>
        <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 bg-red-700 mx-4  rounded-b-lg'>
          {animeUpcoming?.map(a => (
          <Card all={a} />
          ))}
        </div>

    </div>

  )
}

export default AnimeList