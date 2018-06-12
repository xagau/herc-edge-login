import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Feed extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentWillMount(){
    console.log("Feed Will Mounted!")
  }
  componentDidMount(){
    console.log("Feed Did Mounted!")
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>This is the Feed</Text>
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
  },
});


export default Feed;