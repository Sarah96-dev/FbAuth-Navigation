import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const Button = ({onPress,children}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
     
  <Text style={styles.text}> {children}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({

    button:{
       
       
       alignSelf:'stretch',
      
       backgroundColor:'#32ff7e',
      
       borderRadius:5,
       marginLeft:5,
       marginRight:5,
       
      width:Dimensions.get('window').width-32
    },
    text:{
        alignSelf:'center',
       
        fontSize:17,
        fontWeight:'bold',
        color:'#fff',
        paddingTop:10,
        paddingBottom:10

    }
});

export default Button ;