/*

Copyright (c) 2018 HERC SEZC

Licensed under the Apache License, Version 2.0 (the "License");

you may not use this file except in compliance with the License.

You may obtain a copy of the License at


    http://www.apache.org/licenses/LICENSE-2.0


Unless required by applicable law or agreed to in writing, software

distributed under the License is distributed on an "AS IS" BASIS,

WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

See the License for the specific language governing permissions and

limitations under the License.

*/
import MainNavigation from './navigation/MainNavigation';
import MenuOptions from './screens/MenuOptions';
import React, { Component } from 'react';
import {StackNavigator } from 'react-navigation';
import {LoginScreen } from 'edge-login-ui-rn';
import {makeEdgeContext } from 'edge-core-js';
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
  renderLoginApp = () => {
    if (this.state.account){
      return <Text>Logged In</Text>
      // return <MainNavigation />
      // return <Text style={styles.welcome}>Logged In</Text>
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
