import React,{Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {StackNavigation,} from 'react-navigation';
import {Entypo,Feather} from '@expo/vector-icons'
export default class Footbar extends Component {

  render() {
      // const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Feather style={styles.feather}
        name='menu'
         onPress={() =>
          {this.props.navigation('Newsfeed')}
         }
        />
        <Entypo style={styles.entypo}
        name='user'
         onPress={() =>
          {this.props.navigation('Profile')}
         }
        />
        <Feather style={styles.featherSettings}
        name='settings'
         onPress={() =>
          {this.props.navigation('Settings')}
         }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    marginTop:400,
    alignItems:'center',
    borderBottomWidth:20,
    borderBottomColor:'#0D47A1',
    backgroundColor:'#0D47A1',

  },
  entypo:{
     marginLeft:60,
    textAlign:'center',
    padding:10,
    fontSize:40,
    color:"white"
  },
  feather:{

    marginLeft:30,
    padding:10,
    fontSize:40,
    color:"white",
  },
  featherSettings:{
    marginRight:20,
    marginLeft:60,
    padding:10,
    fontSize:40,
    color:"white",
  }
});
