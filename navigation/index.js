import React from 'react';
import { createAppContainer, createStackNavigator  } from 'react-navigation';

import Welcome from '../screens/Welcome';
import Rewards from '../screens/Rewards';
import Trip from '../screens/Trip';
import Chat from '../screens/Chat';

{/* 

import FirstPage from '../screens/FirstPage';
import Forgot from '../screens/Forgot';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';


*/}


import { theme } from '../constants';

const screens = createStackNavigator({
  Welcome,
  Rewards,
  Trip,
  Chat
  
}, {
  defaultNavigationOptions: {
    headerStyle: {
      height: 60,
      backgroundColor: theme.colors.gray4,
      borderBottomColor: "transparent",
    },
    headerTitleContainerStyle: {
      alignItems: 'flex-end',
      paddingLeft: theme.sizes.padding,
    },
    headerLeftContainerStyle: {
      alignItems: 'flex-end',
      marginLeft: theme.sizes.padding,
      paddingRight: theme.sizes.base,
    },
    headerRightContainerStyle: {
      alignItems: 'flex-end',
      marginRight: theme.sizes.padding,
    },
  },
  headerLayoutPreset: 'left'
});

export default createAppContainer(screens);