import React, { Component } from 'react';
import {View, TextInput, Text,StyleSheet } from 'react-native';

const Input =({label,onChangeText,value,placeholder,secureTextEntry}) => {
  

 
    return (
      <View style={styles.container}>
        <Text style={styles.label}> {label} </Text>
        <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}></TextInput>
      </View>
    );
  }


const styles = StyleSheet.create({
   input:{

    color:'#000',
    paddingRight:5,
    paddingLeft:5,
    fontSize:17,
    lineHeight:23,
    
    flex:2
   },
   label:{

    fontSize:18,
    paddingLeft:20,
    flex:1
   },
    container: {
       height: 40,
       flex:1,
       flexDirection:'row',
       alignItems:'center'
      },
});

export default Input;