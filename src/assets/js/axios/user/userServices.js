// userService.js
import api from '../api';

export const getUsers = () => {
  return api.get('/users');
};

export const getUserById = (userId) => {
  return api.get(`/users/${userId}`);
};

export const loginUser = (userData) => {
  return api.post('dj-rest-auth/login/', userData);
}

export const signupUser = (userData) => {
  return api.post('dj-rest-auth/registration/', userData);
}

export const logoutUser = () => {
  return api.post('dj-rest-auth/logout/');
}

