import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useTranslation } from 'react-i18next'
import {
  ListGroupItem,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from 'react-bootstrap'

function ExerciseListItem({ actions, routineId, exercise, index }) {
  const { t, i18n } = useTranslation()
  const selectedLanguage = i18n.language

  return (
    <Draggable draggableId={exercise.id.toString()} index={index}>
      {(provided) => (
        <ListGroupItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="exercise-list-item">
            <div className="exercise-list-item__name">
              {exercise.name[selectedLanguage]}
            </div>
            <div className="exercise-list-item__duration">
              <DropdownButton
                as={ButtonGroup}
                key={`${exercise.id}-duration`}
                id={`dropdown-button-drop-duration`}
                drop="down"
                variant="secondary"
                title={`${exercise.duration} ${t('exercises.exercise.duration_unit')}`}
                onSelect={(duration) => {
                  actions.setExerciseDuration({
                    routineId,
                    exerciseId: exercise.id,
                    duration,
                  })
                }}
              >
                <Dropdown.Item eventKey="15">15</Dropdown.Item>
                <Dropdown.Item eventKey="30">30</Dropdown.Item>
                <Dropdown.Item eventKey="45">45</Dropdown.Item>
                <Dropdown.Item eventKey="60">60</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </ListGroupItem>
      )}
    </Draggable>
  )
}

export default ExerciseListItem
