import React, { Component } from 'react';
import { TabNavigator, StackNavigator} from 'react-navigation';
import { View, Platform, Image, TouchableHighlight } from 'react-native';
import logo from '../assets/hercLogoBreak.png';
import MenuOptions from '../screens/MenuOptions';
import Feed from './sample/Feed';

const MainNavigator = StackNavigator({
    MenuOptions: { screen: MenuOptions },
    Feed: { screen: Feed },
},


    {
        initialRouteName: 'MenuOptions',
        navigationOptions: ({ navigation }) => ({

            headerTitle: <Image style={{
                height: 100,
                width: 240,
                alignSelf: 'center',
                resizeMode: 'contain',
                marginLeft: 20,
            }}
                source={logo} />,

            headerStyle: {
                height: Platform.OS === 'android' ? 100 + 50 : 100,
                backgroundColor: '#021227',

            },
            headerTitleStyle: {
                marginTop: Platform.OS === 'android' ? 50 : 0,
                textAlign: 'center',
                textAlignVertical: 'center',
                backgroundColor: '#021227',
                alignSelf: 'center',

            },
            headerRight: <View></View>,
            headerLeft: <View></View>

        })
    }
  )

 class MainNavigation extends Component {
   componentDidMount(){
     console.log('MainNavigation Mounted. Returning MainNavigator')
   }

    render() {
        return (
            <MainNavigator />
        )
    }
}

export default MainNavigation;
