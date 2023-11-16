import React, { useEffect, useState } from "react";
import axios from "axios";
import CardSeiyu from "./CardSeiyu";


const SeiyuList = () => {
    const [seiyuTop, setSeiyuTop] = useState([]);

    const fetchTop = async () => {
        const data = await axios.get("https://api.jikan.moe/v4/top/people?limit=24");
        setSeiyuTop(data.data.data);
        console.log(data.data.data)
    };
    
    useEffect(() => {
        fetchTop();
      }, []);
      
  return (
    <div className="container justify-center pt-4 text-sm bg-gradient-to-bl from-gray-400 to-red-700">
        <h1 className="mx-4 mt-4 pt-4 font-kenia text-white text-center lg:text-lg bg-red-700 rounded-t-lg">----------- ----------- Famous People In Anime ----------- -----------</h1>
        <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 bg-red-700 mx-4  rounded-b-lg'>
          {seiyuTop?.map(top => (
          <CardSeiyu all={top} />
          ))}
        </div>
    </div>
  )
}

export default SeiyuList