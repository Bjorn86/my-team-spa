// IMPORT METHODS
import { makeRequest } from './utils';

// IMPORT VARIABLES
import { API_URL } from './constants';

// USER REGISTRATION
export function register({ email, password }) {
  return makeRequest(API_URL, '/register', 'POST', {
    email,
    password,
  });
}

// USER AUTHORIZATION
export function authorize({ email, password }) {
  return makeRequest(API_URL, '/login', 'POST', {
    email,
    password,
  });
}

// USER LOGOUT
export function logout() {
  return makeRequest(API_URL, '/logout', 'POST');
}

// GET USER INFO
export function getUserInfo(userId) {
  return makeRequest(API_URL, `/users/${userId}`, 'GET');
}

// GET ALL USERS INFO
export function getAllUsersInfo() {
  return makeRequest(API_URL, '/users?per_page=12', 'GET');
}

// UPDATE USER AVATAR
export function updateUserAvatar({ userId, avatar }) {
  return makeRequest(API_URL, `/users/${userId}`, 'PATCH', {
    avatar,
  });
}

// CHANGE LIKE STATUS
export function changeLikeStatus(cardId) {
  return makeRequest(API_URL, `/users/${cardId}/likes`, 'PUT');
}
