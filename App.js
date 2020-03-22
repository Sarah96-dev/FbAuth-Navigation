import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import firebase from 'firebase';
import Header from './components/common/Header';
import LoginForm from './components/loginForm'
import Button from './components/common/Button';
import Spinner from './components/common/Spinner';
import CardSection from './components/common/CardSection'
import Gallery from './gallery/App'
import Laptops from './laptops/App'
//import SwitchNav from './Navigator'
import { createSwitchNavigator,createAppContainer } 
from 'react-navigation';
import { createStackNavigator  } from 'react-navigation-stack';




const StackNavigation=createStackNavigator({
  GalleryScreen:{screen:Gallery , navigationOptions:{ headerShown: false}},
  LaptopsScreen:{screen:Laptops , navigationOptions:{title:" "}}

},
{
initialRouteName:'GalleryScreen',

}
)

const RootNavigation = createSwitchNavigator(
  {
    Login: {screen: LoginForm, 
      },
    Home:{screen:StackNavigation}
  }
  ,
  
  
  {
  initialRouteName:'Login',
  },
);

const AppContainer = createAppContainer(RootNavigation);

export default class App extends Component {

  
  state = { loggedIn:null};
  


  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAjS5jLzM-Xb1tn8y8C7Xkb6sVB42yARO4",
      authDomain: "authentication-ae975.firebaseapp.com",
      databaseURL: "https://authentication-ae975.firebaseio.com",
      projectId: "authentication-ae975",
      storageBucket: "authentication-ae975.appspot.com",
      messagingSenderId: "575166286556",
      appId: "1:575166286556:web:335b253fb84de001010219",
      measurementId: "G-G6EG4K1MKM"
    });

    firebase.auth().onAuthStateChanged((user) =>{

      if(user){
        this.setState({loggedIn:true})
      }
      else{
        this.setState({loggedIn:false})
      }

    });

  }

  renderContent(){

    

/*
    switch(this.state.loggedIn){
      case true:  return ( 
        <CardSection><Button onPress={()=>{
          firebase.auth().signOut()
        }}> Log Out </Button></CardSection>
      
      )
        case false:  return ( <LoginForm></LoginForm>)
          default:
            return <Spinner size="large"></Spinner>
     
    }
   
     */
    
  }
  render() {
    return (
      <View style={{flex:1, backgroundColor: '#34495e'}}>
          
       {this.renderContent()}
      <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
