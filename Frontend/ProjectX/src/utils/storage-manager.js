import { AsyncStorage } from "react-native"

const USERID = "com.projectx.USERID"
const AUTHENTICATE = "com.projectx.AUTHENTICATE"

export const loadInitialInfo = async () => {
  const result = {
    userId: await AsyncStorage.getItem(USERID),
    authenticate: await AsyncStorage.getItem(AUTHENTICATE) === "true"
  }
  return result
}

export const loadUserId = async () => await AsyncStorage.getItem(USERID)

export const loadAuthenticateStatus = async () => await AsyncStorage.getItem(USERID) === "true"

export const storeUserId = async (userId) => {
  try {
    //if (nvl(authType) != null)
    await AsyncStorage.setItem(USERID, userId)
  }
  catch (err) {
    throw err
  }
}

export const storeAuthenticateStatus = async (authenticate) => {
  try {
    //if (nvl(authType) != null)
    await AsyncStorage.setItem(AUTHENTICATE, authenticate + "")
  }
  catch (err) {
    throw err
  }
}

