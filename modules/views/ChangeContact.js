import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuidV4 from 'uuid/v4';
import {
  View,
  TextInput,
  Button,
  Text,
} from 'react-native';
import { saveContact, addContact } from '../Actions';

class ChangeContact extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          newContact: PropTypes.bool,
          payload: PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            phone: PropTypes.string,
          })
        })
      })
    })
  };

  static defaultProps = {
    navigation: {
      state: {
        params: {
          newContact: false,
          payload: {
            firstName: '',
            lastName: '',
            phone: '',
          }
        }
      }
    }
  }

  constructor(props) {
    super();

    this.state = {
      firstName: props.navigation.state.params.payload.firstName || '',
      lastName: props.navigation.state.params.payload.lastName || '',
      phone: props.navigation.state.params.payload.phone || '',
    };
  }

  saveContact = () => {
    if (this.props.navigation.state.params.newContact){
      this.props.addContact({
        id: uuidV4(),
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phone: this.state.phone,
      });
    } else {
      this.props.saveContact({
        id: this.props.navigation.state.params.payload.id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phone: this.state.phone,
      });
    }
    this.props.navigation.navigate('Main');
  }

  toBack = () => this.props.navigation.navigate('Main')

  render() {
    return (
      <View style={{ marginTop: 30, marginHorizontal: 10 }}>
        <Text>First Name</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({firstName: text})}
          value={this.state.firstName}
        />
        <Text>Last Name</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({ lastName: text })}
          value={this.state.lastName}
        />
        <Text>Phone</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({ phone: text })}
          value={this.state.phone}
        />
        <Button
          onPress={this.saveContact}
          title={this.props.navigation.state.params.newContact ? "Add Contact" : "Save"}
          color="#841584"
        />
        <Button
          onPress={this.toBack}
          title={"Back"}
          color="#841584"
        />
      </View>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  saveContact: payload => dispatch(saveContact(payload)),
  addContact: payload => dispatch(addContact(payload)),
});

export default connect(null, mapDispatchToProps)(ChangeContact);
