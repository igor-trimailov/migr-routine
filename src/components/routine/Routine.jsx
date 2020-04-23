import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Button, Card } from 'react-bootstrap'

import Translate from '../common/Translate'

function Routine({ routine, index, selectRoutine }) {
  const onSelectRoutine = () => {
    selectRoutine(routine.id)
  }

  return (
    <Draggable draggableId={routine.id.toString()} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          border="light"
        >
          <Card.Body>
            <Card.Title>
              <Translate item={routine.name} />
            </Card.Title>
            <Card.Text>
              <Translate item={routine.description} />
            </Card.Text>
            <Button variant="primary" onClick={onSelectRoutine}>
              <Translate lt={'routines.routine.buttons.start'} />
            </Button>
          </Card.Body>
        </Card>
      )}
    </Draggable>
  )
}

export default Routine
