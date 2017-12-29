import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import FaceBookSignup from "./signup-fb"
import FaceBookCustomBtnSignup from "./signup-custombtn-fb"
import GoogleSignup from "./signup-google"
import MobileNoVerification from "./signup-fb-mobile"

class Login extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <FaceBookSignup />
        <FaceBookCustomBtnSignup />
        <GoogleSignup />
        <MobileNoVerification />
        {/*Stub button*/}
        <View style={{}}>
          <TouchableHighlight
            style={{ height: 50, width: 300, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue' }}
            onPress={() => alert("hello")}
            >
            <Text> Test Login</Text>
          </TouchableHighlight>
        </View>
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
export default Login