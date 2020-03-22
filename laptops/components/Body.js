import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import CompoImage from './CompoImage';
import HeroText from './HeroText';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column1}>
          <CompoImage imageSource={require('./images/img3.jpeg')} />
        </View>
        <View style={styles.column2}>
          <ImageBackground
            style={styles.image}
            source={require('./images/img4.jpg')}>
           
          </ImageBackground>
        </View>
        <View style={styles.full}>
          <CompoImage imageSource={require('./images/img5.jpeg')} />
        </View>
        <View style={styles.column2}>
          <CompoImage imageSource={require('./images/img3.jpeg')} />
        </View>
        <View style={styles.column1}>
          <CompoImage imageSource={require('./images/img1.jpeg')} />
        </View>
        <View style={styles.full}>
          <CompoImage imageSource={require('./images/img6.jpeg')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
    backgroundColor: '#c1c1c1',
  },
  column1: {
    flex: 1,
    padding: 5,
  },
  column2: {
    flex: 2,
    padding: 5,
  },
  full: {
    width: '100%',
    padding: 5,
  },
  heroText: {
    position: 'absolute',
  },
  image: {
    height: 200,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
