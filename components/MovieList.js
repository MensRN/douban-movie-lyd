import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MovieList extends React.Component {
  render () {
    return (
      <View>
        <Text>{ this.props.title }</Text>
      </View>
    );
  }
}

export default MovieList;
