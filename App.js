import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Diary from './src/screens/Diary';
import Profile from './src/screens/Profile';

const tabBarOptions = {
  activeTintColor: '#fff',
  inactiveTintColor: '#f5f5f5',
  labelStyle: {
    fontSize: 13,
    fontWeight: '500',
  },
  style: {
    backgroundColor: '#50d890',
    height: 65,
    paddingTop: 15,
  },
};

const HomeTabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: () => <Icon name="home" size={17} color="#fff" />,
      },
    },
    Diary: {
      screen: Diary,
      navigationOptions: {
        title: 'Diário',
        tabBarIcon: () => <Icon name="clipboard" size={17} color="#fff" />,
      },
    },
  },
  {
    tabBarOptions: tabBarOptions,
  },
);

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: HomeTabs,
    navigationOptions: {
      headerShown: false,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Conta',
    },
  },
});

export default createAppContainer(AppNavigator);
