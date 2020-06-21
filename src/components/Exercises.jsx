import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import { getAudioManager } from '../utils'
import ExerciseList from './exercise/ExerciseList'
import { Jumbotron } from './common'

function Exercises(props) {
  const { t } = useTranslation()
  const history = useHistory()
  const { exercises, routineId, actions } = props

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
      <Jumbotron
        heading={t('exercises.header.heading')}
        text={t('exercises.header.text')}
        image="logo.png"
      >
        <Button variant="secondary" onClick={startExercise}>
          {t('exercises.header.button')}
        </Button>
      </Jumbotron>
      <ExerciseList {...{ actions, exercises, routineId }} />
    </div>
  )
}

export default Exercises
