/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class waterfestival extends Component {
  render() {
    return (
      <BottomNavigation
        labelColor="black"
        backgroundColor="#C4C4C4"
        rippleColor="white"
        style={{ height: 60, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
        shifting="false"
      >
        <Tab
          label="All Activities"
          icon={<Icon size={24} color="black" name="add" />}/>

        <Tab
          label="My Activities"
          icon={<Icon size={24} color="black" name="account-circle" />}/>
        <Tab
          label="Maps"
          icon={<Icon size={24} color="black" name="map" />}/>
        <Tab
          label="Information"
          icon={<Icon size={24} color="black" name="perm-device-information" />}/>
      </BottomNavigation>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('waterfestival', () => waterfestival);
