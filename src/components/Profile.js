import React from 'react';
import { StyleSheet, Text, View,AsyncStorage} from 'react-native';
import {StackNavigation,} from 'react-navigation';
import Footbar from './Footbar.js';
import {MaterialIcons,Feather} from '@expo/vector-icons'
export default class Profile extends React.Component {
  static navigationOptions = (props) => ({
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
})
async componentDidMount(){
  let credentials = await AsyncStorage.getItem('credentials');
  let d = JSON.parse(credentials);
   // alert(d.name+' '+d.uname);
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
