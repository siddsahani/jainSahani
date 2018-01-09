import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { connect } from "react-redux"
import { displaySelectedPageAction } from "../action/tab-bar-action"
import NavigationBar from "./navigation-bar"
import TabBar from "./tab-bar"
import Home from "./home"
import Friends from "./friends"
import Add from "./add"
import Profile from "./profile"
import AddPersonalExpense from "./add-personal-expense"
import AddShareExpense from "./add-share-expense"
import AddReminder from "./add-reminder"
import DetailedPersonalExpense from "./detailed-personal-expense"
import DetailedShareExpense from "./detailed-share-expense"
import DetailedReminder from "./detailed-reminder"

class Dashboard extends Component<{}> {
  constructor(props) {
    super(props)
    this.displayPage = this.displayPage.bind(this)
  }

  displayPage = (pageKey) => {
    this.props.displaySelectedPage(pageKey)
  }

  scene(component, navBarTitle,
    showLeftIcon = false, leftIconName = '', leftIconOnPress = () => { },
    showRightIcon = false, rightIconName = '', rightIconOnPress = () => { }) {
    return (<View style={styles.container}>
      <NavigationBar
        navBarTitle={navBarTitle}
        showLeftIcon={showLeftIcon}
        leftIconName={leftIconName}
        leftIconOnPress={leftIconOnPress}
        showRightIcon={showRightIcon}
        />
      {component}
      <TabBar
        pageKey={this.props.pageKey}
        />
    </View >)
  }

  renderScene() {
    if (this.props.pageKey === "FRIENDS")
      return this.scene(<Friends />, "FRIENDS")
    else if (this.props.pageKey === "ADD")
      return this.scene(<Add />, "ADD", true, "close", () => this.props.displaySelectedPage("HOME"))
    else if (this.props.pageKey === "ADD.PERSONAL")
      return this.scene(<AddPersonalExpense />, "ADD PERSONAL EXPENSE", true, "arrow-back", () => this.props.displaySelectedPage("ADD"))
    else if (this.props.pageKey === "ADD.SHARE")
      return this.scene(<AddShareExpense />, "ADD SHARE EXPENSE", true, "arrow-back", () => this.props.displaySelectedPage("ADD"))
    else if (this.props.pageKey === "ADD.REMINDER")
      return this.scene(<AddReminder />, "ADD REMINDER", true, "arrow-back", () => this.props.displaySelectedPage("ADD"))
    else if (this.props.pageKey === "PROFILE")
      return this.scene(<Profile />, "PROFILE")
    else if (this.props.pageKey === "HOME.DETAILED.PERSONAL")
      return this.scene(<DetailedPersonalExpense />, "PERSONAL EXPENSE SUMMARY", true, "close", () => this.props.displaySelectedPage("HOME"))
    else if (this.props.pageKey === "HOME.DETAILED.SHARE")
      return this.scene(<DetailedShareExpense />, "SHARE EXPENSE SUMMARY", true, "close", () => this.props.displaySelectedPage("HOME"))
    else if (this.props.pageKey === "HOME.DETAILED.REMINDER")
      return this.scene(<DetailedReminder />, "REMINDER SUMMARY", true, "close", () => this.props.displaySelectedPage("HOME"))
    else
      return this.scene(<Home />, "SMART EXPENSE MANAGER")
  }

  render() {
    return this.renderScene()
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
    pageKey: state.tabBar.pageKey
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displaySelectedPage: (pageKey) => dispatch(displaySelectedPageAction(pageKey)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)