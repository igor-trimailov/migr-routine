import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { TopNav } from '../components/common'
import * as HeaderActions from '../actions'

const mapStateToProps = (state) => {
  return {
    locales: state.locales,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(HeaderActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
