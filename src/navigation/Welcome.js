import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentWillMount(){
    console.log("Welcome Will Mounted!")
    return <Text style={styles.welcome}>This is the Welcome</Text>
  }
  componentDidMount(){
    console.log("Welcome Did Mounted!")
  }
  componentWillUnMount(){
    console.log("Welcome Will UnMount!")
  }


  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>This is the Welcome</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
  },
});


export default Welcome;
