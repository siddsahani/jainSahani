import { combineReducers } from "redux"
import error from "./error-reducer"
import auth from "./auth-reducer"
import userProfile from "./user-profile-reducer"
import tabBar from "./tab-bar-reducer"

export const reducer = combineReducers({
  error: error,
  auth: auth,
  userProfile: userProfile,
  tabBar: tabBar
})
