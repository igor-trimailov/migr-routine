import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container, Jumbotron, Button } from 'react-bootstrap'

import { getAudioManager } from '../utils'
import Translate from './common/Translate'
import ExerciseList from './exercise/ExerciseList'

function Exercises(props) {
  const { exercises, routineId, actions, locale } = props

  const history = useHistory()

  const startExercise = () => {
    // safari hack to provide audio for the rest of the app
    getAudioManager()

    const exercise = exercises[0]

    if (exercise) {
      actions.startExercise(exercise)
      history.push(
        process.env.PUBLIC_URL + `/routine/${routineId}/exercise/${exercise.id}`
      )
    }
  }

  return (
    <div className="exercises">
      <Jumbotron fluid>
        <Container>
          <h1>
            <Translate lt="exercises.jumbotron.h1" />
          </h1>
          <p>
            <Translate lt="exercises.jumbotron.p" />
          </p>
          <p>
            <Button variant="secondary" onClick={startExercise}>
              <Translate lt="exercises.jumbotron.button" />
            </Button>
          </p>
        </Container>
      </Jumbotron>
      <ExerciseList {...{ actions, exercises, routineId, locale }} />
    </div>
  )
}

export default Exercises
