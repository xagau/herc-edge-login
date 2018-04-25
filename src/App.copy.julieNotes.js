/**
 * Juliana's Notes
 * Trying to figure out how these pieces work together.
 * react-native run-android
 */

import React, { Component } from 'react'
import { LoginScreen } from 'edge-login-ui-rn'
import { makeEdgeContext } from 'edge-core-js'
import {
  Platform, /* Not being used anywhere */
  StyleSheet,
  Text,
  View
} from 'react-native'

function setupCore () {
  return makeEdgeContext({
    /**
     * This looks like an imported function that's asynchronous. Whenever it comes back, it is saved in the state as CONTEXT.
     * I wonder what it looks like. # note: console log it.
     */

    apiKey: '0b5776a91bf409ac10a3fe5f3944bf50417209a0', /* If this isn't correct, you get error "Server errinvalid token" in the UI */
    appId: 'com.mydomain.myapp',/* whatever you do on this line doesn't matter. Doesn't throw an error. */
    vendorName: 'Chain Net',/* This also doesn't matter*/
    vendorImageUrl: 'https://airbitz.co/go/wp-content/uploads/2016/10/GenericEdgeLoginIcon.png'
  })
}

export default class App extends Component{
  constructor (props) {
    super(props)
    this.state = {
      context: null,
      account: null,
    }
    setupCore()
      .then(
        context => this.setState({
          state => ({ ...state, context })
        }, () => { console.log('Hello Julianaaaa ')})
        //console.log what comes back as state.
    )
  }

  /*
  onLogin looks like an on-the-fly component.
  */
  onLogin = (error = null, accountObject) => {
    this.setState({
      account: accountObject
    })
  }

  renderLoginApp = () => {
    if (this.state.account){
      return <Text style={styles.welcome}>Logged In Julie</Text>
    }
    if (this.state.context && !this.state.account) {
      /*
      This is saying, if context comes back true but account is still null, then load the login screen.
      The LoginScreen is an external component from edge-login-ui-rn. Should look at the source file to customize it.
      As the loginScreen is rendered, it is passed the context state, AND the function onLogin.

      (I better console log the context
      and see if it explicitely says true... of if it just needs a response)


      */
      return <LoginScreen
      context={this.state.context}
      onLogin={this.onLogin.bind(this)} /* What is it binding here?? Maybe it is passing our onLogin function */
      accountOptions={{}}
      /* This is the only place where accountOptions apperas. Must be something the LoginScreen component expects */
      />
    }
    return <Text style={styles.welcome}>Loading</Text>/*The "Loading" text doesn't appear for me.
    Doesn't appear even when API token is incorrect.
    I think this is a loading screen for when the onMount API call at setupCore is slow */
  }
  render() {
    return (
      <View style={styles.container}>



        {this.renderLoginApp()}
          Here lies the root. This app gets rendered multiple times.
          The first time that the app is mounted, it does setUPCore. Then it renders renderLoginApp.

          Since this is the only component -- it will run setupcore over and over again.
          Will also render renderLoginApp over and over again. Each time, saving the state in memory.

          Q: when on mount - how many times is the constructor run? Maybe I'm totally wrong.
          Maybe it runs one time and invalidToken errors are saved in state as context.

          Even if I am wrong, renderLoginApp is DEFINITELY being rendered repeatedly.

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

/*

import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ...']);

this.setState({
    height: this.props.height
  }, () => {
    if(!this.props.width) {
      this.setState({
        height: "auto"
      })
    } else {
      this.setState({
        height: this.props.height
      })
    }
  })
}
*/
