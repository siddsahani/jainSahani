import { isOK } from "../action/index"

export default function auth(state = { loading: false, loggedIn: false }, action) {
  switch (action.type) {
    case "LOGIN": {
      const { loading, ...rest } = state
      return {
        loading: true,
        ...rest
      }
    }
    case "LOGGED_IN": {
      const { loading, loggedIn, ...rest } = state
      return {
        loading: false,
        loggedIn: isOK(action) ? true : loggedIn,
        ...rest
      }
    }
    default:
      return state
  }
}