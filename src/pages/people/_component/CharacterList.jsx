import { Link } from 'react-router-dom';

function CharacterList({ characters }) {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 bg-gray-900 rounded-lg sm:grid-cols-2 lg:grid-cols-3">
      {characters?.map((char, index) => {
        const { images, name, mal_id } = char.character;
        const { title } = char.anime;
        const { role } = char;

        return (
          <Link
            to={`/character/${mal_id}`}
            key={index}
            className="flex items-center overflow-hidden transition-all transform bg-gray-800 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
          >
            <img
              className="object-cover w-24 h-24 rounded-l-lg"
              src={images?.jpg.image_url}
              alt={name}
            />
            <div className="flex flex-col justify-center flex-grow p-4">
              <h1 className="text-lg font-semibold text-white truncate">
                {name}
              </h1>
              <h2 className="text-sm text-gray-400 truncate">{title}</h2>
              <p className="text-sm font-medium text-yellow-400">{role}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default CharacterList;
