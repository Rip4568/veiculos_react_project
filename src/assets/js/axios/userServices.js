// userService.js
import api from './api';

export const getUsers = () => {
  return api.get('/users');
};

export const getUserById = (userId) => {
  return api.get(`/users/${userId}`);
};

export const createUser = (userData) => {
  return api.post('/users', userData);
};

// Outras funções de serviço...
