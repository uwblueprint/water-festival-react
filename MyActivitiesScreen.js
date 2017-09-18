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

class MyActivitiesScreen extends PureComponent {
  static navigationOptions = {
    title: 'My Activities',
  };

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View>
        <Text>These are my activities.</Text>
      </View>
    );
  }
}