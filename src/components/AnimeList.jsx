import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";


const AnimeList = () => {
    const [animeTop, setAnimeTop] = useState([]);
    const [animeRecomen, setAnimeRecomen] = useState([]);

    const fetch = async () => {
        const data = await axios.get("https://api.jikan.moe/v4/top/anime?limit=12");
        setAnimeTop(data.data.data);
    };

    const fetchi = async () => {
        const data = await axios.get("https://api.jikan.moe/v4/top/manga?limit=12");
      setAnimeRecomen(data.data.data);
    };

    useEffect(() => {
        fetch();
        fetchi();
      }, []);
    


  return (
    <div className="container justify-center text-sm bg-gradient-to-bl from-gray-400 to-red-700">
        <h1 className="mx-4 pt-4 font-kenia text-center">Popular Anime</h1>
        <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6'>
          {animeTop?.map(top => (
          <Card all={top} />
          ))}
        </div>
        <h1 className="mx-4 pt-4 font-kenia text-center">Recomen Anime</h1>
        <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6'>
          {animeRecomen?.map(a => (
          <Card all={a} />
          ))}
        </div>
    </div>

  )
}

export default AnimeList