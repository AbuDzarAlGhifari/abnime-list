import React from 'react';

const ModalDetail = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-2xl p-6 bg-white rounded-md shadow-lg">
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✖
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto max-h-[70vh]">{children}</div>

        {/* Modal Footer */}
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDetail;
