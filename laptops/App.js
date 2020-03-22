import React, { Component } from 'react';
import { View, Text ,StyleSheet,ScrollView} from 'react-native';
import Header from './components/Header'
import HeroImage from './components/HeroImage'
import HeroText from './components/HeroText'

import Body from './components/Body'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
    
      <ScrollView style={styles.container}>
     
      <HeroImage/>
      <Body />
      </ScrollView>
      <View style={styles.heroText}>
      <HeroText ></HeroText>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  heroText:{
    position: 'absolute',
    bottom:20,
    right:5

  }
});
