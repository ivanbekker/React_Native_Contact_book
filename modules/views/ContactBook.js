import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  ListView,
  View,
  TextInput,
  Text,
  Button,
} from 'react-native';
import ChangeContact from './ChangeContact';
import CellContact from '../components/CellContact';

class ContactBook extends Component {
  static propTypes = {
    contacts: PropTypes.objectOf(PropTypes.array),
  };

  static defaultProps = {
    contacts: {},
  }

  constructor(props) {
    super();

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const sortContacts = props.contacts.contacts.sort((a, b) => {
      const nameA = a.firstName.toUpperCase();
      const nameB = b.firstName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    this.state = {
      contacts: ds.cloneWithRows(sortContacts),
    };
  }
  openProfile = payload => this.props.navigation.navigate('ChangeContact', { payload })

  addContact = () => this.props.navigation.navigate('ChangeContact', { payload: {}, newContact: true })

  renderOption = (optionData) => {
    return (
      <View>
        <CellContact
          openProfile={this.openProfile}
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
        <Button
          onPress={this.addContact}
          title="Add Contact"
          color="#841584"
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(ContactBook);
