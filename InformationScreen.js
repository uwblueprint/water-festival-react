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

class InformationScreen extends PureComponent {
  static navigationOptions = {
    title: 'Information',
  };

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View>
        <Text>More information can be found here.</Text>
      </View>
    );
  }
}