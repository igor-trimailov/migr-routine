import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LoginForm from '../../components/account/LoginForm'
import * as LoginActions from '../../actions'

const mapStateToProps = (state, ownProps) => {
  const { account } = state
  return {
    ...account,
    closeModalCallback: ownProps.closeModal 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(LoginActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
