import { ActionTypes } from '../actions'

const accountDefaultState = {
  isOpened: false,
  isRegistered: false,
  isLoggedIn: false,
  isLoading: false,
  error: '',
}

function account(state = accountDefaultState, action) {
  switch (action.type) {
    case ActionTypes.ACCOUNT_OPEN:
      return {
        ...state,
        isOpened: true,
      }

    case ActionTypes.ACCOUNT_REQUEST_LOGIN:
    case ActionTypes.ACCOUNT_REQUEST_REGISTER:
      return {
        ...state,
        isLoading: true,
      }

    case ActionTypes.ACCOUNT_RECEIVE_REGISTER_SUCCESS:
      return { ...state, isLoading: false, isRegistered: true }

    case ActionTypes.ACCOUNT_RECEIVE_LOGIN_SUCCESS:
      return { ...state, isLoading: false, isLoggedIn: true }

    case ActionTypes.ACCOUNT_RECEIVE_LOGIN_ERROR:
    case ActionTypes.ACCOUNT_RECEIVE_REGISTER_ERROR:
      const error = action.payload.error
      return { ...state, isLoading: false, error }

    case ActionTypes.ACCOUNT_LOGOUT:
      return accountDefaultState

    default:
      return state
  }
}

export default account
