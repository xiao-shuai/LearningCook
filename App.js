/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import AllStack from './src/config/navigation'
import {Provider} from 'mobx-react'
import store from './src/mobx/store'

console.disableYellowBox=true
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider {...store}>
      <AllStack/>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  
});
