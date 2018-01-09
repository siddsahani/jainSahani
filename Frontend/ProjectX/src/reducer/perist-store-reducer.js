import { isOK } from "../action/index"
import { isDefined } from "../utils/util"

export const persistStoreReducer = (reducer, state, action) => {
  const newState = reducer(state, action)
  switch (action.type) {
    case "STORE_LOADED": {
      const {userPersonalExpense, ...rest } = newState
      return { userPersonalExpense: action.payload.state !== null ? action.payload.state.userPersonalExpense : userPersonalExpense, ...rest }
    }

    default:
      return newState
  }
}