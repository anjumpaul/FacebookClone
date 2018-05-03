import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigation,} from 'react-navigation';
import Footbar from './Footbar.js';
import {MaterialIcons,Feather} from '@expo/vector-icons'
export default class Profile extends React.Component {
  static navigationOptions = {
    title :'Profile',
    headerRight: (
  <Feather
    name="power"
    color="black"
    size={30}
    onPress={() =>
     {props.navigation.navigate('Home')}
    }
    />
),
  }
  render() {
     const { navigate } = this.props.navigation;
    return (
      <View>
      <Text>welcome</Text>
      <Footbar navigation={navigate}/>
    </View>
    );
  }
}
