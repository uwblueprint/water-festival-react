import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  SectionList,
  StyleSheet,
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
      <View style={allActivitiesStyles.container}>
        <SectionList
          sections={[
            {title: 'Grade 2', data: ['Devin']},
            {title: 'Grade 3', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            {title: 'Grade 4', data: []},
            {title: 'Grade 5', data: []},
          ]}
          renderItem={({item}) => <Text style={allActivitiesStyles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={allActivitiesStyles.sectionHeader}>{section.title}</Text>}
          />
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

const allActivitiesStyles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 36,
    paddingRight: 10,
    paddingBottom: 2,
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: '#92D3F9',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

AppRegistry.registerComponent('WaterFestivalApp', () => WaterFestivalApp);
