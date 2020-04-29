import React, { ReactFragment } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import configureStore from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom'

import './scss/index.scss'
import { Exercise, Exercises, Routines, Header } from './containers'
import { ScrollToTop } from './components/common'
import Modal from './components/common/Modal'
import ExerciseFinished from './components/exercise/ExerciseFinished'

const { store, persistor } = configureStore()

export default function RouterSwitch() {
  const location = useLocation()
  const background = location.state && location.state.background

  return (
    <div>
      <Switch location={background || location}>
        <Route
          exact
          path={process.env.PUBLIC_URL + '/routine/:routineId'}
          component={Exercises}
        />
        <Route
          exact
          path={
            process.env.PUBLIC_URL + '/routine/:routineId/exercise/:exerciseId'
          }
          component={Exercise}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/finished'}
          component={ExerciseFinished}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/account/login'}
          component={Routines}
        />
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Routines} />
      </Switch>
      {background && (
        <Route
          exact
          path={process.env.PUBLIC_URL + '/account/:subroute'}
          children={<Modal />}
        />
      )}
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Header />
        <ScrollToTop />
        <RouterSwitch />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
