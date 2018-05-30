import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

class Me extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentWillMount(){
    console.log("Me Mounted!")
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>This is the Me</Text>
      </View>
    )
  }
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


export default Me;
