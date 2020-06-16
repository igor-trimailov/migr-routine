import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { get } from 'lodash'

import { Exercises } from '../components'
import * as ExercisesActions from '../actions'

const mapStateToProps = (state, ownProps) => {
  const routineId = get(ownProps, 'match.params.routineId')
  const exercises = get(state, ['exercises', routineId], [])

  return {
    routineId,
    exercises,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ExercisesActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercises)
