import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  Image
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  LoginManager,
  AccessToken
} = FBSDK;

import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

export default class Login extends Component<{}> {
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


  fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          alert('Login was cancelled');
        } else {
          alert('Login was successful with permissions: '
            + result.grantedPermissions.toString());
        }
      },
      function (error) {
        alert('Login failed with error: ' + error);
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginButton
          readPermissions={['public_profile', 'email', 'user_friends']}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
                //alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")} />

        <View>
          <TouchableHighlight
            style={{ marginTop: 30, height: 45, justifyContent: 'center', backgroundColor: '#4285F4' }}
            onPress={this.fbAuth.bind(this)}>
            <Text>Sign in with Facebook custom UI</Text>
          </TouchableHighlight>
        </View>

        <TouchableHighlight
          style={{ marginTop: 30, height: 45, justifyContent: 'center', backgroundColor: '#4285F4' }}
          onPress={this.googleAuth.bind(this)}>
          {this.state.googleUserLoggedIn ?
            <Text> Google Logout custom UI</Text>
            :
            <Text>Sign in with Google custom UI</Text>
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