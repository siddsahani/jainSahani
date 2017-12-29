import { combineEpics } from "redux-observable"
import { Observable } from "rxjs"
import { loginEpic } from "./auth-epic"

export const rootEpic = combineEpics(
  loginEpic
)

