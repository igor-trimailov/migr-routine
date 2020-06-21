import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useTranslation } from 'react-i18next'

import Routine from './routine/Routine'
import { Jumbotron } from './common'

import { handleDragEnd } from '../utils'

function Routines({ actions, routines }) {
  const history = useHistory()
  const { t } = useTranslation()

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
      <Jumbotron
        heading={t('routines.header.heading')}
        text={t('routines.header.text')}
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
