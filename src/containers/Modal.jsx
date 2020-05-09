import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Modal from '../components/common/Modal'
import config from '../configuration'
import * as ModalActions from '../actions'

import { get } from 'lodash'

const mapStateToProps = (state, ownProps) => {
  // const { user } = state

  const subroute = get(ownProps, 'match.params.subroute')

  return {
    config,
    subroute,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ModalActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
