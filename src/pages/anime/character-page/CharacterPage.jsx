import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getCharDetail, getCharVoices } from '@/services/animeService';
import CharacterDetails from './_component/CharacterDetails';
import VoiceActors from './_component/VoiceActors';

const CharacterPage = () => {
  const { id } = useParams();

  const characterQuery = useQuery({
    queryKey: ['character', id],
    queryFn: () => getCharDetail(id),
    staleTime: 60000,
  });

  const voicesQuery = useQuery({
    queryKey: ['voices', id],
    queryFn: () => getCharVoices(id),
    staleTime: 60000,
  });

  const {
    data: character,
    isLoading: isCharacterLoading,
    isError: isCharacterError,
  } = characterQuery;
  const {
    data: voices,
    isLoading: isVoicesLoading,
    isError: isVoicesError,
  } = voicesQuery;

  if (isCharacterLoading || isVoicesLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-950">
        <p className="text-lg text-white">Loading...</p>
      </div>
    );
  }

  if (isCharacterError || isVoicesError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-950">
        <p className="text-lg text-white">
          Error fetching data. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-4 bg-red-950">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <CharacterDetails
          character={character}
          showMore={false}
          setShowMore={() => {}}
        />
        <VoiceActors voices={voices} />
      </div>
    </div>
  );
};

export default CharacterPage;
