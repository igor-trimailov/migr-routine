import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LoginForm from '../../components/account/LoginForm'
import * as LoginActions from '../../actions'

const mapStateToProps = (state, ownProps) => {
  const locale = state.locales.find((locale) => locale.selected)

  return {
    locale,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(LoginActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
