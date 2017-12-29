export const createAction = (type, payload, saveStore = false) => {
  let action = { type: type }
  if (typeof payload != "undefined") {
    action.payload = payload

    if (payload instanceof Error) {
      action.error = true
    }
    action.saveStore = saveStore
  }

  return action
}

export const errorAction = error => createAction("GENERIC", error)

export const noopAction = () => createAction("GENERIC")

export const isOK = action => !action.error

export const isError = action => !!action.error

export const actionShouldSaveStore = action => action.saveStore && !action.error