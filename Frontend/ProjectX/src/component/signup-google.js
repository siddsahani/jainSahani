import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { GoogleSignin } from 'react-native-google-signin';

export default class GoogleSignup extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      googleUserLoggedIn: false
    }

  }
  componentDidMount() {
    this.setupGoogleSignin();
  }

  googleAuth() {
    if (this.state.googleUserLoggedIn) {
      GoogleSignin.signOut()
        .then(() => {
          this.setState({ googleUserLoggedIn: false })
          console.log('out');
        })
        .catch((err) => {
        });
    } else {
      GoogleSignin.signIn()
        .then((user) => {
          this.setState({ googleUserLoggedIn: true })
          alert("signIn", user);
          console.log(user);
        })
        .catch((err) => {
          alert("WRONG SIGNIN", err);

          console.log('WRONG SIGNIN', err);
        })
        .done();
    }
  }

  async setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        iosClientId: '468673413267-tqu0r624lvm82tmuvaogjflfu2n55ant.apps.googleusercontent.com',
        //webClientId: settings.webClientId,
        offlineAccess: false
      });

      const user = await GoogleSignin.currentUserAsync();
      //alert("currentUserAsync", user);

      console.log(user);
    }
    catch (err) {
      console.log("Google signin error", err.code, err.message);
    }
  }

  render() {
    return (
      <View style={{ margin: 10 }}>
        <TouchableHighlight
          style={{ height: 50, width: 300, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue' }}
          onPress={this.googleAuth.bind(this)}>
          {this.state.googleUserLoggedIn ?
            <Text> Google Logout custom UI</Text>
            :
            <Text>Sign up using Google custom UI</Text>
          }
        </TouchableHighlight>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});