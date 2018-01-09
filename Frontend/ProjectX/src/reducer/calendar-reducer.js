import { isOK } from "../action/index"

export default function calendar(state = { date: undefined }, action) {
  switch (action.type) {
    case "ADD_SELECTED_DATE": {
      const { date, ...rest } = state
      return {
        date: action.payload.date,
        ...rest
      }
    }

    default:
      return state
  }
}