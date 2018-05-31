import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: ""
    }
  }

  componentWillMount(){
    console.log("Welcome Will Mounted!")
  }

  componentDidMount(){
    console.log("Welcome Did Mounted!")
  }

  _onPinPress(){
    const { navigate } = this.props.navigation;
     // navigate('MenuOptions');
     console.log('Trying to go to MenuOptions')
  }
  render(){
    const { navigate } = this.props.navigation;
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
