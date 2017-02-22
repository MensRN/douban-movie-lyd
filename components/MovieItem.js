import React, { PropTypes } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MovieItem extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    originalTitle: PropTypes.string,
    rating: PropTypes.number,
    genres: PropTypes.array,
    cover: PropTypes.string,
  }

  render() {
    const { title, rating } = this.props;
    return (
      <View>
        <Text>{rating}</Text>
        <Text>{title}</Text>
      </View>
    );
  }
}

export default MovieItem;
