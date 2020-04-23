import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import Translate from '../common/Translate'

function ExerciseFinished() {
  const history = useHistory()

  const goBack = () => {
    history.push(`${process.env.PUBLIC_URL}/`)
  }

  return (
    <div className="exercise-finished">
      <div className="exercise-finished__header">
        <Translate lt="exercises.exercise.finished.header" />
      </div>
      <div className="exercise-finished__body">
        <Translate lt="exercises.exercise.finished.body" />
      </div>
      <div className="exercise-finished__footer">
        <Button onClick={goBack}>
          <Translate lt="exercises.exercise.finished.button" />
        </Button>
      </div>
    </div>
  )
}

export default ExerciseFinished
