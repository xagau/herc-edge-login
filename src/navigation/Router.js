import React from 'react';
import { TabNavigator, StackNavigator} from 'react-navigation';
import Feed from './sample/Feed';
import Me from './sample/Me';


export const Tabs = TabNavigator({
    Feed: {
      screen: Feed,
      navigationOptions: {
        tabBarLabel: 'Feed'
      }
    },
    Me: {
      screen: Me,
      navigationOptions: {
        tabBarLabel: 'Me'
      }
    },
});
