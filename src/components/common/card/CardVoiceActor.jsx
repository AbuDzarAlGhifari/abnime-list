import { Link } from 'react-router-dom';

const CardVoiceActor = ({ mal_id, image_url, name, language }) => {
  return (
    <div className="mx-0.5 transition-transform duration-300 ease-in-out transform hover:scale-105">
      <Link to={`/people/${mal_id}`}>
        <div className="relative flex flex-col h-full overflow-hidden bg-gray-800 rounded-lg shadow-lg">
          <div className="w-full h-64">
            <img
              className="object-cover w-full h-full"
              src={image_url}
              alt={name}
            />
          </div>
          <div className="flex-grow px-4 py-3 text-center bg-gray-900 bg-opacity-80">
            <h4 className="text-sm font-semibold text-white truncate sm:text-lg">
              {name}
            </h4>
            <p className="text-xs text-yellow-400 sm:text-sm">{language}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardVoiceActor;
