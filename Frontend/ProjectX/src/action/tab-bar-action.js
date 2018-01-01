import { createAction } from "./index"

export const displaySelectedTabPageAction = (tabKey) => createAction("DISPLAY_SELECTED_TAB_PAGE", { tabKey: tabKey })