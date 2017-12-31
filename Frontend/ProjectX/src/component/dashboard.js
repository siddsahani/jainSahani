import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { connect } from "react-redux"
import NavigationBar from "./navigation-bar"
import TabBar from "./tab-bar"
import Home from "./home"
import Friends from "./friends"
import Add from "./add"
import Profile from "./profile"

class Dashboard extends Component<{}> {
  constructor(props) {
    super(props)
  }

  renderTabComponent() {
    if (this.props.tabKey === "FRIENDS")
      return <Friends />
    else if (this.props.tabKey === "ADD")
      return <Add />
    else if (this.props.tabKey === "PROFILE")
      return <Profile />
    else
      return <Home />
  }

  renderNavigationBarTitle() {
    if (this.props.tabKey === "FRIENDS")
      return "FRIENDS"
    else if (this.props.tabKey === "ADD")
      return "ADD"
    else if (this.props.tabKey === "PROFILE")
      return "PROFILE"
    else
      return "SMART EXPENSE MANAGER"

  }


  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title={this.renderNavigationBarTitle()}
          />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {this.renderTabComponent()}
        </View>
        <TabBar />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})

const mapStateToProps = (state) => {
  return {
    tabKey: state.tabBar.tabKey
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)