import { loading_gif } from '@/assets/img';
import React from 'react';

export const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-950">
      <p className="text-lg text-white">
        <img className="w-28 sm:w-52" src={loading_gif} alt="Loading..." />
      </p>
    </div>
  );
};

export const ErrorMessage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-950">
      <p className="text-lg text-white">
        Error fetching data. Please try again later.
      </p>
    </div>
  );
};
