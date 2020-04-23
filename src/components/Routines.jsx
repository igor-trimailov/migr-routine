import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { Container, CardGroup, Jumbotron, Image } from 'react-bootstrap'

import Routine from './routine/Routine'
import Translate from '../components/common/Translate'

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
      <Jumbotron fluid>
        <Container>
          <div className="routines__jumbotron">
            <div className="routines__jumbotron-text">
              <h2>
                <Translate lt="routines.jumbotron.h1" />
              </h2>
              <p>
                <Translate lt="routines.jumbotron.p" />
              </p>
            </div>
            <div className="routines__jumbotron-image">
              <Image src={process.env.PUBLIC_URL + '/images/logo.png'} fluid />
            </div>
          </div>
        </Container>
      </Jumbotron>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <CardGroup ref={provided.innerRef} {...provided.droppableProps}>
              {routines.map((routine, index) => (
                <Routine
                  routine={routine}
                  index={index}
                  key={routine.id}
                  selectRoutine={onRoutineClick}
                />
              ))}
              {provided.placeholder}
            </CardGroup>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Routines
