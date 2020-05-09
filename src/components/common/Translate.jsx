import React from 'react'
import { useSelector } from 'react-redux'
import { get } from 'lodash'

const translations = {
  en_GB: {
    header: {
      title: 'Exercise Routines',
      nav: {
        about: 'About',
        login: 'Login',
      },
    },
    routines: {
      header: {
        heading: 'Start your exercise by selecting one of the routines!',
        text:
          'Select one of the available routines and start your exercise! More routines will be available soonish',
      },
      routine: {
        buttons: {
          start: 'Start exercise!',
        },
      },
    },
    exercises: {
      header: {
        heading: 'Start your exercise by pressing start button!',
        text:
          'You can change the order of exercises by dragging them around. There will be a 5s break between exercises. Good Luck!',
        button: 'Start exercise!',
      },
      exercise: {
        duration: 'Duration',
        finished: {
          header: 'Congratulations!',
          body:
            'If you feel like you can take on another routine, click on the button below. Otherwise we will see you next time!',
          button: 'Go back to routines',
        },
      },
    },
    footer: null,
  },
  ru_RU: {
    header: {
      title: 'ФизКультАпп',
      nav: {
        about: 'О нас',
        login: 'Вход',
      },
    },
    routines: {
      header: {
        heading: 'Начни упражнения выбрав один из представленных режимов!',
        text:
          'Чтобы начать упражнения, выбери один из представленных ниже режимов',
      },
      routine: {
        buttons: {
          start: 'Начать упражнения!',
        },
      },
    },
    exercises: {
      header: {
        heading: 'Начни зарядку нажав кнопку старт!',
        text:
          'Порядок упражнений можно изменить перетаскивая их пальцем. Между упражнениями будет 5-секундный перерыв. Физкульт привет!',
        button: 'Старт!',
      },
      exercise: {
        duration: 'Продолжительность',
        finished: {
          header: 'Молодец!',
          body:
            'Остался избыток сил на ещё одну зарядку? Жми кнопку ниже и выбирай следующую зарядку! А если нет, то увидимся в следующий раз',
          button: 'Обратно к упражнениям',
        },
      },
    },
    footer: null,
  },
}

function Translate(props) {
  const locales = useSelector((state) => state.locales)
  const selectedLocale = locales.find((locale) => locale.selected)

  const { lt, item } = props

  if (lt) {
    return <span>{get(translations, `${selectedLocale.code}.${lt}`)}</span>
  }

  if (item) {
    return (
      <span>
        {typeof item === 'string' ? item : get(item, selectedLocale.code)}
      </span>
    )
  }

  return <span>Undefined</span>
}

export default Translate
