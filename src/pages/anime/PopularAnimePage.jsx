import Card from '@/components/common/card/Card';
import Pagination from '@/components/common/Pagination';
import ScrollTopButton from '@/components/common/ScrollTopButton';
import { ErrorMessage, Loading } from '@/components/common/Status';
import { getAllAnimeTop } from '@/services/animeService';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const PopularAnimePage = () => {
  const [page, setPage] = useState(1);

  const {
    data: animeTop,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['animeTop', page],
    queryFn: () => getAllAnimeTop(page),
    keepPreviousData: true,
    staleTime: 60000,
  });

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage />;

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
      <div className="flex items-center justify-center">
        <Pagination
          page={page}
          lastPage={animeTop.pagination?.last_visible_page}
          setPage={setPage}
        />
      </div>

      {/* Top Button */}
      <ScrollTopButton />
    </div>
  );
};

export default PopularAnimePage;
