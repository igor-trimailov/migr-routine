import React from 'react'

import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { ListGroup } from 'react-bootstrap'

import { handleDragEnd } from '../../utils'

import ExerciseListItem from './ExerciseListItem'

function ExerciseList({ actions, routineId, exercises, onExerciseClick, locale }) {
  const setExercisesCallback = (exercises) => {
    actions.orderExercises({ routineId, exercises })
  }

  const onDragEnd = (result) => {
    handleDragEnd(result, exercises, setExercisesCallback)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <ListGroup ref={provided.innerRef} {...provided.droppableProps}>
            {exercises.map((exercise, index) => (
              <ExerciseListItem
                {...{
                  actions,
                  locale,
                  exercise,
                  routineId,
                  index,
                  key: exercise.id,
                  selectExercise: onExerciseClick,
                }}
              />
            ))}
            {provided.placeholder}
          </ListGroup>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default ExerciseList
