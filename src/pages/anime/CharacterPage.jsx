import { getCharDetail, getCharVoices } from '@/services/animeService';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CharacterPage = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState([]);
  const [voices, setVoices] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const { images, name, name_kanji, about } = character;

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

  const style = {
    whiteSpace: 'pre-line',
  };

  return (
    <div className="justify-center min-h-screen py-4 bg-red-500">
      <div className="flex p-4 mx-3 bg-red-700 rounded-lg sm:mx-4 lg:mx-6">
        <img
          className="h-48 rounded-lg sm:h-60 lg:h-96"
          src={images?.webp.image_url}
          alt={images?.jpg.image_url}
        />
        <div className="ml-10 text-xs text-white sm:text-sm lg:text-lg">
          <span className="text-sm font-semibold text-yellow-200 sm:text-lg lg:text-2xl">
            {name}
          </span>
          <span className="text-sm font-semibold text-yellow-200 sm:text-lg lg:text-2xl">
            {' ( '}
            {name_kanji}
            {' ) '}
          </span>
          <h3 style={style} className="">
            {showMore ? about : about?.substring(0, 250) + '...'}
            <button
              className="font-semibold text-yellow-300 underline hover:text-blue-400"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Show Less' : 'Read More'}
            </button>
          </h3>
        </div>
      </div>

      <h1 className="pt-4 mx-3 mt-5 text-xs text-white bg-red-700 rounded-t-lg sm:mx-4 lg:mx-6 px-7 font-poppins sm:text-sm lg:text-lg">
        Voice Actor - Seiyuu
      </h1>
      <div className="grid grid-cols-3 p-4 mx-3 text-xs text-white bg-red-700 rounded-b-lg sm:gap-4 sm:grid-cols-4 lg:grid-cols-6 sm:mx-4 lg:mx-6 sm:text-sm lg:text-lg">
        {voices?.map((voice_actors, index) => {
          const { language } = voice_actors;
          const { images, name, mal_id } = voice_actors.person;
          return (
            <Link
              to={`/people/${mal_id}`}
              key={index}
              className="cursor-pointer font-poppins font-bold rounded-lg m-2 text-xs sm:text-sm lg:text-lg p-0.5 hover:p-0 text-white hover:text-blue-500 transition-all"
            >
              <img
                className="w-full rounded-t-md h-28 sm:h-44 lg:h-72"
                src={images?.jpg.image_url}
                alt={name}
              />
              <h4 className="text-center bg-red-950 bg-opacity-80 px-1.5 truncate">
                {name}
              </h4>
              <p className="text-center rounded-b-lg pb-1 text-yellow-200 bg-red-950 bg-opacity-80 px-1.5 truncate">
                {language}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterPage;
