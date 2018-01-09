import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import { connect } from "react-redux"
import { displaySelectedPageAction } from "../action/tab-bar-action"
import Icon from "react-native-vector-icons/Ionicons"
import OS from "../platform/os"

class NavigationBar extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', width: Dimensions.get('window').width * 20 / 100 }}>
          {(this.props.showLeftIcon) && <Icon.Button
            name={OS.icon(this.props.leftIconName)}
            size={32}
            backgroundColor="#00000000"
            color={'black'}
            iconName="Back"
            iconStyle={{ alignItems: 'center' }}
            onPress={this.props.leftIconOnPress}
            underlayColor="#00000000" />}
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', width: Dimensions.get('window').width * 60 / 100 }}>
          <Text style={{}}> {this.props.navBarTitle}</Text>
        </View>
        <View style={{ justifyContent: 'center', width: Dimensions.get('window').width * 20 / 100 }}>
          {(this.props.showRightIcon) && <TouchableHighlight
            style={{ alignItems: 'center' }}>
            <Text style={{}}> RIGHT ICON</Text>
          </TouchableHighlight>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
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
    displaySelectedPage: (pageKey) => dispatch(displaySelectedPageAction(pageKey)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)