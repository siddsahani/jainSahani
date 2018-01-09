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

class TabBar extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Icon.Button
            name={OS.icon("home")}
            size={32}
            backgroundColor="#00000000"
            color={this.props.pageKey === "HOME" ? 'black' : 'grey'}
            iconName="Home"
            iconStyle={{ justifyContent: 'center', alignItems: 'center' }}
            onPress={() => this.props.displaySelectedPage("HOME")}
            underlayColor="#00000000" />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Icon.Button
            name={OS.icon("people")}
            size={32}
            backgroundColor="#00000000"
            color={this.props.pageKey === "FRIENDS" ? 'black' : 'grey'}
            iconName="Friends"
            iconStyle={{ alignItems: 'center' }}
            onPress={() => this.props.displaySelectedPage("FRIENDS")}
            underlayColor="#00000000" />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Icon.Button
            name={OS.icon("close-circle")}
            size={46}
            backgroundColor="#00000000"
            color={this.props.pageKey === "ADD" ? 'black' : 'grey'}
            iconName="Add"
            //iconStyle={{ alignItems: 'flex-start' }}
            onPress={() => this.props.displaySelectedPage("ADD")}
            underlayColor="#00000000" />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Icon.Button
            name={OS.icon("calendar")}
            size={32}
            backgroundColor="#00000000"
            color={this.props.pageKey === "HOME" ? 'black' : 'grey'}
            iconName="Activity"
            //iconStyle={{ alignItems: 'flex-start' }}
            onPress={() => this.props.displaySelectedPage("HOME")}
            underlayColor="#00000000" />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Icon.Button
            name={OS.icon("person")}
            size={32}
            backgroundColor="#00000000"
            color={this.props.pageKey === "PROFILE" ? 'black' : 'grey'}
            iconName="Profile"
            //iconStyle={{ alignItems: 'flex-start' }}
            onPress={() => this.props.displaySelectedPage("PROFILE")}
            underlayColor="#00000000" />
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
    borderTopWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white'
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

export default connect(mapStateToProps, mapDispatchToProps)(TabBar)