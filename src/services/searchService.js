import axiosInstance from '@/lib/axiosInstance';

export const searchAnime = async (query) => {
  try {
    const response = await axiosInstance.get(`/anime?q=${query}`);
    return response.data.data;
  } catch (error) {
    console.error('Error searching anime:', error);
    throw error;
  }
};
