import React, { useEffect, useState } from 'react';
import { getAllAnimeUpcoming } from '@/services/animeService';
import Pagination from '@/components/common/Pagination';
import Card from '@/components/common/card/Card';

const ComingAnimePage = () => {
  const [page, setPage] = useState(1);
  const [animeUpcoming, setAnimeUpcoming] = useState([]);

  const fetchAnimeUpcoming = async () => {
    try {
      const data = await getAllAnimeUpcoming(page);
      setAnimeUpcoming(data);
    } catch (error) {
      console.error('Error fetching anime data:', error);
    }
  };

  useEffect(() => {
    fetchAnimeUpcoming();
  }, [page]);

  return (
    <div className="justify-center min-h-screen pt-2 text-sm bg-red-700">
      <div className="p-2">
        <h3 className="text-sm font-extrabold text-center text-white font-poppins sm:text-lg lg:text-2xl">{`UP COMING ANIME #${page}`}</h3>
      </div>
      <div className="grid grid-cols-3 mx-2 sm:grid-cols-4 lg:grid-cols-6 sm:mx-4">
        {animeUpcoming.data?.map((anime) => (
          <Card key={anime.mal_id} all={anime} />
        ))}
      </div>
      <Pagination
        page={page}
        lastPage={animeUpcoming.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
};

export default ComingAnimePage;
