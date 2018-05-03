import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableHighlight} from 'react-native';
import {StackNavigation,} from 'react-navigation';

export default class Signup extends React.Component {
  static navigationOptions = {
    header:null,
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      <TextInput
         underlineColorAndroid='transparent'
        style={styles.input}
        placeholder={'Enter Name'}
        maxLength={20}
        multiline={false}
      />
      <TextInput
        underlineColorAndroid='transparent'
        style={styles.input1}
        placeholder={'Enter User Name'}
        maxLength={20}
        multiline={false}
      />
      <TextInput
        underlineColorAndroid='transparent'
        style={styles.input2}
        placeholder={'Password'}
        maxLength={20}
        multiline={false}
      />
      <TouchableHighlight
        style={styles.button}
        underlayColor={'#328FE6'}
        onPress={() =>
          this.props.navigation.navigate('Home')
        }
         >
          <Text style={styles.label}>Signup</Text>
        </TouchableHighlight>
        <Text style={styles.login} onPress={() =>
          this.props.navigation.navigate('Home')
        } >Login</Text>
    </View>

    );
  }
}
var styles = StyleSheet.create({

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
  input1: {
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
    color: '#fff',
  },
  login: {
    padding:10,
    textAlign: 'center',
    fontSize:20,
    color:'white',
    marginTop:20,
  }
});
