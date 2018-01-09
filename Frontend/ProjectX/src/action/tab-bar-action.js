import { createAction } from "./index"

export const displaySelectedPageAction = (pageKey) => createAction("DISPLAY_SELECTED_PAGE", { pageKey: pageKey })