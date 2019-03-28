import {
  EMPLOYEE_FORM_CHANGED
} from '../actions/types';

const initialState = {
  name: '',
  phone: '',
  shift: ''
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
    default:
      return state;
  }
};