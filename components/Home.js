import React, { PropTypes } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  NavigagorIOS,
} from 'react-native';

import { getCollection } from '../utils/api';
import * as parser from '../utils/parser';

import Item from './MovieItem';

class Home extends React.Component {
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
  render () {
    const items = this.state.list;
    console.log(items);
    return(
      <ScrollView style={styles.container}>
        {
          items.map((x, i) => <Item {...parser.movieItem(x)} key={i} />)
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
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

export default Home;
