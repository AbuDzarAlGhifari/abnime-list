import { useState } from 'react';
import ModalDetailChar from '@/pages/people/_component/ModalDetailChar';

const CardChara = ({ char }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { images, name } = char.character;
  const { title } = char.anime;
  const { role } = char;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        onClick={openModal}
        className="flex items-center overflow-hidden transition-all transform bg-gray-800 rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl"
      >
        <img
          className="object-cover w-24 h-24 rounded-l-lg"
          src={images?.jpg.image_url}
          alt={name}
        />
        <div className="flex flex-col justify-center flex-grow p-4">
          <h1 className="text-lg font-semibold text-white truncate">{name}</h1>
          <h2 className="text-sm text-gray-400 truncate">{title}</h2>
          <p className="text-sm font-medium text-yellow-400">{role}</p>
        </div>
      </div>

      {/* Modal */}
      <ModalDetailChar
        isOpen={isModalOpen}
        onClose={closeModal}
        character={char}
      />
    </>
  );
};

export default CardChara;
