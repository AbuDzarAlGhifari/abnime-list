import axiosInstance from '@/lib/axiosInstance';

// GET TOP PEOPLE
export const getTopPeople = async () => {
  const response = await axiosInstance.get('top/people?limit=24');
  return response.data.data;
};

export const getAllTopPeople = async (page) => {
  const response = await axiosInstance.get(`/top/people?page=${page}`);
  return response.data;
};

// GET DETAIL PEOPLE
export const getPeopleDetail = async (id) => {
  const response = await axiosInstance.get(`/people/${id}`);
  return response.data.data;
};

// GET PEOPLE CHAR
export const getPeopleChar = async (id) => {
  const response = await axiosInstance.get(`/people/${id}/voices`);
  return response.data;
};
