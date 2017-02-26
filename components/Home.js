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
import Detail from './MovieDetail';

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
  goDetail(props) {
    const { title } = props;

    this.props.navigator.push({
      title,
      component: Detail,
      passProps: props,
    });
  }
  render () {
    const items = this.state.list;
    return(
      <ScrollView style={styles.container}>
        {
          items.map((x, i) => <Item
            {...parser.movieItem(x)} key={i} onPress={this.goDetail.bind(this)}
          />)
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
