import { createAction } from "./index"

//export const displaySelectedAddPageAction = (addPageKey) => createAction("DISPLAY_SELECTED_ADD_PAGE", { addPageKey: addPageKey })

export const addPersonalExpenseAction = (description, amount, date) => createAction("ADD_PERSONAL_EXPENSE", { description: description, amount: amount, date: date }, true)

export const addShareExpenseAction = (friends, description, amount, date) => createAction("ADD_SHARE_EXPENSE", { friends: friends, description: description, amount: amount, date: date })

export const addReminderAction = (description, amount, date) => createAction("ADD_REMINDER", { description: description, amount: amount, date: date })