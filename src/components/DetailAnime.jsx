import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

const DetailAnime = () => {
  const { id } = useParams();

  const style = {
    whiteSpace: "pre-line",
  };

  const [anime, setAnime] = React.useState({});
  const [characters, setCharacters] = React.useState([]);
  const [showMore, setShowMore] = React.useState(false);
  const [loading, setLoading] = useState(true);

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
    trailer
  } = anime;

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

  const getCharacters = async (anime) => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${anime}/characters`
      );
      const data = await response.json();
      setCharacters(data.data);
      // console.log(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    getAnime(id);
    getCharacters(id);
  }, []);

  return (
    <div className="justify-center py-4 bg-gradient-to-bl from-gray-400 to-red-700 min-h-screen">
      <div className="flex p-2 mx-3 sm:mx-4 lg:p-6 bg-slate-600 rounded-t-md">
        <img
          className="rounded-lg h-40 sm:h-60 lg:h-96"
          src={images?.jpg.large_image_url}
          alt={images?.webp.large_image_url}
        />
        <div className=" ml-4 text-white text-xs sm:text-sm lg:text-lg">
          <h1 className="font-kenia text-yellow-200 text-sm sm:text-lg lg:text-2xl">
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
              <h3>{score}</h3>
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
      <div className="px-2 pb-2 mx-3 sm:mx-4 lg:px-6 lg:pb-6 text-white text-xs sm:text-sm lg:text-lg bg-slate-600 rounded-b-md ">
        <h3 className="font-semibold pt-1 pb-0.5">Sinopsis</h3>
        <h3 style={style} className="">
          {showMore ? synopsis : synopsis?.substring(0, 160) + "..."}
          <button
            className="font-semibold underline text-yellow-300 hover:text-blue-400"
            onClick={() => {
              setShowMore(!showMore);
            }}>
            {showMore ? "Show Less" : "Read More"}
          </button>
        </h3>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="custom-loader flex justify-center items-center"></div>
        </div>
      ) : (
        <h1 className="mx-3 sm:mx-4 mt-5 pt-4 px-4 font-kenia text-white text-xs sm:text-sm lg:text-lg bg-slate-600 rounded-t-lg">
          Characters
        </h1>
      )}
      <div className="mx-3 sm:mx-4 p-4 grid grid-cols-3 gap-5 sm:grid-cols-4 lg:grid-cols-6 bg-slate-600 text-white text-xs sm:text-sm lg:text-lg rounded-b-lg">
        {characters?.map((character, index) => {
          const { role } = character;
          const { images, name, mal_id } = character.character;
          return (
            <Link
              to={`/character/${mal_id}`}
              key={index}
              className="border rounded-md bg-gray-800 p-0.5 hover:p-0 text-white hover:text-black hover:bg-slate-500 transition-all">
              <img className="rounded-t-md" src={images?.jpg.image_url} alt={images?.webp.image_url} />
              <h4 className="text-center">{name}</h4>
              <p className="text-center text-yellow-200">{role}</p>
            </Link>
          );
        })}
      </div>
      <VideoPlayer youtubeId={trailer?.youtube_id}/>
    </div>
  );
};

export default DetailAnime;
