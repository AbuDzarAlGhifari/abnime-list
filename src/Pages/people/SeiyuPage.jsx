import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CardSeiyu from '../../components/common/card/CardSeiyu';

const SeiyuPage = () => {
  const navigate = useNavigate();

  const [seiyuTop, setSeiyuTop] = useState([]);

  const getTopPeople = async () => {
    try {
      const data = await axios.get(
        'https://api.jikan.moe/v4/top/people?limit=24'
      );
      setSeiyuTop(data.data.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    getTopPeople();
  }, []);

  return (
    <div className="justify-center min-h-screen py-4 text-sm bg-red-700">
      <div className="flex justify-between px-4 pt-4 mx-2 mt-1 text-xs font-semibold text-white bg-red-700 sm:mx-3 sm:mt-2 lg:mt-3 font-poppins text-decoration-line: underlin sm:text-sm lg:text-lg rounded-t-md">
        <h1>Top Famous People In Anime</h1>
        <h1
          className="italic text-yellow-300 underline cursor-pointer hover:text-blue-400"
          onClick={() => navigate('/seiyuall')}
        >
          other...
        </h1>
      </div>
      <div className="grid grid-cols-3 mx-4 bg-red-700 rounded-b-lg sm:grid-cols-4 lg:grid-cols-6">
        {seiyuTop?.map((top) => (
          <CardSeiyu all={top} />
        ))}
      </div>
    </div>
  );
};

export default SeiyuPage;
