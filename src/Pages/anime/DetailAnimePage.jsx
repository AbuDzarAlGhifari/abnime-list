import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import VideoPlayer from '../../components/common/VideoPlayer';

const DetailAnimePage = () => {
  const { id } = useParams();

  const style = {
    whiteSpace: 'pre-line',
  };

  const [anime, setAnime] = React.useState({});
  const [characters, setCharacters] = React.useState([]);
  const [showMore, setShowMore] = React.useState(false);

  const {
    title,
    images,
    episodes,
    status,
    aired,
    source,
    score,
    rating,
    rank,
    popularity,
    synopsis,
    trailer,
  } = anime;

  const getAnime = async (anime) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
      const data = await response.json();
      setAnime(data.data);
      console.log(data.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const getCharacters = async (anime) => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${anime}/characters`
      );
      const data = await response.json();
      setCharacters(data.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    getAnime(id);
    getCharacters(id);
  }, []);

  return (
    <div className="justify-center min-h-screen py-4 bg-red-500">
      <div className="flex p-2 mx-3 bg-red-700 sm:mx-4 lg:p-6 rounded-t-md">
        <img
          className="h-40 rounded-lg sm:h-60 lg:h-96"
          src={images?.jpg.large_image_url}
          alt={images?.webp.large_image_url}
        />
        <div className="ml-4 text-xs text-white sm:text-sm lg:text-lg">
          <h1 className="text-sm text-yellow-200 font-poppins sm:text-lg lg:text-2xl">
            {title}
          </h1>
          <div className="flex gap-2 sm:gap-6 lg:gap-8">
            <div className="font-semibold">
              <h3>Score</h3>
              <h3>Rank</h3>
              <h3>Popular</h3>
              <h3>Eps</h3>
              <h3>Status</h3>
              <h3>Aired</h3>
              <h3>Source</h3>
              <h3>Raiting</h3>
            </div>
            <div>
              <h3>⭐ {score}</h3>
              <h3>#{rank}</h3>
              <h3>#{popularity}</h3>
              <h3>{episodes}</h3>
              <h3>{status}</h3>
              <h3>{aired?.string}</h3>
              <h3>{source}</h3>
              <h3>{rating}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 pb-2 mx-3 text-xs text-white bg-red-700 sm:mx-4 lg:px-6 lg:pb-6 sm:text-sm lg:text-lg rounded-b-md ">
        <h3 className="font-semibold pt-1 pb-0.5">Sinopsis</h3>
        <h3 style={style} className="">
          {showMore ? synopsis : synopsis?.substring(0, 160) + '...'}
          <button
            className="font-semibold text-yellow-300 underline hover:text-blue-400"
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {showMore ? 'Show Less' : 'Read More'}
          </button>
        </h3>
      </div>

      <h1 className="px-5 pt-4 mx-3 mt-5 text-xs font-bold text-white bg-red-700 rounded-t-lg sm:mx-4 font-poppins sm:text-sm lg:text-lg">
        Characters
      </h1>

      <div className="grid grid-cols-3 gap-5 p-4 mx-3 text-xs text-white bg-red-700 rounded-b-lg sm:mx-4 sm:grid-cols-4 lg:grid-cols-6 sm:text-sm lg:text-lg">
        {characters?.map((character, index) => {
          const { role } = character;
          const { images, name, mal_id } = character.character;
          return (
            <Link
              to={`/character/${mal_id}`}
              key={index}
              className="cursor-pointer font-poppins font-bold rounded-lg text-xs sm:text-sm lg:text-lg p-0.5 hover:p-0 text-white hover:text-blue-500 transition-all"
            >
              <img
                className="rounded-t-md"
                src={images?.jpg.image_url}
                alt={images?.webp.image_url}
              />
              <h4 className="text-center bg-red-950 bg-opacity-80 px-1.5 truncate">
                {name}
              </h4>
              <p className="text-center pb-1 rounded-b-lg text-yellow-200 bg-red-950 bg-opacity-80 px-1.5 truncate">
                {role}
              </p>
            </Link>
          );
        })}
      </div>
      <VideoPlayer youtubeId={trailer?.youtube_id} />
    </div>
  );
};

export default DetailAnimePage;
