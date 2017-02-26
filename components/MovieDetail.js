import React, { PropTypes } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';

import { getDetail } from '../utils/api';
import * as parser from '../utils/parser';

const propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  originalTitle: PropTypes.string,
  rating: PropTypes.number,
  genres: PropTypes.array,
  cover: PropTypes.string,
  onPress: PropTypes.func,
};

const Detail = ({
  title, cover, rating, rating_count, year, countries,
  genres, directors, casts, summary
}) => (
  <View style={styles.container}>
    <View style={styles.coverContainer}>
      <Image
        style={styles.cover}
        source={{ uri: cover }}
      />
    </View>
  </View>
);

class MovieDetail extends React.Component {
  static propTypes = propTypes;

  constructor() {
    super();

    this.state = {
      data: null,
    };
  }

  async componentDidMount() {
    const data = await getDetail(this.props.id);
    this.setState({ data });
  }

  render () {
    const { title, id, cover } = this.props;
    return (
      <View style={styles.container}>
        {
          this.state.data ? <Detail {...parser.detail(this.state.data)} /> : <ActivityIndicator />
        }
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  coverContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    alignSelf: 'stretch',
    flex: 0,
    justifyContent: 'center',
    backgroundColor: '#444',
  },
  cover: {
    width: 100,
    height: 148,
    shadowRadius: 20,
    shadowColor: '#111',
    flex: 0,
  },
});

export default MovieDetail;
