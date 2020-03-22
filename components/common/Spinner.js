import React, { Component } from 'react';
import { View, Text,ActivityIndicator,StyleSheet } from 'react-native';



const Spinner =({size}) => {
 
    return (
      <View style={styles.spinner}>
         <ActivityIndicator size={size || 'large'} />
      </View>
    );
  
}
const styles = StyleSheet.create({
    spinner:{

        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default Spinner
