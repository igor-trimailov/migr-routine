import { BREAK_EXERCISE } from '../constants'

export default {
  defaultLocale: 'en_GB',
  availableLocales: [
    {
      code: 'en_GB',
      name: 'English'
    },
    {
      code: 'ru_RU',
      name: 'Русский'
    },
  ],
  breakExercise: {
    id: -1,
    name: 'Take a Break!',
    image: 'break.png',
    image_alt: 'Take a Break!',
    sound: 'break.mp3',
    duration: 5,
    type: BREAK_EXERCISE,
  },
}
