import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeFormChanged, employeeCreate } from '../actions';

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
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={shift}
            onValueChange={day => employeeFormChanged({ prop: 'day', value: day })}
          >
            <Picker.Item label="Monday" value="monday" />
            <Picker.Item label="Tuesday" value="tuesday" />
            <Picker.Item label="Wednesday" value="wednesday" />
            <Picker.Item label="Thursday" value="thursday" />
            <Picker.Item label="Friday" value="friday" />
            <Picker.Item label="Saturday" value="saturday" />
            <Picker.Item label="Sunday" value="sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

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