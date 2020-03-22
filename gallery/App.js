import React, { Component } from 'react';
import { View, Text, StyleSheet , ScrollView,Button} from 'react-native';
import Header from './components/Header'
import Mid from './components/Mid'
import Body from './components/Body'
import Myposts from './components/Myposts'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header nav={this.props.navigation}/>
       
        <Mid />
        <ScrollView style={styles.container}>
        <Body />
        </ScrollView>
        <View style={styles.myposts}>
        <Myposts />
        </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  
  },
  myposts:{
    position: 'absolute',
    bottom:20,
    right:5
  }
});
