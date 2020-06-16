import React from 'react'
import classNames from 'classnames'

function ExerciseControls(props) {
  const { play, playCallback, nextCallback, previousCallback, disabled } = props

  const controlsClassName = classNames('exercise-controls', {
    'exercise-controls--disabled': disabled,
  })
  const playClassName = classNames({
    'exercise-controls__play': !play,
    'exercise-controls__pause': play,
  })

  const onPlay = () => {
    if (!disabled) {
      playCallback()
    }
  }

  const onNext = () => {
    if (!disabled) {
      nextCallback()
    }
  }

  return (
    <div className={controlsClassName}>
      <span
        className="exercise-controls__previous"
        onClick={previousCallback}
      ></span>
      <span className={playClassName} onClick={onPlay}></span>
      <span className="exercise-controls__next" onClick={onNext}></span>
    </div>
  )
}

export default React.memo(ExerciseControls)
