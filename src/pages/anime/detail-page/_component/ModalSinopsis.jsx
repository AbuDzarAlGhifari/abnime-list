import React from 'react';
import { IoClose } from 'react-icons/io5';

const ModalSinopsis = ({ isOpen, onClose, anime }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl p-4 mx-4 transition-transform scale-100 bg-red-900 rounded-lg shadow-lg sm:mx-0 sm:p-6 animate-fadeIn sm:scale-95">
        <div className="flex items-center justify-end mb-4">
          <button
            onClick={onClose}
            className="text-red-400 hover:text-red-700 focus:outline-none"
            aria-label="Close Modal"
          >
            <IoClose className="size-6" />
          </button>
        </div>

        <div className="overflow-y-auto text-justify max-h-[70vh] text-red-50">
          <p>{anime}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalSinopsis;
