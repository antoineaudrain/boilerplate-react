import AsyncStorage from '@react-native-community/async-storage'

export const localStorage = {
  set: (key, value) => AsyncStorage.setItem(key, value),
  get: (key) => AsyncStorage.getItem(key),
  merge: (key, value) => AsyncStorage.mergeItem.mergeItem(key, value),
  remove: (key) => AsyncStorage.getItem(key),
}