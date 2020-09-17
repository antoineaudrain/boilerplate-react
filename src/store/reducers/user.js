import {
  SET_TOKEN,
  RESTORE_TOKEN,
  SET_USER,
  LOGOUT
} from '../constants/user'

const initialState = {
  token: null,
  username: null,
  email: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        token: action.token
      }
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      }
    case SET_USER:
      return {
        ...state,
        username: action.user.username,
        email: action.user.email
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}