import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity, ImageBackground, Image} from 'react-native';
import {useNavigation } from 'react-navigation'

export default class Header extends Component {
 
  
  

  render() {
    
    return (
      <ImageBackground
        style={styles.headerbg}
        source={require('./images/headerbg.jpeg')}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.next}  onPress={() => this.props.nav.navigate('LaptopsScreen')} >
        <Image style={{width:30,height:30}} source={require('./images/next.png')}
         />
         </TouchableOpacity>
          <View style={styles.profilepicContainer}>
            <Image
              style={styles.myPic}
              source={require('./images/flower.jpg')}
            />
          </View>
          <Text style={styles.name}> Sarra Barkallah</Text>
          <Text style={styles.liner}> A part time photographer</Text>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({

 
  next:{
    paddingTop:5,
    alignSelf:'flex-end',
    width:30,
    height:30,
  },
  headerbg: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    padding:20,
    backgroundColor:'rgba(0,0,0,0.6)'
  },
  profilepicContainer: {
    width:160,
    height:160,

  }, 
  myPic:{
    borderRadius: 90,
    borderWidth:3,
    borderColor:'#fff',
    flex:1,
    width:null,
    alignSelf: 'stretch',

  },
  name:{
      marginTop:18,
      fontSize:18,
      color:'#fff',
      fontWeight:'bold'
  },
  liner:{
      color:'#fff',
      marginTop:3,
      fontSize:15,
      fontStyle:'italic',
      paddingBottom:5
  }
});
