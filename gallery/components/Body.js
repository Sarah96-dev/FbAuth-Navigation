import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.mainView}>
          <View style={styles.smallView}>
            <Image style={styles.img} source={require('./images/img1.jpeg')} />
          </View>
          <View style={styles.smallView}>
            <Image style={styles.img} source={require('./images/img2.jpeg')} />
          </View>
        </View>
        <View style={styles.mainView}>
          <View style={styles.smallView}>
            <Image style={styles.img} source={require('./images/img3.jpeg')} />
          </View>
          <View style={styles.smallView}>
            <Image style={styles.img} source={require('./images/img4.jpeg')} />
          </View>
        </View>
        <View style={styles.mainView}>
          <View style={styles.smallView}>
            <Image style={styles.img} source={require('./images/img5.jpeg')} />
          </View>
          <View style={styles.smallView}>
            <Image style={styles.img} source={require('./images/img1.jpeg')} />
          </View>
        </View>
        <View style={styles.mainView}>
          <View style={styles.smallView}>
            <Image style={styles.img} source={require('./images/img6.jpeg')} />
          </View>
          <View style={styles.smallView}>
            <Image style={styles.img} source={require('./images/img4.jpeg')} />
          </View>
        </View>
        <View style={styles.mainView}>
          <View style={styles.smallView}>
            <Image style={styles.img} source={require('./images/headerbg.jpeg')} />
          </View>
          <View style={styles.smallView}>
            <Image style={styles.img} source={require('./images/flower.jpg')} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 1,
    width: '100%',
  },

  smallView: {
    flex: 1,
    margin: 1,
    height: 100,
   
  },

  img: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
});
