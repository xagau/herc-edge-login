import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Feed from './sample/Feed';
import Me from './sample/Me';

export const Tabs = createBottomTabNavigator({
  Feed: {
    screen: Feed,
    navigationOptions:{
      tabBarLabel: 'Feed',
    },
  },
  Me: {
    screen: Me,
  },
});
