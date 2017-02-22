import React, { PropTypes } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MovieItem extends React.Component {
  static propTypes = {
    title: PropTypes.string
  }
  render () {
    return (
      <View>
        <Text>{ this.props.title }</Text>
      </View>
    );
  }
}

export default MovieItem;
