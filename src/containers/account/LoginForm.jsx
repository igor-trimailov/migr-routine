import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import get from 'lodash/get'

import LoginForm from '../../components/account/LoginForm'
import * as LoginActions from '../../actions'

const mapStateToProps = (state, ownProps) => {
  const { account, user } = state
  return {
    userName: get(user, 'name', ''),
    isLoading: account.isLoading,
    isRegistered: account.isRegistered,
    isLoggedIn: account.isLoggedIn,
    error: account.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(LoginActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
