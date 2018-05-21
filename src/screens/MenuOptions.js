import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, Alert } from 'react-native';
// import WelcomeHeader from "../components/WelcomeHeader";
// import menuOpts from "../components/buttons/menuOptions.png";
import { StackNavigator } from 'react-navigation';
// import Title from "../components/MenuInputTitle";
// import logo from "./assets/hercLogoBreak.png";
// import home from "./components/buttons/homeBtn.png";
// import hiprBtn from "./components/buttons/hiprBtn.png";
// import igvc from "./components/buttons/igvc.png";
// import verifyBtn from "./components/buttons/verifyBtn.png";
// import digiView from "./components/buttons/digitalViewBtn.png";
// import blockScan from "./components/buttons/blockScannerBtn.png";
// import settings from "./components/buttons/settingsBtn.png";
// import wallet from "./components/buttons/walletBtn.png";
// import styles from "./assets/styles";
// import { connect } from 'react-redux';
// import { listAssets, getHercId, fetchAssets } from './actions/AssetActions';
// import BackButton from './components/BackButton';


 class MenuOptions extends Component {

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
      This is Menu Options
        </View>
    )
  };
}

export default MenuOptions;
