/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var Parse = require('parse/react-native');

class SampleAppMovies extends Component {
  componentDidMount() {
    console.log("user signup");
    var user = new Parse.User();
    user.set("username", "my name");
    user.set("password", "my pass");

    // other fields can be set just like with Parse.Object
    user.set("phone", "415-392-0202");
    console.log("user signup");

    user.signUp(null, {
      success: function(user) {
                 // Hooray! Let them use the app now.
                 console.log("success");
               },
      error: function(user, error) {
               // Show the error message somewhere and let the user try again.
               console.log("Error: " + error.code + " " + error.message);
             }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = SampleAppMovies;
