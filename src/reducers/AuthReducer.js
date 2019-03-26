import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../actions/types';

const initialState = {
  email: '',
  password: '',
  user: null,
  error: '',
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, isLoading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...initialState,
        user: action.payload
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        password: '',
        isLoading: false
      };
    default:
      return state;
  }
};