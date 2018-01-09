import { isOK } from "../action/index"

export default function userPersonalExpense(state = { personalExpense: [] }, action) {
  switch (action.type) {
    case "ADD_PERSONAL_EXPENSE": {
      const { personalExpense, ...rest } = state
      personalExpense.push({ description: action.payload.description, amount: action.payload.amount, date: action.payload.date })
      return { personalExpense, ...rest }
    }
    default:
      return state
  }
}