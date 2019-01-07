import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Layout from './Components/Layout';
import LoginScreen2 from './Screens/LoginScreen2';
import OtpScreen from './Screens/OtpScreen';
import {createStackNavigator,createAppContainer} from 'react-navigation';





class App extends React.Component {
  render() {
    return (
      <AppStackNavigator></AppStackNavigator>
    );
  }
}

const AppStackNavigator = createStackNavigator({

  Home: Layout,
  Login: LoginScreen2,
  Otp:OtpScreen,
},{
  initialRouteName: 'Login',
})
export default createAppContainer(AppStackNavigator);
