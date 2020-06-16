import { ActionTypes } from '../actions'

const defaultUserState = {}
function user(state = defaultUserState, action) {
  switch (action.type) {
    case ActionTypes.ACCOUNT_RECEIVE_LOGIN_SUCCESS:
      return {
        ...action.payload,
      }

    case ActionTypes.ACCOUNT_LOGOUT:
      return defaultUserState

    default:
      return state
  }
}

export default user
