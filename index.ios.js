import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { getCollection } from './utils/api';
import * as parser from './utils/parser';

import Item from './components/MovieItem';

export default class movie extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }
  async componentWillMount() {
    const topMovies = await getCollection('top');
    this.setState({ list: topMovies.subjects });
  }
  render() {
    const testItem = this.state.list[0];
    return (
      <View style={styles.container}>
        {
          testItem && <Item {...parser.movieItem(testItem)} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('movie', () => movie);
