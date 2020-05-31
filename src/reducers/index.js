import { combineReducers } from 'redux'
import { ActionTypes } from '../actions'
import { omit } from 'lodash'

// keep track of previous exercise
const defaultExerciseState = { previous: null, current: null }
function exercise(state = defaultExerciseState, action) {
  switch (action.type) {
    case ActionTypes.START_EXERCISE:
      return state.current === null
        ? { ...state, current: action.payload }
        : { previous: state.current, current: action.payload }

    case ActionTypes.STOP_EXERCISE:
    case ActionTypes.FINISH_EXERCISE:
      return defaultExerciseState

    default:
      return state
  }
}

function routines(state = [], action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_ROUTINES_SUCCESS:
      return action.payload.routines.map((routine) =>
        omit(routine, 'exercises')
      )

    case ActionTypes.ORDER_ROUTINES:
      return state.length === action.payload.length ? action.payload : state

    default:
      return state
  }
}

function exercises(state = {}, action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_ROUTINES_SUCCESS:
      return action.payload.routines.reduce((acc, routine) => {
        return {
          ...acc,
          [routine.id]: routine.exercises,
        }
      }, {})

    case ActionTypes.ORDER_EXERCISES:
      const { routineId, exercises } = action.payload

      return {
        ...state,
        [routineId]:
          state[routineId].length === exercises.length ? exercises : state,
      }

    case ActionTypes.SET_EXERCISE_DURATION: {
      const { routineId, exerciseId, duration } = action.payload

      return {
        ...state,
        [routineId]: state[routineId].map((exercise) =>
          exercise.id === exerciseId ? { ...exercise, duration } : exercise
        ),
      }
    }

    default:
      return state
  }
}

export default combineReducers({
  exercise,
  exercises,
  routines,
})
