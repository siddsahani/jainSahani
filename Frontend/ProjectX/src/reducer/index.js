import { combineReducers } from "redux"
import error from "./error-reducer"
import auth from "./auth-reducer"
import userProfile from "./user-profile-reducer"

export const reducer = combineReducers({
  error: error,
  auth: auth,
  userProfile: userProfile
})
