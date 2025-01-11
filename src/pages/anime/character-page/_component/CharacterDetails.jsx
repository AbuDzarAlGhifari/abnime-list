const CharacterDetails = ({ character, showMore, setShowMore }) => {
  const { images, name, name_kanji, about } = character;

  const style = {
    whiteSpace: 'pre-line',
  };

  return (
    <div className="flex p-4 pt-20 mb-8 rounded-lg">
      <img
        className="h-48 rounded-lg sm:h-60 lg:h-96"
        src={images?.webp.image_url}
        alt={images?.jpg.image_url}
      />
      <div className="ml-10 text-xs text-white sm:text-sm lg:text-lg">
        <span className="text-sm font-semibold text-yellow-200 sm:text-lg lg:text-2xl">
          {name}
        </span>
        <span className="text-sm font-semibold text-yellow-200 sm:text-lg lg:text-2xl">
          {' ( '}
          {name_kanji}
          {' ) '}
        </span>
        <h3 style={style}>
          {showMore ? about : about?.substring(0, 250) + '...'}
          <button
            className="font-semibold text-yellow-300 underline hover:text-blue-400"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show Less' : 'Read More'}
          </button>
        </h3>
      </div>
    </div>
  );
};

export default CharacterDetails;
