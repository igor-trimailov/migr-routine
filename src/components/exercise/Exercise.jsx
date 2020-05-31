import React, { useState, useCallback } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useInterval, useSpeech } from '../../hooks'
import ExerciseControls from './ExerciseControls'

import { playSound } from '../../utils'
import { get } from 'lodash'

export default function Exercise({ exercise, nextExercise, actions }) {
  const [seconds, setSeconds] = useState(get(exercise, 'duration', 30))
  const [play, setPlay] = useState(false)
  const [soundPlaying, setSoundPlaying] = useState(true)
  const history = useHistory()
  const { i18n } = useTranslation()

  const selectedLanguage = i18n.language
  const exerciseName = exercise ? exercise.name[selectedLanguage] : ''

  useInterval(
    () => {
      if (seconds === 1 && play) {
        playSound('beep.wav', nextCallback, 2)
      }

      if (seconds < 6 && seconds !== 1) {
        playSound('beep.wav')
      }

      setSeconds(seconds - 1)
    },
    play ? 1000 : null
  )

  useSpeech(
    exerciseName,
    () => {
      setSoundPlaying(true)
      setPlay(false)
    },
    () => {
      setTimeout(() => {
        setPlay(true)
        setSoundPlaying(false)
      }, 1000)
    }
  )

  const startExercise = useCallback(
    (exercise) => {
      if (exercise) {
        setPlay(false)
        setSeconds(exercise.duration)
        actions.startExercise(exercise)
      } else {
        setPlay(false)
        actions.finishExercise()
      }
    },
    [actions]
  )

  const nextCallback = useCallback(() => {
    startExercise(nextExercise)
  }, [startExercise, nextExercise])

  const previousCallback = useCallback(() => {
    startExercise(exercise)
  }, [startExercise, exercise])

  const playCallback = useCallback(() => {
    setPlay(!play)
  }, [play])

  const goBack = () => {
    // cancel()
    actions.finishExercise()
    history.push(`${process.env.PUBLIC_URL}/finished`)
  }

  if (!exercise) {
    // in case the exercise was not found, redirect to main page
    goBack()
    return null
  }

  return (
    <div className="exercise">
      <div className="exercise__header">
        {exercise.name[selectedLanguage]}
        <div className="exercise__header-icon" onClick={goBack}></div>
      </div>
      <div className="exercise__body">
        <div className="exercise__image">
          <img
            src={process.env.PUBLIC_URL + '/images/' + exercise.image}
            alt={exercise.image_alt}
          />
        </div>
        <div className="exercise__timer">
          <CircularProgressbar
            value={seconds}
            minValue="0"
            maxValue={exercise.duration}
            text={seconds}
            styles={buildStyles({
              strokeLinecap: 'butt',
              textSize: '20px',
              pathTransitionDuration: 0.5,
              pathColor: '#13a0c3',
              textColor: '#13a0c3',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          />
        </div>
      </div>
      <div className="exercise__footer">
        <ExerciseControls
          {...{
            play,
            playCallback,
            nextCallback,
            previousCallback,
            disabled: soundPlaying,
          }}
        />
      </div>
    </div>
  )
}
