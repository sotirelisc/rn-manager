import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="loginForm"
          component={LoginForm}
          title="Login"
          initial
        >
        </Scene>
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employee List"
        >
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;