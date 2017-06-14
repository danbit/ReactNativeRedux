import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null, user: null };

  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyCsZWtyhppl2wq-ACXiLggcQZ83QOLBG8E',
      authDomain: 'auth-f3604.firebaseapp.com',
      databaseURL: 'https://auth-f3604.firebaseio.com',
      storageBucket: 'auth-f3604.appspot.com',
      messagingSenderId: '347812693793'
    });
    
    firebase.auth().onAuthStateChanged((user) => {      
      if (user) {
        this.setState({ loggedIn: true, user });
      } else {
        this.setState({ loggedIn: false, user: null });
      }
    });
  }

  onButtonLogOutPress() {
    firebase.auth().signOut().then(() => {
      this.setState({ loggedIn: null, user: null });
    }, (error) => {
      console.log(error);
    });
  }

  renderContent() {
    console.log('this.state.loggedIn', this.state.loggedIn);
    switch (this.state.loggedIn) {
      case true:
        return (
          <View>
            <Text>User: {this.state.user.email}</Text>
            <Button 
              title="Log Out" 
              onPress={this.onButtonLogOutPress.bind(this)} 
            />
          </View>
        );
      case false:
        return <LoginForm />;
      default: {
        const { spinnerContainerStyle } = styles;

        return (
          <View style={spinnerContainerStyle}>
            <Spinner />
          </View>
        );
      }
    }    
  }

  render() {    
    const { containerStyle } = styles;
    return (
      <View>
        <Header text="Authentication" />
        <View style={containerStyle}>
          {this.renderContent()}
        </View>  
      </View>
    );
  }
}

const styles = {
    containerStyle: {        
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    spinnerContainerStyle: {
        paddingTop: 18
    }
};


export default App;
