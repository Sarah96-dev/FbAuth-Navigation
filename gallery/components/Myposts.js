import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Myposts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}> My posts </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    borderRadius:10,


    elevation: 1,
    alignSelf:'center',
    fontSize:25,
    color:'#292929',
    textAlign:'center',
    backgroundColor:'rgba(255,255,255,0.7)',
    padding:10,
    fontWeight:'bold',


  },
});
