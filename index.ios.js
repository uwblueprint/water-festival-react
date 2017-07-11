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
  View,
  ScrollView,
  Image
} from 'react-native';

export default class waterfestival extends Component {
  render() {
    return (
      <ScrollView horizontal={true} maximumZoomScale={5.0} >
        <ScrollView style={styles.contentContainer} bouncesZoom={false}>
          <Image
              source = {{ uri: 'https://water-festival.herokuapp.com/map.png' }}
              style = {{ width: 838, height: 648 }}
          />
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
