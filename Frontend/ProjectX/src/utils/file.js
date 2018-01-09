import RNFetchBlob from "react-native-fetch-blob"

export const userRootDir = (userId) => {
  console.log("piyushlog persistStore", RNFetchBlob.fs.dirs.CacheDir + "/" + userId + "/")
  return RNFetchBlob.fs.dirs.CacheDir + "/" + userId + "/"
}

const persistedStorePath = (userId) => userRootDir(userId) + "store.json"

export const persistStore = async (userId, state) => {
  await RNFetchBlob.fs.writeFile(persistedStorePath(userId), JSON.stringify(state), 'utf8')
}

export const loadStore = async (userId) => {
  const filePath = persistedStorePath(userId)
  console.log("----loadStore called-----", filePath)
  if (!await RNFetchBlob.fs.exists(filePath))
    return null
  return JSON.parse(await RNFetchBlob.fs.readFile(filePath, 'utf8'))
}

