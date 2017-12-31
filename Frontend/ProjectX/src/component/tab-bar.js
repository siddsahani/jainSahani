import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import { connect } from "react-redux"
import { displaySelectedTabPageAction } from "../action/tab-bar-action"

class TabBar extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <TouchableHighlight
            onPress={() => this.props.displaySelectedTabPage("HOME")}
            style={{ alignItems: 'center' }}>
            <Text style={{}}> 1st ICON</Text>
          </TouchableHighlight>
        </View>
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <TouchableHighlight
            onPress={() => this.props.displaySelectedTabPage("FRIENDS")}
            style={{ alignItems: 'center' }}>
            <Text style={{}}> 2nd ICON</Text>
          </TouchableHighlight>
        </View>
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <TouchableHighlight
            onPress={() => this.props.displaySelectedTabPage("ADD")}
            style={{ alignItems: 'center' }}>
            <Text style={{}}> 3rd ICON</Text>
          </TouchableHighlight>
        </View>
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <TouchableHighlight
            style={{ alignItems: 'center' }}>
            <Text style={{}}> 4th ICON</Text>
          </TouchableHighlight>
        </View>
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <TouchableHighlight
            onPress={() => this.props.displaySelectedTabPage("PROFILE")}
            style={{ alignItems: 'center' }}>
            <Text style={{}}> 5th ICON</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F5FCCC',
  }
})

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displaySelectedTabPage: (tabKey) => dispatch(displaySelectedTabPageAction(tabKey)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabBar)