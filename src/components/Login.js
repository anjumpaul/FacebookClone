  import React,{Component} from 'react';
  import { StyleSheet, Text, View ,TouchableHighlight,TextInput} from 'react-native';
  // import LoginHeader from './LoginHeader';
   // import Newsfeed from './Newsfeed';
   import { StackNavigator,} from 'react-navigation';

  export default class Login extends Component {
    constructor(){
      super()
      this.state={ username : '',
                    password :''}
    }
    static navigationOptions = {
      header:null,
    }
    render() {


      return (
        <View style={styles.container}>
          <Text style={styles.text}>Facebook</Text>
          <TextInput
            underlineColorAndroid='transparent'
            style={styles.input}
            value={this.state.username}
            onChangeText={(text) => this.setState({ username: text })}
            placeholder={'User Name'}
            maxLength={20}
            multiline={false}

          />
           <TextInput
             underlineColorAndroid='transparent'
            style={styles.input2}
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}
            placeholder={'Password'}
            type='password'
            maxLength={20}
            multiline={false}
          />
          <TouchableHighlight
            style={styles.button}
            underlayColor={'#328FE6'}
             onPress={() =>
               this.props.navigation.navigate('Newsfeed')
             }
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
