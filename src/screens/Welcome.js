import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Welcome extends Component {
  componentWillMount(){
    console.log("Welcome Will Mounted!")
  }

  componentDidMount(){
    console.log("Welcome Did Mounted!")
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>This is the Welcome</Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Welcome;
