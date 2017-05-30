import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {height, width} = Dimensions.get('window');
class CellContact extends Component {
  static propTypes = {
    contact: PropTypes.shape({
      id: PropTypes.number,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      phone: PropTypes.string,
    }),
  };

  render() {
    const { firstName, lastName, phone } = this.props.contact;
    return (
      <TouchableOpacity
        onPress={() => this.props.openProfile(this.props.contact)}
        style={{
          height: 70,
          borderBottomColor: '#841584',
          borderBottomWidth: 2,
          width: width - 20,
          margin: 10,
        }}
      >
        <Text>First Name: {firstName}</Text>
        <Text>Last Name: {lastName}</Text>
        <Text>Phone: {phone}</Text>
      </TouchableOpacity>
    );
  }
}

export default CellContact;
