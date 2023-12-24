import axios from "axios";

export const searchAnime = async (query) => {
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${query}`
      );
      return response.data.data;
    } catch (error) {
      console.error("Error searching movies:", error);
      throw error;
    }
  };