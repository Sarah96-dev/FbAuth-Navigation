import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './Card';

const CardSection = (props) =>{
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}



const styles = StyleSheet.create({
    containerStyle:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'rgba(255,255,255,0.7)',
        
        borderRadius:5,
        margin:3,
     
        justifyContent:'flex-start',
        flexDirection:'row',
        
        position:'relative'
    }
});

export default CardSection ;