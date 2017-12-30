import { isError } from "../action/index"

export default function error(state = {}, action) {
	const { error, ...rest } = state
	return isError(action) ? { error: action.payload } : {}
}
