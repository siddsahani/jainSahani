import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { connect } from "react-redux"
import { displaySelectedPageAction } from "../action/tab-bar-action"

class Home extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
          <Text>Personal Expense Page container</Text>
          <TouchableHighlight
            style={{ width: 100, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue' }}
            onPress={() => this.props.displaySelectedPage("HOME.DETAILED.PERSONAL")}
            >
            <Text>Detailed Summary</Text>
          </TouchableHighlight>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
          <Text>Share Expense Page container</Text>
          <TouchableHighlight
            style={{ width: 100, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue' }}
            onPress={() => this.props.displaySelectedPage("HOME.DETAILED.SHARE")}
            >
            <Text>Detailed Summary</Text>
          </TouchableHighlight>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Upcoming Reminder Page container</Text>
          <TouchableHighlight
            style={{ width: 100, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue' }}
            onPress={() => this.props.displaySelectedPage("HOME.DETAILED.REMINDER")}
            >
            <Text>Detailed Summary</Text>
          </TouchableHighlight>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displaySelectedPage: (pageKey) => dispatch(displaySelectedPageAction(pageKey)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)