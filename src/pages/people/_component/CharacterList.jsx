import CardChara from '@/components/common/card/CardChara';

const CharacterList = ({ characters }) => {
  // console.log(JSON.stringify(characters, null, 2));
  if (!characters || characters.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[200px] bg-gray-900 rounded-lg">
        <p className="text-lg font-semibold text-white">
          No characters available.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-900 rounded-lg">
      <h2 className="px-2 mb-6 text-xl font-semibold text-white border-l-4 border-yellow-500">
        Character - Anime
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {characters.map((char, index) => (
          <CardChara key={index} char={char} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
