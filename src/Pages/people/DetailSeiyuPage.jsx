import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function DetailSeiyuPage() {
  const { id } = useParams();

  const [seiyu, setSeiyu] = React.useState({});
  const [characters, setCharacters] = React.useState([]);
  const [showMore, setShowMore] = React.useState(false);

  const { about, name, images } = seiyu;

  const style = {
    whiteSpace: 'pre-line',
  };

  const getSeiyu = async (seiyu) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/people/${seiyu}`);
      const data = await response.json();
      setSeiyu(data.data);
      // console.log(data.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const getCharacters = async (seiyu) => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/people/${seiyu}/voices`
      );
      const data = await response.json();
      setCharacters(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    getSeiyu(id);
    getCharacters(id);
  }, []);

  return (
    <div className="justify-center min-h-screen py-4 bg-red-500">
      <div className="flex p-2 mx-3 bg-red-700 rounded-md sm:mx-4 lg:p-6">
        <img
          className="h-48 rounded-lg sm:h-60 lg:h-96"
          src={images?.jpg.image_url}
          alt={name}
        />
        <div className="ml-2 mr-2 text-xs text-white sm:ml-4 lg:ml-6 sm:mr-3 sm:text-sm lg:text-lg">
          <h1 className="text-sm font-bold text-yellow-200 font-poppins sm:text-lg lg:text-2xl">
            {name}
          </h1>
          <h3 style={style} className="">
            {showMore ? about : about?.substring(0, 250) + '...'}
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
      </div>

      <h1 className="px-4 pt-4 mx-3 mt-5 text-xs font-bold text-white bg-red-700 rounded-t-lg font-poppins sm:text-sm lg:text-lg">
        Caracter - anime
      </h1>
      <div className="grid grid-cols-1 gap-5 p-4 mx-3 text-xs text-white bg-red-700 rounded-b-lg sm:grid-cols-2 lg:grid-cols-3 sm:text-sm lg:text-lg">
        {characters.data?.map((char, index) => {
          const { images, name, mal_id } = char.character;
          const { title } = char.anime;
          const { role } = char;
          return (
            <Link
              to={`/character/${mal_id}`}
              key={index}
              className="flex rounded-md bg-red-950 p-0.5 hover:p-0 font-semibold text-white hover:text-black hover:bg-slate-500 transition-all"
            >
              <img
                className="rounded-md "
                src={images?.jpg.image_url}
                alt={name}
              />
              <div className="pl-2">
                <h1 className="">{name}</h1>
                <h1 className="pr-1 text-red-400 trun">{title}</h1>
                <h1 className="text-yellow-200">{role}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default DetailSeiyuPage;
