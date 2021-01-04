import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import BookRequestScreen from '../screens/BookRequestScreen';


export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/icon.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate",
    }
  },
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/splash.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Request",
    }
  }
});
