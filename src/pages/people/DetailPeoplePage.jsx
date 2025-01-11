import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPeopleChar, getPeopleDetail } from '@/services/peopleService';
import PeopleDetails from './_component/PeopleDetails';
import CharacterList from './_component/CharacterList';

function DetailPeoplePage() {
  const { id } = useParams();

  const [data, setData] = useState({ people: {}, characters: [] });
  const { people, characters } = data;
  const [showMore, setShowMore] = useState(false);

  const { about, name, images } = people;

  const fetchPeopleData = async () => {
    try {
      const peopleData = await getPeopleDetail(id);
      const charactersData = await getPeopleChar(id);
      setData({ people: peopleData, characters: charactersData.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchPeopleData();
  }, [id]);

  return (
    <div className="justify-center min-h-screen py-4 pt-20 overflow-x-hidden bg-red-950">
      <PeopleDetails
        people={people}
        about={about}
        name={name}
        images={images}
        showMore={showMore}
        setShowMore={setShowMore}
      />

      <h2 className="px-2 mx-6 mb-6 text-xl font-semibold text-white border-l-4 border-yellow-500 ">
        Character - anime
      </h2>
      <CharacterList characters={characters} />
    </div>
  );
}

export default DetailPeoplePage;
