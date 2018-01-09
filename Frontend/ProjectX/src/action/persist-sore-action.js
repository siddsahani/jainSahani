import { createAction } from "./index"

export const loadStoreAction = (userId) => createAction("LOAD_STORE", { userId: userId })

export const storeLoadedAction = (state) => createAction("STORE_LOADED", { state: state })
