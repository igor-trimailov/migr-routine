import React from 'react'
import { useHistory } from 'react-router-dom'

import { Button } from 'react-bootstrap'

import { getAudioManager } from '../utils'
import Translate from './common/Translate'
import ExerciseList from './exercise/ExerciseList'
import { Header } from './common'

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
      <Header
        heading={<Translate lt="exercises.header.heading" />}
        text={<Translate lt="exercises.header.text" />}
        image="logo.png"
      >
        <Button variant="secondary" onClick={startExercise}>
          <Translate lt="exercises.header.button" />
        </Button>
      </Header>
      <ExerciseList {...{ actions, exercises, routineId, locale }} />
    </div>
  )
}

export default Exercises
