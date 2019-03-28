import {
  EMPLOYEE_FORM_CHANGED
} from './types';

export const employeeFormChanged = ({ prop, value }) => {
  return {
    type: EMPLOYEE_FORM_CHANGED,
    payload: { prop, value }
  };
};