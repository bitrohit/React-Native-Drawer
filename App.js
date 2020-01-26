import React from 'react'

import {createAppConatiner} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import {Dimensions} from 'react-native';

import {Feather} from '@expo/vector-icons'
import {ProfileScreen, ListScreen, ReportScreen, SignOutScreen} from './screens'

//createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

const DrawerNavigator =  createDrawerNavigator({
  ProfileScreen,
  ListScreen,
  ReportScreen,
  SignOutScreen
})

export default createAppConatiner(DrawerNavigator);