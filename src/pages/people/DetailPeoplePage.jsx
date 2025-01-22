import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPeopleChar, getPeopleDetail } from '@/services/peopleService';
import PeopleDetails from './_component/PeopleDetails';
import CharacterList from './_component/CharacterList';
import ScrollTopButton from '@/components/common/ScrollTopButton';
import { Loading } from '@/components/common/Status';

function DetailPeoplePage() {
  const { id } = useParams();

  const [data, setData] = useState({ people: {}, characters: [] });
  const [isLoading, setIsLoading] = useState(true);
  const { people, characters } = data;

  const fetchPeopleData = async () => {
    try {
      setIsLoading(true);
      const peopleData = await getPeopleDetail(id);
      const charactersData = await getPeopleChar(id);
      setData({ people: peopleData, characters: charactersData.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPeopleData();
  }, [id]);

  return (
    <div className="justify-center min-h-screen py-4 pt-20 overflow-x-hidden bg-red-950">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* People Details */}
          <PeopleDetails people={people} />

          {/* Character List */}
          <CharacterList characters={characters} />

          {/* Scroll Top Button */}
          <ScrollTopButton />
        </>
      )}
    </div>
  );
}

export default DetailPeoplePage;
