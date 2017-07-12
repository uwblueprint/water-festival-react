import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class AllActivitiesScreen extends Component {
  static navigationOptions = {
    title: 'All Activities',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          onPress={() => navigate('MyActivities')}
          title="My Activities"
        />
        <Button
          onPress={() => navigate('Map')}
          title="Map"
        />
        <Button
          onPress={() => navigate('Information')}
          title="Information"
        />
      </View>
    )
  }
}

class MyActivitiesScreen extends Component {
  static navigationOptions = {
    title: 'My Activities',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>These are my activities.</Text>
      </View>
    );
  }
}

class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
  };
  render() {
    const { navigate } = this.props.navigation;
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
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>More information can be found here.</Text>
      </View>
    );
  }
}

const WaterFestivalApp = StackNavigator({
  AllActivities: { screen: AllActivitiesScreen },
  MyActivities: { screen: MyActivitiesScreen },
  Map: { screen: MapScreen },
  Information: { screen: InformationScreen },
});

AppRegistry.registerComponent('WaterFestivalApp', () => WaterFestivalApp);
