import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigation,} from 'react-navigation';
import Footbar from './Footbar.js';
import {MaterialIcons,Feather} from '@expo/vector-icons'
export default class Settings extends React.Component {
  static navigationOptions = (props) => ({
    title :'Settings',
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
})
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <Text>jfu</Text>
      <Footbar navigation={navigate}/>
    </View>
    );
  }
}
