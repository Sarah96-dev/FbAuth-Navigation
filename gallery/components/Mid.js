import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Mid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.mid}>
        <View style={[styles.outerView, styles.leftBar]}>
            <Text style={styles.text1}>75+</Text>
            <Text style={styles.text2}>Images</Text>
        </View>
        <View style={styles.outerView}>
           <Text style={styles.text1}>500+</Text>
            <Text style={styles.text2}>followers</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mid: {
    flexDirection: 'row',
    backgroundColor: '#f368e0',
    borderTopWidth: 5,
    borderTopColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
    
   
  },
  outerView:{
      flex:1,
      padding:20,
      alignItems:'center',
      borderBottomWidth:3,
      borderBottomColor: '#fff',

  },
  text1:{
 
    color:'#fff',
    fontSize: 18,
    fontWeight:'bold'

  },
  text2:{
    color:'#fff',
    fontSize: 14,
    marginTop:5
  },
  leftBar:{
      borderRightWidth:4,
      borderRightColor:'#fff'
  }
});
