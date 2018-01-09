import { combineEpics } from "redux-observable"
import { Observable } from "rxjs"
import { loginEpic } from "./auth-epic"
import { persistStoreEpic, loadStoreEpic } from "./persisit-epic"

export const rootEpic = combineEpics(
  loginEpic,
  persistStoreEpic,
  loadStoreEpic
)

