import axios from 'axios';

const API_BASE_URL ="https://sheet.best/api"; 

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const submitFormData = async (formData) => {
  try {
    const response = await api.post('/sheets/9700c09c-cfe8-487e-a152-18f86d4605c3', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
