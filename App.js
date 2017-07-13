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
  Button
} from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TabNavigator } from 'react-navigation'
import { NavigationComponent } from 'react-native-material-bottom-navigation'


class HomeScreen extends Component {
  static navigationOptions = {
    title: 'All Activities',
  };
  render() {
    return (
        <View><Text>All Activities</Text></View>
    )
  }
}

class MyActivitiesScreen extends Component {
  static navigationOptions = {
    title: 'My Activities',
  };
  render() {
    return (
        <View><Text>My Activities</Text></View>
    )
  }
}

class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
  };
  render() {
    return (
      <View>
        <Text>This is the map.</Text>
      </View>
    );
  }
}

class InformationScreen extends Component {
  static navigationOptions = {
    title: 'Information',
  };
  render() {
    return (
      <View>
        <Text>Info</Text>
      </View>
    );
  }
}


const waterfestival = TabNavigator({
  HomeScreen: { screen: HomeScreen },
  MyActivitiesScreen: {screen: MyActivitiesScreen},
  MapScreen: { screen: MapScreen },
  InformationScreen: {screen: InformationScreen}
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      style: {
        height: 60
      },
      labelColor: 'black',
      backgroundColor: '#C4C4C4',
      rippleColor: 'white',
      tabs: {
        MapScreen: {
          icon: <Icon size={24} color="black" name="add" />
        },
        HomeScreen: {
          icon: <Icon size={24} color="black" name="account-circle" />
        },
        MyActivitiesScreen: {
          icon: <Icon size={24} color="black" name="map" />
        },
        InformationScreen: {
          icon: <Icon size={24} color="black" name="perm-device-information" />
        }
      }
    }
  }
})

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
