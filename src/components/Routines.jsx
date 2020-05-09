import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import Routine from './routine/Routine'
import Translate from '../components/common/Translate'
import { Header } from './common'

import { handleDragEnd } from '../utils'

function Routines({ actions, routines }) {
  const history = useHistory()

  useEffect(() => {
    actions.requestRoutinesData()
  }, [actions])

  const setRoutinesCallback = (routines) => {
    actions.orderRoutines(routines)
  }

  const onRoutineClick = (routineId) => {
    history.push(process.env.PUBLIC_URL + '/routine/' + routineId)
  }

  const onDragEnd = (result) => {
    handleDragEnd(result, routines, setRoutinesCallback)
  }

  return (
    <div className="routines">
      <Header
        heading={<Translate lt="routines.header.heading" />}
        text={<Translate lt="routines.header.text" />}
        image="logo.png"
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <div
              className="routines-list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {routines.map((routine, index) => (
                <Routine
                  routine={routine}
                  index={index}
                  key={routine.id}
                  selectRoutine={onRoutineClick}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Routines
