import React,{Component} from 'react';
import { StyleSheet,
    Text,
     View ,
     TouchableHighlight,
     TextInput,
     AsyncStorage,
      Keyboard} from 'react-native';
// import LoginHeader from './LoginHeader';
// import Newsfeed from './Newsfeed';
import { StackNavigator,} from 'react-navigation';

export default class Login extends Component {
  constructor(){
    super()
    this.state={ uname : '',
    password :''}
  }
  static navigationOptions = {
    header:null,
  }
  // async componentDidMount(){

    // try {
    //   await AsyncStorage.setItem('@MyStore:key', this.state.username);
    // }
    // catch (error) {
    // }
  // }
  login = async ()=>{
    // try {
    //   await AsyncStorage.setItem('@MyStore:key', this.state.username);
    // }
    // catch (error) {
    // }
    let credentials = await AsyncStorage.getItem('credentials');
    let d = JSON.parse(credentials);
    // alert(d.name+' '+d.uname);
      Keyboard.dismiss();
    if(this.state.uname===d.uname && this.state.password===d.password){
      return(
         this.props.navigation.navigate('Newsfeed',{name:this.state.uname})
      )
    }
    else{
      return(alert('incorrect password or username'))
    }
}
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Facebook</Text>
        <TextInput
          underlineColorAndroid='transparent'
          style={styles.input}

           onChangeText={(uname) => this.setState({ uname })}
           // value={this.state.uname}
          placeholder={'User Name'}
          required="required"
          maxLength={20}
          multiline={false}

        />
        <TextInput
          underlineColorAndroid='transparent'
          style={styles.input2}

           onChangeText={(password) => this.setState({ password })}
           // value={this.state.password}
          placeholder={'Password'}
          type='password'
          maxLength={20}
          multiline={false}
          secureTextEntry={true}
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor={'#328FE6'}
          onPress= {this.login}

          >
            <Text style={styles.label}>LOGIN</Text>
          </TouchableHighlight>
          <Text style={styles.signup} onPress={() =>
            this.props.navigation.navigate('Signup')
          } >SignUp?</Text>
        </View>
      );
    }
  }
  var styles = StyleSheet.create({
    text:{
      alignSelf:'center',
      color:'white',
      fontSize:40,
      marginTop:10,
      marginBottom:40,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#0D47A1',
    },
    input: {
      width: 250,

      padding: 10,
      height: 50,
      borderColor: '#32C5E6',
      borderWidth: 1,
      borderRadius: 4,
      alignSelf: 'center',
      backgroundColor: 'white'
    },
    input2: {
      marginTop:10,
      width: 250,

      padding: 10,
      height: 50,
      borderColor: '#32C5E6',
      borderWidth: 1,
      borderRadius: 4,
      alignSelf: 'center',
      backgroundColor: 'white'
    },
    button: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#328FE6',
      padding: 10,
      marginTop: 10,
      backgroundColor: '#283593'
    },
    label: {
      width: 230,
      alignSelf: 'center',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '600',
      color: 'white',
    },
    signup: {
      marginTop:20,
      padding:10,
      textAlign: 'center',
      fontSize:20,
      color:'white'
    }
  });
