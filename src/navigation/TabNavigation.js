import React from 'react';
import { TabNavigator} from 'react-navigation';
import Feed from '../sample/Feed';

export const Tabs = TabNavigator({
    Feed: {
      screen: Feed,
      navigationOptions: {
        tabBar:{
          label: 'Feed'
        }
      }
    },
});
