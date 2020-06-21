import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Header } from '../components/common'
import * as HeaderActions from '../actions'

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(HeaderActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
