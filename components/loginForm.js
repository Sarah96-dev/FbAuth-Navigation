import React, {Component} from 'react';
import {Text, StyleSheet,View,Image, KeyboardAvoidingView} from 'react-native';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Header from './common/Header'
import Input from './common/Input';
import firebase from 'firebase';
import Spinner from './common/Spinner';
export default class loginForm extends Component {
  state = {email: '', password: '', msg: '', loading: false};

  onButtonPress = () => {
    const {email, password} = this.state;
    this.setState({loading: true});
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        () =>
        { 
          this.setState({
            email: '',
            password: '',
            loading: false,
            msg: 'Authentication success',
          })
          this.props.navigation.navigate('Home');
        },

        () =>
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(
              () =>
                this.setState({
                  email: '',
                  password: '',
                  loading: false,
                  msg: 'Account created successfully',
                }),
              () => {this.setState({ loading: false,msg: 'Authentication Failed'})
           },
            ),
      );
  };

  renderButton() {
    if (this.state.loading ) {
      return <Spinner size="large" />;
    }
    return <Button onPress={this.onButtonPress}> Log in</Button>;
  }
  render() {
    return (
      <View  behavior="padding" style={styles.container}>
        <Header headerText="Authentication with Firebase"></Header>
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require('./common/lcologo.png')} />
          </View>
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
        </CardSection>

        <Text
          style={
            this.state.msg == 'Authentication Failed'
              ? styles.msg
              : [styles.msg, {color: 'green'}]
          }>
          {this.state.msg}
        </Text>

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logocontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  logo: {
    width: 100,
    height: 100,
  },
  container:{
    backgroundColor: '#34495e',
    flex:1,
  },
  msg: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center',
  },
});
