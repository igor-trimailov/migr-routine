import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import configureStore from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './scss/index.scss'
import { Exercise, Exercises, Routines, Header } from './containers'
import { ScrollToTop } from './components/common'
import ExerciseFinished from './components/exercise/ExerciseFinished'

const { store, persistor } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Header />
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop />
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + '/routine/:routineId'}
            component={Exercises}
          />
          <Route
            exact
            path={
              process.env.PUBLIC_URL +
              '/routine/:routineId/exercise/:exerciseId'
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
            path={process.env.PUBLIC_URL + '/'}
            component={Routines}
          />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
