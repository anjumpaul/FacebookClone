import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login.js';
import {StackNavigator,} from 'react-navigation';
import Newsfeed from './src/components/Newsfeed.js';
import Signup from './src/components/Signup.js';
 import Profile from './src/components/Profile.js';
 import Settings from './src/components/Settings.js';
const RootStack = StackNavigator(
  {
    Home: {
      screen: Login,
    },
    Newsfeed: {
      screen: Newsfeed,
    },
    Signup:{
      screen:Signup,
    },
    Profile:{
      screen:Profile,
    },
    Settings:{
      screen:Settings,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {

  render() {
    return <RootStack/>;
  }
}

// const styles = StyleSheet.create({
//   container: {
//      flex: 1,
//     backgroundColor: '#1A237E',
//      alignItems: 'stretch',
//     justifyContent: 'center',
//   },
// });
