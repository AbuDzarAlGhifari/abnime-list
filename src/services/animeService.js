import axiosInstance from '@/lib/axiosInstance';

// GET TOP ANIME
export const getTopAnime = async () => {
  const response = await axiosInstance.get('/top/anime?limit=12&filter=airing');
  return response.data.data;
};

export const getAllAnimeTop = async (page = 1) => {
  const response = await axiosInstance.get(`/top/anime?page=${page}`);
  return response.data;
};

// GET UPCOMING ANIME
export const getAnimeUpcoming = async () => {
  const response = await axiosInstance.get('/seasons/upcoming?limit=12');
  return response.data.data;
};

export const getAllAnimeUpcoming = async (page = 1) => {
  const response = await axiosInstance.get(`/seasons/upcoming?page=${page}`);
  return response.data;
};

// GET SEASONS NOW
export const getAnimeSeasonNow = async () => {
  const response = await axiosInstance.get('/seasons/now?limit=15');
  return response.data.data;
};

export const getAllAnimeSeasonNow = async (page = 1) => {
  const response = await axiosInstance.get(`/seasons/now?page=${page}`);
  return response.data;
};

// GET ANIME DETAIL
export const getAnimeDetail = async (id) => {
  const response = await axiosInstance.get(`/anime/${id}`);
  return response.data.data;
};

// GET ANIME CHAR
export const getAnimeChar = async (id) => {
  const response = await axiosInstance.get(`/anime/${id}/characters`);
  return response.data.data;
};

// GET CHAR DETAIL
export const getCharDetail = async (id) => {
  const response = await axiosInstance.get(`/characters/${id}`);
  return response.data.data;
};

// GET CHAR VOICES
export const getCharVoices = async (id) => {
  const response = await axiosInstance.get(`/characters/${id}/voices`);
  return response.data.data;
};

// GET ANIME DETAILS
export const getAnimeDetails = async (id) => {
  const response = await axiosInstance.get(`/anime/${id}`);
  return response.data.data;
};

// GET TOP ANIME
export const getTopAnimeHero = async () => {
  const response = await axiosInstance.get('/top/anime');
  return response.data.data;
};

// TOP SECTION
export const fetchAnimeData = async (tab) => {
  const response = await axiosInstance.get(`/top/anime?filter=${tab}`);
  return response.data.data;
};

// GENRE
export const getAnimeGenres = async () => {
  const response = await axiosInstance.get('/genres/anime');
  return response.data.data;
};

// RONDOME
export const getRandomCharacter = async () => {
  const response = await axiosInstance.get('/random/characters');
  return response.data.data;
};
