import { BREAK_EXERCISE } from '../constants'

export default {
  defaultLocale: 'en_GB',
  locales: {
    en_GB: {
      locale: 'en_GB',
      name: 'English',
      voice: 'Google UK English Female',
      voiceLanguage: 'en-GB',
    },
    ru_RU: {
      locale: 'ru_RU',
      name: 'Русский',
      voice: 'Google русский',
      voiceLanguage: 'ru-RU',
    },
  },
  breakExercise: {
    id: -1,
    name: {
      en_GB: 'Break-time!',
      ru_RU: 'Перерыв!',
    },
    image: 'break.png',
    image_alt: 'Take a Break!',
    sound: 'break.mp3',
    duration: 5,
    type: BREAK_EXERCISE,
  },
}
