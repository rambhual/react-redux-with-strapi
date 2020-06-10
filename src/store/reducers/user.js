import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from '../constant-types/user.types';

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  userInfo: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
      });

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        userInfo: payload,
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: payload,
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: false,
      });
    default:
      return state;
  }
};
