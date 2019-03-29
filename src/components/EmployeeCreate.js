import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { employeeFormChanged, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift, employeeCreate } = this.props;

    // If shift is not set, default it to 'monday'
    employeeCreate({ name, phone, shift: shift || 'monday' });
  }

  render() {
    const {
      name,
      phone,
      shift,
      isLoading,
      error,
      employeeFormChanged
    } = this.props;

    // {...this.props} passes any props that were passed
    // into the child EmployeeForm component
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift, isLoading, error } = state.employeeForm;

  return {
    name,
    phone,
    shift,
    isLoading,
    error
  };
};

export default connect(mapStateToProps, {
  employeeFormChanged,
  employeeCreate
})(EmployeeCreate);