import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

const Header =(props) => {
 

  
    return (
      <View style={styles.header}>
        <Text style={styles.text}>{props.headerText}</Text>
      </View>
    );
  
}
const styles = StyleSheet.create({
    header:{

        backgroundColor:'#f8f8f8',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        height:60,
        elevation:3,

    },
    text:{

        fontSize:20,

    }
});

export  default Header;
