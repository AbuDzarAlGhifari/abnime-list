import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/common/card/Card';
import Pagination from '../../components/common/Pagination';

const PopularAnimePage = () => {
  const [page, setPage] = useState(1);
  const [animeTop, setAnimeTop] = useState([]);

  const getTopAnime = async () => {
    try {
      const data = await axios.get(
        `https://api.jikan.moe/v4/top/anime?page=${page}`
      );
      setAnimeTop(data.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    getTopAnime();
  }, [page]);

  return (
    <div className="justify-center min-h-screen pt-2 text-sm bg-red-700">
      <div className="p-2">
        <h3 className="text-sm font-extrabold text-center text-white font-poppins sm:text-lg lg:text-2xl">{`ANIME TERPOPULER #${page}`}</h3>
      </div>
      <div className="grid grid-cols-3 mx-2 sm:grid-cols-4 lg:grid-cols-6 sm:mx-4">
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

export default PopularAnimePage;
