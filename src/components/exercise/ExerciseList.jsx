import React, {useCallback} from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { ListGroup } from 'react-bootstrap'
import { handleDragEnd } from '../../utils'

import ExerciseListItem from './ExerciseListItem'

function ExerciseList({ actions, routineId, exercises, onExerciseClick }) {

  const setExercisesCallback = useCallback((exercises) => {
    actions.orderExercises({ routineId, exercises })
  }, [actions, routineId])

  const onDragEnd = (result) => {
    handleDragEnd(result, exercises, setExercisesCallback)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <ListGroup
            className="exercise-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {exercises.map((exercise, index) => (
              <ExerciseListItem
                {...{
                  actions,
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
