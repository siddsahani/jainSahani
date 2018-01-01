import { isOK } from "../action/index"

export default function userProfile(state = {}, action) {
  switch (action.type) {
    case "LOGGED_IN": {
      const { userId, ...rest } = state
      return {
        userId: isOK(action) ? action.payload.userId : userId,
        ...rest
      }
    }
    default:
      return state
  }
}