import React from "react"
import { connect } from "react-redux"
import Login from "./login"
import Dashboard from "./dashboard"

const AppNavigator = props => {
  if (props.loggedIn)
    return (<Login />)
  else
    return (<Dashboard />)
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps)(AppNavigator)

//const isWaiting = state => isWaitingNetwork(state)