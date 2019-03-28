import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeFormChanged } from '../actions';

class EmployeeCreate extends Component {
  render() {
    const { name, phone, shift, employeeFormChanged } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={name}
            onChangeText={name => employeeFormChanged({ prop: 'name', value: name })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={phone}
            onChangeText={phone => employeeFormChanged({ prop: 'phone', value: phone })}
          />
        </CardSection>
        <CardSection>
          
        </CardSection>
        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(
  mapStateToProps, 
  { employeeFormChanged }
)(EmployeeCreate);