import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function DetailSeiyu() {
  const { id } = useParams();

  const [seiyu, setSeiyu] = React.useState({});
  const [characters, setCharacters] = React.useState([]);
  const [showMore, setShowMore] = React.useState(false);

  const { about, name, images } = seiyu;

  const style = {
    whiteSpace: "pre-line",
  };

  const getSeiyu = async (seiyu) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/people/${seiyu}`);
      const data = await response.json();
      setSeiyu(data.data);
      // console.log(data.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const getCharacters = async (seiyu) => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/people/${seiyu}/voices`
      );
      const data = await response.json();
      setCharacters(data);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    getSeiyu(id);
    getCharacters(id);
  }, []);

  return (
    <div className="justify-center py-4 bg-gradient-to-bl from-gray-400 to-red-700 min-h-screen">
      <div className="flex p-4 mx-3 bg-slate-600 rounded-lg">
        <img
          className="rounded-lg h-48 sm:h-60 lg:h-96"
          src={images?.jpg.image_url}
          alt={name}
        />
        <div className="ml-10 text-white text-xs sm:text-sm lg:text-lg">
          <h1 className="font-kenia text-yellow-200 text-sm sm:text-lg lg:text-2xl">
            {name}
          </h1>
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

      <h1 className="mx-3 mt-5 pt-4 px-4 font-kenia text-white lg:text-lg bg-slate-600 rounded-t-lg">
        Caracter - anime
      </h1>
      <div className="mx-3 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-slate-600 text-white text-xs sm:text-sm lg:text-lg rounded-b-lg">
        {characters.data?.map((char, index) => {
          const { images, name, mal_id } = char.character;
          const { title } = char.anime;
          const { role } = char;
          return (
            <Link
              to={`/character/${mal_id}`}
              key={index}
              className="flex border rounded-md bg-gray-800 p-0.5 hover:p-0 font-semibold text-white hover:text-black hover:bg-slate-500 transition-all">
              <img className="rounded-md " src={images?.jpg.image_url} alt={name} />
              <div className="pl-2">
                <h4>{name}</h4>
                <h4 className="text-red-400">{title}</h4>
                <h4 className="text-yellow-200">{role}</h4>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default DetailSeiyu;
