import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  AppRegistry,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import InitialScreen from './initial_screen';
import CustomerSignUp from './customer_signup';
import CustomerLogin from './customer_login';
import OtpPassword from './otp_password';
import CustomerApp from './customer_app';
import CustomerMap from './customer_map';

const AppNavigator = createStackNavigator({
  Home: CustomerLogin,
});


const styles = StyleSheet.create({
  stretch: {},
  mapper: {
    backgroundColor: '#0A5EA8',
    flex: 1,
    position: 'relative',
  },
  appName: {
    color: '#fff',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
  },
});
