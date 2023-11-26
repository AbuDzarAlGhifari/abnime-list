import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const DetailAnime = () => {
  const { id } = useParams();

  //space style
  const style = {
    whiteSpace: "pre-line",
  };

  //state
  const [anime, setAnime] = React.useState({});
  const [characters, setCharacters] = React.useState([]);
  const [showMore, setShowMore] = React.useState(false);

  //destructure anime
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
    synopsis,
  } = anime;

  //get anime based on id
  const getAnime = async (anime) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
      const data = await response.json();
      setAnime(data.data);
      console.log(data.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  //get characters
  const getCharacters = async (anime) => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${anime}/characters`
      );
      const data = await response.json();
      setCharacters(data.data);
      console.log(data.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  //render
  useEffect(() => {
    getAnime(id);
    getCharacters(id);
  }, []);

  return (
    <div className="justify-center py-4 bg-gradient-to-bl from-gray-400 to-red-700">
      <div className=" flex p-4 mx-6 bg-slate-600 rounded-lg">
        <img
          className="rounded-lg h-48 sm:h-60 lg:h-96"
          src={images?.jpg.large_image_url}
          alt=""
        />
        <div className=" ml-10 text-white text-xs sm:text-sm lg:text-lg">
          <h1 className="font-kenia text-yellow-200 text-sm sm:text-lg lg:text-2xl">
            {title}
          </h1>
          <div className="flex gap-1.5 sm:gap-6 lg:gap-8">
            <div className="font-semibold">
              <h3>Score :</h3>
              <h3>Rank :</h3>
              <h3>Episode :</h3>
              <h3>Status :</h3>
              <h3>Aired :</h3>
              <h3>Source :</h3>
              <h3>Raiting :</h3>
            </div>
            <div>
              <h3>{score}</h3>
              <h3>{rank}</h3>
              <h3>{episodes}</h3>
              <h3>{status}</h3>
              <h3>{aired?.string}</h3>
              <h3>{source}</h3>
              <h3>{rating}</h3>
            </div>
          </div>
          <h3 className="font-semibold pt-2">Sinopsis</h3>
          <h3 style={style} className="">
            {showMore ? synopsis : synopsis?.substring(0, 150) + "..."}
            <button
              className="font-semibold text-yellow-300"
              onClick={() => {
                setShowMore(!showMore);
              }}>
              {showMore ? "Show Less" : "Read More"}
            </button>
          </h3>
        </div>
      </div>

      <h1 className="mx-6 mt-5 pt-4 px-4 font-kenia text-decoration-line: underline text-white lg:text-lg bg-slate-600 rounded-t-lg">
        Characters
      </h1>
      <div className="mx-6 p-4 grid grid-cols-3 gap-5 sm:grid-cols-4 lg:grid-cols-6 bg-slate-600 text-white rounded-b-lg">
        {characters?.map((character, index) => {
          const { role } = character;
          const { images, name, mal_id } = character.character;
          return (
            <Link
              to={`/character/${mal_id}`}
              key={index}
              className="border rounded-md bg-gray-800 p-0.5 hover:p-0 text-white hover:text-black hover:bg-slate-500">
              <img
                className="rounded-t-md"
                src={images?.jpg.image_url}
                alt=""
              />
              <h4 className="text-center">{name}</h4>
              <p className="text-center text-yellow-200">{role}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DetailAnime;
