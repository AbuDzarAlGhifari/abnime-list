import { Link } from 'react-router-dom';

function CharacterList({ characters }) {
  return (
    <div className="grid grid-cols-1 gap-5 p-4 mx-3 text-xs text-white bg-red-700 rounded-b-lg sm:grid-cols-2 lg:grid-cols-3 sm:mx-4 lg:mx-6 sm:text-sm lg:text-lg">
      {characters?.map((char, index) => {
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
              className="rounded-md"
              src={images?.jpg.image_url}
              alt={name}
            />
            <div className="pl-2">
              <h1>{name}</h1>
              <h1 className="pr-1 text-red-400 truncate">{title}</h1>
              <h1 className="text-yellow-200">{role}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default CharacterList;
