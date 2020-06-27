import { ActionTypes } from '../actions'

const accountDefaultState = {
  openLogin: true,
  openRegister: false,
  openReset: false,
  isLoading: false,
  error: '',
  notification: '',
}

function account(state = accountDefaultState, action) {
  switch (action.type) {
    case ActionTypes.ACCOUNT_OPEN_LOGIN_FORM:
      return {
        ...accountDefaultState,
        openLogin: true,
      }
    case ActionTypes.ACCOUNT_OPEN_REGISTER_FORM:
      return {
        ...accountDefaultState,
        openLogin: false,
        openRegister: true,
      }
    case ActionTypes.ACCOUNT_OPEN_RESET_FORM:
      return {
        ...accountDefaultState,
        openLogin: false,
        openReset: true,
      }
    case ActionTypes.ACCOUNT_REQUEST_LOGIN:
    case ActionTypes.ACCOUNT_REQUEST_REGISTER:
    case ActionTypes.ACCOUNT_REQUEST_PASSWORD_RESET:
      return {
        ...state,
        isLoading: true,
      }

    case ActionTypes.ACCOUNT_RECEIVE_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        openRegister: false,
        openLogin: true,
        notification: 'User successfully registered!',
      }

    case ActionTypes.ACCOUNT_RECEIVE_LOGIN_SUCCESS:
      return { ...state, isLoading: false, openLogin: false }

    case ActionTypes.ACCOUNT_RECEIVE_PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        notification: 'Recovery email successfully sent',
      }

    case ActionTypes.ACCOUNT_RECEIVE_API_ERROR:
      const error = action.payload.error
      return { ...state, isLoading: false, error }

    case ActionTypes.ACCOUNT_LOGOUT:
      return accountDefaultState

    default:
      return state
  }
}

export default account
