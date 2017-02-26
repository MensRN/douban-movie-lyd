import React, { PropTypes } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

const propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  originalTitle: PropTypes.string,
  rating: PropTypes.number,
  genres: PropTypes.array,
  cover: PropTypes.string,
  onPress: PropTypes.func,
};

class MovieItem extends React.Component {
  static propTypes = propTypes;

  render() {
    const { id, title, originalTitle, rating, genres, cover, onPress } = this.props;

    return (
      <View style={styles.container}>
        <Image
          style={styles.cover}
          source={{ uri: cover  }}
          />
        <View style={styles.info}>
          <Text style={styles.rating}>{rating}</Text>
          <TouchableHighlight
            onPress={() => onPress(this.props)} style={{ flex: 1}}
            underlayColor="#fff"
          >
            <Text style={styles.title}>{title}</Text>
          </TouchableHighlight>

          <Text style={styles.des}>{originalTitle}</Text>
          <View style={styles.genres}>
            {
              genres.map((x, i) => <Text key={i} style={styles.genresItem}>{x}</Text>)
            }
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    marginBottom: 2,
  },
  cover: {
    width: 65,
    height: 100
  },
  genres: {
    flex: 0,
    flexDirection: 'row',
    marginTop: 10,
  },
  genresItem: {
    marginRight: 5,
    backgroundColor: '#ccc',
    padding: 3,
    fontSize: 12,
    color: '#444',
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  rating: {
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 20,
  },
  des: {
    color: '#555',
  },
});

export default MovieItem;
