import { isOK } from "../action/index"

export default function tabBar(state = { tabKey: '' }, action) {
  switch (action.type) {
    case "DISPLAY_SELECTED_TAB_PAGE": {
      const { tabKey, ...rest } = state
      return {
        tabKey: action.payload.tabKey,
        ...rest
      }
    }
    default:
      return state
  }
}