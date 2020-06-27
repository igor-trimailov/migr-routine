import { ActionTypes } from '../actions'
import { register, authenticate, passwordReset } from '../actions/api'

// after the action?
export default (store) => (next) => (action) => {
  next(action)
  // const state = store.getState
  const dispatch = store.dispatch

  switch (action.type) {
    case ActionTypes.ACCOUNT_REQUEST_REGISTER:
      register(dispatch, action.payload)
      break
    case ActionTypes.ACCOUNT_REQUEST_LOGIN:
      authenticate(dispatch, action.payload)
      break

    case ActionTypes.ACCOUNT_REQUEST_PASSWORD_RESET:
      passwordReset(dispatch, action.payload)
      break
    default:
    // console.log('Unrecognized action: ' + action.type)
  }
}
