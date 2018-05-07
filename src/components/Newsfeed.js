import React,{Component} from 'react';
import { StyleSheet, Text, View,AsyncStorage,ScrollView} from 'react-native';
// import {StackNavigation,} from 'react-navigation';
import Footbar from './Footbar.js';
import {MaterialIcons,Feather} from '@expo/vector-icons'
import axios from 'axios';

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
  constructor(props){
    super(props)
    this.state={
      messages:null
    }
  }
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
  componentDidMount(){
    axios.get('https://mb-sds.herokuapp.com/api/1/get-messages/')
    .then(response => {
      this.setState({messages:response.data.messages})
      // console.log(response.data.messages);
    })

    axios.post('http://mb-sds.herokuapp.com/api/1/post-message/',
    {
      author:'anju',
      message:'gudevng'
    }

  )
  .then(function (response) {
    // console.log(response);
  })
}
renderMessages = () => {
  const messagesToRender = this.state.messages.map( message => (

    <Text>{message.author} :  {message.message}</Text>
  ))
  return messagesToRender;
}
render() {

  const { navigate } = this.props.navigation;
  return (
    <View style={{flex:1}}>
      <Text style={styles.text}>Welcome
        <Text style={styles.textname}>{this.props.navigation.state.params.name}</Text>
      </Text><ScrollView>
      {
        this.state.messages?
        this.renderMessages()
        // <Text>{this.state.messages[0].author} :  {this.state.messages[0].message}</Text>
        /* <Text>{this.state.messages[1].author} {this.state.messages[1].message}</Text> */
        :
        null
      }
      </ScrollView>
      <Footbar navigation={navigate}/>
    </View>
  );
}
}
const styles = StyleSheet.create({
  text:{
    color:'black',
    fontSize:20,
    padding:10,
  },
  textname:{
    color:'#6A1B9A',
    fontSize:30,
    padding:10,
    marginLeft:50,
  },
});
