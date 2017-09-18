import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomNavigation, { Tab, NavigationComponent } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TabNavigator } from 'react-navigation'

import AllActivitiesScreen from 'AllActivitiesScreen.js';
import MyActivitiesScreen from 'MyActivitiesScreen.js';
import MapScreen from 'MapScreen.js';
import InformationScreen from 'InformationScreen.js'

const WaterFestivalApp = TabNavigator({
    AllActivitiesScreen: { screen: AllActivitiesScreen },
    MyActivitiesScreen: { screen: MyActivitiesScreen },
    MapScreen: { screen: MapScreen },
    InformationScreen: { screen: InformationScreen }
  },
  {
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
          AllActivitiesScreen: {
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
  
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position: 'relative',
    fontSize: 40,
  },
  
  textinputContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  textinput: {
    width: 60,
    marginVertical: 2,
    marginHorizontal: 2,
    borderRadius: 5,
    borderColor: '#c7c7cc',
    backgroundColor: 'white',
  },

})

AppRegistry.registerComponent('WaterFestivalApp', () => WaterFestivalApp);
