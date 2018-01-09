import { combineReducers } from "redux"
import error from "./error-reducer"
import auth from "./auth-reducer"
import userProfile from "./user-profile-reducer"
import tabBar from "./tab-bar-reducer"
import calendar from "./calendar-reducer"
import userPersonalExpense from "./user-personal-expense-reducer"
import { persistStoreReducer } from "./perist-store-reducer"

export const reducer = (state, action) =>
  persistStoreReducer((state, action) =>
    composeReducer(combineReducers({ //Need to understand composeReducer how this is working..
      error: error,
      auth: auth,
      userProfile: userProfile,
      tabBar: tabBar,
      calendar: calendar,
      userPersonalExpense: userPersonalExpense
    }),
      state,
      action),
    state,
    action)

const composeReducer = (reducer, state, action) => reducer(state, action) 
