import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {LoginManager} = FBSDK;

class FaceBookCustomBtnSignup extends Component<{}> {
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
      <View style={{ margin: 20 }}>
        <TouchableHighlight
          style={{ height: 50, width: 300, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue' }}
          onPress={this.fbAuth.bind(this)}>
          <Text>Sign in with Facebook custom UI</Text>
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
})

export default FaceBookCustomBtnSignup