import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Diary from './src/screens/Diary';
import Profile from './src/screens/Profile';
import CustomizeMacros from './src/screens/CustomizeMacros';

import { responsiveSize } from './src/utils/dimensions';

const tabBarOptions = {
  style: {
    backgroundColor: '#50d890',
    height: responsiveSize(4),
    paddingTop: responsiveSize(19),
    paddingBottom: responsiveSize(19),
  },
  showLabel: false,
};

const HomeTabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: () => (
          <Icon name="home" size={responsiveSize(15)} color="#fff" />
        ),
      },
    },
    Diary: {
      screen: Diary,
      navigationOptions: {
        tabBarIcon: () => (
          <Icon name="clipboard" size={responsiveSize(15)} color="#fff" />
        ),
      },
    },
  },
  {
    tabBarOptions: tabBarOptions,
  },
);

const AppNavigator = createStackNavigator(
  {
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
        title: 'Início',
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil',
      },
    },
    CustomizeMacros: {
      screen: CustomizeMacros,
      navigationOptions: {
        title: 'Macronutrientes',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontSize: responsiveSize(22),
        color: '#000',
      },
      headerBackTitleStyle: {
        fontSize: responsiveSize(22),
        color: '#50d890',
        fontWeight: 'bold',
      },
      headerTintColor: '#50d890',
    },
  },
);

export default createAppContainer(AppNavigator);
