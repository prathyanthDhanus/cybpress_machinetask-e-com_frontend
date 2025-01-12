import axios from '../axios/apiClient';

const BASE_URL = '/api/auth';

export const loginUserApi = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/login`, credentials);
  return response?.data;
};

export const registerUserApi = async (userData) => {
  const response = await axios.post(`${BASE_URL}/register`, userData);
  return response?.data;
};


