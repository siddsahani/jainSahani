import { Observable } from "rxjs"
import { isOK, noopAction, actionShouldSaveStore } from "../action/index"
import { loadStore, persistStore } from "../utils/file"
import { storeLoadedAction } from "../action/persist-sore-action"
export const persistStoreEpic = (action$, store) =>
  action$
    .filter(actionShouldSaveStore)
    .mergeMap(action =>
      Observable
        .fromPromise(persistStore(1234, hydrateStore(store.getState(), action.type)))
        .map(() => noopAction()))

const hydrateStore = (state, actionType) => ({
  userPersonalExpense: state.userPersonalExpense
})

export const loadStoreEpic = (action$, store) =>
  action$
    .ofType("LOAD_STORE")
    .filter(isOK)
    .mergeMap(action =>
      Observable
        .fromPromise(loadStore(action.payload.userId))
        .flatMap(state => Observable.from([storeLoadedAction(state)])))