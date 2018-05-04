import React,{Component} from 'react';
import { StyleSheet, Text, View,AsyncStorage} from 'react-native';
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
  //  async componentDidMount() {
  //   try {
  //     const value = await AsyncStorage.getItem('@MyStore:key');
  //     if (value !== null){
  //
  //       console.log(value);
  //     }
  //   } catch (error) {
  //
  //   }
  // };

  render() {

    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>hello this.props.navigation.state.name</Text>
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
