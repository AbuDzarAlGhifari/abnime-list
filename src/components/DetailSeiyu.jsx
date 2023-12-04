import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function DetailSeiyu() {
  const { id } = useParams();

  //state
  const [seiyu, setSeiyu] = React.useState({});
  const [characters, setCharacters] = React.useState([]);
  const [showMore, setShowMore] = React.useState(false);

  //destructure seiyu
  const { about, name, images } = seiyu;

  const style = {
    whiteSpace: "pre-line",
  };

  //get seiyu based on id
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

  //get Voice
  const getCharacters = async (seiyu) => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/people/${seiyu}/voices`
      );
      const data = await response.json();
      setCharacters(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  //render
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

      <h1 className="mx-3 sm:mx-4 lg:mx-6 mt-5 pt-4 px-4 font-kenia text-white lg:text-lg bg-slate-600 rounded-t-lg">
        Caracter - anime
      </h1>
      <div className="flex mx-4">
        <div className="6 p-4 bg-slate-600 text-white rounded-b-lg">
          {characters.data?.map((char, index) => {
            const { images, name, mal_id } = char.character;
            return (
              <Link to={`/seiyu/${mal_id}`} key={index}>
                <div className="border rounded-md bg-gray-800 p-0.5 hover:p-0 text-white hover:text-black hover:bg-slate-500">
                  <img
                    className="rounded-t-md w-full h-24 sm:h-44 lg:h-72"
                    src={images?.jpg.image_url}
                  />
                  <h4 className="text-center">{name}</h4>
                </div>
              </Link>
            );
          })}
        </div>
        <div className=" p-4 bg-slate-600 text-white rounded-b-lg">
          {characters.data?.map((char, index) => {
            const { images, title, mal_id } = char.anime;
            return (
              <Link to={`/seiyu/${mal_id}`} key={index}>
                <div className="fl border rounded-md bg-gray-800 p-0.5 hover:p-0 text-white hover:text-black hover:bg-slate-500">
                  <img
                    className="rounded-t-md h-24 sm:h-44 lg:h-72"
                    src={images?.jpg.image_url}
                  />
                  <h4 className="text-center">{title}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailSeiyu;
