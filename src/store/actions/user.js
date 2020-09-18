import { SET_TOKEN, RESTORE_TOKEN, SET_USER, LOGOUT } from '../constants/user'

export const restoreToken = (token) => ({
  type: RESTORE_TOKEN,
  token
})

export const setToken = (token) => ({
  type: SET_TOKEN,
  token
})

export const setUser = (user) => ({
  type: SET_USER,
  user
})

export const logout = () => ({
  type: LOGOUT
})
