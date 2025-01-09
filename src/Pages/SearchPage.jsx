import Card from '@/components/common/card/Card';
import { searchAnime } from '@/services/searchService';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = new URLSearchParams(location.search).get('query');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      searchAnime(searchQuery)
        .then((results) => setSearchResults(results))
        .catch((error) => console.error('Error:', error));
    }
  }, [searchQuery]);

  return (
    <div className="justify-center min-h-screen pb-5 text-sm bg-red-700">
      <div className="flex justify-between px-4 pt-4 mx-2 text-xs font-bold text-white font-poppins sm:text-sm lg:text-lg">
        <h1>Search Results for : {searchQuery}</h1>
        <h1
          className="italic text-yellow-300 underline cursor-pointer hover:text-blue-500"
          onClick={() => navigate(-1)}
        >
          Back
        </h1>
      </div>
      <div className="grid grid-cols-3 mx-2 sm:grid-cols-4 lg:grid-cols-6 sm:mx-4">
        {searchResults?.map((i) => {
          return <Card key={i.mal_id} all={i} />;
        })}
      </div>
    </div>
  );
};

export default SearchPage;
