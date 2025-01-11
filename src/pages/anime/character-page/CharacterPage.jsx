import { getCharDetail, getCharVoices } from '@/services/animeService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetails from './_component/CharacterDetails';
import VoiceActors from './_component/VoiceActors';

const CharacterPage = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState([]);
  const [voices, setVoices] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const characterData = await getCharDetail(id);
        setCharacter(characterData);

        const voicesData = await getCharVoices(id);
        setVoices(voicesData);
      } catch (error) {
        console.error('Error fetching character details or voices:', error);
      }
    };

    fetchCharacterData();
  }, [id]);

  return (
    <div className="min-h-screen py-4 bg-red-950">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <CharacterDetails
          character={character}
          showMore={showMore}
          setShowMore={setShowMore}
        />
        <VoiceActors voices={voices} />
      </div>
    </div>
  );
};

export default CharacterPage;
