/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import ContactBook from './modules/views/ContactBook';

export default class React_Native_Contact_book extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ContactBook />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('React_Native_Contact_book', () => React_Native_Contact_book);
