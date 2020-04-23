import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Exercise } from '../components'
import config from '../configuration'
import { BREAK_EXERCISE } from '../constants'
import * as ExerciseListActions from '../actions'

import { get } from 'lodash'

// get next exercise in line
function getNextExercise(exercise, exerciseList) {
  if (!exercise.current) {
    return null
  }

  const exerciseIndex = exerciseList.findIndex(
    (item) => item.id === exercise.current.id
  )

  // no need for break after last exercise
  if (exerciseIndex === exerciseList.length - 1) {
    return null
  }


  if (exercise.current.type !== BREAK_EXERCISE) {
    return config.breakExercise
  }

  const previousExerciseIndex = exerciseList.findIndex(
    (item) => item.id === exercise.previous.id
  )

  return exerciseList[previousExerciseIndex + 1]
}

const mapStateToProps = (state, ownProps) => {
  const { exercise, exercises } = state

  const routineId = get(ownProps, 'match.params.routineId')

  return {
    config,
    routineId,
    exercise: exercise.current,
    previousExercise: exercise.previous,
    nextExercise: getNextExercise(exercise, exercises[routineId]),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ExerciseListActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercise)
