import { createAction } from "./index"

export const loginAction = () => createAction("LOGIN")

export const loginErrorAction = error => createAction("LOGIN", error)

export const loggedInAction = (userId) => createAction("LOGGED_IN", { userId: userId })

export const loggedInErrorAction = error => createAction("LOGGED_IN", error)