import React, { useState } from 'react';
import axios from 'axios';

const Coba = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`);
      setSearchResults(response.data.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari anime..."
        className="border p-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 ml-2">
        Cari
      </button>

      <div>
        {searchResults.map((anime) => (
          <div key={anime.mal_id} className="mt-4 border p-4">
            <h3>{anime.title}</h3>
            <p>{anime.synopsis}</p>
            {/* Tambahkan informasi lain sesuai kebutuhan */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coba;
