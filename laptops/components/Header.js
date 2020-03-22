import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity, Image, Dimensions} from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.header}>
        
          
        <Image source={require('./images/img1.png')}
        style={styles.logo}></Image>
        <Text style={styles.title}>LCO Shopping Cart</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  back:{
  
      alignSelf:'flex-start',
      width:30,
      height:30,
   
  },
    header:{
        height:80,
   
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        borderBottomWidth:4,
        borderBottomColor:'#ccc',
        width: Dimensions.get('window').width,
       

      },
      logo:{

        marginTop:20,
        width: 40,
        height:40
      },
      title:{

        marginTop:20,
        marginLeft:10,
        color:'#4b4b4b',
        fontWeight:'bold',
        fontSize:15,
        fontStyle:'italic'
      }
});
