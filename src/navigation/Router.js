import React from 'react';
import { TabNavigator, StackNavigator} from 'react-navigation';
import Feed from './Feed';
import Me from './Me';
import Welcome from './Welcome';

export const AppStackNavigator = StackNavigator({
  Welcome: {screen: Welcome},
  Feed: {screen: Feed},
  Me: {screen: Me},
})
