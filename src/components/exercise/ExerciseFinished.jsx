import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function ExerciseFinished() {
  const history = useHistory()
  const { t } = useTranslation()

  const goBack = () => {
    history.push(`${process.env.PUBLIC_URL}/`)
  }

  return (
    <div className="exercise-finished">
      <div className="exercise-finished__header">
        {t('exercises.exercise.finished.header')}
      </div>
      <div className="exercise-finished__body">
        {t('exercises.exercise.finished.body')}
      </div>
      <div className="exercise-finished__footer">
        <Button onClick={goBack}>
          {t('exercises.exercise.finished.button')}
        </Button>
      </div>
    </div>
  )
}

export default ExerciseFinished
