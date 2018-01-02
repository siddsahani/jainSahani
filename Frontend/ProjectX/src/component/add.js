import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import { connect } from "react-redux"

class Add extends Component<{}> {
  state = {
    authToken: null,
    loggedAccount: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: Dimensions.get('window').width - 20, height: 45, justifyContent: 'center', borderBottomWidth: 1, }}>
          <TouchableHighlight
            //onPress={() => this.props.addPersonalExpense()}
            >
            <Text>Add Personal Expense </Text>
          </TouchableHighlight>
        </View>
        <View style={{ width: Dimensions.get('window').width - 20, height: 45, justifyContent: 'center', borderBottomWidth: 1, }}>
          <TouchableHighlight
            //onPress={() => this.props.addPersonalExpense()}
            >
            <Text>Add Share Expense </Text>
          </TouchableHighlight>
        </View>
        <View style={{ width: Dimensions.get('window').width - 20, height: 45, justifyContent: 'center', borderBottomWidth: 1, }}>
          <TouchableHighlight
            //onPress={() => this.props.addPersonalExpense()}
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)