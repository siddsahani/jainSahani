import { isOK } from "../action/index"

export default function tabBar(state = { pageKey: '' }, action) {
  switch (action.type) {
    case "DISPLAY_SELECTED_PAGE": {
      const { pageKey, ...rest } = state
      return {
        pageKey: action.payload.pageKey,
        ...rest
      }
    }
    default:
      return state
  }
}