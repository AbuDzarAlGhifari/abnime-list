import { loading_gif } from '@/assets/img';
import React from 'react';

export const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-950">
      <p className="text-lg text-white">
        <img className="w-40 sm:w-64" src={loading_gif} alt="Loading..." />
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
