import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  ListView,
  View,
  TextInput,
  Text,
} from 'react-native';
import ChangeContact from './ChangeContact';
import { saveContact } from '../Actions';
import CellContsct from '../components/CellContsct';
import { state } from '../Reducer';

class ContactBook extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    contacts: [],
  }

  constructor(props) {
    super();

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      contacts: ds.cloneWithRows(state),
    };
  }
  // openProfile () => {ChangeContact}

  saveContact = (data) => props.saveContact(data)

  renderOption = (optionData) => {
    console.log(optionData)
    return (
      <View>
        <CellContsct
          onPress={this.openProfile}
          contact={optionData}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={{ paddingTop: 30 }}>
        <Text>Your Contacts</Text>
        <ListView
          dataSource={this.state.contacts}
          renderRow={this.renderOption}
          enableEmptySections
        />
      </View>
    );
  }
}

export default ContactBook;
