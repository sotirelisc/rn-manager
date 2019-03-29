import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_FORM_CHANGED,
  EMPLOYEE_CREATE,
  EMPLOYEE_CREATE_SUCCESS,
  EMPLOYEE_CREATE_FAILURE,
  EMPLOYEE_FETCH,
  EMPLOYEE_FETCH_SUCCESS,
  EMPLOYEE_FETCH_FAILURE
} from './types';

export const employeeFormChanged = ({ prop, value }) => {
  return {
    type: EMPLOYEE_FORM_CHANGED,
    payload: { prop, value }
  };
};

const employeeCreateSuccess = dispatch => {
  dispatch({
    type: EMPLOYEE_CREATE_SUCCESS
  });

  // Navigate to scene with key "employeeList"
  // Use type: 'reset' to prevent from adding the screen to stack
  Actions.employeeList({ type: 'reset' });
};

const employeeCreateFailure = (dispatch, error) => {
  dispatch({
    type: EMPLOYEE_CREATE_FAILURE,
    payload: error
  });
};

export const employeeCreate = ({ name, phone, shift }) => {
  return dispatch => {
    dispatch({
      type: EMPLOYEE_CREATE
    });

    // Get current logged-in user
    const { currentUser } = firebase.auth();

    // Reference current user's employee set
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => employeeCreateSuccess(dispatch))
      .catch(error => employeeCreateFailure(dispatch, error));
  };
};

const employeeFetchSuccess = (dispatch, employees) => {
  dispatch({
    type: EMPLOYEE_FETCH_SUCCESS,
    payload: employees
  });
};

const employeeFetchFailure = (dispatch, error) => {
  dispatch({
    type: EMPLOYEE_FETCH_FAILURE,
    payload: error
  });
};

export const employeeFetch = () => {
  return dispatch => {
    dispatch({
      type: EMPLOYEE_FETCH
    });

    // Get current logged-in user
    const { currentUser } = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      // snapshot is NOT the data itself, just describing them
      .on('value', snapshot => {
        employeeFetchSuccess(dispatch, snapshot.val());
      })
      .catch(error => employeeFetchFailure(dispatch, error));
  };
};