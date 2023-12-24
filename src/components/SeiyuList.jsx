import React, { useEffect, useState } from "react";
import axios from "axios";
import CardSeiyu from "./CardSeiyu";
import { useNavigate } from "react-router-dom";

const SeiyuList = () => {
  const navigate = useNavigate();

  const [seiyuTop, setSeiyuTop] = useState([]);

  const getTopPeople = async () => {
    try {
      const data = await axios.get(
        "https://api.jikan.moe/v4/top/people?limit=24"
      );
      setSeiyuTop(data.data.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    getTopPeople();
  }, []);

  return (
    <div className="py-4 justify-center text-sm bg-red-700 min-h-screen">
      <div className="flex mx-2 sm:mx-3 mt-1 sm:mt-2 lg:mt-3  pt-4 px-4 justify-between font-poppins font-semibold text-white text-decoration-line: underlin text-xs sm:text-sm lg:text-lg bg-red-700 rounded-t-md">
        <h1>Top Famous People In Anime</h1>
        <h1
          className="cursor-pointer underline italic text-yellow-300 hover:text-blue-400"
          onClick={() => navigate("/seiyuall")}>
          other...
        </h1>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 bg-red-700 mx-4 rounded-b-lg">
        {seiyuTop?.map((top) => (
          <CardSeiyu all={top} />
        ))}
      </div>
    </div>
  );
};

export default SeiyuList;
