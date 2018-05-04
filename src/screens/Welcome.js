import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
// import welcome from 'welcome.png';
// import Button from 'react-native-button';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: ""
    }
  }

  _onPinPress(){
    const { navigate } = this.props.navigation;
     // navigate('MenuOptions');
     Alert.alert('Trying to go to MenuOptions!');
     console.log('Trying to go to MenuOptions')
  }
  render(){
    Alert.alert('Welcome to the HERC Demo!');

    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>

          <View style={styles.menu}>
          <Text style={styles.menu}>You're in welcome.js</Text>

        {/*<Button onPress={() => navigate('MenuOptions')} style={{color: 'white', fontSize: 40, height: 50, width: 205, marginTop: 100}}>ENTER</Button>*/}
            {/* <TextInput onChangeText={(pin) => this.setState({pin})} placeholder="PIN" underlineColorAndroid='transparent' style={styles.input}/>
         */}
            {/* <TouchableHighlight style={styles.welcomeBtn} onPress={() => this._onPinPress()}>
              <Image
                  style={styles.button}
                  source={welcome}
                />
            </TouchableHighlight>
          </View> */}
        </View>
      </View>

    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#021227',
    alignItems: 'center',
    // width: "100%",
    // backgroundColor: '#fff',
    // justifyContent: 'space-around',
  },
  menu: {
    height: 300,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#021227'
    // paddingTop: 50
    // margin: .5,

    },
    button: {
      width: 250,
      height: 50
    },
    input: {
      width: 150,
      height: 40,
      textAlign: "center",
      backgroundColor: "#132c4a",
      fontSize: 20.2,
      fontWeight: "600",
      borderColor: "#142535",
      color: "white",
      borderWidth: 1,
      marginTop: 100
      // margin: .5,
    },
    welcomeBtn: {
    //  marginTop: 10
    }
  });
