import React, { Component } from 'react';
import { TabNavigator, StackNavigator} from 'react-navigation';
import { View, Platform, Image, TouchableHighlight } from 'react-native';
import logo from '../assets/hercLogoBreak.png';
import MenuOptions from '../screens/MenuOptions';
import Feed from './Feed';
import Welcome from '../screens/Welcome';

const MainNavigator = StackNavigator({
    MenuOptions: { screen: MenuOptions },
    Feed: { screen: Feed },
    Welcome: {screen: Welcome },
}, {
  initialRouteName: 'Welcome',
})

 class MainNavigation extends Component {
   componentWillMount(){
     console.log('MainNavigation Will Mount.')
   }

   componentDidMount(){
     console.log('MainNavigation Did Mounted.')
   }

    render() {
        return (
            <MainNavigator />
        )
    }
}

export default MainNavigation;
