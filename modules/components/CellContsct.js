import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';

class CellContsct extends Component {
  static propTypes = {
    contact: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      phone: PropTypes.string,
    }),
  };

  render() {
    console.log('CellContsct', this.props.contact);
    const { firstName, lastName, phone } = this.props.contact;
    return (
      <View style={{ height: 70, borderBottomColor: '#841584', borderWidth: 2 }}>
        <Text>`${firstName} ${lastName}`</Text>
        <Text>{phone}</Text>
      </View>
    );
  }
}

export default CellContsct;
