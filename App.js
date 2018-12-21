import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Layout from './Components/Layout';

export default class App extends React.Component {
  render() {
    return (
      <View >
       <Layout/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1DDF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
