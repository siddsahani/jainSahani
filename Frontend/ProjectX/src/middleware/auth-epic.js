import { isOK, noopAction } from "../action/index"
import { loggedInAction } from "../action/auth-action"

export const loginEpic = (action$, store) =>
	action$
		.ofType("LOGIN")
		.filter(isOK)
		.map(action => loggedInAction('1234567890'))//Stubbed payload