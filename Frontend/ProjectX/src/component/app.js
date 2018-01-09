/**
 * React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from "react"
import { AppRegistry } from 'react-native';
import BackgroundTasks from './background-tasks';
import { createStore, applyMiddleware } from "redux"
import { createEpicMiddleware } from "redux-observable"
import { Provider } from "react-redux"
import { createLogger } from "redux-logger"
import { reducer } from "../reducer/index"
import { rootEpic } from "../middleware/index"

export default function () {
  const store = createStore(
    reducer,
    applyMiddleware(...[createEpicMiddleware(rootEpic), __DEV__ && logger].filter(Boolean)))

  const App = () =>
    <Provider store={store}>
      <BackgroundTasks />
    </Provider>

  AppRegistry.registerComponent("ProjectX", () => (props => <App />))
}

const logger = createLogger({
  level: "log"
})