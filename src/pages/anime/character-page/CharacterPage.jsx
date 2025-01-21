import { loading_gif } from '@/assets/img';
import ScrollTopButton from '@/components/common/ScrollTopButton';
import { getCharDetail, getCharVoices } from '@/services/animeService';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
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
        <p className="text-lg text-white">
          <img className="w-28 sm:w-52" src={loading_gif} alt="Loading..." />
        </p>
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

  // console.log(JSON.stringify(voices, null, 2));

  return (
    <div className="min-h-screen bg-red-950 ">
      <div className="px-4 mx-auto bg-gray-900 sm:px-6 lg:px-8">
        <CharacterDetails character={character} />
      </div>

      <VoiceActors voices={voices} />

      {/* Top Button */}
      <ScrollTopButton />
    </div>
  );
};

export default CharacterPage;
