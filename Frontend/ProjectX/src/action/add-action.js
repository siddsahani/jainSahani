import { createAction } from "./index"

export const displaySelectedAddPageAction = (addPageKey) => createAction("DISPLAY_SELECTED_ADD_PAGE", { tabKey: tabKey })