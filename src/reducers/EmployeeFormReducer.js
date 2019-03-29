import {
  EMPLOYEE_FORM_CHANGED,
  EMPLOYEE_CREATE,
  EMPLOYEE_CREATE_SUCCESS,
  EMPLOYEE_CREATE_FAILURE
} from '../actions/types';

const initialState = {
  name: '',
  phone: '',
  shift: '',
  isLoading: false,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_FORM_CHANGED:
      // Example: action.payload === { prop: 'name', value: 'jane' }

      // [key] is not array but key interpolation
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      }
    case EMPLOYEE_CREATE:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case EMPLOYEE_CREATE_SUCCESS:
      return {
        initialState
      }
    case EMPLOYEE_CREATE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
};