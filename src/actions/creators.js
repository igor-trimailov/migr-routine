import { ActionTypes } from './types'

export function requestRoutines() {
  return {
    type: ActionTypes.REQUEST_ROUTINES,
  }
}

export function receiveRoutinesSuccess(data) {
  return {
    type: ActionTypes.RECEIVE_ROUTINES_SUCCESS,
    payload: data,
  }
}

export function receiveRoutinesError(error) {
  return {
    type: ActionTypes.RECEIVE_ROUTINES_ERROR,
    payload: error,
  }
}

export function orderRoutines(data) {
  return {
    type: ActionTypes.ORDER_ROUTINES,
    payload: data,
  }
}

export function orderExercises(data) {
  return {
    type: ActionTypes.ORDER_EXERCISES,
    payload: data,
  }
}

export function startExercise(exercise) {
  return {
    type: ActionTypes.START_EXERCISE,
    payload: exercise,
  }
}

export function setExerciseDuration(data) {
  return {
    type: ActionTypes.SET_EXERCISE_DURATION,
    payload: data,
  }
}

export function finishExercise() {
  return {
    type: ActionTypes.FINISH_EXERCISE,
  }
}

export function apiError(error) {
  return {
    type: ActionTypes.API_ERROR,
    payload: error,
  }
}

export function accountOpenLoginForm() {
  return {
    type: ActionTypes.ACCOUNT_OPEN_LOGIN_FORM,
  }
}

export function accountRequestLogin(formData) {
  return {
    type: ActionTypes.ACCOUNT_REQUEST_LOGIN,
    payload: formData,
  }
}

export function accountLoginSuccess(data) {
  return {
    type: ActionTypes.ACCOUNT_RECEIVE_LOGIN_SUCCESS,
    payload: data,
  }
}

export function accountLogout() {
  return {
    type: ActionTypes.ACCOUNT_LOGOUT,
  }
}

export function accountOpenRegisterForm() {
  return {
    type: ActionTypes.ACCOUNT_OPEN_REGISTER_FORM,
  }
}

export function accountRequestRegister(data) {
  return {
    type: ActionTypes.ACCOUNT_REQUEST_REGISTER,
    payload: data,
  }
}

export function accountRegisterSuccess(data) {
  return {
    type: ActionTypes.ACCOUNT_RECEIVE_REGISTER_SUCCESS,
    payload: data,
  }
}

export function accountOpenPasswordResetForm() {
  return {
    type: ActionTypes.ACCOUNT_OPEN_RESET_FORM,
  }
}

export function accountRequestPasswordReset(data) {
  return {
    type: ActionTypes.ACCOUNT_REQUEST_PASSWORD_RESET,
    payload: data,
  }
}

export function accountPasswordResetSuccess(data) {
  return {
    type: ActionTypes.ACCOUNT_RECEIVE_PASSWORD_RESET_SUCCESS,
    payload: data,
  }
}

export function accountApiError(error) {
  return {
    type: ActionTypes.ACCOUNT_RECEIVE_API_ERROR,
    payload: error,
  }
}