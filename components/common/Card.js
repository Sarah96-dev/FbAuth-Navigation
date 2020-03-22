import React from 'react';
import {View,StyleSheet} from 'react-native';

const Card= (props) =>{
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle:{
        
        borderRadius:2,
      
     
       
        elevation:4,
   
        marginLeft:5,
        marginRight:5,
        marginTop:10
    }
});
export   default Card;