import React, { Component } from 'react';
import { View, Text,ImageBackground ,StyleSheet,Dimensions} from 'react-native';

export default class CompoImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
      <ImageBackground source={this.props.imageSource} style={styles.image}>
        
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    image:{
        height:200,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    }
});
