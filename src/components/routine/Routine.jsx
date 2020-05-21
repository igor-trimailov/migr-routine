import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Button, Image } from 'react-bootstrap'

import { Translate } from '../common/Translate'

function Routine({ routine, index, selectRoutine }) {
  const onSelectRoutine = () => {
    selectRoutine(routine.id)
  }

  return (
    <Draggable draggableId={routine.id.toString()} index={index}>
      {(provided) => (
        <div
          className="routines-list__item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="routines-list__item-container">
            <div className="routines-list__item-image">
              <Image src={process.env.PUBLIC_URL + '/images/' + routine.image.src}
              alt={routine.image.alt} fluid />
            </div>
            <div className="routines-list__item-text">
              <div className="routines-list__item-name">
                <Translate item={routine.name} />
              </div>
              <div className="routines-list__item-description">
                <Translate item={routine.description} />
              </div>
            </div>
            <div className="routines-list__item-button">
              <Button variant="primary" onClick={onSelectRoutine}>
                <Translate lt={'routines.routine.buttons.start'} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default Routine
