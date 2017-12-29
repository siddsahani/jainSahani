import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { connect } from "react-redux"
import FaceBookSignup from "./signup-fb"
import FaceBookCustomBtnSignup from "./signup-custombtn-fb"
import GoogleSignup from "./signup-google"
import MobileNoVerification from "./signup-fb-mobile"
import { loginAction } from "../action/auth-action"

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
            onPress={this.props.login}
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

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(loginAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)