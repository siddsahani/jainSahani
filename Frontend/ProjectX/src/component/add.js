import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import { connect } from "react-redux"
import AddPersonalExpense from "./add-personal-expense"
import AddShareExpense from "./add-share-expense"
import AddReminder from "./add-reminder"
import { displaySelectedPageAction } from "../action/tab-bar-action"

class Add extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: Dimensions.get('window').width - 20, height: 45, justifyContent: 'center', borderBottomWidth: 1, }}>
          <TouchableHighlight
            style={{ flex: 1, justifyContent: 'center' }}
            onPress={() => this.props.displaySelectedPage("ADD.PERSONAL")}
            >
            <Text>Add Personal Expense </Text>
          </TouchableHighlight>
        </View>
        <View style={{ width: Dimensions.get('window').width - 20, height: 45, justifyContent: 'center', borderBottomWidth: 1, }}>
          <TouchableHighlight
            style={{ flex: 1, justifyContent: 'center' }}
            onPress={() => this.props.displaySelectedPage("ADD.SHARE")}
            >
            <Text>Add Share Expense </Text>
          </TouchableHighlight>
        </View>
        <View style={{ width: Dimensions.get('window').width - 20, height: 45, justifyContent: 'center', borderBottomWidth: 1, }}>
          <TouchableHighlight
            style={{ flex: 1, justifyContent: 'center' }}
            onPress={() => this.props.displaySelectedPage("ADD.REMINDER")}
            >
            <Text>Add Reminder </Text>
          </TouchableHighlight>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
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

export default connect(mapStateToProps, mapDispatchToProps)(Add)