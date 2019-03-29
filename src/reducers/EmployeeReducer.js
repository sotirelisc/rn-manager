import {
  EMPLOYEE_FETCH,
  EMPLOYEE_FETCH_SUCCESS,
  EMPLOYEE_FETCH_FAILURE
} from '../actions/types';

const initialState = {
  employees: [],
  isLoading: false,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_FETCH:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case EMPLOYEE_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        employees: action.payload
      }
    case EMPLOYEE_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
};