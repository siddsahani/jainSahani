import { createAction } from "./index"

export const loginAction = () => createAction("LOGIN")

export const loginErrorAction = error => createAction("LOGIN", error)

export const loggedInAction = (mobileNumber) => createAction("LOGGED_IN", { mobileNumber: mobileNumber })

export const loggedInErrorAction = error => createAction("LOGGED_IN", error)