import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Characters = () => {
  const { id } = useParams();

  const style = {
    whiteSpace: "pre-line",
  };

  const [character, setCharacter] = React.useState([]);
  const [voices, setVoices] = React.useState([]);
  const [showMore, setShowMore] = React.useState(false);

  const { images, name, name_kanji, about } = character;

  const getCharacter = async (character) => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/characters/${character}`
      );
      const data = await response.json();
      setCharacter(data.data);
      // console.log(data.data)
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const getVoices = async (character) => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/characters/${character}/voices`
      );
      const data = await response.json();
      setVoices(data.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    getCharacter(id);
    getVoices(id);
  }, []);

  return (
    <div className="justify-center py-4 bg-red-500 min-h-screen">
      <div className="flex bg-red-700 p-4 mx-3 sm:mx-4 lg:mx-6 rounded-lg">
        <img
          className="rounded-lg h-48 sm:h-60 lg:h-96"
          src={images?.webp.image_url}
          alt={images?.jpg.image_url}
        />
        <div className="ml-10 text-white text-xs sm:text-sm lg:text-lg">
          <span className="font-semibold text-yellow-200 text-sm sm:text-lg lg:text-2xl">
            {name}
          </span>
          <span className="font-semibold text-yellow-200 text-sm sm:text-lg lg:text-2xl">
            {" ( "}
            {name_kanji}
            {" ) "}
          </span>
          <h3 style={style} className="">
            {showMore ? about : about?.substring(0, 250) + "..."}
            <button
              className="font-semibold underline text-yellow-300 hover:text-blue-400"
              onClick={() => {
                setShowMore(!showMore);
              }}>
              {showMore ? "Show Less" : "Read More"}
            </button>
          </h3>
        </div>
      </div>

      <h1 className="mx-3 sm:mx-4 lg:mx-6 mt-5 pt-4 px-7 font-poppins text-white text-xs sm:text-sm lg:text-lg bg-red-700 rounded-t-lg">
        Voice Actor - Seiyuu
      </h1>
      <div className="grid grid-cols-3 sm:gap-4 sm:grid-cols-4 lg:grid-cols-6 mx-3 sm:mx-4 lg:mx-6 p-4  bg-red-700 text-white text-xs sm:text-sm lg:text-lg rounded-b-lg">
        {voices?.map((voice_actors, index) => {
          const { language } = voice_actors;
          const { images, name, mal_id } = voice_actors.person;
          return (
            <Link
              to={`/seiyu/${mal_id}`}
              key={index}
              className="cursor-pointer font-poppins font-bold rounded-lg m-2 text-xs sm:text-sm lg:text-lg p-0.5 hover:p-0 text-white hover:text-blue-500 transition-all">
              <img
                className="rounded-t-md w-full h-28 sm:h-44 lg:h-72"
                src={images?.jpg.image_url}
                alt={name}
              />
              <h4 className="text-center bg-red-950 bg-opacity-80 px-1.5 truncate">{name}</h4>
              <p className="text-center rounded-b-lg pb-1 text-yellow-200 bg-red-950 bg-opacity-80 px-1.5 truncate">{language}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
