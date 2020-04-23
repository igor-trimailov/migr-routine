import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Routines } from '../components'
import * as RoutineActions from '../actions'

const mapStateToProps = (state) => {
  return {
    routines: state.routines,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(RoutineActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routines)
