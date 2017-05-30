/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import { addNavigationHelpers } from 'react-navigation';

import { Provider } from 'react-redux';
import AppRoutes from './navigation/AppRoutes';
import configureStore from './store/configureStore';

const store = configureStore();

export default class React_Native_Contact_book extends Component {
  render() {
    return (
      <Provider style={styles.container} store={store}>
        <AppRoutes />
      </Provider>
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
