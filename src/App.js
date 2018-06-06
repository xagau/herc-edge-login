import React, {Component} from 'react';
import { AppStackNavigator } from './navigation/Router';
import {LoginScreen} from 'edge-login-ui-rn';
import {makeEdgeContext} from 'edge-core-js';
import { ethereumCurrencyPluginFactory } from 'edge-currency-ethereum';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

function setupCore () {
  return makeEdgeContext({
    // Replace this with your own API key from https://developer.airbitz.co:
    apiKey: '0b5776a91bf409ac10a3fe5f3944bf50417209a0',
    appId: 'com.mydomain.myapp',
    vendorName: 'Chain Net',
    vendorImageUrl: 'https://airbitz.co/go/wp-content/uploads/2016/10/GenericEdgeLoginIcon.png'
  })
}


export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      context: null,
      account: null,
    }
    // Creating the context is async, so we store it in our state:
    setupCore().then(context => this.setState(state => ({ ...state, context })))
  }

  onLogin = (error = null, accountObject) => {
    this.setState({
      account: accountObject
    })
  }

  handleClick() {
    console.log('Click happened');
  }

  renderLoginApp = () => {
    if (this.state.account) {
      console.log(this.state.context, this.state.account)
      console.log('Hello this is me. You have logged in. ')
      return (
        <View>
          <AppStackNavigator />
          <Text>This is a space-holding textblock. The component above renders only in the width of this textblock.</Text>
        </View>
      )
      // return <Button
  // onPress={this.handleClick}
//   onPress={() =>
//           navigate('Welcome')
//         }
//   title="Learn More"
//   color="#841584"
//   accessibilityLabel="Learn more about this purple button"
// />

    }


    if (this.state.context && !this.state.account) {
      return <LoginScreen
      context={this.state.context}
      onLogin={this.onLogin.bind(this)}
      accountOptions={{}}
      />
    }
    return <Text style={styles.welcome}>Loading</Text>
  }


  render() {
      return (
        <View style={styles.container}>
          {this.renderLoginApp()}
        </View>
      );
    }//end render
  }//end component

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
