import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from "react-redux"
import AppNavigator from './app-navigator'
import { loadStoreAction } from "../action/persist-sore-action"

class BackgroundTask extends Component<{}> {
  componentDidMount() {
    this.props.loadStore(1234)
  }

  render() {
    return (
      <AppNavigator />
    )
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
    loadStore: (userId) => dispatch(loadStoreAction(userId))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundTask)