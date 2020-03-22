import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import HeroText from './HeroText';
export default class HeroImage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <ImageBackground
          style={styles.img}
          source={require('./images/img2.jpeg')}>
          

          </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 400,
    
  },

});
