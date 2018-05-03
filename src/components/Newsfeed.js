import React,{Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
// import {StackNavigation,} from 'react-navigation';
import Footbar from './Footbar.js';
import {MaterialIcons,Feather} from '@expo/vector-icons'
export default class Newsfeed extends Component {
  static navigationOptions = (props) =>({
    title :'Newsfeed',
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
    <Text>hello</Text>
    <Footbar navigation={navigate}/>
  </View>
    );
  }
}
// const styles = StyleSheet.create({
//   power:{
//     color:'black',
//     fontSize:30,
//   }
// });
