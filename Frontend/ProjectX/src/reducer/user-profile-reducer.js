import { isOK } from "../action/index"

export default function userProfile(state = {}, action) {
  switch (action.type) {
    case "LOGGED_IN": {
      const { mobileNumber, ...rest } = state
      return {
        mobileNumber: isOK(action) ? action.payload.mobileNumber : mobileNumber,
        ...rest
      }
    }
    default:
      return state
  }
}