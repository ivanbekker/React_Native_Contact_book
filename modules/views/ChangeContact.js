import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  Button,
} from 'react-native';

class ChangeContact extends Component {
  static propTypes = {
  };

  constructor(props) {
    super();

    this.state = {
      firstName: props.firstName,
      lastName: props.lastName,
      phone: props.phone,
    };
  }

  saveContact = () => this.props.saveContact({
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    phone: this.state.phone,
  })

  render() {
    return (
      <View>
        <Text>First Name</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.firstName}
        />
        <Text>Last Name</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.lastName}
        />
        <Text>Phone</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.phone}
        />
        <Button
          onPress={this.saveContact}
          title="Save"
          color="#841584"
        />
      </View>
    );
  };
}

export default ChangeContact;
