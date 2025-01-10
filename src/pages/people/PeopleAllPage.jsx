import CardPeople from '@/components/common/card/CardPeople';
import Pagination from '@/components/common/Pagination';
import { getAllTopPeople } from '@/services/peopleService';
import { useEffect, useState } from 'react';

const PeopleAllPage = () => {
  const [page, setPage] = useState(1);
  const [peopleTop, setPeopleTop] = useState([]);

  const fetchTopPeople = async () => {
    try {
      const data = await getAllTopPeople(page);
      setPeopleTop(data);
    } catch (error) {
      console.error('Error fetching top people:', error);
    }
  };

  useEffect(() => {
    fetchTopPeople();
  }, [page]);

  return (
    <div className="justify-center min-h-screen pt-2 text-sm bg-red-700">
      <div className="p-2">
        <h3 className="text-sm font-extrabold text-center text-white font-poppins sm:text-lg lg:text-2xl">{`PEOPLE TERPOPULER #${page}`}</h3>
      </div>
      <div className="grid grid-cols-3 mx-2 sm:grid-cols-4 lg:grid-cols-6 sm:mx-4">
        {peopleTop.data?.map((top) => (
          <CardPeople key={top.mal_id} all={top} />
        ))}
      </div>
      <Pagination
        page={page}
        lastPage={peopleTop.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
};

export default PeopleAllPage;
