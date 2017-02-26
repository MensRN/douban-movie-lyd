import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  NavigatorIOS,
} from 'react-native';

import Home from './components/Home';

export default class movie extends Component {
  render() {
    return (
      <NavigatorIOS
        style={{ flex: 1 }}
        initialRoute={{
          component: Home,
          title: '豆瓣电影'
        }}
      />
    );
  }
}

AppRegistry.registerComponent('movie', () => movie);
