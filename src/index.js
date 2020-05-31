import React, { Suspense } from 'react'
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
import './i18next'
import { Exercise, Exercises, Routines, TopNav, Modal } from './containers'
import { ScrollToTop, Footer, Loader } from './components/common'
import ExerciseFinished from './components/exercise/ExerciseFinished'

const { store, persistor } = configureStore()

export default function RouterSwitch() {
  const location = useLocation()
  const background = location.state && location.state.background

  return (
    <div className="body">
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
          component={Modal}
        />
      )}
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Suspense fallback={<Loader />}>
          <TopNav />
          <ScrollToTop />
          <RouterSwitch />
          <Footer />
        </Suspense>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
