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

export function switchLocale(data) {
  return {
    type: ActionTypes.SWITCH_LOCALE,
    payload: data,
  }
}

export function finishExercise() {
  return {
    type: ActionTypes.FINISH_EXERCISE,
  }
}
