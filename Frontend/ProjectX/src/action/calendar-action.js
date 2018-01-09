import { createAction } from "./index"

export const addSelectedDateAction = (date) => createAction("ADD_SELECTED_DATE", { date: date })