import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from '../constant-types/user.types';

function requestLogin() {
  return {
    type: LOGIN_REQUEST,
  };
}

export function receiveLogin(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

function loginError(payload) {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
  };
}

export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

// Logs the user out
export function logoutUser() {
  return (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    axios.defaults.headers.common['Authorization'] = '';
    dispatch(receiveLogout());
  };
}

export function receiveToken(token) {
  return (dispatch) => {
    localStorage.setItem('token', token.jwt);
    localStorage.setItem('user', JSON.stringify(token.user));
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token.jwt;
    dispatch(receiveLogin(token.user));
  };
}

export const userLogin = (creds) => async (dispatch) => {
  try {
    dispatch(requestLogin());
    const { data } = await axios.post('/auth/local', creds);
    dispatch(receiveToken(data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};
